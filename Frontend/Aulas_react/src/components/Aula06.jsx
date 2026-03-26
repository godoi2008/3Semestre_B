import { estilos } from "../style/Estilos"
import { useState } from "react"
import Aula06_Contador from "./Aula06_Contador"
import Aula06_Placar from "./Aula06_Placar"

const Aula06 = () => {
    //Declarando uma variável de estado
    const [ nome, setNome ] = useState('')
    const [ cidade, setCidade ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ visivel, setVisivel ] = useState(false)
    
    // function botaoLimpar (){
    const botaoLimpar = () => {
        setNome('')
        setCidade('')
        setTelefone('')
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 06 - Estado de um componente</h2>
            <h3>O hook useState adiciona estado a componentes funcionais</h3>
            <hr />

            <input type="text" onChange={(event) => setNome(event.target.value) } value={nome}/>
            <input type="text" onChange={(event) => setCidade(event.target.value) } value={cidade}/>
            <input type="text" onChange={(event) => setTelefone(event.target.value) } value={telefone}/>
            <p>Olá {nome}, você mora em {cidade}</p>
            <button onClick={botaoLimpar}>Limpar</button>
            <hr />

            <button onClick={ () => setVisivel( !visivel ) }>
                { visivel == false ? <p> Mostrar Saldo 👀 </p> : <p>Ocultar Saldo 🔒</p> }
            </button>
            
            { visivel == false ? <p> R$ ***,** </p> : <p>R$ 732,10</p> }
            
            <hr />

            <Aula06_Contador />

            <hr />
            <Aula06_Placar />

        </div>
    )
}

export default Aula06