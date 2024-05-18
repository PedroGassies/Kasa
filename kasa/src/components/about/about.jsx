import './about.scss'
import Header from '../header'
import Footer from '../footer'
import Banner from '../Banner'
import Collapse from '../Collapse'
export default function About() {
    return (
        <div className="about-page">
            <Header />
            <main>
                <Banner title="" backgroundImage="/images/ImgBannerAbout.png" />
                <div className="collapse">
                    <Collapse text="Fiabilité" />
                    <Collapse text="Respect" />
                    <Collapse text="Service" />
                    <Collapse text="Sécurité" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
