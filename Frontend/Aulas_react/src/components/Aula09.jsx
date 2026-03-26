import { useState } from "react"
import { estilos } from "../style/Estilos"
import Aula07_Perfil from "./Aula07_Perfil"
import Aula09_Numero from "./Aula09_Numero"
import Aula09_ListaNomes from "./Aula09_ListaNomes"

const Aula09 = () => {
  const [numerosSorteados, setNumeroSorteados] = useState([10, 43, 28, 2])

  const [listaPerfis, setListaPerfis] = useState([
    { "nome": "Diogo", "foto": "https://www.ardoce.org.br/img/presidentes/27-diogo.jpeg" },
    { "nome": "Pablo", "foto": "https://i.scdn.co/image/ab67616100005174d6c19a3df291f9d0f3d7248c" },
  ])

  function botaoSortear() {
    const novoNumero = Math.floor(Math.random() * 60) + 1
    setNumeroSorteados([...numerosSorteados, novoNumero])
  }

  function botaoExcluir(nr) {
    const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
    setNumeroSorteados(novosNumeros)
  }

  return (
    <div style={estilos.cardAula}>
      <h2>Aula 09 - Listas em React</h2>
      <h3>Exibindo conteúdos dinamicamente com listas</h3>
      <hr />

      <button onClick={botaoSortear}>Novo Número</button>

      <h3>Lista de números sorteados:</h3>
      {/* A função map é como o for para arrays/vetores */}
      {
        numerosSorteados.map((numero, index) => (
          <Aula09_Numero key={index} numero={numero} excluir={() => botaoExcluir(numero)} />
        ))
      }

      <div style={{ display: "flex" }}>
        {
          listaPerfis.map((perfil, index) => (
            <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto} />
          ))
        }
      </div>

      <Aula09_ListaNomes />

    </div>
  )
}

export default Aula09;






