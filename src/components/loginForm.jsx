import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button name="Login" />
    </form>
  );
}

export default Form;
