import './app-steps-slider-buttons.css'
import {Swiper, useSwiper} from 'swiper/react';
function AppStepsSliderButtons() {
    const swiper = useSwiper();
    return(
        <div className="slider__arrow">
            <div className="slider__arrow-prev" onClick={() => swiper.slidePrev()}>
                <img src="/pictures/icons/slider-arrow-prev.svg" alt=""/>
            </div>
            <div className="slider__arrow-next" onClick={() => swiper.slideNext()}>
                <img src="/pictures/icons/slider-arrow-next.svg" alt=""/>
            </div>
        </div>
        
    );
}

export default AppStepsSliderButtons;