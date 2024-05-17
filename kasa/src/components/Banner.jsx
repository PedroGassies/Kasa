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
        <div className="banner" style={bannerStyle}>
            <div className="banner-content">
                <h1>
                    {part1},<br />
                    {part2}
                </h1>{' '}
                {/* Rendre les parties sur des lignes séparées */}
            </div>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
}
export default Banner
