import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // Importez useParams
import './datas.scss'
import activeStar from '../assets/activeStar.png' // Assurez-vous de mettre le bon chemin
import inactiveStar from '../assets/inactiveStar.png' // Assurez-vous de mettre le bon chemin

function Datas() {
    const { id } = useParams()
    const [annonce, setAnnonce] = useState(null)

    useEffect(() => {
        fetch('/annonces.json')
            .then((response) => response.json())
            .then((data) => {
                const foundAnnonce = data.find((annonce) => annonce.id === id)
                setAnnonce(foundAnnonce)
            })
            .catch((error) => console.error('Error fetching data:', error))
    }, [id])

    const renderStars = (rating) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div
                    key={i}
                    className="star"
                    style={{
                        backgroundImage: `url(${
                            i <= rating ? activeStar : inactiveStar
                        })`,
                    }}
                />
            )
        }
        return stars
    }
    return (
        <div className="loading-datas">
            {annonce ? (
                <div className="donnees">
                    <div className="titres">
                        <h2>{annonce.title}</h2>
                        <h3>{annonce.location}</h3>
                        <div className="tag">
                            {annonce.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="note">
                        <div className="rating">
                            {renderStars(annonce.rating)}
                        </div>

                        <div className="host">
                            <span className="host-name">
                                {annonce.host.name}
                            </span>
                            <img
                                className="avatar"
                                src={annonce.host.picture}
                                alt={annonce.host.name}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Datas
