import * as React from "react";
import triangle from "./triangle.png"
class TriangleS extends React.Component{
    state={
        base: 0,
        height: 0,

    }
    onBaseChange = (event) => {
        this.setState({
            base: event.target.value,
        })

    }
    onHeightChange = (event) => {
        this.setState({
            height: event.target.value,
        })

    }

    reset = () =>
    {
        this.setState({
            base: "",
            height: "",

        })
    }
    checks = ()=>
    {
        if (this.state.base >0 && this.state.height >0)
            return true;
    }
    render() {
        return(
            <div>
                <h1>Calculate the Triangle S</h1>
                <br/>
                <img src={triangle}/>
                <br/>
                <input value={this.state.base} onChange={this.onBaseChange} placeholder={"Enter base"}/>
                <br/>
                <input value={this.state.height} onChange={this.onHeightChange} placeholder={"Enter high"}/>
                <br/>
                <button disabled={this.state.height === '' && this.state.base === ''} onClick={this.reset}>CLR</button>

                <div>
                    {
                        this.checks() &&
                        <h2>Triangle area is: {(this.state.base * this.state.height)/2}</h2>
                    }
                </div>
            </div>
        )
    }
}
export default TriangleS;