import React, {useState, useEffect} from "react";
import DirectoryListItem from "./DirectoryListItem";
import generalData from "../helpers/data.json";
import "../sass/_c-home.scss";

export default function Home(){
    const [form, setForm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    
    const handleChange = event => {
        setForm(event.target.value);
    };

    useEffect(() => {
        const results = generalData.filter( elements =>
            //person.toLowerCase().includes(form)
            //console.log(elements.fullName.includes(form))
            elements.fullName.includes(form)
        );
        setSearchResults(results);
    }, [form]);


    return(
        <div className="c-home">
            <div className="c-home__directory">
                <h2>Directory</h2>
                <form >
                    <label>Escribe lo que deseas buscar</label>;
                    <input 
                        type="text" 
                        id="busqueda"
                        name="busqueda" 
                        value={form}
                        onChange={ handleChange }
                    />
                    <input 
                        type="submit" 
                    />
                </form>
            </div>
            <div className="c-home__directory-list">
                <ul>
                    {
                        searchResults.map(elements => (
                            <DirectoryListItem 
                                key={elements.id}
                                idData={elements.id}
                                image={elements.imageUser}
                                namePerson={elements.fullName}
                                profesion={elements.Trabajo}
                                email={elements.email}
                            />
                        ))
                    
                    }
                </ul>
            </div>
        </div>
    );
}