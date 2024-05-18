import PropTypes from 'prop-types'
import './Card.scss'

function Card({ title, cover }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-image-hidden" />
            <div
                className="card-image"
                style={{ backgroundImage: `url(${cover})` }}
            >
                <div className="card-title">{title}</div>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card
