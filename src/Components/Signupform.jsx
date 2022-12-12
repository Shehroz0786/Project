import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Signupform.css';

function ContainerFluidExample() {
  return (
    <Container fluid className='Ccol bg-primary'>
      <Row>
        <Col className='Logcol bg-light' lg={5}>
        <Form>
          <h2>SIGN UP</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-4 mt-4"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingUsername" label="Username">
        <Form.Control type="text" placeholder="Username" />
      </FloatingLabel>

     
      <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel className=' Pf mb-4 mt-4' controlId="floatingPassword" label="Confirm Password">
        <Form.Control type="password" placeholder=" Confirm Password" />
      </FloatingLabel>

      <Form.Group className=" ch mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms and Conditions" />
      </Form.Group>
      <Button variant="primary mb-5" size='lg' type="submit">
        Sign Up
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;