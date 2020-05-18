import React, {useEffect, useState} from 'react';

import logo from '../../assets/logo.png';
import './styles.css';

function Header() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default Header;
