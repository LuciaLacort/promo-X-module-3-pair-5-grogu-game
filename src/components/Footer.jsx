import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <>
        <footer className="footer">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">A jugar </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructions">¿Como se juega?</NavLink>
                    </li>
                    <li>
                        <NavLink to="/options">Mas opciones</NavLink>
                    </li>
                    {/*<li class="footer__menu-item">
                        <a class="footer__menu-link" href="#/">A jugar</a>
                    </li>
                    <li class="footer__menu-item">
                        <a class="footer__menu-link active" href="#/instructions"
                          >¿Cómo se juega?</a
                          >
                    </li>
                    <li class="footer__menu-item">
                          <a class="footer__menu-link" href="#/options">Más opciones</a>
                    </li>*/}
                </ul>
            </nav>
            <small className="footer__copy">© Adalab</small>
        </footer>
    </>
  )
}

export default Footer