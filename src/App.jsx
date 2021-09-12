import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import PopularBattle from './components/PopularBattle';
import Popular from './components/Popular';
import Weekly from './components/Weekly';
import WeeklyBattle from './components/WeeklyBattle';
import Favorites from './components/Favorites';
import Error404 from './components/Error404';


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/weekly' exact component={Weekly} />
            <Route path='/weekly-battle' exact component={WeeklyBattle} />
            <Route path='/popular' exact component={Popular} />
            <Route path='/popular-battle' exact component={PopularBattle} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/*' component={Error404} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
