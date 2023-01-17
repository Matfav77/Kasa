import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './BrowserRouter';

const App = props => {

  return (<main>
    <RouterProvider router={router} />
  </main>
  );
}

export default App;
