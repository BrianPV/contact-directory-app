import React, {useRef} from "react";
import menu from "../images/icons/hamburger.png";
import NavItem from "./NavItem";
import dataLinkName from "../helpers/linksName.json";
import "../sass/_c-header.scss";

export default function Header(){
    let referenceMenu = useRef();
    let referenceMenuBtn = useRef();
    //let referenceCloseMenu = useRef();

    const handleMenu = (e) => {
        e.preventDefault();
        if(referenceMenu.current.className !== "c-header__menu isActive"){
            referenceMenu.current.className += " isActive";
        }else{
            referenceMenu.current.className = "c-header__menu";
        }
    }

    const handleCloseMenu = (e) => {
        e.preventDefault(e);
        referenceMenu.current.className = "c-header__menu";
    }

    return(
        <header className="c-header">
            <a href="#!" className="c-header__menu-link" onClick={handleMenu} ref={referenceMenuBtn}>
                <img src={menu} alt="Menu"/>
            </a>
            <nav ref={referenceMenu} className="c-header__menu">
                <div className="c-header__data-user">
                    <img src="https://via.placeholder.com/50x50" alt="Menu"/>
                    <div className="c-header__data-user-information">
                        <strong>Nombre del usuario</strong>
                        <p>Online</p>
                    </div>
                    <span  onClick={handleCloseMenu}></span>
                </div>
                <div className="c-header__menu-list">
                    <ul>
                        {
                            dataLinkName.linksName !== 0 ?
                                dataLinkName.linksName.map( (response) => ( 
                                    <NavItem 
                                        key={response.id} 
                                        icon={response.icon} 
                                        nameLink={response.name} 
                                        route={response.route} /> ) )
                            : 
                                <p> Cargando... </p>
                            
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}