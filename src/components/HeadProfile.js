import React from "react";
import "../sass/_c-head-profile.scss";

export default function HeadProfile(props){
    return(
        <div className="c-head-profile">
            <img src={props.srcImage} alt={props.namePerson}/>
            <div className="c-head-profile__information">
                <h3>{props.namePerson}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

HeadProfile.defaultProps = {
    srcImage: "https://via.placeholder.com/300x300",
    namePerson: "Name Person",
    description: "Lorem ipsum Lorem Ipsum Lorem Ipsum",
};