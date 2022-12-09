import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pic from "../Images/logo.png"
import './Navbar.css';


function NavScrollExample() {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <div className="img00"  >
        <img
              src={pic}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" vs me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className=" nav ms-4">
            <Nav.Link href="#Home">Home</Nav.Link>
            <div className="uti ms-4">
            <NavDropdown title="Utility" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Bank Statement Letter ">Bank Statement Letter</NavDropdown.Item>
              <NavDropdown.Item href="# Cover Letter">
              Cover Letter
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            </div>
          </Nav>
          <Form className="d-flex" >
            <div className="btn me-5">
            <Button >LOGIN</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;