import React from "react";

import styels from "../assets/css/header.module.css";
import logo from "../assets/images/logo.png";

export default function Header({ onToggle, state }) {
  console.log(state);
  return (
    <header>
      <div className={styels.header_wrapper}>
        <div className={styels.nav_toggler} onClick={() => onToggle(!state)}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={styels.app_name}>
          <img src={logo} alt="logo" />
          <p>Keep</p>
        </div>
        <div className={styels.search_bar}>
          <i className="fas fa-search"></i>
          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className={styels.action_options}>
          <i className="fas fa-redo"></i>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </header>
  );
}
