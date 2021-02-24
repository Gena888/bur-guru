import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Route, withRouter, BrowserRouter, Redirect, Switch, HashRouter } from 'react-router-dom';
import { Welcome } from './components/welcome/welcome';
import { Production } from './components/production/production';
import { PriseList } from './components/production/prise-list/prise-list';
import { Procecess } from './components/process/process';
import { SandBlasting } from './components/process/sandblasting/sandblasting';
import { Delivery } from './components/delivery/delivery';
import { Testing } from './components/process/testing/testing';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/Welcome'} />} />
          <Route path='/Welcome' render={() => <Welcome />} />
          <Route path='/Production' render={() => <Production />} />
          <Route path='/PriseList' render={() => <PriseList />} />
          <Route path='/Procecess' render={() => <Procecess/>} />
          <Route path='/SandBlasting' render={() => <SandBlasting />} />
          <Route path='/Testing' render={() => <Testing />} />
          <Route path='/Delivery' render={() => <Delivery />} />
          <Route exact path='*' render={() => <div>404 not found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
