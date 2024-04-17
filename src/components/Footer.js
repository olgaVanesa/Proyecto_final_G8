import React from 'react';

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 Tienda de Calzado. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Términos y condiciones</a></li>
                            <li className="list-inline-item"><a href="#">Política de privacidad</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
