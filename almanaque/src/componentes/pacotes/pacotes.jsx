function Pacote(props){
    return <div onClick={props.onClick}>
        <img class="pacote col-xxl-1 col-md-2 col-4" src={props.imagem} alt=""></img>
    </div>
}

export default Pacote;