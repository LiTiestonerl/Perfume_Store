import React from 'react';
import ParticlesComponent from '../Ui/ParticlesComponent';
import ErrorPage from '../ErrorPage';
import Footer from '../Ui/Footer';

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
        <Footer>
          Copyright &copy; LiTie'stonerl 2024
        </Footer>
      </div>
    </div>
  );
};

export default AuthLayout;
