import React from "react";
import { Link } from "react-router-dom";
import "../sass/_c-nav-item.scss"

export default function NavItem(props){
    return (
        <li className="c-nav-item">
            <Link to={props.route}href="#!" className="c-nav-item__link">
                <img src={props.icon} alt={props.nameLink}/>
                <p>{props.nameLink} </p>
            </Link> 
        </li>
    );
        
}

NavItem.defaultProps = {
    route: "/"
};