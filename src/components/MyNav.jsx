import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNav = function (props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema} // "light" o "dark"
      data-bs-theme={props.tema} // "light" o "dark"
    >
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
