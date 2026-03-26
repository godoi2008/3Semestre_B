
const Aula07_Multicomponentes = () => {
    return (
        <div>
            <p>Meu componente padrão</p>
            <MeuComponenteNomeado />
        </div>
    )
}

export const MeuComponenteNomeado = () =>{
    return (
        <p>Meu componente nomeado 1 ******</p>
    )
}

export const MeuComponenteNomeado2 = () =>{
    return (
        <p>Meu componente nomeado 2</p>
    )
}

export const enderecoServidor = "localhost"

//Exportando componente e variáveis nomeadas
//export { MeuComponenteNomeado, MeuComponenteNomeado2, enderecoServidor }
//Exportando componente padrão "principal"
export default Aula07_Multicomponentes