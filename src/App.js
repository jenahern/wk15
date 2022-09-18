import React, { Component } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HousesList } from './components/HousesList';


class App extends Component {
  render () {
    return(
      <div className='App'>
        <header>
          <h1 className="shadow">Create Your Sim Neighborhood</h1>
        </header>
        <main>
          <HousesList />
        </main>
      </div>
    )
  }
}

export default App;
 