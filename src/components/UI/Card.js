import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = props => {

    return <Link to={`/logements/${props.id}`} className={`${styles.card} ${props.src ? '' : 'default'}`}>
        <div>
            <img src={props.src} alt={props.alt}></img>
            <span>{props.title}</span>
        </div>
    </Link>
}

export default Card;