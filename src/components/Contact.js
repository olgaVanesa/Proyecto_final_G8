import React from 'react';

function Contact() {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Información de Contacto</h2>
            <p>Puedes contactarnos utilizando la información siguiente:</p>
            <ul>
              <li><strong>Teléfono:</strong> +1 234 567 890</li>
              <li><strong>Email:</strong> info@tutiendadecalzado.com</li>
              <li><strong>Dirección:</strong> Av. Principal #123, Ciudad, País</li>
            </ul>
          </div>
          <div className="col-md-6">
            {/* Aquí podrías agregar un formulario de contacto si lo deseas */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
