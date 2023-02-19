import React from 'react'
import './index.css'
export default function Loginform() {
    const registration=()=>
    {   
         fetch("http://localhost:5000/registration",{
            method:"POST",
            headers:{
               'Content-Type':'application/json',
            },
            body:JSON.stringify({
                username:document.getElementById('Username').value,
                password:document.getElementById('pwd').value,
                email:document.getElementById('email').value,
                tel:document.getElementById('tel').value

            })
        })
    }
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="login_anii.css" />
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form method="post" action>
              <div className="group">
                <label htmlFor="email" className="label">Your Email</label>
                <input id="user" type="email" className="input" name="email" required />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pwd" type="password" className="input" data-type="password" name="pwd" required />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" defaultValue="Sign In" name="SubmitButton0" />
              </div>
            </form>
            <form action method="post">
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form></div>
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="Username" className="label">username</label>
              <input id="Username" type="text" className="input" name="Username" required />
            </div>
            <div className="group">
              <label htmlFor="pwd" className="label">Password</label>
              <input id="pwd" type="password" className="input" data-type="password" name="pwd" required />
            </div>
            <div className="group">
              <label htmlFor="tel" className="label">contact no.</label>
              <input id="tel" type="tel" className="input" data-type="contact no." pattern="[0-9]{5}-[0-9]{5}" placeholder="12345-67890" name="contact" required />
            </div>
            <div className="group">
              <label htmlFor="email" className="label">Email Address</label>
              <input id="email" type="email" className="input" name="email" required />
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" name="SubmitButton1" onClick={registration} />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>  )
}
