

import Banner from '../components/UI/Banner';
import Card from '../components/UI/Card';

import allRentals from '../data/logements.json';
import homeBanner from '../images/homeBanner.jpg';

import styles from './Home.module.css';

const Home = props => {

    return <>
        <Banner height={'220px'} src={homeBanner} alt={'Image of a rainy coastline'} txt={'Chez vous, partout et ailleurs'} />
        <section className={styles['rentals-display']}>
            {allRentals.map(e => {
                return <Card src={e.pictures[0]} alt={e.title} key={e.id} id={e.id} title={e.title} />
            })}
            <Card />
        </section>
    </>
}

export default Home;