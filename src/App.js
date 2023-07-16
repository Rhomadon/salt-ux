// import './App.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="col-md-7 d-none d-md-flex align-items-center justify-content-center" style={{ backgroundColor: "#7879F1", height: "100vh" }}>
          {/* Left column */}
          <div className="card" style={{ width: "400px", height: "400px", backgroundColor: "#AEAFF7", borderRadius: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="card-body" style={{ backgroundColor: "#AEAFF7" }}>
              <h1 className="card-title" style={{ color: "#ffffff" }}>Lorem ipsum dolor si amet</h1>
              <h4 className="card-text">Consectetur</h4>
              <p className="card-text">Lorem neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 d-flex align-items-center justify-content-center">
          {/* Right column */}
          <div className="card shadow-none" style={{ width: "350px", borderRadius: "0" }}>
            <div className="card-body">
              <h1 className="card-title">Hello</h1>
              <p className="card-text">Enter your email and password to login</p>
              {/* Login form */}
              <div className="form-outline">
                <input type="email" id="email" className="form-control" />
                <label className="form-label" htmlFor="email">Email</label>
              </div>
              <div className="form-outline mt-1">
                <div className="row">
                  <div className="col-11">
                    <input type={showPassword ? 'text' : 'password'} id="password" className="form-control" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
                  <div className="col-1">
                    <div
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label text-sm-start" htmlFor="flexCheckDefault">Remember me</label>
                  </div>
                </div>
                <div className="col-6">
                  <a href="/" className="text-sm-start">Forgot password?</a>
                </div>
              </div>
              <div className="row mt-2 mb-4 d-flex justify-content-between">
                <div className="col-6">
                  <button type="button" className="btn btn-primary btn-block">Login</button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-secondary btn-block">Sign Up</button>
                </div>
              </div>
              <p className="card-text text-center">or, login with</p>
              {/* Social login buttons */}
              <div className="row justify-content-between">
                <div className="col-4">
                  <button type="button" className="btn btn-secondary btn-sm">Facebook</button>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-secondary btn-sm">Linkedin</button>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-secondary btn-sm">Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;
