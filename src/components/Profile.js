import React from "react";
import { useLocation  } from "react-router-dom";
import generalData from "../helpers/data.json";
import DataCard from "./DataCard";
import HeadProfile from "./HeadProfile";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function useData(id){
    return generalData[id];
}


export default function Profile(){
    let query = useQuery();
    let idData = query.get("id");
    let data = useData(idData);
    console.log(data);
    return(
        <div style={{margin: "16px"}}>
            <h2>Profile component</h2>
            <HeadProfile srcImage={data.imageUser} namePerson={data.fullName} description={data.shortDescription} />
            {
                data.sections.map( (element) => ( <DataCard key={element.id} title={element.Titulo} subTitle={element.subtitle} elements={element}/> ))
            }
        </div>
    );
}