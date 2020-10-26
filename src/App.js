import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav,Navbar,FormControl, Button, Image,Card } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      </header>
      <body className="position-relative">
      <Image src="https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2019/12/planete-nature.jpg" fluid  />
      <h1 className ="position-absolute fixed-top text-white mb-5">TITLE</h1>
      <Card style={{ width: '18rem' }} className ="position-absolute fixed-top bg-transparent mt-5 ml-5 w-25 p-3">
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

      </body>
    </div>
  );
}

export default App;
