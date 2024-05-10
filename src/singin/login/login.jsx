import './login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordFill } from 'react-icons/ri';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';
import './login.css';
import { useState } from 'react';

const Login = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const [action, setAction] = useState('Sign Up');

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underLine"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <FaUser className="login-page-icon" />
            <input type="text" placeholder="User Name" />
          </div>
        )}

        <div className="input">
          <TfiEmail className="login-page-icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <RiLockPasswordFill className="login-page-icon" />
          <input type="password" placeholder="Password" />
        </div>
        {action === 'Login' ? <div></div> : <p>Or</p>}

        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="google-container">
            <button onClick={signInWithGoogle} className="btn-sign">
              <FcGoogle className="google" />
              Sign Up With Google
            </button>
          </div>
        )}
      </div>
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
