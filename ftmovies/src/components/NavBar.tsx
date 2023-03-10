import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavScrollExample(){
    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        
       
       
          <Nav
            // className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
          >
            <div id='home-link'>
            
            <Link to="/home">Home</Link>
            </div>
            <div id='favorites-link'>
            <Link to="/favorites">Favorites</Link>
            </div>

          </Nav>
          
        
      </Container>
    </Navbar>
    )
}

export default NavScrollExample