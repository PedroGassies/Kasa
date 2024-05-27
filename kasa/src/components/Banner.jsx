import './Banner.scss'
import PropTypes from 'prop-types'

function Banner({ title, backgroundImage }) {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    // Diviser le titre en deux parties après la virgule
    const [part1, part2] = title.split(',')

    return (
        <div>
            <div className="banner" style={bannerStyle}></div>
            <div className="banner-content">
                <h1 className="banner-title">
                    {part1}
                    <span className="comma">,</span>
                    <span className="part2">{part2}</span>
                </h1>
            </div>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
}
export default Banner
