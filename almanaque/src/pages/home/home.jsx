import { useEffect, useState, useContext } from "react";
import Pacote from "../../componentes/pacotes/pacotes";
import InfoModal from "../../componentes/modals/infoModal";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { PlantasContext } from "../../contextos/plantasContex";

function Home(){

    const { plantas, fetchPlantas } = useContext(PlantasContext);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [selectedPlanta, setSelectedPlanta] = useState(null);

    const [filters, setFilters] = useState({
        familia: '',
        mundo: '',
        alcance:'',
    });

    const handleOpenModal = (planta) => {
        setSelectedPlanta(planta);
        setOpenInfoModal(true);
    };

    useEffect(function(){
        fetchPlantas();
    }, []);

    const filteredPlantas = plantas.filter(planta => {
        return (
            (filters.familia === '' || planta.familia === filters.familia) &&
            (filters.mundo === '' || planta.mundo === filters.mundo) &&
            (filters.alcance === '' || planta.alcance === filters.alcance)
        );
    });


    return <>
    <Row className="justify-content-md-center">
        <Col md={2} sm={4}>
        <Form.Label>Familia</Form.Label>
            <Form.Select defaultValue="" name="familia" value={filters.familia}
                    onChange={(e) => setFilters({ ...filters, familia: e.target.value })}>
            <option value="">Todas as Familias</option>
            <option value="Endureci-menta">Endureci-menta</option>
            <option value="Bombardea-menta">Bombardea-menta</option>
            <option value="Fila-menta">Fila-menta</option>
            <option value="Arma-menta">Arma-menta</option>
            <option value="Dispara-menta">Dispara-menta</option>
            <option value="-Envenena-menta">Envenena-menta</option>
            <option value="Perfura-menta">Perfura-menta</option>
            <option value="Surra-menta">Surra-menta</option>
            <option value="Sombrea-menta">Sombrea-menta</option>
            <option value="Refrea-menta">Refrea-menta</option>
            <option value="Resfria-menta">Resfria-menta</option>
            <option value="Aqueci-menta">Aqueci-menta</option>
            <option value="Esclareci-menta">Esclareci-menta</option>
            </Form.Select></Col>
        <Col md={2} sm={4}>
        <Form.Label>Mundo</Form.Label>
        <Form.Select defaultValue="" name="mundo" value={filters.mundo}
                    onChange={(e) => setFilters({ ...filters, mundo: e.target.value })}>
            <option value="">Todos os mundos</option>
            <option value="Antigo Egito">Antigo Egito</option>
            <option value="Mar dos Piratas">Mar dos Piratas</option>
            <option value="Velo Oeste">Velho Oeste</option>
            <option value="Futuro Distante"> Futuro Distante</option>
            <option value="Idade das Trevas">Idade das Trevas</option>
            <option value="Praia da Boa Onda">Praia da Boa Onda</option>
            <option value="Cavernas da Geladura">Cavernas da Geladura</option>
            <option value="Cidade Perdida">Cidade Perdida</option>
            <option value="Turnê Idade da Juba">Turnê Idade da Juba</option>
            <option value="Pântano Jurássico">Pântano Jurássico</option>
            <option value="Tempos Modernos">Tempos Modernos</option>
            <option value="Premium">Premium</option>
            </Form.Select>
        </Col>
        <Col md={2} sm={4}><Form.Label>Alcance</Form.Label>
        <Form.Select defaultValue="" name="alcance" value={filters.alcance}
                    onChange={(e) => setFilters({ ...filters, alcance: e.target.value })}>
            <option value="">Todos</option>
            <option value="Nenhum">Nenhum</option>
            <option value="Linha reta">Linha reta</option>
            <option value="Parábola">Parábola</option>
            <option value="Área">Área</option>
            <option value="Quadrado">Quadrado</option>
            <option value="Tela toda">Tela toda</option>
            <option value="Corpo a Corpo">Corpo a Corpo</option>
            <option value="Alvo único">Alvo único</option>
            <option value="Multiplos Acertos">Multiplos Acertos</option>
        </Form.Select></Col>
    </Row>
    <Row>
        {
                filteredPlantas.map(function (planta, index) {
                    return <>
                        <Pacote key={index} imagem={planta.imagem} onClick={() => handleOpenModal(planta)} />
                    </>
                })
            }
    </Row>
    {selectedPlanta != null ? (<InfoModal isOpen={openInfoModal} onClose={() => setOpenInfoModal(false)} planta={selectedPlanta}/>)
    :(null)}
    </>
}

export default Home;