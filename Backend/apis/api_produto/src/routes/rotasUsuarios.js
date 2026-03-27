import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from 'bcrypt';

const router = Router();

// Endpoint para listar todos os usuários
router.get('/usuarios', async(req, res) => {
    try{
        // Criar uma variável para enviar o comando sql
        const comando = `SELECT * FROM USUARIOS`
        // Criar uma variável para receber o retorno do sql
        const usuarios = await BD.query(comando);
        return res.status(200).json(usuarios.rows);
    }
    catch(error){
        console.error('Erro ao listar usuários', error.message);
        return res.status(500).json({error: 'Erro ao listar usuários ' + error.message});
    }
})

router.post('/usuarios', async(req, res) => {
    const {nome, email, senha } = req.body;
    try{
        //definindo a força da criptografia
        const saltRounds = 10
        //gerando o hash da senha
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)

        const comando = `INSERT INTO USUARIOS(nome, email, senha) VALUES($1, $2, $3)`
        const valores = [nome, email, senhaCriptografada];

        await BD.query(comando, valores)
        console.log(comando,valores);

    return res.status(201).json("Usuário cadastrado.");
    }catch(error){
        console.error('Erro ao cadastrar usuários', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar usuarios'})
    }
})

router.put('/usuarios/:id_usuario', async(req, res) => {
    // Quando recebo dados por parâmetro, ele vem na URL
    const {id_usuario} = req.params; 

    // Quando recebo dados pelo body, ele vem no corpo da página
    const {nome, email, senha} = req.body;

    try{
        // Verificar se o usuário existe
        const verificaUsuario = await BD.query('SELECT * FROM USUARIOS WHERE id_usuario = $1', [id_usuario])

        if(verificaUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }
        const comando = 'UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4'
        const valores = [nome, email, senha, id_usuario]
        await BD.query(comando, valores);
        return res.status(200).json('Usuário atualizado com sucesso');
        
    }catch(error){
        console.error('Erro ao atualizar usuários', error.message)
        return res.status(500).json({error: 'Erro ao atualizar usuário ' + error.message})
    }
});

router.delete('/usuarios/:id_usuario', async(req, res) => {
    const { id_usuario } = req.params;

    try{
        const verificarUsuario = await BD.query('SELECT * FROM USUARIOS WHERE id_usuario = $1', [id_usuario]);

        if(verificarUsuario.rows.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        const comando = 'DELETE FROM USUARIOS WHERE id_usuario = $1'
        await BD.query(comando, [id_usuario]);
        return res.status(200).json({message: 'Usuário removido com sucesso!'})

    }catch(error){
        console.error('Erro ao deletar produto', error.message);
        return res.status(500).json({error: 'Erro interno no servidor ao tentar deletar ' + error.message});
    }
})

router.post('/login', async(req, res) =>{
    const {email, senha} =  req.body;
    try{
        //buscar usuario pelo email
        const comando = 'SELECT * FROM usuarios WHERE email = $1';
        const resultado = await BD.query(comando, [email])
        if(resultado.rowCount === 0 ){
            return res.status(401).json({message: 'email incorreto'})
        }
        console.log(resultado.rows)
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

export default router;