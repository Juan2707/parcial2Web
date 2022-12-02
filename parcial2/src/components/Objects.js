import Object from "./Object";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Objects() {
 const [objects, setObjects] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setObjects(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de objetos</h2>
     <hr></hr>
     <Row>
       {objects.map((object) => (
         <Col key={object.id}>
           <Object object={object} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Objects;