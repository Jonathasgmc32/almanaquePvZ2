import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CadastroForm from '../forms/cadastro';
import { PlantasContext } from '../../contextos/plantasContex';

function InfoModal({isOpen, onClose, planta}){
  const { fetchPlantas } = useContext(PlantasContext);
  const [edit, setEdit] = useState(false);
  const fecharModal = () => {
    setEdit(false);
    onClose();
  };

  const [estadoPlanta, setEstadoPlanta] = useState({
    nome: '',
    custo: '',
    resistencia: '',
    dano: '',
    recarga: '',
    alcance:'',
    produtor: false,
    tipoProdutor:'',
    familia:'',
    mundo:'',
    descricao:'',
    imagem:''
  });

  useEffect(() => {
    setEstadoPlanta(planta);
}, [planta]);

const [errors, setErrors] = useState({});
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setEstadoPlanta((prevEstadoPlanta) => ({
      ...prevEstadoPlanta,
      [name]: type == 'checkbox' ? checked : value
  }));
};
  function handleSubmit() {
    const newErrors = validateForm(estadoPlanta);
    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:3001/plantas/" + planta.id_planta, {
        method: "PUT",
        body: JSON.stringify(estadoPlanta),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(function(response){
        })
        .then(data => {
          fetchPlantas();
        })
        .catch(error =>{
          console.log(error);
        });
    } else {
      setErrors(newErrors);
    }
    setEdit(false);
  }

  function validateForm(state) {
    const errors = {};
    if (!state.nome) errors.nome = 'Nome é obrigatório';
    if (!state.dano) errors.dano = 'Dano é obrigatório';
    setErrors(errors);
    return errors;
  }
return (
<>
    <Modal
        size="lg"
        show={isOpen}
        onHide={fecharModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Detalhes da Planta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit?(<CadastroForm formState={estadoPlanta} onChange={handleChange}/>):(<Card>
                <Row>
                    <Col md={4} className='align-self-center'>
                        <img src={planta.imagem} alt="..."></img>
                    </Col>
                    <Col md={8}>
                    <Card.Body>
                    <Card.Title><h5>{planta.nome}</h5></Card.Title>
                    <Row>
                        <Col xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src="https://plantsvszombies.wiki.gg/images/thumb/7/76/Sun_Cost2I.png/32px-Sun_Cost2I.png" alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Custo de Sol</p>
                            <p className="mb-0">{planta.custo}</p>
                        </div>
                        </div>
                        </Col>
                        <Col  xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src="https://plantsvszombies.wiki.gg/images/thumb/7/77/Recharge2I.png/32px-Recharge2I.png" alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Recarga</p>
                            <p className="mb-0">{planta.recarga}s</p>
                        </div>
                        </div>
                        </Col>
                        {planta.resistencia > 0 ? (
                        <Col  xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src="https://plantsvszombies.wiki.gg/images/thumb/4/47/Toughness2I.png/32px-Toughness2I.png" alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Resistência</p>
                            <p className="mb-0">{planta.resistencia}</p>
                        </div>
                        </div>
                        </Col>) : (null)}
                        {planta.dano > 0 ?(
                        <Col  xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src="https://plantsvszombies.wiki.gg/images/thumb/e/e4/Damage2I.png/32px-Damage2I.png" alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Dano</p>
                            <p className="mb-0">{planta.dano}</p>
                        </div>
                        </div>
                        </Col>) : (null)}
                        {planta.alcance != "Nenhum" ? (
                        <Col  xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src="https://plantsvszombies.wiki.gg/images/thumb/5/51/Range2I.png/32px-Range2I.png" alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Alcance</p>
                            <p className="mb-0">{planta.alcance}</p>
                        </div>
                        </div>
                        </Col>) : (null)}
                        <Col xs = {5} md={6}>
                        <div className='d-flex flex-row mb-3'>
                          <div className='me-3'>
                          <img src={require(`../../familias_pic/${planta.familia}.webp`)} alt="" />
                          </div>
                          <div>
                            <p className="mb-0">Família</p>
                            <p className="mb-0">{planta.familia}</p>
                        </div>
                        </div>
                        </Col>
                        {planta.produtor ? (
                            <Col  xs = {5} md={6}>
                            <div className='d-flex flex-row mb-3'>
                              <div className='me-3'>
                              <img src="https://plantsvszombies.wiki.gg/images/thumb/9/99/Sun_Production2I.png/32px-Sun_Production2I.png" alt="" />
                              </div>
                              <div>
                                <p className="mb-0">Produção de Sol</p>
                                <p className="mb-0">{planta.tipoProdutor}</p>
                            </div>
                            </div>
                            </Col>
                        ) : (null)
                        }
                        <Col md={12}>
                        <p className="mb-0">Descrição</p>
                        <p>{planta.descricao}</p>
                        </Col>
                    </Row>
                    </Card.Body>
                    </Col>
                </Row>
            </Card>)}
        </Modal.Body>
        <Modal.Footer>
          {edit?(<>
            <Button variant="secondary" onClick={() => setEdit(false)}>
            Descartar alterações
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Salvar alterações
          </Button>
          </>):(<>
            <Button variant="danger" onClick={fecharModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => setEdit(true)}>
            Editar
          </Button>
          </>)}
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default InfoModal;