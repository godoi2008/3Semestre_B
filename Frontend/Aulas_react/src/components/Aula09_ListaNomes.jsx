import { useState, useEffect } from "react"
import Aula09_Nome from "./Aula09_Nome"

const Aula09_ListaNomes = () => {
    // Variável de estado 
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState('')

    function botaoAdicionar() {
        const novaLista = [...listaPresenca, nome]
        setListaPresenca(novaLista);
        //Armazenando localmente nosso contador
        localStorage.setItem('valorListaPresenca', JSON.stringify(novaLista))
    }

    useEffect(() => {
        const listaSalva = localStorage.getItem('valorListaPresenca') || "[]";
        setListaPresenca(JSON.parse(listaSalva))
    }, [])

    function botaoLimpar() {
        setListaPresenca([])
        localStorage.removeItem('valorListaPresenca')
    }



    return (
        <div>
            <h1>Lista de Presença do Churrasco</h1>
            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
            <button onClick={botaoAdicionar}>Adicionar</button>

            {
                listaPresenca.map((pessoa, index) => (
                    <Aula09_Nome key={index} pessoa={pessoa} />
                ))

            }
            <button onClick={botaoLimpar}>Limpar</button>
        </div>
    )
}

export default Aula09_ListaNomes