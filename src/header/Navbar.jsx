import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom"
import Header from './Header';
import img1 from "../header/img/img1/drapeau1.png"
import img2 from "../header/img/img1/im6.png"
import Accueil from '../Accueil';

function Navbar() {
  return (
    <div>
        <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border bg-white" id='navbar'>
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-3'><img src={img2} alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src={img1} alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={<Accueil/>}>Accueil</Link>
      </li>
      <li class="nav-item">
          <Link class="nav-link" to={<Accueil/>}>
            Recherches
          </Link>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to={<Accueil/>}>Admission et Nouvelles</Link></li>
              <li><Link to={<Accueil/>}> Politique de confidentialite</Link></li>
              <li><Link to={<Accueil/>}>Librairies de l'universitè</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>La formation a l'universite</Link></li>
              <li><Link to={<Accueil/>}>Les services disponibles</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
      <li className="nav-item ">
        <Link className="nav-link" to={<Accueil/>} >
          Facultes
        </Link>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to={<Accueil/>}>Departement de Francais</Link></li>
                <li><Link to={<Accueil/>}>Departement de Philosophie</Link></li>
                <li><Link to={<Accueil/>}>Departement de l'Anthopologie</Link></li>
                <li><Link to={<Accueil/>}>Departement de Communication</Link></li>
                <li><Link to={<Accueil/>}>Departement de Geographie</Link></li>
                <li><Link to={<Accueil/>}>Departement d'Histoire</Link></li>
                <li><Link to={<Accueil/>}>Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>

      </li>
      <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Instituts&amp;Centres  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
         
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to={<Accueil/>}>Departement de Francais</Link></li>
                <li><Link to={<Accueil/>}>Departement de Philosophie</Link></li>
                <li><Link to={<Accueil/>}>Departement de l'Anthopologie</Link></li>
                <li><Link to={<Accueil/>}>Departement de Communication</Link></li>
                <li><Link to={<Accueil/>}>Departement de Geographie</Link></li>
                <li><Link to={<Accueil/>}>Departement d'Histoire</Link></li>
                <li><Link to={<Accueil/>}>Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>

        </li> 
     
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Nouvelles  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to={<Accueil/>}>Admission et Nouvelles</Link></li>
              <li><Link to={<Accueil/>}> Politique de confidentialite</Link></li>
              <li><Link to={<Accueil/>}>Librairies de l'universitè</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>La formation a l'universite</Link></li>
              <li><Link to={<Accueil/>}>Les services disponibles</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Biblioteques  <FontAwesomeIcon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue a Toukra !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={<Accueil/>}>Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to={<Accueil/>}>A Propos <span>+</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to={<Accueil/>}>
            Facultes <span>+</span></Link>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Instituts&amp;Centres  <span>+</span></Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Nouvelles  <span>+</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Biblioteques <span>+</span></Link>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>



{/* ****************fixes la position si le scroll est a 150px******************* */}



<nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border " id="nav">
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-3'><img src="../img1/im6.png" alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src="../img1/drapeau1.png" alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={<Accueil/>}>Accueil</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={<Accueil/>}>Recherche</Link>
        <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to={<Accueil/>}>Admission et Nouvelles</Link></li>
              <li><Link to={<Accueil/>}> Politique de confidentialite</Link></li>
              <li><Link to={<Accueil/>}>Librairies de l'universitè</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>La formation a l'universite</Link></li>
              <li><Link to={<Accueil/>}>Les services disponibles</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to={<Accueil/>} >
          Facultes
        </Link>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to={<Accueil/>}>Departement de Francais</Link></li>
                <li><Link to={<Accueil/>}>Departement de Philosophie</Link></li>
                <li><Link to={<Accueil/>}>Departement de l'Anthopologie</Link></li>
                <li><Link to={<Accueil/>}>Departement de Communication</Link></li>
                <li><Link to={<Accueil/>}>Departement de Geographie</Link></li>
                <li><Link to={<Accueil/>}>Departement d'Histoire</Link></li>
                <li><Link to={<Accueil/>}>Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>
      </li>
      <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Instituts&amp;Centres </Link>
          <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><Link to={<Accueil/>}>Departement de Francais</Link></li>
                <li><Link to={<Accueil/>}>Departement de Philosophie</Link></li>
                <li><Link to={<Accueil/>}>Departement de l'Anthopologie</Link></li>
                <li><Link to={<Accueil/>}>Departement de Communication</Link></li>
                <li><Link to={<Accueil/>}>Departement de Geographie</Link></li>
                <li><Link to={<Accueil/>}>Departement d'Histoire</Link></li>
                <li><Link to={<Accueil/>}>Departement de Science Humaines</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><Link to={<Accueil/>}>Facultè des Langues et Lettres Arts et Communication</Link></li>
      <li><Link to={<Accueil/>}>Facultès des Sciences et de l'Education</Link></li>
      <li><Link to={<Accueil/>}>Facultes des sciences Humaines et Sociales</Link></li>
      <li><Link to={<Accueil/>}>Facultés des Sciences Juridiques et Politique</Link></li>
    </ul>
            </div>
           </div>
          </div>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Nouvelles  </Link>
           <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><Link to={<Accueil/>}>Admission et Nouvelles</Link></li>
              <li><Link to={<Accueil/>}> Politique de confidentialite</Link></li>
              <li><Link to={<Accueil/>}>Librairies de l'universitè</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>La formation a l'universite</Link></li>
              <li><Link to={<Accueil/>}>Les services disponibles</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
              <li><Link to={<Accueil/>}>Ecoles Normales superieures</Link></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></Link>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={<Accueil/>}>Accueil</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to={<Accueil/>}>A Propos  <span>+</span></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link active " >
            Facultes <span>+</span>
           </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Instituts&amp;Centres  <span>+</span></Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Nouvelles  <span>+</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={<Accueil/>}>Biblioteques  <span>+</span></Link>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>

    </div>
  )
}

export default Navbar
