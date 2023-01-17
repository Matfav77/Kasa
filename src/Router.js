import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BoilerPlate from "./pages/BoilerPlate";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Logement, { rentalLoader } from './pages/Logement';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<BoilerPlate />}>
            <Route index element={<Home />} />
            <Route path='logements/:id' element={<Logement />}
                loader={({ params }) => { return rentalLoader(params.id) }}
                errorElement={<NotFound />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

export default router;