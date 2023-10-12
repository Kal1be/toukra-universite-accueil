import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight,faPhone} from '@fortawesome/free-solid-svg-icons';


function Carousel() {
  return (
    <div>
      {/* **************le carousel et ses elements en tous affichage******************* */}
      <div classname="container-fluid bg-body-tertiary px-lg-3 px-2">
  <div classname="contenu">
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators" id="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1">.</button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" id="carousel-item">
          <img src="../img1/etudiant1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue devant notre E-learning</p>
            <h3>Mahamat Saleh Haggar vous souhaite la bienvenue</h3>
            <button>lire plus..</button>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item">
          <img src="../img1/etudiant3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue devant notre Organisation</p>
            <h3>L'Education est la cles du success de la vie</h3>
            <button>Nos Cours..</button>
          </div>
        </div>
        <div className="carousel-item" id="carousel-item">
          <img src="../img1/etudiant4.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" id="carousel-caption">
            <p>Bienvenue a l'universite de Toukra</p>
            <h3>L'Education est la cles du success d'une nation</h3>
            <button>Nos Cours..</button>
          </div>
        </div>
      </div>
      <div id="btn">
        <button className="carousel-control-prev text-align-center" id="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span classname="text-light">< FontAwesomeIcon icon={faArrowLeft}/></span>
        </button>
        <button className="carousel-control-next text-align-center" id="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span classname="text-light"> < FontAwesomeIcon icon={faArrowRight}/> </span>
        </button>
      </div>
    </div>
  </div></div>

  {/* ***********the body et ses elements du premier icon**************** */}

   <div className="container-fluid bg-white" id='contain'>
   <div className="row row-cols-lg-2 row-cols-1">
    <div className="col-lg-12 col-12" id='imge'>
    <div className="row">
      <div className="col-lg-4 col-12">
        <img src="../img2/book1.jpeg" alt="" />
        <h4>Centre d'enseignement à <br/>
          distance</h4>
        <p>Si vous n'êtes pas disponible
          a l'université physiquement. 
        Notre université vous donne la chance
        de gagner un diplôme via une 
      apprentissage à distance.</p>
        </div>
        <div className="col-lg-4 col-12">
        <img src="../img2/userlaptop.jpeg" alt="" />
        <h4>Programme de premier <br/>
              cycle</h4>
              <p>L'université de Toukra 
              produit plus de 20000 place 
            chaque annèe pour les nouveaux 
          étudiants.</p>
        </div>
    </div>
      <div className="row">
      <div className="col-lg-4 col-12">
      <img src="../img2/cap.png" alt="" />
        
        <h4>LVT/DIplome</h4>
        <p>Maintenant pour ceux qui 
      peuvent être disponible à l'espace 
    de 2 ou 3 mois par ans pour étudier 
    pour un Diploma </p>
        </div>
      <div className="col-lg-4 col-12">
      <img src="../img2/course1school.png" alt="" />
        <h4>La vie universitaire</h4>
        <p>L'universite offre plus de 10000 logements pour ses etudiants et offre une meilleur centre de sante pour le bien de ces etudiants</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-12">
      <form className='shadow'>
        <h3>L'enregistrement pour nos cours </h3>
       <div>
           {/* <label htmlFor="exampleFormControlInput1" className="form-label">Nom d'utilisateur</label> */}
       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nom et Prenom" />
      </div>
      <div>
      {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div>
      {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Telephone" />
      </div>
    <div>
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <select class="form-select" aria-label="Default select example">
  <option selected>Listes des Cours</option>
  <option value="1">Geographie</option>
  <option value="2">Histoire</option>
  <option value="3">Englais</option>
  <option value="3">Communication</option>
  <option value="3">Anthropologie</option>
  <option value="3">Sociologie</option>
  <option value="3">Relation Internationale</option>
  <option value="3">Francais</option>
  <option value="3">Philosophie</option>
  <option value="3">Droit</option>
  <option value="3">Arabe</option>
  <option value="3">Chinois</option>
</select>
    </div>
    <button type="submit" class="btn btn-primary w-100 my-4 py-2 fs-3">Postuler</button>
      </form>
    </div>
    </div>
   </div>

   {/* ********************la fin d'affichage sur les mobiles et du laptop************************ */}

   <div className="container-fluid bg-white">
     <div className="container">
     <div className="row row-cols-2">
        <div className="col-md-7 col-12" id='first'>
        <p>Former plus <span>3M+</span></p>
         <div className='second'><img src="../img3/icon.png" alt="" /></div>
          <img src="../img3/etudian.jpg" alt="" id='myimg' />
        </div>
        <div className="col-md-5 col-12" id='tree'>
          <h3>Nous sommes une institution d'apprentissage et d'expertisme</h3>
          <h4 className='text-primary my-3'>50ans d'expertiste et d'experience</h4>
          <p>"L'Université de Toukra est une 
                               grande Université comparable à tout autre  Université,
                                engager dans la transmission  de la connaissance contemporaine,
                                en utilisant des installations et methodes de haut qualité et des appproches
                                multi-disciplinaires, permettant 
                                hommes et femmes de toutes races,ainsi que la
                                 generation future d'avoir des nouvelles 
                              idees et pratiques intellectuelles pertinentes repondant
                               aux besoins de la communaute du Tchad
                            et du monde en general."</p>
              <h4 className='text-primary my-2'>< FontAwesomeIcon icon={faPhone} className='mx-1'/>Contactez ici:+235 66 73 73 99</h4>
              <button className='btn btn-primary w-60 my-3 shadow'>Voir nos cours</button>
        </div>
      </div>
     </div>
    </div>
    
   </div>
   

  )
}

export default Carousel
