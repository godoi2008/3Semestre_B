const Aula09_Numero = ( { numero, index, excluir }) => {
    return (
        <p> 
            {numero}  
            <button onClick={excluir}>Excluir</button>
        </p>
    )
}
export default Aula09_Numero