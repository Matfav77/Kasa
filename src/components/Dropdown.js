
import { useState } from 'react';
import styles from './Dropdown.module.css'


const Dropdown = props => {
    const [collapsed, setCollapsed] = useState(true);

    const { content } = props;

    const contentFilter = () => {
        switch (typeof content) {
            case "string":
                return <p>{content}</p>
            case "object":
                return <ul>
                    {content.map(e => <li>{e}</li>)}
                </ul>
            default: console.log('Unpexpected input')
                break;
        }

    }

    const chevronClasses = `fa-solid fa-chevron-up ${!collapsed ? styles['chevron-down'] : ''}`;
    const txtClasses = `${styles['dropdown__content']} ${!collapsed ? styles['dropdown__content-show'] : ''}`

    const collapseHandler = () => {
        setCollapsed(prevState => !prevState);
    }

    return <div className={styles.dropdown}>
        <div className={styles['dropdown__title']} onClick={collapseHandler}>
            <p>{props.title}</p>
            <i className={chevronClasses}></i>
        </div>
        <div className={txtClasses}>
            {contentFilter()}
        </div>
    </div>
}

export default Dropdown;