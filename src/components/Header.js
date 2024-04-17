import React from 'react';
import { useNavigate } from 'react-router-dom';
import instagram from '../assets/icon-instagram.png';
import email from '../assets/icon-email.svg';
import tiktok from '../assets/icon-tiktok.svg';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-auto">
                        <a className="nav-link" onClick={() => navigate('/')}>
                            <img className="logo" src="pisadas_logo.ico" alt="Logo de la tienda" />
                        </a>
                    </div>
                    <div className="col-12 col-md-auto d-flex align-items-center">
                        <form action="/buscar" method="GET" className="search-form d-flex align-items-center">
                            <input type="text" className="form-control" placeholder="Buscar..." name="q" />
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>
                        <div className='social-media d-flex align-items-center'>
                            <a href="https://instagram.com">
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="mailto:example@example.com">
                                <img src={email} alt="Email" />
                            </a>
                            <a href="https://tiktok.com">
                                <img src={tiktok} alt="TikTok" />
                            </a>
                        </div>
                        <div>
                            <a className="btn btn-secondary" onClick={() => navigate('/login')}>Iniciar sesión</a>
                        </div>
                        <div>
                            <a className="btn btn-secondary" onClick={() => navigate('/signup')}>Registrarse</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
