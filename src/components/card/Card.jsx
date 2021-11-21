import React from "react";
import './Card.css';
import Noronha from '../img/noronha.jpg'
import Maldivas from '../img/maldivas.png'
import Bonito from '../img/bonito.jpg'

export default function Card(){
    return(
        <section className='galeria'>
            <div className='cardfoto'>
                <img src={Noronha} alt="" />
                <h4 className='cardTitulo'>Noronha</h4>
                <p className='parCard'>Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil</p>
                <p className='parLink'><a id='link' href="#">VER</a></p>
            </div>
            <div className='cardfoto'>
                <img src={Maldivas} alt="" />
                <h4 className='cardTitulo'>Maldivas</h4>
                <p className='parCard'>As Maldivas são uma nação tropical no Oceano Índico composta por 26 atóis em formato de anel. </p>
                <p className='parLink'><a id='link' href="#">VER</a></p>
            </div>
            <div className='cardfoto'>
                <img src={Bonito} alt="" />
                <h4 className='cardTitulo'>Bonito</h4>
                <p className='parCard'>Bonito é um município brasileiro do Estado de Pernambuco. Conhecido por suas cachoeiras e paisagens naturais.</p>
                <p className='parLink'><a id='link' href="">VER</a></p>
            </div>
         </section>
    );
}