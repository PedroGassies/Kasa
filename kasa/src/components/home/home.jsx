import { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import Banner from '../Banner'
import Card from '../Card'
import './home.scss'

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/annonces.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error))
    }, [])
    return (
        <div className="home-page">
            <Header />
            <main>
                <Banner
                    title="Chez vous, partout et ailleurs"
                    backgroundImage="/images/imgBanner.png"
                />
                <div className="">
                    {data.map((annonce) => (
                        <Card
                            key={annonce.id}
                            id={annonce.id}
                            title={annonce.title}
                            cover={annonce.cover}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
