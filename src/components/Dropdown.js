
import { useState } from 'react';
import styles from './Dropdown.module.css'

const Dropdown = props => {

    const [collapsed, setCollapsed] = useState(true);

    const chevronClasses = `fa-solid fa-chevron-up ${!collapsed ? styles['chevron-down'] : ''}`;
    const txtClasses = `${styles['dropdown__txt']} ${!collapsed ? styles['dropdown__txt-show'] : ''}`

    const collapseHandler = () => {
        setCollapsed(prevState => !prevState);
    }

    return <div className={styles.dropdown}>
        <div className={styles['dropdown__title']} onClick={collapseHandler}>
            <p>{props.title}</p>
            <i className={chevronClasses}></i>
        </div>
        <div className={txtClasses}>
            <p>{props.txt}</p>
        </div>
    </div>
}

export default Dropdown;