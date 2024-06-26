import { useState } from 'react'
import PropTypes from 'prop-types'
import './Carrousel.scss'

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    return (
        <div className="carousel">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
            />
            {images.length > 1 && (
                <>
                    <button
                        className="carousel-button prev"
                        onClick={prevSlide}
                    >
                        ❮
                    </button>
                    <button
                        className="carousel-button next"
                        onClick={nextSlide}
                    >
                        ❯
                    </button>
                    <div className="carousel-counter">
                        {currentIndex + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    )
}

Carrousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carrousel
