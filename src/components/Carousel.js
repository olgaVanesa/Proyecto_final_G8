import React, { useState, useEffect } from 'react';
import slide1 from '../assets/carousel/caroline-attwood-Fc2KdQ2QaVs-unsplash.jpg';
import slide2 from '../assets/carousel/domino-164_6wVEHfI-unsplash.jpg';
import slide3 from '../assets/carousel/emily-pottiger-Zx76sbAndc0-unsplash.jpg';
import slide4 from '../assets/carousel/matias-ilizarbe-HRYENP2Hfyc-unsplash.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        slide1,
        slide2,
        slide3,
        slide4
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Cambia el tiempo de cambio de diapositivas según tus necesidades

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container">
            <div className="slider1">
                <ul>
                    {slides.map((slide, index) => (
                        <li key={index} className={index === currentSlide ? 'active' : ''}>
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Carousel;
