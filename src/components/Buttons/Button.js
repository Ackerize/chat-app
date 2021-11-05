import React from "react";
import Danger from "./Danger";
import Google from "./Google";
import Primary from "./Primary";

const Button = ({ type = "submit", children, onClick }) => {
  switch (type) {
    case "google":
      return <Google text={children} />;
    case "danger":
      return <Danger text={children} onClick={onClick} />;
    default:
      return <Primary text={children} type="submit" />;
  }
};

export default Button;
