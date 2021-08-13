import React from 'react';
import lumioseCity from'../Images/LumioseCity.PNG';
import { Button, NavLink } from 'reactstrap';

const LumioseCity = () => {
    return (
        <>
            
            <div className="lumiose-project">
                <img className="lumiose-img" src={lumioseCity} alt="lumiose-img" />
            </div>
            <div className="lumiose-content">
                <h1>Lumiose City</h1>
                    <p>Lumiose City, for those who are unfamiliar 
                        with the Pokemon franchise, is the largest 
                        city with the largest population in the 
                        Pokemon Universe. It is only fitting to name 
                        this project after the city, as this is a 
                        large scale web application that will be a 
                        social hub for fans of the Pokemon franchise. 
                        User's called "trainers" will be able to 
                        come together and connect over their certain 
                        niche in the Pokemon universe. This projects 
                        is a work in progress with partial 
                        completeion of the Pokemon TCG price tracker
                        completed. React and Bootstrap/Reactstrap 
                        was utilized to complete the front-end design 
                        of the landing page and TCG portion of the 
                        application. JavaScript fetch function is 
                        used to call the private API to map every 
                        Pokemon TCG set up to date and every card 
                        within each set. Use of React Routers are 
                        used to display available pricing 
                        information for each individual card upon 
                        the user's click on a desired Pokemon card. 
                        Next features to be implemented will be user 
                        authentication and use of web sockets to 
                        create user chat-room capabilities. Future 
                        updates will be availble and you are able to 
                        check the code at my GitHub availble down 
                        below.
                    </p>
            </div>
            <div className="lumiose-btns">
                <NavLink href="https://github.com/anthonydkhon/lumioseCity" target="_blank">
            <Button className="lumiose-git-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}
            >GitHub</Button>
            </NavLink>
            </div>
        </>
    )
}

export default LumioseCity;