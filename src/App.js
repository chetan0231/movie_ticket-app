import SeatSelection from "./components/SeatSelection";
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import Pay from "./components/Pay";
import React from "react";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/pay" component={Pay}/>
          <Route path="/book" component={SeatSelection}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
