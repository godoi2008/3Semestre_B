import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// Endpoint para listar todos os produtos
router.get('/produtos', async(req, res) => {
    try{
        const comando = `SELECT * FROM PRODUTOS`
        const usuarios = await BD.query(comando);
        return res.status(200).json(usuarios.rows);
    }
    catch(error){
        console.error('Erro ao listar produtos', error.message);
        return res.status(500).json({error: 'Erro ao listar produtos ' + error.message});
    }
});

router.post('/produtos', async(req, res) => {
    const {preco, categoria, link_imagem, link_produto, frete, nome} = req.body;

    try{
        // A sintaxe abaixo protege de sql injection
        const comando = `INSERT INTO PRODUTOS(preco, categoria, link_imagem, link_produto, frete, nome) 
                            VALUES($1, $2, $3, $4, $5, $6)`

        const valores = [preco, categoria, link_imagem, link_produto, frete, nome]
        await BD.query(comando, valores);
        return res.status(201).json("Produto cadastrado com sucesso!")
    }catch(error){
        console.error('Erro ao cadastrar produto', error.message)
        return res.status(500).json({error: 'Erro ao cadastrar produto ' + error.message})
    }
});

router.put('/produtos/:id_produto', async(req, res) => {
    // Quando recebo dados por parâmetro, ele vem na URL
    const {id_produto} = req.params; 

    // Quando recebo dados pelo body, ele vem no corpo da página
    const {preco, categoria, link_imagem, link_produto, frete, nome} = req.body;

    try{
        // Verificar se o usuário existe
        const verificaProduto = await BD.query('SELECT * FROM PRODUTOS WHERE id_produto = $1', [id_produto])

        if(verificaProduto.rows.length === 0){
            return res.status(404).json({message: 'Produto não encontrado'})
        }
        const comando = 'UPDATE PRODUTOS SET preco = $1,categoria = $2,link_imagem = $3,link_produto = $4,frete = $5,nome = $6 WHERE id_produto = $7'
        const valores = [preco, categoria, link_imagem, link_produto, frete, nome, id_produto]
        await BD.query(comando, valores);
        return res.status(200).json('Produto atualizado com sucesso');
        
    }catch(error){
        console.error('Erro ao atualizar produto', error.message)
        return res.status(500).json({error: 'Erro ao atualizar produto ' + error.message})
    }
});

router.delete('/produtos/:id_produto', async(req, res) => {
    const { id_produto } = req.params;

    try{
        const verificarProduto = await BD.query('SELECT * FROM PRODUTOS WHERE id_produto = $1', [id_produto]);

        if(verificarProduto.rows.length === 0){
            return res.status(404).json({message: 'Produto não encontrado'})
        }

        const comando = 'DELETE FROM PRODUTOS WHERE id_produto = $1'
        await BD.query(comando, [id_produto]);
        return res.status(200).json({message: 'Produto removido com sucesso!'})

    }catch(error){
        console.error('Erro ao deletar produto', error.message);
        return res.status(500).json({error: 'Erro interno no servidor ao tentar deletar ' + error.message});
    }
})

export default router;