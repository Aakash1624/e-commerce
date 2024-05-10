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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('Sign Up');

  const clearInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    clearInputs();
  };

  const SignUp = () => {
    // Check if any input field is empty
    if (!username || !email || !password) {
      toast.error('Please fill in all fields!', {
        style: { background: '#ff7f7f', color: 'white', marginTop: '100px' },
      });
      return;
    }

    // Handle sign up logic
    toast.success('Sign Up Successfully!', {
      style: { color: 'white', background: '#09f04a', marginTop: '100px' },
    });
    clearInputs();
  };

  const handleSignUp = () => {
    SignUp();
  };

  const LogIn = () => {
    // Check if any input field is empty
    if (!email || !password) {
      toast.error('Please fill in all fields!', {
        style: { background: '#ff7f7f', color: 'white', marginTop: '100px' },
      });
      return;
    }

    // Handle login logic
    toast.success('LogIn Successfully!', {
      style: { background: '#09f04a', color: 'white', marginTop: '100px' },
    });
    clearInputs();
  };

  const handleLogin = () => {
    LogIn();
  };

  return (
    <div className="login-container">
      <ToastContainer />
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
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <TfiEmail className="login-page-icon" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <RiLockPasswordFill className="login-page-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <button className="login-submit" onClick={handleLogin}>
            Login
          </button>
        )}

        {action === 'Login' ? (
          <div></div>
        ) : (
          <button className="signIn-submit" onClick={handleSignUp}>
            Sign Up
          </button>
        )}

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
            clearInputs();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
            clearInputs();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
