import { useState } from 'react'
import PropTypes from 'prop-types'
import './Collapse.scss'
import buttonImage from '../../public/images/collapse.png'

function Collapse({ text, content }) {
    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-header">
                <p className="collapse-text">{text}</p>
                <button
                    className={`collapse-button ${collapsed ? '' : 'rotated'}`}
                    onClick={toggleCollapse}
                >
                    <img
                        src={buttonImage}
                        alt="Toggle collapse"
                        className="collapse-icon"
                    />
                </button>
            </div>
            <div
                className={`collapse-content ${
                    collapsed ? 'collapsed' : 'expanded'
                }`}
            >
                <div className="content">
                    {Array.isArray(content) ? (
                        content.map((item, index) => (
                            <p key={index} className="collapse-item">
                                {item}
                            </p>
                        ))
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
Collapse.propTypes = {
    text: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
}

export default Collapse
