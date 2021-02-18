import * as React from "react";
import xPow from "./xp.jpg"
class QuadraticEquationCalc extends React.Component{

    state={
        a: "",
        b: "",
        c: "",
        result1: 0,
        result2: 0,
        click : 0
    }
    onAchange = (event) => {
        this.setState({
            a: event.target.value,
        })
        console.log(this.state.a)
    }
    onBchange = (event) => {
        this.setState({
            b: event.target.value,
        })
        console.log(this.state.b)
    }
    onCchange = (event) => {
        this.setState({
            c: event.target.value,
        })
        console.log(this.state.c)
    }
    calc = ()=>{

        let insideSqrt = (Math.pow(this.state.b,2)) - ((4)*(this.state.a)*(this.state.c))
        console.log(insideSqrt)
        if (insideSqrt<0)
        {
            this.setState({
                result1: null,
                result2: null
            })
        }
        else {
            this.setState({

                result1: ((-1 * (this.state.b)) + Math.sqrt(insideSqrt)) / (2 * (this.state.a)),
                result2: ((-1 * (this.state.b)) - Math.sqrt(insideSqrt)) / (2 * (this.state.a)),
                click: this.state.click + 1
            })
        }
    }
    reset = ()=>
    {
        this.setState({
            a: "",
            b: "",
            c: "",
            result1: 0,
            result2: 0,
            click : 0
        })
    }

    render() {
        return(
            <div>
                <h2>ax&#178;+bX+c</h2>
                <h3>enter a,b,c and calculate them</h3>
                <input value={this.state.a} onChange={this.onAchange} placeholder={"a=?"}/>
                <br/>
                <input value={this.state.b} onChange={this.onBchange} placeholder={"b=?"}/>
                <br/>
                <input value={this.state.c} onChange={this.onCchange} placeholder={"c=?"}/>
                <br/>
                <div>

                    <h3>{this.state.a != 1 &&
                    this.state.a}x&#178;
                        {this.state.b>=0 &&
                        <span> + </span>}
                        {this.state.b !=1 &&
                        this.state.b}x
                        {this.state.c>=0 &&
                        <span>  + </span>}
                        {this.state.c} = 0</h3>
                </div>

                <button onClick={this.calc}>CALC</button>&nbsp;
                <button onClick={this.reset}>Reset</button>
                <div>
                    {
                        this.state.click > 0 &&
                        <h2>x1 = {this.state.result1} <br/>
                            x2 = {this.state.result2}
                        </h2>
                    }
                </div>
                <div>
                    {
                        this.state.result1 == null &&
                        <h2>No Result!</h2>
                    }
                </div>


            </div>
        )
    }

}

export default QuadraticEquationCalc;