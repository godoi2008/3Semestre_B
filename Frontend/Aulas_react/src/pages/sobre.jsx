import  { Link } from 'react-router-dom'

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            {/* <a href='/'>  </a> */}
            <Link to='/'>Voltar para Principal</Link>
        </div>    
    )
}

export default Sobre