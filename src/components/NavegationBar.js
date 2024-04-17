import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavegationBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => navigate('/')}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/catalogue')}>Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/faq')}>Prefuntas Frencuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/contact')}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavegationBar;
