import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:"",
    };
     add=(e) =>
    {
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name:"", email:"" });
        console.log(this.state);
    };
  render() {
    return(
        <div className="ui main">
            <h2>Enter Details</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name: </label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={this.state.name} 
                    onChange={(e)=> this.setState({name: e.target.value})} />
                </div>
                 <div className="field">
                    <label>Email ID: </label>
                    <input type="text" name="email" placeholder="Enter your email id" value={this.state.email} 
                    onChange={(e)=> this.setState({email: e.target.value})}/>
                </div>
            
            <button className="ui button purple">Add</button>
            </form>
        </div>
    );
  }
}

export default AddContact;