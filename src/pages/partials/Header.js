
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = props => {

    return <header className={styles.header}>
        <img src={logo} alt='Kasa logo, with the "a" shaped like a house' ></img>
        <nav>
            <NavLink style={({ isActive }) => { return isActive ? { textDecoration: 'underline' } : {} }} to='/' end>Accueil</NavLink>
            <NavLink style={({ isActive }) => { return isActive ? { textDecoration: 'underline' } : {} }} to='/about'>A Propos</NavLink>
        </nav>
    </header>
}

export default Header;