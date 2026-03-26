const Aula11_Produto = ({ produto }) => {
    return (
        <div style={estilos.cardProduto}>
            <img src={produto.linkImagem} alt="" style={estilos.imagem} />
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)} </p>
            <p>{produto.categoria}</p>
            {/* if ternário */}
            {/* { produto.freteGratis == true ? <p>Frete Grátis</p> : null } */}
            { produto.freteGratis == true && <p>Frete Grátis</p> }
            <a href={produto.linkProduto} style={estilos.botao}>Ver Produto</a>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250, 
        textAlign: 'center'
    },

    imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },

    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },

    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },

    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },

    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula11_Produto