import React from "react";
export class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>
                        </ul>

                        <div className="well">
                            <br/>
                            <p>Your name is {this.props.name}</p>
                            <p>Your age is {this.props.age}</p>
                            <h2>User Details are below: -</h2>
                            <p>name is {this.props.user.name}</p>
                            <h2>Your favaroite color are</h2>
                            <ul>
                                {this.props.user.color.map((color,i)=> <li key={i}>{color}</li>)}
                            </ul>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

//Defining proptype
Navbar.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};

