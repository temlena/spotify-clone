import React from "react";
import "../styles/header.css";
import { Logo } from "../components/logo";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#/Premium">Premium</a>
          </li>
          <li>
            <a href="#/Support">Support</a>
          </li>
          <li>
            <a href="#/Download">Download</a>
          </li>
          <li>|</li>
          <li className="cta">
            <a href="#/Sign up">Sign up</a>
          </li>
          <li className="cta">
            <a href="#/Log in">Log in</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
