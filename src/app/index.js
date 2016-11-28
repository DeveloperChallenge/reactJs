import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

class App extends React.Component{
    constructor(){
        super();
        this.state= {
            homeLink: 'Home'
        }

    }
    clickToChange(newName){
        this.setState({
            homeLink: newName
        });
    }
    render() {
        return (
            <div>
                <Navbar homeLink={this.state.homeLink}>
                    <h4 className="text-danger"><i>This is text pased to navbar, and this can access by react using children property</i></h4>
                </Navbar>
                <div className="col-lg-12">
                    <h1>Hello !</h1>
                </div>
                <Home  changeLink={this.clickToChange.bind(this)}/>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));