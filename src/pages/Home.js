import Banner from '../components/UI/Banner';
import Card from '../components/UI/Card';

import homeBanner from '../images/homeBanner.jpg';
import { getAllRentals } from '../services/apiCalls';

import styles from './Home.module.css';

const Home = props => {

    const allRentals = getAllRentals();

    return <>
        <Banner height={'220px'} src={homeBanner} alt={'Image of a rainy coastline'} txt={'Chez vous, partout et ailleurs'} />
        <section className={styles['rentals-display']}>
            {allRentals.map(e => {
                return <Card src={e.cover} alt={e.title} key={e.id} id={e.id} title={e.title} />
            })}
        </section>
    </>
}

export default Home;