import { useState } from "react"

const Aula06_Placar = () => {
    const [time1, setTime1] = useState(0)
    const [time2, setTime2] = useState(0)
    const [time3, setTime3] = useState(0)
    const [time4, setTime4] = useState(0)

    function botaoZerar() {
        setTime1(0)
        setTime2(0)
        setTime3(0)
        setTime4(0)
    }

    return (
        <div>
            <h1>Placar Futebol</h1>
            <h2>São Paulo: {time1}</h2>
            <button onClick={() => setTime1(time1 + 1)}>+1</button>

            <h2>Corinthians: {time2}</h2>
            <button onClick={() => setTime2(time2 + 1)}>+1</button>

            <hr />

            <h1>Placar Basquete</h1>
            <h2>Warrios: {time3}</h2>
            <button onClick={() => setTime3(time3 + 1)}>+1</button>
            <button onClick={() => setTime3(time3 + 2)}>+2</button>
            <button onClick={() => setTime3(time3 + 3)}>+3</button>

            <h2>Lakers: {time4}</h2>
            <button onClick={() => setTime4(time4 + 1)}>+1</button>
            <button onClick={() => setTime4(time4 + 2)}>+2</button>
            <button onClick={() => setTime4(time4 + 3)}>+3</button>

            <br />
            <button onClick={botaoZerar}>Zerar</button>
        </div>
    )
}



export default Aula06_Placar