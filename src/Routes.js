import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Logement from './pages/Logement';

const Router = props => {


    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logements/:id' element={<Logement />} errorElement={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
}

export default Router;