import { Link } from "react-router-dom";
import styles from './NotFound.module.css'

const NotFound = () => {


    return <div className={styles['not-found']}>
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d'accueil</Link>
    </div>
}

export default NotFound;