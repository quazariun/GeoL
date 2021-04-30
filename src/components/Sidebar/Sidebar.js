import React, { Component } from 'react';
import './Sidebar.css';

//Ícones
import mainLogo from '../../images/icons/logo512.png';

export default class Sidebar extends Component {


  render() {

    return (
      <div className="right-sidebar">
        <img src={mainLogo} className="main-logo"></img>
        <a href="#" ><i className="fa fa-home"></i></a>
        <a href="#" ><i className="fa fa-search"></i></a>
        <a href="#" ><i className="fa fa-envelope"></i></a>
        <a href="#" ><i className="fa fa-globe"></i></a>
        <a href="#" ><i className="fa fa-trash"></i></a>
      </div>
    )
  }
}
