import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar";

class App extends React.Component{
    render() {
        return (
            <div>
                <Navbar> </Navbar>
                <div className="col-lg-12">
                    <h1>Hello !</h1>
                </div>

            </div>
        );
    }
}

render(<App />, document.getElementById("app"));