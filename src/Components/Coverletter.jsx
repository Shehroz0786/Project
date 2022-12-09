import './Coverletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Coverletter() {
  return (
    <Container fluid className='mb-5'>
      <Row className='mt-5'>
        <Col className='col1 bg-light' lg={4} xs={12}>
        <h3>Your Details</h3> <br/><br/><br/>
        <h4>Country Details</h4>
        <Form>
        <Form.Select aria-label="Select country you're visiting" className='mb-4'>
      <option>Select country you're visiting</option>
      <option value="1">Afghanistan</option>
      <option value="2">Albania</option>
      <option value="3">Algeria</option>
      <option value="4">Angola</option>
      <option value="5">Benin</option>
      <option value="6">Belgium</option>
      <option value="7">Burundi</option>
      <option value="8">Brazil</option>
      <option value="9">Canada</option>
      <option value="10">Mali</option>
    </Form.Select>
    {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className=" radio mb-3">
              <Form.Check
            inline
            label="Embassy"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
             <Form.Check
            inline
            label="Consulate General"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
          </div>
           ))}

      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <h4>Personal Details</h4>


      <Form.Group className="mb-4" controlId="Your full legal name">
        <Form.Control type="text" placeholder="Your full legal name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="Contect number">
        <Form.Control type="text" placeholder="Contect number" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="Email adress">
        <Form.Control type="email" placeholder="Email adress" />
      </Form.Group>

      <h4>Trip Details</h4>
      <div className="date mb-4">
      <Form.Group controlId="Sdate">
        <Form.Control type="date" name="Start date" placeholder="Start date" />
      </Form.Group>
      <Form.Group controlId="Edate">
        <Form.Control type="date" name="End date" placeholder="End date" />
      </Form.Group>
      </div>
      <InputGroup className='mb-4'>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Name of tourist attractions in the country you're visiting"  />
      </InputGroup>
 
    
      <Form.Group className="mb-4 mt-4" controlId="formBasicCheckbox">
        <Form.Check className='check' type="checkbox" label="I have a sponsor" />
      </Form.Group>

      <h4>Sponsor Details</h4>
      
      <Form.Group className="mb-4">
        <Form.Control placeholder="Sponsor Name" disabled />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control placeholder="Your relationship with sponsor" disabled />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control placeholder="Sponsor place of employment" disabled />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control placeholder="Sponsor job title" disabled />
      </Form.Group>
    </Form>
        </Col>

        
        <Col className='col2 bg-light' lg={6} xs={12}>
        <h3>Cover Letter Generator</h3><br/><br/><br/>
        <p>Embassy of,Country,<br/>
        Adress of the Consulate,<br/><br/>
        Respected Sir/Madam,<br/><br/>
        I,Legal name, would like to apply for a tourist visa to spend a vacations in ,Country, from<br/>
        Start date ,End date.<br/><br/>
        The main purpose for travel is tourism, to see the beautiful sights of , Country, particularly<br/>
        ,Name of turridt attractions, .i am also lookingfoward to experiencing theculture, tasting the<br/>
        cuisine, and meeting the locals to experience everything the country has to offer.<br/><br/>
        Please find the following documents to support the legitimacy of what is outlined this letter<br/><br/><br/><br/>
        Please don't hesitate to contact me if any further information is required. You can reach me at:<br/><br/>
        Contact no.,<br/>
        Email,<br/><br/><br/>
        Sincerely,<br/>
        ,Legal name.
        </p>
        <Col className='colbtn'>
        <Button variant="primary" size="md">
         GENERATE AND DOWNLOAD AS PDF
        </Button>
        </Col>
        </Col>
        <Row >
       
        </Row>

      </Row>
      
    </Container>
  );
}

export default Coverletter;