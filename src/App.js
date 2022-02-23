import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { useState } from 'react';
import login from './img/login.svg'
import register from './img/register.svg'


function App() {
 const [signupmode, setSignupmode] = useState('container')

  return (
    <div className={signupmode}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon="fa-solid fa-user" className='inputicon'/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon="fa-solid fa-lock" className='inputicon' />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon="fa-solid fa-user" className='inputicon'/>
              <input type="text" placeholder="Fullname" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon="fa-solid fa-envelope" className='inputicon'/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon="fa-solid fa-lock" className='inputicon' />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>WELLCOME!!</h3>
            <p>
              to FaisalSearch Movie. sign in to search your favourite movie information.
            </p>
            <p>
              or sign up if your dont have an account.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => {setSignupmode("container sign-up-mode")}}>
              Sign up
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Register now!!!!</h3>
            <p>
              To search your favourite movie info.
            </p>
            <p>
              Already have an account?
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => {setSignupmode('container')}}>
              Sign in
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
