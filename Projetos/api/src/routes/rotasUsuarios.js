import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from 'bcrypt';

const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/usuarios', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        //cria uma variavel para receber o retorno do sql
        const usuarios = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(usuarios.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar usuários', error.message);
        return res.status(500).json({error: 'Erro ao listar usuarios'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/usuarios', async(req, res) => {
    const {nome, email, senha } = req.body;
    try{
        //definindo a força da criptografia
        const saltRounds = 10
        //gerando o hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)

        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo_acesso) VALUES($1, $2, $3, $4)`
        const valores = [nome, email, senhaCriptografada, tipo_acesso];

        await BD.query(comando, valores)
        console.log(comando,valores);

    return res.status(201).json("Usuário cadastrado.");
    }catch(error){
        console.error('Erro ao cadastrar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar usuarios'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o usuario
router.put('/usuarios/:id_usuario', async(req, res) =>{
    // Id recebido via parametro
    const {id_usuario} = req.params;

    // Dados do usuario recebido via Corpo da página
    const {nome, email, senha, tipo_acesso} = req.body;
    try{
        //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1 and ativo = true`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha =$3, tipo_acesso = $4 WHERE
        id_usuario = $5`;
        const valores = [nome, email, senha, tipo_acesso, id_usuario];
        await BD.query(comando, valores);

        return res.status(200).json('Usuario foi atualizado!');
    }catch(error){
        console.error('Erro ao atualizar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar usuarios'})
    }
})

//Rota patch atualizando parcialmente as informações
router.patch('/usuarios/:id_usuario', async(req,res) =>{
    const { id_usuario } = req.params;
    const {nome, email, senha} = req.body;

    try{
         //Verificar se o usuario existe
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        //Montar o update dinamicamente(apenas campos enviados)
        const campos = [];
        const valores = [];
        let contador = 1;

        if(nome !== undefined){
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if(email !== undefined){
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }
        if(senha !== undefined){
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }

        //se nenhum campo foi enviado
        if(campos.length === 0 ){
            return res.status(400).json({message: "Nenhum campo a atualizar"})
        }

        //Adicionando ID ao final de valores
        valores.push(id_usuario)
        
        //montando a query dinamicamente
        const comando = `UPDATE USUARIOS SET ${campos.join(', ')} WHERE id_usuario = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Usuário atualizado com sucesso');
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

router.delete('/usuarios/:id_usuario', async(req, res) =>{
    const {id_usuario} = req.params;
    try{
        //Executa o comando de delete
        // const comando = `DELETE FROM USUARIOS WHERE id_usuario = $1`
        const comando = `UPDATE USUARIOS SET ativo = false WHERE id_usuario = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({message: "Usuario removido com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar usuario', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

router.post('/login', async(req, res) =>{
    const {email, senha} =  req.body;
    try{
        //buscar usuario pelo email
        const comando = 'SELECT id_usuario, nome, email, senha FROM USUARIOS WHERE email = $1 and ativo = true';
        const resultado = await BD.query(comando, [email])
        if(resultado === 0 ){
            return res.status(401).json({message: 'email incorreto'})
        }
        const usuario = resultado.rows[0]

        //Comparar a senha enviada com a senha gravada no banco
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
        if(!senhaCorreta){
            return res.status(401).json({message: 'Senha incorreta'})
        }
        //Login realizado com sucesso
        return res.status(200).json({
            message: 'Login realizado',
            usuario: {id_usuario: usuario.id_usuario, nome: usuario.nome }
        })
    }catch(error){
        console.error('Erro ao realizar login', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

export default router