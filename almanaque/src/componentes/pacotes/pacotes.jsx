function Pacote(props){
    return (<>
        <img class="pacote col-xxl-1 col-md-2 col-4" src={props.imagem} alt="" onClick={props.onClick}></img>
    </>)
}

export default Pacote;