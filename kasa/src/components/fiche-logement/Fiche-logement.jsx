import { useEffect, useState } from 'react'
import './Fiche-logement.scss'
import Header from '../header'
import Footer from '../footer'
import Carrousel from '../Carrousel'

export default function Fiche() {
    const [annonce, setAnnonce] = useState(null)

    useEffect(() => {
        fetch('/annonces.json')
            .then((response) => response.json())
            .then((data) =>
                setAnnonce(data.find((annonce) => annonce.id === 'c67ab8a7'))
            )
            .catch((error) => console.error('Error fetching data:', error))
    }, [])

    if (!annonce) {
        return <div>Loading...</div>
    }

    return (
        <div className="home-page">
            <Header />
            <div className="carousel-container">
                <Carrousel images={annonce.pictures} />
                <h2>{annonce.title}</h2>
            </div>
            <Footer />
        </div>
    )
}
