import React from "react";
import Form from "./loginForm";
import RegForm from "./RegisterForm";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered == true ? <Form /> : <RegForm />}
    </div>
  );
}

export default App;
