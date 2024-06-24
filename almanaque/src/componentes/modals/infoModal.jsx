import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CadastroForm from '../forms/cadastro';
function InfoModal({isOpen, onClose, planta}){
  const [edit, setEdit] = useState(false);
return (
<>
    <Modal
        size="lg"
        show={isOpen}
        onHide={onClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Detalhes da Planta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit?(<CadastroForm/>):(<Card>
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
          <Button variant="danger" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => setEdit(true)}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default InfoModal;