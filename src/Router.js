import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BoilerPlate from "./pages/BoilerPlate";
import Home, { homeLoader } from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Rental, { rentalLoader } from './pages/Rental';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<BoilerPlate />} >
            <Route index element={<Home />} loader={homeLoader} />
            <Route path='logements/:id' element={<Rental />}
                loader={({ params }) => { return rentalLoader(params.id) }}
                errorElement={<NotFound />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

export default router;