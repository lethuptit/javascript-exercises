import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }
  const login = (
    <form action="#" onSubmit ={handleSubmit}>
      <input type="password" placeholder="Password"/>
      <input type="submit" placeholder="Password"/>
      <PropsDisplayer myProp='Hello'/>
    </form>
  );

  function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{props["myProp"]}</h2>
    </div>
  );
}
  const contactInfo = (
    
    <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
  ); 

  return (
      <div id="authorization">
        {authorized?<h1>Contact</h1>:<h1>Enter the Password</h1>}
        {authorized?contactInfo:login}
        
      </div>
  );
}



export default Contact;