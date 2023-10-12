import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function Navbar() {
  return (
    <div>
        <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border bg-white" id='navbar'>
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
        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">
            Recherches
          </a>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><a href="">Admission et Nouvelles</a></li>
              <li><a href=""> Politique de confidentialite</a></li>
              <li><a href="">Librairies de l'universitè</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">La formation a l'universite</a></li>
              <li><a href="">Les services disponibles</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
            </ul>
           </div>
          </div>
        </li>
      <li className="nav-item ">
        <a className="nav-link" href="#" >
          Facultes
        </a>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><a href="">Departement de Francais</a></li>
                <li><a href="">Departement de Philosophie</a></li>
                <li><a href="">Departement de l'Anthopologie</a></li>
                <li><a href="">Departement de Communication</a></li>
                <li><a href="">Departement de Geographie</a></li>
                <li><a href="">Departement d'Histoire</a></li>
                <li><a href="">Departement de Science Humaines</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
           </div>
          </div>

      </li>
      <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <FontAwesomeIcon icon="{faChevronDown}/" /></a>
         
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><a href="">Departement de Francais</a></li>
                <li><a href="">Departement de Philosophie</a></li>
                <li><a href="">Departement de l'Anthopologie</a></li>
                <li><a href="">Departement de Communication</a></li>
                <li><a href="">Departement de Geographie</a></li>
                <li><a href="">Departement d'Histoire</a></li>
                <li><a href="">Departement de Science Humaines</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
           </div>
          </div>

        </li> 
     
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <FontAwesomeIcon icon="{faChevronDown}/" /></a>
          <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><a href="">Admission et Nouvelles</a></li>
              <li><a href=""> Politique de confidentialite</a></li>
              <li><a href="">Librairies de l'universitè</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">La formation a l'universite</a></li>
              <li><a href="">Les services disponibles</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <FontAwesomeIcon icon="{faChevronDown}/" /></a>
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
          <a className="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">A Propos <span>+</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="#">
            Facultes <span>+</span></a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <span>+</span></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <span>+</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques <span>+</span></a>
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
        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recherche</a>
        <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><a href="">Admission et Nouvelles</a></li>
              <li><a href=""> Politique de confidentialite</a></li>
              <li><a href="">Librairies de l'universitè</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">La formation a l'universite</a></li>
              <li><a href="">Les services disponibles</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
            </ul>
           </div>
          </div>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#" >
          Facultes
        </a>
        <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><a href="">Departement de Francais</a></li>
                <li><a href="">Departement de Philosophie</a></li>
                <li><a href="">Departement de l'Anthopologie</a></li>
                <li><a href="">Departement de Communication</a></li>
                <li><a href="">Departement de Geographie</a></li>
                <li><a href="">Departement d'Histoire</a></li>
                <li><a href="">Departement de Science Humaines</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
           </div>
          </div>
      </li>
      <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres </a>
          <div className='dropdownmenu shadow'>
           <div className="row" id='rowcol'>
            <div className="col">
              <h4>Departement</h4>
              <ul>
                <li><a href="">Departement de Francais</a></li>
                <li><a href="">Departement de Philosophie</a></li>
                <li><a href="">Departement de l'Anthopologie</a></li>
                <li><a href="">Departement de Communication</a></li>
                <li><a href="">Departement de Geographie</a></li>
                <li><a href="">Departement d'Histoire</a></li>
                <li><a href="">Departement de Science Humaines</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Faculte</h4>
              <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
            <div className="col">
            <h4>Direction</h4>
            <ul>
      <li><a href="">Facultè des Langues et Lettres Arts et Communication</a></li>
      <li><a href="">Facultès des Sciences et de l'Education</a></li>
      <li><a href="">Facultes des sciences Humaines et Sociales</a></li>
      <li><a href="">Facultés des Sciences Juridiques et Politique</a></li>
    </ul>
            </div>
           </div>
          </div>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  </a>
           <div className='dropdownmenu shadow'>
           <div className='update'>
           <ul>
              <li><a href="">Admission et Nouvelles</a></li>
              <li><a href=""> Politique de confidentialite</a></li>
              <li><a href="">Librairies de l'universitè</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">La formation a l'universite</a></li>
              <li><a href="">Les services disponibles</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
              <li><a href="">Ecoles Normales superieures</a></li>
            </ul>
           </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></a>
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
          <a className="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">A Propos  <span>+</span></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active " >
            Facultes <span>+</span>
           </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <span>+</span></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <span>+</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <span>+</span></a>
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
