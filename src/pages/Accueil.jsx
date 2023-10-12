import "./accueil.css"
import Carousel from '../Component/Carousel'
import Second, { First } from '../Component/Second'


function Accueil() {
  return (
    <div className='element'>
    <Carousel/>
    <Second/>
    <First/>
    </div>
  )
}

export default Accueil
