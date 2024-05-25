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
                    <Collapse
                        text="Fiabilité"
                        content="Les annonces postées par Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Collapse
                        text="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapse
                        text="Service"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapse
                        text="Sécurité"
                        content="La sécurité est la priorité de Kaza. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}
