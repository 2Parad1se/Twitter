import React from "react";
import './app-header.css';

const AppHeader = ({posts, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1> Artem Mikhaylov </h1>
            <h2> {posts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader ;