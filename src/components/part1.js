import React, { Component, useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Transition, animated } from 'react-spring/renderprops';
import Education from './cards/edu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';
import Workex from './cards/workex';
import TrailsExample from './cards/slide';
class Part1 extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 200, duration: 1000 }}
            >
                {
                    props => (
                        <div style={props}>
                            <div className='p1'>
                                <h1>Full-Stack Cloud Native Web Developer</h1>
                                <p>Experienced System Engineer with a demonstrated history of working
                                in the information technology and services industry. Skilled in Spring Boot,
                                Oracle Database, Hibernate, Jenkins, and Java. Strong information technology
                                professional with a Bachelor of Engineering focused in Information Technology
                                from Lakshmi Narain College of Technology, Kalchuri Nagar, Raisen Road, Post
                                Klua, Bhopal-462021.</p>

                                <div className='row'>
                                    <div className='col-md-3 offset-1'>
                                        <Workex />
                                    </div>
                                    <div className='col-md-3 offset-2'>
                                        <Education />
                                    </div>
                                </div>
                                <div className='row'>
                                    <TrailsExample />
                                </div>

                            </div>
                        </div>
                    )
                }
            </Spring>

        );
    }
}

export default Part1;
