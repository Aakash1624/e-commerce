import './login.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="title-container">
          <h2 className="title">Welcome</h2>
          <p className="para">Do you have an account? Create Today</p>
        </div>

        <div className="email-password-cart">
          <div className="email-cart">
            <p className="email-title">Email</p>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Type Username"
            />
          </div>
          <div className="password-cart">
            <p className="password-title">Password</p>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              placeholder="Enter Password"
            />
          </div>
          <button className="btn-log">Log In</button>
          <div className="footer-cont">
            <p className="foot-para">Or</p>
            <p className="foot-para">Sign Up with</p>
            <div className="login-logo">
              <span className="btn-google">
                <FcGoogle />
              </span>
              <button className="btn-sign">Sign In With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
