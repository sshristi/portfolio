import React, { Component, useState } from 'react';
import { Spring, config, animated } from 'react-spring/renderprops';
import { Link, animateScroll as scroll } from 'react-scroll';
// import { Transition, animated } from 'react-spring/renderprops';
import Education from './cards/edu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';
import Workex from './cards/workex';
import Slide1 from './cards/slide1';
import Slide2 from './cards/slide2';

class Part1 extends Component {

    // componentDidMount() {
    //     window.scrollTo(0, 500);
    // }

    render() {
        return (
            <Spring
                from={{ opacity: 1 }}
                to={{ opacity: 1 }}
                config={{
                    mass: 1,
                    duration: 1000,
                    delay: 100
                    // tension: 220,
                    // friction:100
                }}
            // config={{ delay: 0, duration: 500 }}
            >
                {
                    props => (
                        <div style={props}>
                            <div className='p1'>
                                <div className='row'>
                                    {/* <h1 className='col-md-10 offset-1' >Full-Stack Cloud Native Web Developer</h1> */}
                                    {/* <h5 className='col-md-10 offset-1'>Experienced System Engineer with a demonstrated history of working
                                    in the information technology and services industry. Skilled in Spring Boot,
                                    Oracle Database, Hibernate, Jenkins, and Java. Strong information technology
                                    professional with a Bachelor of Engineering focused in Information Technology
                                    </h5> */}
                                </div>
                                <div className='row p1background'>
                                    <div className='col-md-10 offset-1'>
                                        <Slide1 />
                                    </div>
                                </div>
                                <div className='row p1background'>
                                    <div className='col-md-10 offset-1'>
                                        <Slide2 />
                                    </div>
                                </div>
                                <div className='row p1background'>
                                    <div className='col-md-3 offset-1'>
                                        <Workex />
                                    </div>
                                    <div className='col-md-3 offset-2'>
                                        <Education />
                                    </div>
                                </div>

                                <p>Experienced System Engineer with a demonstrated history of working
                                in the information technology and services industry. Skilled in Spring Boot,
                                Oracle Database, Hibernate, Jenkins, and Java. Strong information technology
                                professional with a Bachelor of Engineering focused in Information Technology
                                from Lakshmi Narain College of Technology, Kalchuri Nagar, Raisen Road, Post
                                Klua, Bhopal-462021.</p>
                            </div>
                        </div>
                    )
                }
            </Spring>

        );
    }
}

export default Part1;
