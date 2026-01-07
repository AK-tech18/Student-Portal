import { useState } from "react";
import "../styles/auth.css";
import "boxicons/css/boxicons.min.css";

export default function Login({ onLogin }) {
  const [active, setActive] = useState(false);

  return (
    <div className="auth-wrapper">
      <div className={`container ${active ? "active" : ""}`}>

        {/* ===== LOGIN ===== */}
        <div className="form-box login">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLogin(); // ✅ login → dashboard
            }}
          >
            <h1>Login</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <p className="social-text">or login with social platforms</p>

            <div className="social-icons">
              <a
                href="https://accounts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-google"></i>
              </a>

              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        {/* ===== REGISTER ===== */}
        <div className="form-box register">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLogin(); // ✅ register → dashboard
            }}
          >
            <h1>Register</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>

        {/* ===== TOGGLE ===== */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setActive(true)}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setActive(false)}
            >
              Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
