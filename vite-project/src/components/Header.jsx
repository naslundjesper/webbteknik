import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                {/* Logo Sektion */}
                <div className="logo">
                    <img src="src/assets/logo_white.png" alt="Mala Skogstjänst" />
                </div>

                {/* Navigation */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active">Varför oss?</NavLink>
                        </li>
                        <li>
                            <NavLink to="/butik" activeClassName="active">Butik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tjanster" activeClassName="active">Tjänster</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Hamburgermeny för mobila enheter */}
                <div className="hamburger-menu" id="hamburger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
        );
    }
}

export default Header;
