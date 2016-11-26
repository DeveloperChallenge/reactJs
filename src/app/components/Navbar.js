import React from "react";
export class Navbar extends React.Component{
    constructor(props){
        super();
        this.state= {
            age: props.initialAge,
            status: 0
        }
    }
    increaseMe(){
        this.setState({
            age: this.state.age + 3
        })
    }
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
                            <h2>User Details are below: -</h2>
                            <p>name is {this.props.user.name}</p>
                            <h2>Your favaroite color are</h2>
                            <ul>
                                {this.props.user.color.map((color,i)=> <li key={i}>{color}</li>)}
                            </ul>
                            {this.props.children}
                            <h2>Your age is {this.state.age}</h2>
                            <p>Testing for updating the state of the DOM</p>
                            <button className="btn btn-primary" onClick={()=>this.increaseMe()}>Increase Me</button>
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
    initialAge: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};

