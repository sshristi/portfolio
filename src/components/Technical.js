import React, { Component } from 'react';
import Home from './Home';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/profile4.png';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Card, Nav, NavItem } from 'react-bootstrap';
class Technical extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className = "container-fluid">
                <img src={profile} style={{width: 400, height: 400, borderRadius: 400/ 2}}></img>
            </div>
            
        );
    }
}

export default Technical;