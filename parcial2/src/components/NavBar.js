import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <>
     <Navbar bg="primary" variant="dark">
       <Container>
         <Navbar.Brand href="/bandas">Bandas musicales</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;