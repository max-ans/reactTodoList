import React from "react";
import './index.scss';

class Header extends React.Component
{

    render() {
        return (
            <header className="app_header">
                <nav className="header_nav">
                    <ul className="nav_list">
                        <li className="list_item">Accueil</li>
                        <li className="list_item">Taches en cours</li>
                        <li className="list_item">Taches archivées</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;