import React from 'react';
import '../styles/styles.css';
// import '../styles/custom.css';
import ParticlesComponent from './ParticlesComponent';
import ErrorPage from './ErrorPage';

const AuthLayout = ({ children, errorCode }) => {
  const renderContent = () => {

    if (errorCode) {
      return (
        <ErrorPage
          errorCode={errorCode.code}
          message={errorCode.message}
          buttonText={errorCode.buttonText}
          buttonLink={errorCode.buttonLink}
        />
      );
    }

    return (
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-primary page-auth">
      <ParticlesComponent />
      {renderContent()}
      <div id="layoutAuthentication_footer">
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; LiTie'stonerl 2024</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AuthLayout;
