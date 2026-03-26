import { estilos } from "../style/Estilos"
import jogo from '../assets/jogo.png'

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 08 - Revisão</h2>
            <h3>Revisão de conteúdo com o Jogo Número Secreto</h3>
            <a href="https://jogo-numero-secreto-bice-three.vercel.app/">
                <img src={jogo} style={{width:'100%'}} />
                Link do Jogo
            </a>
        </div>
    )
}

export default Aula08

