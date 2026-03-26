import { estilos } from "../style/Estilos"
import Aula04_Filmes from "./aula04_Filmes"
import Aula04_IMC from "./Aula04_IMC"

const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>Criação de componentes reutilizáveis e suas estilizações</h3>
            <hr />
            <Aula04_IMC nome='Jorge' peso={80} altura={1.80} cor="#7d3b7a" />
            <Aula04_IMC nome='Marcia' peso={60} altura={1.85} cor="#25f6c1" />
            <Aula04_IMC nome='Roberta' peso={100} altura={1.70} cor="#ff6300" />

            <hr />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Aula04_Filmes titulo="Matrix" genero="Ficção Cientifica" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8qOwQ5bMOsevXWxFwtPeem_Nnd4ORZIVlw&s" />
                <Aula04_Filmes titulo="O Poderoso Chefão" genero="Drama" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0NiuqExTSnKLd6uUwIRhJjbTkTUYwAMcmQ&s" />
                <Aula04_Filmes titulo="Titanic" genero="Romance" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGYl9YFhnkr_c5WJSus4l2WFQE6sk0oHQ2g&s" />
                <Aula04_Filmes titulo="O Rei Leão" genero="Animação" foto="https://lumiere-a.akamaihd.net/v1/images/image_78b18547.jpeg?region=0,0,540,810" />
            </div>
        </div>
    )
}

export default Aula04