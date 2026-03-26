/** @type {{ [key: string]: import('react').CSSProperties }} */

export const estilos = {
    tituloModulo: { 
        color: 'blue', 
        fontWeight: 'bold' 
    },
    descricaoModulo: {
        fontStyle: 'italic'
    },
    fundo : {
        backgroundColor: '#f6f4f3',
        minHeight: '100vh'
    },
    conteudo: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: 24
    },
    lista_aulas: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    cardAula: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }
}

