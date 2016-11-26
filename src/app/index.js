import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar";

class App extends React.Component{
    render() {
        return (
            <div>
                <Navbar homeLink="Home">
                    <h4 className="text-danger"><i>This is text pased to navbar, and this can access by react using children property</i></h4>
                </Navbar>
                <div className="col-lg-12">
                    <h1>Hello !</h1>
                </div>

            </div>
        );
    }
}

render(<App />, document.getElementById("app"));