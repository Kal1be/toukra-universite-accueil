import './App.css';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Accueil from './Accueil';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <div>
   <Navbar/>
<Accueil/>
  <Footer/>
   </div>
  )
}

export default App;
