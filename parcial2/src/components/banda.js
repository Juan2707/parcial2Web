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

export default Banda;