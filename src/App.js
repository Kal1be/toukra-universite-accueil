import './App.css';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Accueil from './pages/Accueil';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path="/" element={ <Accueil/>}/> 
  </Routes>
  <Footer/>
   </>
  )
}

export default App;
