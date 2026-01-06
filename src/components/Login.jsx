import "../styles/login.css";
import illustration from "./undraw_secure-login_m11a.svg";

// ↑ svg ko assets folder me rakho

export default function Login({ onLogin }) {
  return (
    <div className="login-wrapper">
      {/* LEFT */}
      <div className="left">
        <h2>Login</h2>
        <p>Enter your account details</p>

        <div className="input-box">
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>

        <div className="forgot">Forgot Password?</div>

        <button className="login-btn" onClick={onLogin}>
          Login
        </button>

        <div className="signup">
          Don't have an account?
          <span>Sign up</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="welcome-card">
          <h1>Welcome to<br />student portal</h1>
          <p>Login to access your account</p>

          <img
            src={illustration}
            alt="Student Illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
}
