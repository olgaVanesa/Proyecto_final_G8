import React from 'react';
import Carousel from './Carousel';

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bienvenido a nuestra tienda de calzado</h1>
                        <p>Descubre una amplia selección de calzado para todas las ocasiones.</p>
                        <a href="catalogo.html" className="btn btn-primary">Ver catálogo</a>
                    </div>
                </div>
                <Carousel />
            </div>
        </main>
    );
}

export default Main;
