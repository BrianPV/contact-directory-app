import React from "react";
import error from "../images/icons/error.png"
import "../sass/_c-missing.scss"

export default function Missing(){
    return(
        <div className="c-missing">
            <img src={error} alt="Error 404"/>
            <h2>¡Estamos trabajando en esta pagina, esperanos!</h2>
        </div>
    );
}