
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aboutus from './compents/Aboutuss';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
{/* <Route path='/' element={<Aboutus/>}/> */}

    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
