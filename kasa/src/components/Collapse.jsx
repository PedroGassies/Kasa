import { useState } from 'react'
import PropTypes from 'prop-types'
import './Collapse.scss'
import buttonImage from '../../public/images/collapse.png'

function Collapse({ text }) {
    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={`collapse-container ${collapsed ? 'collapsed' : ''}`}>
            <p className="collapse-text">{text}</p>
            <button className="collapse-button" onClick={toggleCollapse}>
                <img
                    src={buttonImage}
                    alt="Toggle collapse"
                    className={`collapse-icon ${collapsed ? '' : 'rotated'}`}
                />
            </button>
            {!collapsed && (
                <div className="menu">
                    <p>Menu Item 1</p>
                    <p>Menu Item 2</p>
                    <p>Menu Item 3</p>
                </div>
            )}
        </div>
    )
}

Collapse.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Collapse
