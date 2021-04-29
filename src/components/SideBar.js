
import React , {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Login from './Login'
import User from './User'


export default class SideBar extends Component {
    render(){

        return <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">JobsHome</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                        <li className="nav-item">
                        <a> <Link to="/profil">voir les profils</Link></a>
                    </li>
                        {/* <li class="nav-item">
                            <a> <Link to="/connect">sign in</Link> </a>
                        </li> 
                        <li class="nav-item">
                            <a> <Link to="/">sign out</Link></a>
                        </li>        */}
                </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/connect">
                    <Login />
                </Route>
                <Route exact path="/profil">
                    <User />
                </Route>
            </Switch>
        </Router> 
    }
}

