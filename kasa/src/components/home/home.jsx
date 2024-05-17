import Header from '../header'
import Footer from '../footer'
import Banner from '../Banner'
import './home.scss'
//import data from '../../annonces.json'
export default function Home() {
    return (
        <div className="home-page">
            <Header />
            <Banner
                title="Chez vous, partout et ailleurs"
                backgroundImage="/images/imgBanner.png"
            />
            <Footer />
        </div>
    )
}
