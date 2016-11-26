import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar";

class App extends React.Component{
    render() {
        var user= {
            name: "Arpan",
            color: ["Red","green","Orange","Purple","Yellow"]
        };
        return (
            <div>
                <Navbar name={"Mahessh"} age={26} user={user}>
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