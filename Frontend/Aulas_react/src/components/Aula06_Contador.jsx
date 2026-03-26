import { useState } from "react"

const Aula06_Contador = () => {
    const [contador, setContador] = useState(0)

    function botaoDiminuir() {
        setContador(contador - 1)
    }

    return (
        <div>
            <h2>Nº: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={botaoDiminuir}>Diminuir</button>
        </div>
    )
}

export default Aula06_Contador