import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

function Login() {
    const navigate = useNavigate();

    return (
            <div className="container">
                <div className="card-body">
                    <h2 className="card-title">Iniciar sesión</h2>
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
                    
                    <a className="enlace-registro" onClick={() => navigate('/signup')}>¿No tienes una cuenta? Regístrate aquí.</a>
                    
                </div>
            </div>
    );
}

export default Login;
