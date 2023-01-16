import { useState } from 'react';

import styles from './SlideShow.module.css'

const slideReducer = (state, action) => {

}

const SlideShow = props => {

    const pictures = props.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextSlide = () => {
        setCurrentIndex(prevIndex => {
            return (prevIndex + 1) % pictures.length;
        })
    }
    const showPreviousSlide = () => {
        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) return pictures.length - 1;
            return (prevIndex - 1) % pictures.length;
        })
    }

    const controls = pictures.length > 1 ? <div className={styles.controls}>
        <i className="fa-solid fa-chevron-left" onClick={showPreviousSlide}></i>
        <span>{currentIndex + 1}/{pictures.length}</span>
        <i className="fa-solid fa-chevron-right" onClick={showNextSlide}></i></div> : '';

    return <section className={styles.mainframe}>
        {controls}
        <div className={styles.slider} style={{ backgroundImage: `url(${pictures[currentIndex]})` }}></div>
    </section>
}

export default SlideShow;