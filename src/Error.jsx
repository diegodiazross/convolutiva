import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import disconected from "./assets/disconected.png"
function Error() {
  return (
    <div className="Error text-center">
      <h2>
        <strong>Error #404 </strong>
      </h2>
      <Image src={disconected} style={{width:"200px", height:"200px"}} fluid />
      <h2 className="text-center">Esta pagina no existe</h2>
      <Nav className="justify-content-center">
      <Nav.Link  as={Link} to="/">
       <h6 >Volver a Inicio</h6> 
      </Nav.Link>
    </Nav>

    </div>
  );
}

export default Error;
