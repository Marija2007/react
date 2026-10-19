import React, {useEffect} from "react";
import {Login} from './components/Login';
import { Comments } from './components/Comments';
import { PasswordInput } from './components/PasswordInput';
import { SignupFormFunctional, SignupFormClass } from './components/SignupForm';

export function App() {
    
    useEffect(() => {
    console.log("COMPONENT DID MOUNT");
  }, []);

  console.log("THIS IS RENDER METHOD");

  return (
    <div id='app'>
      
      <h1>Domasno</h1>
      
      <Login />
      <hr />
      
      <Comments />
      <hr />
      
      <PasswordInput />
      <hr />
      
      <SignupFormFunctional />
      <br /><br />
      <SignupFormClass />

    </div>
  );
}
