import * as React from "react";
import TriangleS from "./TriangleS";
import Pythagoras from "./Pythagoras";
import QuadraticEquationCalc from "./QuadraticEquationCalc";

class Calci extends React.Component{
    render() {
        return(
            <>
               <TriangleS/>
               <Pythagoras/>
               <QuadraticEquationCalc/>
            </>
        )
    }

}
export default Calci;