import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CadastroForm from '../forms/cadastro';
import Alert from 'react-bootstrap/Alert';

function CadastroModal({isOpen, onClose}){
  const [formState, setFormState] = useState({
    nome: '',
    custo: '',
    resistencia: '',
    dano: '',
    recarga: '',
    alcance:'',
    produtor:'',
    tipoProdutor:'',
    familia:'',
    mundo:'',
    descricao:'',
    imagem:''
  });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: type == 'checkbox' ? checked : value
    }));
  }
  function handleSubmit() {
    const newErrors = validateForm(formState);
    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:3001/plantas", {
        method: "POST",
        body: JSON.stringify(formState),
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
      setErrors(newErrors);
    }
  }

  function validateForm(state) {
    const errors = {};
    if (!state.nome) errors.nome = 'Nome é obrigatório';
    if (!state.dano) errors.dano = 'Dano é obrigatório';
    setErrors(errors);
    return errors;
  }
return (
    <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(errors).length > 0 ?(
            <Alert key="danger" variant="danger">
            Preencha todos os campos primeiro!
          </Alert>
          ):(null)}
            <CadastroForm formState={formState} onChange={handleChange} ></CadastroForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Finalizar Cadastro
          </Button>
        </Modal.Footer>
      </Modal>
);
}
export default CadastroModal;
