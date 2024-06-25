import { useEffect, useState } from "react";
import Pacote from "../../componentes/pacotes/pacotes";
import InfoModal from "../../componentes/modals/infoModal";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home(){

    const [plantas, setPlantas] = useState([]);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [selectedPlanta, setSelectedPlanta] = useState(null);

    const handleOpenModal = (planta) => {
        setSelectedPlanta(planta);
        setOpenInfoModal(true);
    };

    function ListarPlantas(){
        fetch("http://localhost:3001/plantas")
        .then(function(response){
            response.json().then(json =>{setPlantas(json)});
        })
    }
    useEffect(function(){
        ListarPlantas();
    }, []);
    return <>
    <Row>
        {
            plantas.map(function(planta){
                return <>
                <Pacote imagem={planta.imagem} onClick={() =>handleOpenModal(planta)}/>
                </>
            })
        }
    </Row>
    {selectedPlanta != null ? (<InfoModal isOpen={openInfoModal} onClose={() => setOpenInfoModal(false)} planta={selectedPlanta}/>)
    :(null)}
    </>
}

export default Home;