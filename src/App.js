import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Logement from './pages/Logement';
import data from './data/logements.json';

const App = props => {


  return (<main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/logement/:id' element={<Logement />} errorElement={<NotFound />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </main>
  );
}

export default App;
