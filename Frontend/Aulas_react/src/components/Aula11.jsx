import { estilos } from "../style/Estilos"
import Aula11_CadastroProdutos  from './Aula11_CadastroProdutos'

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 - Cadastro de Produtos</h2>
            <h3>Criando uma lista de produtos e armazenando os dados localmente</h3>
            <hr />
            <Aula11_CadastroProdutos />
        </div>
    )
}

export default Aula11