import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    NavLink,
    Col
} from 'reactstrap';
import pokeDexGo from'../Images/pokedexgo.PNG';
import lumioseCity from '../Images/LumioseCity.PNG';
import musicPlayer from '../Images/musicplayer.PNG'

const Projects = () => {
    return (
        <div className="Projects">
            <div className="projects-title">
                <h2>Projects</h2>
            </div>
            <div className="project-cards">
            <Col sm="12" md="12" lg="4">
            <NavLink href="/projects">
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
            </Col>
            <Col sm="12" md="12" lg="4">
            <NavLink href="/projects">
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
            </Col>
            <Col sm="12" md="12" lg="4">
            <NavLink href="/projects">
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
            </Col>
        </div>
    </div>
    )
}

export default Projects;