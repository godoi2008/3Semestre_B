import { useEffect, useState } from "react"
import { estilos } from "../style/Estilos"

const Aula12 = () => {
    const [imagem, setImagem] = useState("")

    const buscarDados = async () => {
        try {
            //No fetch colocamo o endpoint da API
            // http://localhost:3000/usuarios
            const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
            const dados = await resposta.json()

            setImagem(dados.message)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect( () => {
        buscarDados()
    }, [] )

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 12 - Consumo de APIs</h2>
            <h3>Aprendendo a utilizar APIs em React</h3>
            <hr />
            <div>
                <p>Imagem de cachorro</p>
                <img src={imagem} width={300} />
                <button onClick={buscarDados}>Exibir imagem</button>
            </div>
        </div>
    )
}

export default Aula12