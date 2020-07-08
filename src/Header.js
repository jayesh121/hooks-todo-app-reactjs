import React from 'react'
import './App.css';
export default function Header() {
    return (
        <div>
        <nav>
      
        <div className="nav-wrapper">
        <div className="logo" >
          <a href="#" class="brand-logo">Narendra Modi</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">ABOUT</a></li>
            <li><a href="badges.html">NEWS</a></li>
            <li><a href="collapsible.html">HELP</a></li>
           
          </ul>
        </div>
       </div> 
      </nav>
    
    <br />  
      <div  className="container">  </div>

      <br />
      <div class="button">
      <a class="waves-effect waves-light btn-large"><i class="material-icons right">Request </i>Problem </a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons right">Request </i>Problem </a>
       </div> 
      </div>
    )
}
