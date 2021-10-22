import React, { useState, useEffect, useRef } from "react";
import "../sass/_c-data-card.scss";

export default function DataCard(props){
    const [sections, setsections] = useState([]);
    const [values, setValues] = useState([]);
    let referenceCollapse = useRef();
    let referenceCollapseInformation = useRef();


    useEffect( () => {
        setsections(Object.keys(props.elements));
        setValues(Object.values(props.elements));
    }, []);
    
    const handleCollapse = (e) => {
        e.preventDefault();

        if(referenceCollapse.current.className !== "c-data-card__title isActive"){
            referenceCollapse.current.className += " isActive";
            referenceCollapseInformation.current.className += " isActive";
        }else{
            referenceCollapse.current.className = "c-data-card__title";
            referenceCollapseInformation.current.className = "c-data-card__information";
        }

    }

    return(
        <div className="c-data-card" >
            <div className="c-data-card__title" ref={referenceCollapse} onClick={handleCollapse}>
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>
                <span></span>
            </div>
            <div className="c-data-card__information" ref={referenceCollapseInformation}>
                {
                    sections.map( (elementsSection, index) => {
                        if(elementsSection !== "id" & elementsSection !== "Titulo" & elementsSection !== "subtitle"){
                            return(
                                <div key={index} className="c-data-card__information-item">
                                    <strong> {elementsSection} </strong>
                                    <p>{values[index]}</p>
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}