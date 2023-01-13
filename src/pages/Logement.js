import { useParams } from "react-router-dom";
import allRentals from '../data/logements.json'

const Logement = props => {

    const { id } = useParams();
    const foundAccomodation = allRentals.filter(e => e.id === id);



    return <h1>Logement {id} </h1>
}

export default Logement