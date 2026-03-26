//Importando um arquivo CSS tradicional
import '../style/Aula03.css'
import { estilos } from '../style/Estilos'
import Aula03_Login from './Aula03_Login'

const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 03 - Componentes e estilização</h2>
            <h3>Criação de componentes reutilizáveis e suas estilizações</h3>
            <p>Aprendendo a criar e reutilizar componentes e estilizações para melhorar a UI</p>

            <hr />
            <p className="texto">CSS Externo</p>
            <p className='descricao'>A forma mais simples e clássica de estilização CSS</p>

            <hr />
            <p style={ { color:'blue', fontWeight: 'bold' } } >Estilização Inline</p>
            <p style={{ fontStyle: 'italic' }}>Estilos aplicados diretamente nos elementos como OBJETOS</p>

            <hr />
            <p style={ estilos.tituloModulo }>CSS Modules</p>
            <p style={ estilos.descricaoModulo }>CSS modularizado é a forma mais comum para Mobile</p>

            <hr />
            <Aula03_Login />
        </div>
    )
}



export default Aula03