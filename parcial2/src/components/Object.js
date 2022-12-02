import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Object(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.object.foto}
       alt={props.object.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/objects/" + props.object.id}>
           {props.object.nombre}
         </Link>
       </Card.Title>
       <Card.Text>{props.object.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Object;