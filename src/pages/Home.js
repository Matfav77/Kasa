
import homeBanner from '../images/homeBanner.jpg'
import Banner from '../components/UI/Banner'

const Home = props => {

    return <>
        <Banner height={'220px'} src={homeBanner} alt={'Image of a rainy coastline'} txt={'Chez vous, partout et ailleurs'} />
    </>
}

export default Home;