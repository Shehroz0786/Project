import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'
function header() {
  return (
    <Container fluid className='bg-warning' >
     <Row className='hrow'><p>UAE has updated their visa policy, please read before you apply.</p></Row>
    </Container>
  );
}

export default header;
