import React from 'react'

function Button({ setAge }) {

    function kgPlayers() {
        setAge("Kyrgyzstan")
    }

    function abroadPlayers() {
        setAge("Abroad")
    }

    return ( 
        <div >
            <button onClick={kgPlayers}>KG</button>
            <button onClick={abroadPlayers}>Abroad</button>
        </div>
    )
};

export default Button