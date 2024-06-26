import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CadastroForm(props){
    const [prod, setProd] = useState(props.formState.produtor);
    const handleCheckboxChange = () => {
        setProd(!prod);
      };

    return (
    <Form>
        <Row>
            <Col md={4}>
            <Form.Label>Nome</Form.Label>
            <Form.Control name="nome" value={props.formState.nome} onChange={props.onChange}/>
            </Col>
            <Col md={4}>
            <Form.Label>Custo</Form.Label>
            <Form.Control type="number" name="custo" value={props.formState.custo} onChange={props.onChange}/></Col>
            <Col md={4}>
            <Form.Label>Resistência</Form.Label>
            <Form.Control type="number" name="resistencia" value={props.formState.resistencia} onChange={props.onChange}/>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
            <Form.Label>Dano</Form.Label>
            <Form.Control type="number" name="dano" value={props.formState.dano} onChange={props.onChange}/>
            </Col>
            <Col md={4}>
            <Form.Label>Recarga</Form.Label>
            <Form.Control type="number" name="recarga" value={props.formState.recarga} onChange={props.onChange}/></Col>
            <Col md={4}>
            <Form.Label>Alcance</Form.Label>
            <Form.Select defaultValue="Escolher" name="alcance" value={props.formState.alcance} onChange={props.onChange}>
            <option value="Escolher"></option>
            <option>Nenhum</option>
            <option>Linha reta</option>
            <option>Parábola</option>
            <option>Área</option>
            <option>Quadrado</option>
            <option>Tela toda</option>
            <option>Corpo a Corpo</option>
            <option>Alvo único</option>
            <option>Multiplos Acertos</option>
            </Form.Select>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
            <Form.Check type="checkbox" label="Produz Sol?" checked={prod} name="produtor" value={props.formState.produtor} onChange={props.onChange} onClick={handleCheckboxChange}/>
            </Col>
            <Col md={4}>
            <Form.Label>Estilo de Produção</Form.Label>
            <Form.Select defaultValue="Nenhum" disabled={!prod} name="tipoProdutor" value={props.formState.tipoProdutor} onChange={props.onChange}>
                {prod ? (
                <>
                <option>Nenhum</option>
                <option>Baixa</option>
                <option>Normal</option>
                <option>Dupla</option>
                <option>Alta</option>
                <option>Muito Alta</option>
                <option>Variável</option></>) : (<option>Nenhum</option>)}
            </Form.Select>
            </Col>
            <Col md={4}>
            <Form.Label>Familia</Form.Label>
            <Form.Select defaultValue="Escolher" name="familia" value={props.formState.familia} onChange={props.onChange}>
            <option value="Escolher"></option>
            <option>Endureci-menta</option>
            <option>Bombardea-menta</option>
            <option>Fila-menta</option>
            <option>Arma-menta</option>
            <option>Dispara-menta</option>
            <option>Envenena-menta</option>
            <option>Perfura-menta</option>
            <option>Surra-menta</option>
            <option>Sombrea-menta</option>
            <option>Refrea-menta</option>
            <option>Resfria-menta</option>
            <option>Aqueci-menta</option>
            <option>Esclareci-menta</option>
            </Form.Select>
            </Col>
        </Row>
        <Row>
        <Col>
            <Form.Label>Mundo</Form.Label>
            <Form.Select defaultValue="Escolher" name="mundo" value={props.formState.mundo} onChange={props.onChange}>
            <option value="Escolher"></option>
            <option>Antigo Egito</option>
            <option>Mar dos Piratas</option>
            <option>Velho Oeste</option>
            <option>Futuro Distante</option>
            <option>Idade das Trevas</option>
            <option>Praia da Boa Onda</option>
            <option>Cavernas da Geladura</option>
            <option>Cidade Perdida</option>
            <option>Turnê Idade da Juba</option>
            <option>Pântano Jurássico</option>
            <option>Tempos Modernos</option>
            <option>Premium</option>
            </Form.Select>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={4} name="descricao" value={props.formState.descricao} onChange={props.onChange}/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <Form.Label>Link da imgaem do Pacote</Form.Label>
            <Form.Control name="imagem" value={props.formState.imagem} onChange={props.onChange}/>
            </Col>
        </Row>
    </Form>
    );
}

export default CadastroForm;