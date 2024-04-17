import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { 
      id: 1, 
      name: "Zapato Deportivo UltraRun", 
      description: "Diseñados para correr largas distancias, máximo confort", 
      price: 120.00,
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/feet-1838470_960_720.jpg" 
    },
    { 
      id: 2, 
      name: "Sandalias Tropicales", 
      description: "Perfectas para la playa, ligeras y frescas", 
      price: 45.00,
      image: "https://cdn.pixabay.com/photo/2016/07/13/16/09/flip-flops-1515686_960_720.jpg" 
    },
    { 
      id: 3, 
      name: "Botas Trekker", 
      description: "Para los amantes del trekking, resistencia y durabilidad garantizada", 
      price: 150.00,
      image: "https://cdn.pixabay.com/photo/2016/03/27/21/34/shoes-1284546_960_720.jpg" 
    },
    { 
      id: 4, 
      name: "Zapatillas Casual Street", 
      description: "Comodidad y estilo urbano, para el día a día", 
      price: 80.00,
      image: "https://cdn.pixabay.com/photo/2016/03/09/09/17/shoes-1245920_960_720.jpg" 
    },
    { 
      id: 5, 
      name: "Tacones Clásicos", 
      description: "Clase y elegancia para ocasiones formales", 
      price: 95.00,
      image: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothing-1839936_960_720.jpg" 
    },
    { 
      id: 6, 
      name: "Mocasines de Cuero", 
      description: "El clásico que nunca pasa de moda, 100% cuero", 
      price: 110.00,
      image: "https://cdn.pixabay.com/photo/2014/10/22/17/22/brown-shoes-498688_960_720.jpg" 
    },
    { 
      id: 7, 
      name: "Zapatos de Golf", 
      description: "Estabilidad y confort en el campo de golf", 
      price: 135.00,
      image: "https://cdn.pixabay.com/photo/2016/03/09/15/27/golf-shoes-1246345_960_720.jpg" 
    },
    { 
      id: 8, 
      name: "Zapatillas de Baloncesto", 
      description: "Diseño innovador para el máximo rendimiento en la cancha", 
      price: 130.00,
      image: "https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" 
    },
    { 
      id: 9, 
      name: "Botas de Invierno", 
      description: "Mantén tus pies calientes y secos con tecnología de aislamiento", 
      price: 140.00,
      image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/boot-1868485_960_720.jpg" 
    },
    { 
      id: 10, 
      name: "Zapatillas de Ciclismo", 
      description: "Ligereza y durabilidad para los ciclistas más exigentes", 
      price: 160.00,
      image: "https://cdn.pixabay.com/photo/2016/01/19/17/48/cycling-shoes-1149918_960_720.jpg" 
    },
    { 
      id: 11, 
      name: "Zapatos de Danza", 
      description: "Flexibilidad y soporte para cada movimiento", 
      price: 90.00,
      image: "https://cdn.pixabay.com/photo/2017/08/06/18/33/ballet-2590080_960_720.jpg" 
    },
    { 
      id: 12, 
      name: "Sandalias de Senderismo", 
      description: "Robustas y preparadas para cualquier aventura", 
      price: 70.00,
      image: "https://cdn.pixabay.com/photo/2017/08/07/23/52/people-2604283_960_720.jpg" 
    },
    { 
      id: 13, 
      name: "Zapatos Náuticos", 
      description: "Estilo y funcionalidad para deportes acuáticos", 
      price: 100.00,
      image: "https://cdn.pixabay.com/photo/2016/03/05/20/02/sailing-shoes-1237711_960_720.jpg" 
    },
    { 
      id: 14, 
      name: "Zapatillas de Tenis", 
      description: "Agarre y comodidad para el juego rápido", 
      price: 115.00,
      image: "https://cdn.pixabay.com/photo/2016/11/18/16/16/tennis-1835191_960_720.jpg" 
    },
    { 
      id: 15, 
      name: "Botines de Fútbol", 
      description: "Control y precisión en cada paso", 
      price: 125.00,
      image: "https://cdn.pixabay.com/photo/2015/01/12/10/45/soccer-597674_960_720.jpg" 
    },
    { 
      id: 16, 
      name: "Slippers de Casa", 
      description: "Confort absoluto para tus días en casa", 
      price: 50.00,
      image: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg" 
    },
    { 
      id: 17, 
      name: "Calzado de Seguridad", 
      description: "Protección garantizada para ambientes de trabajo riesgosos", 
      price: 130.00,
      image: "https://cdn.pixabay.com/photo/2015/11/07/11/21/work-shoes-1031756_960_720.jpg" 
    },
    { 
      id: 18, 
      name: "Zapatos Derby", 
      description: "El toque de distinción para tu vestuario profesional", 
      price: 110.00,
      image: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_960_720.jpg" 
    },
    { 
      id: 19, 
      name: "Zapatillas de Running Minimalistas", 
      description: "Menos es más, siente el camino con cada paso", 
      price: 105.00,
      image: "https://cdn.pixabay.com/photo/2015/07/15/11/53/running-shoe-845848_960_720.jpg" 
    },
    { 
      id: 20, 
      name: "Zapatos Veganos", 
      description: "Ecológicos y libres de materiales de origen animal", 
      price: 85.00,
      image: "https://cdn.pixabay.com/photo/2017/10/31/09/26/fashion-2903163_960_720.jpg" 
    }
];


function Catalogue() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Catálogo de Calzados</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
