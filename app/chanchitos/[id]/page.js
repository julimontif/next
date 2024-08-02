

const ChanchitoDinamico = ({params}) => {
    const { id } = params
    console.log({params})

  return (
        <div>
            <p>Chanchito dinamico {id} </p>
        </div>
    )
}


export default ChanchitoDinamico