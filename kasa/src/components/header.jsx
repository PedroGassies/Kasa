import logo from '../images/logo.png'

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="Logo"></img>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a className="accueil" href="/Home">
                            ACCUEIL
                        </a>
                    </li>
                    <li>
                        <a className="about" href="/about">
                            A PROPOS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
