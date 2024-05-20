import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './Card.scss'

function Card({ id, title, cover }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/Fiche/${id}`)
    }

    return (
        <div className="card" onClick={handleClick}>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card
