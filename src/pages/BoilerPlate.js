import { Outlet } from "react-router-dom";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

const BoilerPlate = () => {

    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default BoilerPlate;