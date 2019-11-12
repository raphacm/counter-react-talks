import React from "react";

const Button = props => {
  console.log(props);

  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
