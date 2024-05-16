import logo from '../images/logo.png'

function Header() {
    return (
        <header>
            <img src={logo} className="logo"></img>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="/Home">ACCUEIL</a>
                    </li>
                    <li>
                        <a href="/about">A PROPOS</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
