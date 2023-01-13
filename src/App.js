import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Logement from './pages/Logement';

const App = props => {


  return (<main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/logements/:id' element={<Logement />} errorElement={<NotFound />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </main>
  );
}

export default App;
