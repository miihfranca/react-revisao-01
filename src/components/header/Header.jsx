import React from "react";
import './Header.css'

export default function Header(){
    return(
        <div>
            <header>
                <nav className='principal'>
                    <h3 className='menu'><a href="#">Home</a></h3>
                    <h3 className='menu'><a href="#">Perfil</a></h3>
                </nav>
            </header>
        </div>
    );
}