import { useParams } from "react-router-dom";

import { getRental } from "../services/apiCalls";

import SlideShow from '../components/UI/SlideShow';
import Tags from "../components/UI/Tags";
import Rating from "../components/UI/Rating";
import Dropdown from "../components/Dropdown";

import styles from './Logement.module.css';




const Logement = props => {

    const { id } = useParams();
    const rentalData = getRental(id);


    return <>
        <SlideShow pictures={rentalData.pictures} />
        <section className={styles['rental-info']}>
            <div className={styles['rental-info__summary']}>
                <h2>{rentalData.title}</h2>
                <p>{rentalData.location}</p>
                <Tags tags={rentalData.tags} />
            </div>
            <div className={styles['rental-info__host']}>
                <div>
                    <span>{rentalData.host.name}</span>
                    <img src={rentalData.host.picture}></img>
                </div>
                <Rating rating={rentalData.rating} />
            </div>
            <div className={styles['rental-info__description']}>
                <Dropdown title="Description" content={rentalData.description} />
                <Dropdown title="Equipements" content={rentalData.equipments} />
            </div>
        </section>
    </>
}
export default Logement