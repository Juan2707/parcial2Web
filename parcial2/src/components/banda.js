//Atributos id, name, foundation_year, country, genre, description, image
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

function Banda(props) {
    return (
        <tr>
            <th scope="row">
                {props.banda.id}
            </th>
            <td>
                <p class="text-primary">{props.banda.name}</p>

            </td>
            <td>
                {props.banda.country}
            </td>
            <td>
                {props.banda.genre}
            </td>
            <td>
                {props.banda.foundation_year}
            </td>

        </tr>
    );
}

function tarjeta(props) {
    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            
            <Card.Body>
                <Card.Title>
                    <b>{props.banda.name}</b>
                </Card.Title>
                <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src={props.banda.image}
                alt={props.object.descripcion}
            />
                <Card.Text>{props.banda.descripcion}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Banda;