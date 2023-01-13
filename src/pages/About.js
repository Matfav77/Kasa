
import Dropdown from "../components/Dropdown";
import Banner from "../components/UI/Banner";
import aboutBanner from '../images/aboutBanner.jpg';
import dropdownInfo from '../data/dropdownInfo.json';
import styles from './About.module.css'


const About = props => {

    return <>
        <Banner height={'220px'} src={aboutBanner} />
        <section className={styles.values}>
            {dropdownInfo.map(e => {
                return <Dropdown title={e.title} content={e.content} key={e.title} />
            })}
        </section>
    </>
}

export default About;