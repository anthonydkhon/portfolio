import React from 'react';
import musicPlayer from'../Images/musicplayer.PNG';
import { Button, NavLink } from 'reactstrap';

const MusicPlayer = () => {
    return (
        <>
            
            <div className="music-project">
                <img className="music-img" src={musicPlayer} alt="musicplayer-img" />
            </div>
            <div className="music-content">
                <h1>Music Player</h1>
                <p>
                    This music player was one of my first coding 
                    projects that took a lot of videos and 
                    tutorials. Just a simple web based music player 
                    that currently stores personal favorite OST 
                    from different Animes. This app utilizes HTML 
                    and CSS for front end development and styling. 
                    Vanilla JavaScript was used to create the play, 
                    skip, and pause functions with DOM manipulation.
                    Animations were created through animation 
                    functions in CSS. Feel free to visit the GitHub
                    link to view the code.

                </p>
            </div>
            <div className="music-btns">
                <NavLink href="https://github.com/anthonydkhon/musicPlayer" target="_blank">
            <Button className="music-git-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}>
                    GitHub
                    </Button>
            </NavLink>
            </div>
        </>
    )
}

export default MusicPlayer;