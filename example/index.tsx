import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

const App = () => {
  return (
<>
    <div className="d-flex flex-column min-vh-100 shifter-dashboard-login">
      <div className="mt-4 mb-4 flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="mx-auto d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between login-column">
          <form className="login mx-3 px-4 py-4 rounded">
            <div className="mb-4 pb-2 login-header">
              <div className="mb-4 text-center login-icon"><img src="http://localhost:6006/static/media/src/images/common/shifter.svg" width="36" height="46" alt="Shifter"/></div>
              <h1 className="mb-0 font-weight-bold text-center login-title">Log In</h1>
              <div className="mt-2 font-weight-bold text-center login-switch-way">or <a href="./signup-zero.html">sign up</a></div>
            </div>
            <div className="form-group mb-4">
              <label className="font-weight-bold" htmlFor="usename">Usename or email</label>
              <div className="input-group reverse-icon">
                <input type="text" id="usename" className="form-control" placeholder="Username" required/>
                <div className="input-group-append"><i className="fas fa-user" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="form-group mb-4">
              <label className="font-weight-bold" htmlFor="password">Password</label>
              <div className="input-group reverse-icon" id="password-eye">
                <input type="password" id="password" className="form-control" placeholder="Password" required/>
                <div className="input-group-append"><i className="fas fa-lock" aria-hidden="true"></i></div>
                <div className="input-group-eye"><i className="fas fa-eye-slash" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="form-group form-check d-flex align-items-center colored-check smaller">
              <input type="checkbox" className="screen-reader-text form-check-input" id="remember"/>
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="mt-4 font-weight-bold btn btn-block btn-login" disabled>Log In</button>
            <div className="forget-password"><a href="#" target="_blank">Forgot Password?</a></div>
          </form>
          <div className="login-information mt-4 mt-md-0 mx-3">
            <div className="login-information-icon text-center"><img src="http://localhost:6006/static/media/src/images/login/login-information.svg" width="153" height="141" alt=""/></div>
            <h2 className="login-information-title mb-0 font-weight-bold text-center">Faster Build Times</h2>
            <div className="login-information-description mt-4 text-center">Customize Shifter settings for up to 70% faster build times.</div>
            <div className="login-information-anchor font-weight-bold text-center"><a href="#" target="_blank">Learn about Shifter Media CDN</a></div>
          </div>
        </div>
      </div>
      <footer className="text-center">
        <p className="m-0 common-footer-copyright"><small className="d-flex align-items-center justify-content-center">©2021 Shifter | A Product by <a href="https://www.digitalcube.jp/" rel="nofollow" title="DigitalCube"><img className="d-block" src="/images/common/digitalcube.svg" width="77" height="15" alt=""/></a></small></p>
      </footer>
    </div>
    </>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
