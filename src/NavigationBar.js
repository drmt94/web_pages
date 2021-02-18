import {NavLink} from "react-router-dom";

function NavigationBar(){
    return(
        <div>
            <NavLink to={"/"} activeStyle={{color: "blue"}}>Main</NavLink>/&nbsp;
            <NavLink to={"/QuadraticCalc"} activeStyle={{color: "blue"}}>Calc</NavLink>/&nbsp;
            <NavLink to={"/TriangleS"} activeStyle={{color: "blue"}}>TriangleS</NavLink>/&nbsp;
            <NavLink to={"/Pythagoras"} activeStyle={{color: "blue"}}>Pythagoras</NavLink>/
            <NavLink to={"/Calci"} activeStyle={{color: "blue"}}>Calci</NavLink>/

        </div>
    )
}
export default NavigationBar;