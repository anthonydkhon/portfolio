import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    NavLink
} from 'reactstrap';
import pokeDexGo from'../Images/pokedexgo.PNG';
import lumioseCity from '../Images/LumioseCity.PNG';
import musicPlayer from '../Images/musicplayer.PNG'

const ProjectPage = () => {
    return (
        <div className="Projects-page">
            <div className="projects-title">
                <h1>Projects</h1>
                <p>Thank you for checking out my projects.
                    Some may be a work in progress. Click on
                    a project to view more info.
                </p>
            </div>
        <div className="project-cards">
        <NavLink href="/pokedexgo" exact={true}>
            <Card>
                <CardImg src={pokeDexGo} alt="pokedexgo" />
                <CardBody style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`}}>
                    <CardTitle tag="h5" style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}>
                        PokeDex Go!
                    </CardTitle>
                    <CardText style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}> 
                        A web application that allows the user to view data of the original 151 Pokemon from the Pokemon GO video game franchise. 
                    </CardText>
                </CardBody>
            </Card>
            </NavLink>
            <NavLink href="/lumiosecity">
            <Card>
                <CardImg src={lumioseCity} alt="lumiosecity" />
                <CardBody style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`}}>
                    <CardTitle tag="h5" style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}>
                        Lumiose City
                    </CardTitle>
                    <CardText style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}>
                        A social hub for anything Pokemon related where users are able to connect with each other from around the world. 
                    </CardText>
                </CardBody>
            </Card>
            </NavLink>
            <NavLink href="/musicplayer">
            <Card>
                <CardImg src={musicPlayer} alt="musicPlayer" />
                <CardBody style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`}}>
                    <CardTitle tag="h5" style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}>
                        Music Player
                    </CardTitle>
                    <CardText style={{ backgroundColor:`rgb(${255}, ${255}, ${255})`, color:`rgb(${0}, ${0}, ${0})` }}>
                        Web based music player. 
                    </CardText>
                </CardBody>
            </Card>
            </NavLink>
        </div>
    </div>
    )
}

export default ProjectPage;