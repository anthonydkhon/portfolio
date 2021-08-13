import React from 'react';
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';

const Skills = () => {
    return (
        <div className="Skills">
            <div className="skill-title">   
                <h2>Skills</h2>
            </div>
            <div className="unordered-skills-list">
                <ul className="skill-list-1">
                    <li>
                        <AiFillHtml5 /> HTML
                    </li>
                    <li>
                        <DiCss3 /> CSS
                    </li>
                    <li>
                        <BsFillBootstrapFill /> BootStrap / ReactStrap
                    </li>
                    <li>
                    <IoLogoJavascript /> JavaScript
                    </li>
                </ul>
                <ul className="skill-list-2">
                    <li>
                        <FaReact /> React.js
                    </li>
                    <li>
                        <FaNodeJs /> Node.js
                    </li>
                    <li>
                    <FaNodeJs /> Express.js
                    </li>
                    <li>
                        <AiOutlineConsoleSql /> SQL / MySQL
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default Skills;
