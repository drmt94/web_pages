import * as React from "react";
import pythagoras from "./Pythagoras.png"
class Pythagoras extends React.Component
{
    state = {
        a: "",
        b: "",
        c: ""

    }
    a_Change = (event) => {
        this.setState({
            a: event.target.value,
        })

    }
    b_Change = (event) => {
        this.setState({
            b: event.target.value,
        })

    }
    c_Change = (event) => {
        this.setState({
            c: event.target.value,
        })

    }

    reset = () =>
    {
        this.setState({
            a: "",
            b: "",
            c: ""
        })
    }
    conditionsCheck = ()=>{
        if ((this.state.a != "" && this.state.b != "") || (this.state.a != "" && this.state.c!= "") ||  (this.state.b != "" && this.state.c != ""))

            return true
    }


    render() {
        return(
            <div>
                <h3>Enter values for two of a,b,c to calculate the third one:</h3>
                <img src={pythagoras}/>
                <br/>
                <br/>
                <br/>
                <input onChange={this.a_Change} value={this.state.a} placeholder={"a=?"}/>
                <br/>
                <input onChange={this.b_Change} value={this.state.b} placeholder={"b=?"}/>
                <button onClick={this.reset}>CLR</button>
                <br/>
                <input onChange={this.c_Change} value={this.state.c} placeholder={"c=?"}/>
                <br/>
                <div>
                    { this.conditionsCheck()  &&
                    <h3>
                        {
                            this.state.a==""&&
                            <span> a&#178; +  {this.state.b}&#178; = {this.state.c}&#178;
                            <br/>
                            a =  {Math.sqrt((Math.pow(this.state.c, 2)) - (Math.pow(this.state.b, 2)))}
                            </span>
                        }
                        {
                            this.state.b==""&&
                            <span> {this.state.a}&#178; +  b&#178; = {this.state.c}&#178;
                                <br/>
                            b =  {Math.sqrt((Math.pow(this.state.c, 2)) - (Math.pow(this.state.a, 2)))}
                            </span>
                        }
                        {
                            this.state.c==""&&
                            <span> {this.state.a}&#178; +  {this.state.b}&#178; = c&#178;
                                <br/>
                            c =  {Math.sqrt((Math.pow(this.state.a, 2)) + (Math.pow(this.state.b, 2)))}
                            </span>
                        }
                    </h3>
                    }
                </div>


            </div>
        )
    }
}
export default Pythagoras;