import React from "react";
import { Link } from "react-router-dom";
import "../sass/_c-directory-item.scss";

export default function DirectoryListItem(props){
    return(
        <li className="c-directory-item">
            <Link to="/profile" className="c-directory-item__link">
                <img src={props.image} alt={props.namePerson}/>
                <h3>{props.namePerson}</h3>
                <p>{props.profesion}</p>
                <em>{props.description}</em>
            </Link>
            <a href={'mailto:'+props.email} className="c-directory-item__link2">
                {props.email}
            </a>
        </li>
    );
}

DirectoryListItem.defaultProps = {
    image: "https://via.placeholder.com/300x300",
    namePerson: "Name Person",
    description: "Lorem ipsum Lorem Ipsum Lorem Ipsum",
    profesion: "Professional career",
    email: "testing@testing.com"
};