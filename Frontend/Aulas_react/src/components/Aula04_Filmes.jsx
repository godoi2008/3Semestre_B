const Aula04_Filmes = ( { foto, titulo, genero } ) => {
    return (
        <div style={estilos.filmeCard}>
            <img src={foto} alt="" style={estilos.filmeFoto} />
            <h3>{titulo}</h3>
            <p>Genero: {genero}</p>
            <button style={estilos.botao} >Assistir</button>
        </div>
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */
const estilos = {
    filmeCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }, 
    filmeFoto: {
        width: '100%', 
        height: '300px',
        borderRadius: 4
    }, 
    botao: {
        width: '100%',
        backgroundColor: '#e30613',
        color: '#fff',
        padding: 3,
        borderRadius: 4,
        border: 0
    }
}

export default Aula04_Filmes