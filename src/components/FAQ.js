import React from 'react';

function FAQ() {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Preguntas Frecuentes</h2>
            <div className="accordion" id="faqAccordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h3 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      ¿Cuál es el tiempo de entrega?
                    </button>
                  </h3>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                  <div className="card-body">
                    El tiempo de entrega estándar es de 3 a 5 días hábiles después de confirmado el pago.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h3 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      ¿Cómo puedo hacer un cambio o devolución?
                    </button>
                  </h3>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                  <div className="card-body">
                    Para hacer un cambio o devolución, contáctanos a través de nuestro formulario de contacto o visítanos en nuestra tienda física.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingThree">
                  <h3 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      ¿Tienen envío internacional?
                    </button>
                  </h3>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                  <div className="card-body">
                    Sí, realizamos envíos internacionales a varios países. Consulta nuestros términos y condiciones para más información.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
