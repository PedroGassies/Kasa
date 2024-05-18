import { useRouteError } from 'react-router-dom'
import './error-page.scss'
import Header from '../header'
import Footer from '../footer'

export default function ErrorPage() {
    const error = useRouteError()

    const errorMessage = error
        ? error.statusText || error.message
        : "La page que vous demandez n'existe pas."

    return (
        <div>
            <Header />
            <div id="error-page">
                <h1>404</h1>
                <p>Oups! {errorMessage}</p>
                <a href="/Home">Retourner sur la page d'accueil</a>
            </div>
            <Footer />
        </div>
    )
}
