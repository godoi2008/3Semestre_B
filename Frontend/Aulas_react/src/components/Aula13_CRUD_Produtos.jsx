import { useEffect, useState } from "react"
import Aula13_Produto from "./Aula13_Produto"

const Aula13_CRUD_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [linkProduto, setLinkProduto] = useState('')
    const [linkImagem, setLinkImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratis, setFreteGratis] = useState(false)
    //Criando variaveis de estado para alterar meu cadastro
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    //Função para carregar meus dados
    //Esta função recebe um objeto com todos os dados do produto
    function botaoAlterar(produto) {
        setNome(produto.nome)
        setPreco(produto.preco)
        setLinkProduto(produto.link_produto)
        setLinkImagem(produto.link_imagem)
        setCategoria(produto.categoria)
        setFreteGratis(produto.frete)
        setEditando(true)
        setId(produto.id_produto)
    }

    //const botaoAdicionar = async () {
    async function botaoAdicionar() {
        const novoProduto = {
            nome: nome,
            preco: preco,
            link_produto: linkProduto,
            link_imagem: linkImagem,
            categoria: categoria,
            frete: freteGratis
        }

        try {
            let endpoint = 'http://10.130.42.68:3001/produtos'
            let metodo = 'POST'

            if (editando == true){
                endpoint = `http://10.130.42.68:3001/produtos/${id}`
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            })

            if (!resposta.ok) {
                throw new Error('Erro ao adicionar produto: ' + resposta.statusText)
            }

            buscarDados()
            LimparCamposFormularios()

        } catch (erro) {
            console.error ( 'Erro ao adicionar produto', erro.message )
        }
    }

    async function botaoExcluir(id_produto) {

        if (!window.confirm('Você tem certeza que deseja excluir?')) return

        try {
            const resposta = await fetch(`http://10.130.42.68:3001/produtos/${id_produto}`, {
                method: 'DELETE'
            })

            if (!resposta.ok) {
                throw new Error('Erro ao excluir produto: ' + resposta.statusText)
            }

            buscarDados()

        } catch (erro) {
            console.error ( 'Erro ao adicionar produto', erro.message )
        }
    }

    function LimparCamposFormularios (){
        setNome('')
        setPreco('')
        setLinkProduto('')
        setLinkImagem('')
        setCategoria('')
        setFreteGratis(false)
        setEditando(false)
        setId('')
    }

    useEffect(() => {
        buscarDados()
    }, [])

    //Função para buscar os dados de uma API
    async function buscarDados() {
        try {
            const resposta = await fetch('http://10.130.42.68:3001/produtos')
            const dados = await resposta.json()
            setListaProdutos(dados)

        } catch (erro) {
            console.error ('Erro ao carregar os dados', erro.message)
        }
    }

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                <input type="number" placeholder="Preço" style={estilos.inputs} value={preco}
                    onChange={(event) => setPreco(event.target.value)} />
                <input type="text" placeholder="Link do Produto" style={estilos.inputs} value={linkProduto}
                    onChange={(event) => setLinkProduto(event.target.value)} />
                <input type="text" placeholder="Link da foto" style={estilos.inputs} value={linkImagem}
                    onChange={(event) => setLinkImagem(event.target.value)} />
                <select  style={estilos.inputs} value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletrônicos'>Eletrônicos</option>
                    <option value='Brinquedos'>Brinquedos</option>
                    <option value='Livros'>Livros</option>
                </select>
                <span> <input type="checkbox" checked={freteGratis}
                    onChange={(event) => setFreteGratis(event.target.value)} />  Frete Grátis </span>
                <button  style={estilos.botao} onClick={botaoAdicionar}>
                    { editando == false ? "Adicionar Produto" : "Editar Produto"  } 
                </button>
                {
                    editando == true && 
                        <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }

                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula13_Produto key={pos} produto={produto} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const estilos = {
    cadastro: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputs: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
    }
}

export default Aula13_CRUD_Produtos