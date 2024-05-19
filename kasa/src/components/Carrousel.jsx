import { useState } from 'react'
import PropTypes from 'prop-types'
import './Carrousel.scss'

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}>
                &lt;
            </button>
            <div className="carousel-image">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <div className="carousel-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
            <button className="carousel-button next" onClick={handleNext}>
                &gt;
            </button>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel
