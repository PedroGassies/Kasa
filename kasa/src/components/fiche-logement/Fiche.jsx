import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Fiche.scss'
import Header from '../header'
import Footer from '../footer'
import Carrousel from '../Carrousel'
import Datas from '../datas'
import Collapse from '../Collapse'

export default function Fiche() {
    const { id } = useParams() // Use useParams to get the ID from the URL
    const [annonce, setAnnonce] = useState(null)

    useEffect(() => {
        fetch('/annonces.json')
            .then((response) => response.json())
            .then((data) => {
                const foundAnnonce = data.find((annonce) => annonce.id === id)
                setAnnonce(foundAnnonce)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [id]) // Include id in the dependency array

    if (annonce === null) {
        return <div>Loading...</div> // Show loading indicator while data is being fetched
    }

    return (
        <div className="fiche-page">
            <Header />
            <main>
                <div className="carousel-container">
                    <Carrousel
                        images={annonce.pictures}
                        showControls={annonce.pictures.length > 1}
                    />
                </div>
                <Datas />
                <Collapse text="Description" content={annonce.description} />
                <Collapse text="Equipements" content={annonce.equipments} />
            </main>
            <Footer />
        </div>
    )
}
