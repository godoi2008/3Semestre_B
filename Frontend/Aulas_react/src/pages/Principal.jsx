import {Link} from 'react-router-dom';
import Cabecalho from "../components/Cabecalho";
import Aula01 from "../components/Aula01";
import Aula02 from "../components/Aula02";
import Aula03 from "../components/Aula03";

import { estilos } from "../style/Estilos";
import Aula04 from "../components/Aula04";
import Aula05 from "../components/Aula05";
import Aula06 from "../components/Aula06";
import Aula07 from "../components/Aula07";
import Aula08 from "../components/Aula08";
import Aula09 from "../components/Aula09";
import Aula10 from "../components/Aula10";
import Aula11 from "../components/Aula11";
import Aula12 from "../components/Aula12";
import Aula13 from "../components/Aula13";
import Aula14 from '../components/Aula14';

const App = () => {
    return (
        <div style={estilos.fundo}>
            <Cabecalho aula='React' />
            <main style={estilos.conteudo}>
                <h2>Aulas</h2>
                <div style={estilos.lista_aulas}>
                    {/* Aqui incluiremos todos os componentes de Aula */}
                    <Aula01 />
                    <Aula02 />
                    <Aula03 />
                    <Aula04 />
                    <Aula05 />
                    <Aula06 />
                    <Aula07 />
                    <Aula08 />
                    <Aula09 />
                    <Aula10 />
                    <Aula11 />
                    <Aula12 />
                    <Aula13 />
                    <Aula14 />
                </div>
            </main>
        </div>
    )
}

export default App;