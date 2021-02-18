import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import MainPage from "./MainPage";
import NavigationBar from "./NavigationBar";
import PageNotFound from "./PageNotFound";
import QuadraticEquationCalc from "./QuadraticEquationCalc";
import TriangleS from "./TriangleS";
import Pythagoras from "./Pythagoras";
import * as React from "react";
import Calci from "./Calci";
export const  history = createHistory();
class App extends React.Component{
  render() {


    return (

        <Router history={history}>
          <NavigationBar/>
          <Switch>
            <Route path={"/"} component= {MainPage} exact={true}  />
            <Route path={"/QuadraticCalc"} component= {QuadraticEquationCalc} exact={true}/>
            <Route path={"/TriangleS"} component= {TriangleS} exact={true}/>
            <Route path={"/Pythagoras"} component= {Pythagoras} exact={true}/>
            <Route path={"/Calci"} component= {Calci} exact={true}/>
            <Route component={PageNotFound} exact={true}/>
          </Switch>
        </Router>

    );
  }
}
export default App;
