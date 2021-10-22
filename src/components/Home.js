import React from "react";
import DirectoryListItem from "./DirectoryListItem";
import Header from "./Header";
import "../sass/_c-home.scss";

export default function Home(){
    return(
        <div className="c-home">
            <Header />
            <div className="c-home__directory">
                <h2>Directory</h2>
                <form>
                    <input type="text"/>
                </form>
            </div>
            <div className="c-home__directory-list">
                <ul>
                    <DirectoryListItem />
                </ul>
            </div>
        </div>
    );
}