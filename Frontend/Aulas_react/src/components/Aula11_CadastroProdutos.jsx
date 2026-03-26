import { useEffect, useState } from "react"
import Aula11_Produto from "./Aula11_Produto"

const Aula11_Cadastro_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [linkProduto, setLinkProduto] = useState('')
    const [linkImagem, setLinkImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratis, setFreteGratis] = useState(false)

    function botaoAdicionar() {
        const novoProduto = {
            nome: nome,
            preco: preco,
            linkProduto: linkProduto,
            linkImagem: linkImagem,
            categoria: categoria,
            freteGratis: freteGratis
        }

        const novaListaProdutos = [...listaProdutos, novoProduto]
        setListaProdutos(novaListaProdutos)
        localStorage.setItem('vetorListaProdutos', JSON.stringify(novaListaProdutos))

        setNome('')
        setPreco('')
        setLinkProduto('')
        setLinkImagem('')
        setCategoria('')
        setFreteGratis(false)

    }

    useEffect(() => {
        const listaSalva = localStorage.getItem('vetorListaProdutos') || "[]";
        setListaProdutos(JSON.parse(listaSalva))
    }, [])

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
                <button  style={estilos.botao} onClick={botaoAdicionar}>Adicionar Produto</button>

                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula11_Produto key={pos} produto={produto} />
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

export default Aula11_Cadastro_Produtos