import React from 'react';
import Slide1 from '../components/images/slide8.jpg'
import Slide2 from '../components/images/slide6.jpg'

const HeroSection = () => {
    return (
        <>

            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Slide1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slide2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slide1} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default HeroSection;