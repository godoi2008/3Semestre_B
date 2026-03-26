import { useState } from "react"

const Aula07_Perfil = ({foto, nome}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            border: '1px solid #ccc',
            padding: 20,
            width: 220,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: 12,
            margin: 10
        }}>
            <Avatar foto={ foto } />
            <InfoUsuario nome={nome}  />
            <BotaoSeguir />
        </div>
    )
}

export const Avatar = ({ foto}) =>{
    return (
        <img src={foto} alt="" style={{ width: 100, height: 100, borderRadius:'50%' }} />
    )
}

export const InfoUsuario = ({nome}) =>{
    return (
        <h3>{nome}</h3>
    )
}

export const BotaoSeguir = () =>{
    const [seguindo, setSeguindo] = useState(false)

    return (
        <button onClick={() => setSeguindo(!seguindo)} style={{
            backgroundColor: seguindo == false ? "#4caf50" : "#50AFFF" ,
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8
        }}>
            { seguindo == false ? "Seguir" : "Deixar de Seguir" }
        </button>
    )
}

export default Aula07_Perfil