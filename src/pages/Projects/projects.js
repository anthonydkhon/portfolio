import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
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
            <Card>
                <CardImg src={pokeDexGo} alt="pokedexgo" />
                <CardBody>
                    <CardTitle tag="h5">
                        PokeDex Go!
                    </CardTitle>
                    <CardText> 
                        A web application that allows the user to view data of the original 151 Pokemon from the Pokemon GO video game franchise. 
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg src={lumioseCity} alt="lumiosecity" />
                <CardBody>
                    <CardTitle tag="h5">
                        Lumiose City
                    </CardTitle>
                    <CardText>
                        A social hub for anything Pokemon related where users are able to connect with each other from around the world. 
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg src={musicPlayer} alt="musicPlayer" />
                <CardBody>
                    <CardTitle tag="h5">
                        Music Player
                    </CardTitle>
                    <CardText>
                        Web based music player. 
                    </CardText>
                </CardBody>
            </Card>
        </div>
    </div>
    )
}

export default Projects;