import logo from '/images/logo.png'

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="Logo"></img>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a className="accueil" href="/Home">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a className="about" href="/a-propos">
                            A Propos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
