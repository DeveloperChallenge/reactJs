import React from "react";
export const Navbar = (props) =>{
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">{props.homeLink}</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-warning" onClick={props.message}>Click me to say hello</button>
                </div>
            </nav>
        );
};


