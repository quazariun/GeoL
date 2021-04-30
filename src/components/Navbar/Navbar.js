import React, { Component } from 'react';
import './Navbar.css';

//Ícones
import mainLogo from '../../images/icons/logo512.png';

export default class Navbar extends Component {

  render() {

    return (
      <div className="top-navbar">
        <img src={mainLogo} className="icon"></img>
        <a href="#" ><i className="fa fa-home"></i></a>
        <a href="#" ><i className="fa fa-search"></i></a>
        <a href="#" ><i className="fa fa-envelope"></i></a>
        <a href="#" ><i className="fa fa-globe"></i></a>
        <a href="#" ><i className="fa fa-trash"></i></a>
      </div>
    )
  }
}
