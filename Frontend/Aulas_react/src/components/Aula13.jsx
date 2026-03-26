import { estilos } from "../style/Estilos"
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos"
import Aula13_CRUD_Usuarios from "./Aula13_CRUD_Usuarios"

const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 13 - CRUD com API</h2>
            <h3>Criando um CRUD utilizando API desenvolvida em Backend</h3>
            <hr />
            <Aula13_CRUD_Produtos />
            <hr />
            <Aula13_CRUD_Usuarios />
        </div>
    )
}

export default Aula13