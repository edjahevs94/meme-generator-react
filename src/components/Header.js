import React from "react"
import troll from "../images/icons8-trollface-96.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll} 
                className="header--image" alt="troll"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course-Project</h4>
        </header>
    )
}