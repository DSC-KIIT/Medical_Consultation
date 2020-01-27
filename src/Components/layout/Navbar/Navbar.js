import React from 'react';
import './navbar.css';

function Navbar(){
    return(
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand branding" href="/"><p className= "color">MediCon</p></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><p className= "color links">Home</p></a></li>
            <li><a href="/consultadoc"><p className= "color links">Consult a Doctor</p></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;