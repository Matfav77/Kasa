
import styles from './Tags.module.css'

const Tags = props => {

    const tags = props.tags

    return (
        <div className={styles.tagsContainer}>
            {tags.map((e, index) => <span className={styles['tagsContainer__tag']} key={index}>{e}</span>)}
        </div>
    )
}

export default Tags;