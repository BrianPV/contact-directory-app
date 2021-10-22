import React from "react";
import { Link } from "react-router-dom";

export default function DirectoryListItem(props){
    return(
        <li className="c-directory-item">
            <Link to="/profile" className="c-directory-item__link">
                <img src={props.image} alt={props.namePerson}/>
                <h3>{props.namePerson}</h3>
                <p>{props.profesion}</p>
            </Link>
            <a href={'mailto:'+props.email}>
                {props.email}
            </a>
        </li>
    );
}

DirectoryListItem.defaultProps = {
    image: "",
    namePerson: "Name Person",
    profesion: "Professional career",
    email: "testing@testing.com"
};