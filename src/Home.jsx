import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import welcome from "./assets/welcome-image.png"

function Home() {
  const buttonStyle = {
    boxShadow: "3px 2px 15px #0081a7",
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
        <Image src={welcome} fluid className="mb-5"/>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to our Store!</Card.Title>
              <Card.Text>
                Ex ut ex aliquip sunt veniam occaecat occaecat tempor elit quis
                quis ut ut.Lorem elit et dolore aute culpa laboris laborum
                adipisicing duis eu.Consectetur qui enim exercitation sit tempor
                consequat ex exercitation aliquip aliquip enim qui anim
                dolore.Nisi non laboris qui in duis nulla Lorem non Lorem
                laboris incididunt officia sint in.
              </Card.Text>
              
              <Button variant="primary" style={buttonStyle}>
                Shop Now
              </Button>
            </Card.Body>
          </Card>
          
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home;
