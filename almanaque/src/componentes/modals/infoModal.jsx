import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CadastroForm from '../forms/cadastro';
function InfoModal({isOpen, onClose, planta}){
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
      console.log(estadoPlanta);
      fetch("http://localhost:3001/plantas/" + planta.id_planta, {
        method: "PUT",
        body: JSON.stringify(estadoPlanta),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(function(response){
        })
        .catch(error =>{
          console.log(error);
        });
    } else {
      console.log(newErrors)
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
            Detalhes da Planta {planta.id_planta}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit?(<CadastroForm formState={estadoPlanta} onChange={handleChange}/>):(<Card>
                <Row>
                    <Col md={4}>
                        <img src={planta.imagem} alt="..."></img>
                    </Col>
                    <Col md={8}>
                    <Card.Body>
                    <Card.Title><h5>{planta.nome}</h5></Card.Title>
                    <Row>
                        <Col md={6}>
                        <p className="mb-0">Custo de Sol</p>
                        <p>{planta.custo}</p>
                        </Col>
                        <Col md={6}>
                        <p className="mb-0">Recarga</p>
                        <p>{planta.recarga}s</p>
                        </Col>
                        <Col md={6}>
                        <p className="mb-0">Resistência</p>
                        <p>{planta.resistencia}</p>
                        </Col>
                        <Col md={6}>
                        <p className="mb-0">Dano</p>
                        <p>{planta.dano}</p>
                        </Col>
                        <Col md={6}>
                        <p className="mb-0">Alcance</p>
                        <p>{planta.alcance}</p>
                        </Col>
                        <Col md={6}>
                        <p className="mb-0">Familia</p>
                        <p>{planta.familia}</p>
                        </Col>
                        {planta.produtor ? (
                            <Col md={6}>
                            <p className="mb-0">Produção de Sol</p>
                            <p>{planta.tipoProdutor}</p>
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