import React from 'react';

const Footer = ({ children }) => (
    <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">{children}</div>
                <div>
                    <a href="/about">Privacy Policy</a>
                    &middot;
                    <a href="/terms">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
