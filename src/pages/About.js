
import Dropdown from "../components/Dropdown";
import Banner from "../components/UI/Banner";
import aboutBanner from '../images/aboutBanner.jpg'

const About = props => {

    return <>
        <Banner height={'220px'} src={aboutBanner} />
        <Dropdown title='Fiability' txt='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <Dropdown title='Fiability' txt='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <Dropdown title='Fiability' txt='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <Dropdown title='Fiability' txt='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
    </>
}

export default About;