import React from "react";
import "../styles/button.css";

const Button = ({ button, type }) => {
  return <button className={type}>{button}</button>;
};
export default Button;
