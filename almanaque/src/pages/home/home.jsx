import { useEffect, useState, useContext } from "react";
import Pacote from "../../componentes/pacotes/pacotes";
import InfoModal from "../../componentes/modals/infoModal";
import Row from 'react-bootstrap/Row';
import { PlantasContext } from "../../contextos/plantasContex";

function Home(){

    const { plantas, fetchPlantas } = useContext(PlantasContext);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [selectedPlanta, setSelectedPlanta] = useState(null);

    const handleOpenModal = (planta) => {
        setSelectedPlanta(planta);
        setOpenInfoModal(true);
    };

    useEffect(function(){
        fetchPlantas();
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