import React from 'react';
import pokeDexGo from'../Images/pokedexgo.PNG';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const PokeDexGo = () => {
    return (
        <>
            
            <div className="pokedex-project">
                <img className="pokedex-img" src={pokeDexGo} alt="pokedexgo-img" />
            </div>
            <div className="pokedex-content">
                <h1>PokeDex Go!</h1>
                <p>PokeDex Go is a web application that 
                    allows users to search up any of the 
                    original 151 Pokemon to acquire data. 
                    This project showcases basic HTML, CSS, 
                    Bootstrap/Reactstrap  and React for 
                    front-end design. Use of JavaScript 
                    fetch function to call upon the public
                    “Pokemon Go” API to map and display 
                    all available information on the user’s
                    input of search, filter by type and simple 
                    click of an individual Pokemon. A 
                    containerized version of the application was 
                    deployed to heroku.</p>
            </div>
            <div className="pokedex-btns">
                <Link to="https://github.com/anthonydkhon/pokeDex" target="_blank">
            <Button className="pokedex-git-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}>
                    GitHub
                    </Button>
            </Link>
            <Link to="https://poke-dex-go.herokuapp.com/" target="_blank">
            <Button className="pokedex-heroku-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}>
                    Deployed Site
                </Button>
                </Link>
            </div>
        </>
    )
}

export default PokeDexGo;