import { estilos } from "../style/Estilos"
import Aula07_Multicomponentes, { MeuComponenteNomeado, MeuComponenteNomeado2, enderecoServidor } from "./Aula07_Multicomponentes"
import Aula07_Perfil, { Avatar } from "./Aula07_Perfil"

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Módulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr />
            
            <Aula07_Multicomponentes />
            <MeuComponenteNomeado />
            <MeuComponenteNomeado2 />
            <p>{enderecoServidor}</p>

            <hr />

            <Aula07_Perfil 
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2FPrexO1-Fh-78SNI0Mv3Dy7lP0T-RskHg&s" 
                nome="Douglas"
            />

            <Aula07_Perfil 
                foto="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg" 
                nome="Ricardo"
            />

            <Avatar foto="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"  />
            <Avatar foto="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"  />
            <Avatar foto="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"  />
            <Avatar foto="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"  />
        </div>
    )
}

export default Aula07
