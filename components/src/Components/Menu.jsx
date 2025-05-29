import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{boxShadow:"2px 2px 0px 1px solid black"}}>
          <Navbar.Brand href="#home">Book Your Feets</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Menu;