import React from "react";
export class Home extends React.Component{
    constructor(props){
        super();
        this.state= {
            homeLink: 'Linke changed'
        }
    }
    onChangeLink(){
    this.props.changeLink(this.state.homeLink);
    }
    render() {
        return (
            <div className="col-lg-6 col-lg-offset-3 well text-center">
                <h2>Welcome to Home Section</h2>
                <p>Link:  {this.props.homeLink}</p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={()=> this.onChangeLink()}>Click me to change home link</button>

            </div>
        );
    }
};


