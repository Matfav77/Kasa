import { useParams } from "react-router-dom";
import allRentals from '../data/logements.json';
import styles from './Logements.module.css';
import SlideShow from '../components/UI/SlideShow'

const Logement = props => {

    const { id } = useParams();
    const foundAccomodation = allRentals.filter(e => e.id === id);

    return <>
        <h1>Logement {id} </h1>
        <SlideShow />
    </>
}

export default Logement