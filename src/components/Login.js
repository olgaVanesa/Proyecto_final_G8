import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Iniciar sesión</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                            </form>
                            <div className="text-center mt-3">
                                <a className="nav-link" onClick={() => navigate('/signup')}>¿No tienes una cuenta? Regístrate aquí.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
