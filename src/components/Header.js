import React from "react";
import logo from "../assets/logo.svg"


export default function Header() {
  return (
    <header div className="header">
        <img className="header--img" src={logo} alt="logo"/>
        <h1>My Journal Travel</h1>
    </header>
  );
}