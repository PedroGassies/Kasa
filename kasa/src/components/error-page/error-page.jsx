import './error-page.scss'
import Header from '../header'
import Footer from '../footer'

export default function ErrorPage() {
    const errorMessage = "La page que vous demandez n'existe pas."

    return (
        <div>
            <Header />
            <main id="error-page">
                <h1>404</h1>
                <p>Oups! {errorMessage}</p>
                <a href="/Home">Retourner sur la page d accueil</a>
            </main>
            <Footer />
        </div>
    )
}
