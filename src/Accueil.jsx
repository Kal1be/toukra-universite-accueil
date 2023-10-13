import "./accueil.css"

import Second from "../src/Component/Second"
import Carousel from "../src/Component/Carousel"

function Accueil() {
  return (
    <div className='element'>
   <Carousel/>
    <Second/>
    </div>
  )
}

export default Accueil
