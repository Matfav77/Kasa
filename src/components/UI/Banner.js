
import styles from './Banner.module.css'

const Banner = props => {

    const classes = `${styles.banner} ${props.className}`

    return <div className={classes}>
        <div style={{ height: `${props.height}` }}>
            <img src={props.src} alt={props.alt}
                style={props.txt ? { filter: 'brightness(60%)' } : {}}
                className={styles['banner__img']}>
            </img>
            {props.txt ? <p className={styles['banner__txt']}>{props.txt}</p> : ''}
        </div>
    </div >

}

export default Banner;