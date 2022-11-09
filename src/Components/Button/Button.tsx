import React from "react";

interface ButtonPorps {
  label: string;
}

const Button = (props: ButtonPorps) => {
  return <button>{props.label}</button>;
};

export default Button;
