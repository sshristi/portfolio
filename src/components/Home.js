import React, { Component } from 'react';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Part1 from './part1';
import { Transition, animated } from 'react-spring/renderprops';
import { animateScroll as scroll} from 'react-scroll';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showpt1: false,
        };
    }

    part1Toggle = e => {scroll.scrollToBottom(); this.setState({ showpt1: !this.state.showpt1 });}
    render() {
        return (
            <div>
                <header className="masthead book-page" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">shristi singh</h1>
                            <h5 className="text-dark-50 mx-auto mt-2 mb-5"><a onClick={this.part1Toggle}>Full-Stack Cloud-Native Developer</a> | Blogger | Painter | Photographer</h5>
                            
                            {/* <Link
                                activeClass={Part1}
                                to="fscnd"
                                spy ={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    <a onClick={this.part1Toggle}>
                                    <h5 className="text-dark-50 mx-auto mt-2 mb-5">
                                    Full-Stack Cloud-Native Developer | Blogger | Painter | Photographer
                                    </h5></a>
                            </Link> */}
                            {/* </a> */}

                            <h4 className="text-info mx-auto mt-2 mb-5 opacity-4">
                                All that is gold does not glitter, Not all those who wander are
                                lost.
                            </h4>
                            {/* <h2 className="text-white-50 mx-auto d-inline-flex mt-2 mb-5 opacity-4">PORTFOLIO</h2> */}
                            <div className="container row d-inline-flex align-items-center">
                                <div className="card col-3 offset-1 d-inline-flex opacity-0h5 shadow">
                                    <b className="card-header d-inline-flex mx-auto text-uppercase">Technical</b>
                                    <div className="card-body">
                                        {/* <p className="card-text">Skills | Projects | Employment | Educational Background | Future Goals | Hobbies</p> */}
                                        <Link to='/tech'><button type='submit' className="btn mx-auto">Explore</button></Link>
                                    </div>
                                    {/* <h5 className = "text-white-50 text-uppercase">Technical</h5> */}
                                </div>
                                <div className="card col-3 offset-1 opacity-0h5 shadow">
                                    <b className="card-header mx-auto text-uppercase">Blogging</b>
                                    <div className="card-body">
                                        {/* <p className="card-text">Skills | Projects | Employment | Educational Background | Future Goals | Hobbies</p> */}
                                        <Link to='/blog'><button type='submit' className="btn mx-auto">Explore</button></Link>
                                    </div>
                                </div>
                                {/* <h5 className="text-white-50 text-uppercase">Blogging</h5> */}
                                <div className="card col-3 offset-1 opacity-0h5 shadow">
                                    <b className="card-header mx-auto text-uppercase">Photography</b>
                                    <div className="card-body">
                                        {/* <p className="card-text font-smaller">Skills | Projects | Employment | Educational Background | Future Goals | Hobbies</p> */}
                                        <Link to='/click'><button type='submit' className="btn mx-auto">Explore</button></Link>
                                    </div>
                                    {/* <h5 className="text-white-50 text-uppercase">Photography</h5> */}
                                </div>
                                {/* <input
                            type="text"
                            className="form-control-lg flex-fill"
                            name="continent"
                            value={this.state.continent}
                            onKeyPress={e => {
                                this.getPackages(e);
                            }}
                            onChange={this.handleChange}
                            id="continent"
                            placeholder="Type what you want to know about me?"
                            />
                            &nbsp;
                            <button
                            className="btn btn-primary"
                            value={"SearchButton"}
                            onClick={this.getPackages}
                            >
                            Search
                            </button> */}
                            </div>
                        </div>
                    </div>
                </header>
                <section id = 'fscnd'>
                <Transition
                    native
                    items={this.state.showpt1}
                    from={{ opacity: 1, marginRight:-500, marginLeft: 500}}
                    enter={{ opacity: 1, marginRight: 0, marginLeft:0 }}
                    leave={{ opacity: 0}}
                    config ={{
                        // duration:1000,
                        // velocity:300,
                        // tension: 50
                        // delay: 100,
                        mass:5,
                        tension:300,
                        friction:50,
                    }}
                >
                    {show => show && (props => (
                        <div className='row'>
                            <animated.div style={props}>
                                <Part1 />
                            </animated.div>
                        </div>

                    ))
                    }
                </Transition>
                </section>
            </div>






        );
    }
}

export default Home;