import React from 'react'
import axios from 'axios'
class Register extends React.Component
{
    constructor()
    {
        super()
        this.state={
            username: '', 
            email: '',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            password:'',
            conformpassword:'',
            notice:''


        }
    }
    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phoneNumber:this.state.phoneNumber,
            password: this.state.password
        }
        if(this.state.phoneNumber.length!==10){
            this.setState(()=>({
                notice:'phone number should be 10 digits'
            }))
            return false
        }
        if(this.state.password===this.state.conformpassword)
        {
            axios.post('http://localhost:3005/users/register', formData)
            .then(response => {
                if(response.data.errors) {
                    this.setState(() => ({
                        errors: response.data.errors
                    }))
                   
                } else {
                // programmatically change from one to another component
                    this.props.history.push('/users/login')
                }   
            })
        }
        else{
            this.setState(()=>({
                notice:'passwords didnot match'
            }))
        }
        
    }
    
    
    render()
    {
        return(
            <div style = {{background: 'orange'}}>
            <div >
                <h2 style = {{textAlign: 'center'}}>Register with us </h2>
                <form style = {{textAlign: 'center'}} onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            Username 
                            <input type="text" 
                                   name="username"
                                   value={this.state.username} 
                                   onChange={this.handleChange} 
                                   className="form-control" 
                                   placeholder="Enter username"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Email
                            <input type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            First Name
                            <input type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter first name"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name
                            <input type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter last name"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Phone Number
                            <input type="text"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="enter 10 digit number"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   className="form-control"
                                   placeholder="Enter password"
                            />
                        </label>
                        
                    </div>
                    <div className="form-group">
                        <label>
                           Conform Password
                            <input type="password"
                                   name="conformpassword"
                                   value={this.state.conformpassword}
                                   onChange={this.handleChange}
                                   className="form-control"
                                   placeholder="Enter  conform password"
                            />
                        </label>
                        
                    </div>
                    {this.state.notice && <p className="text text-danger"> {this.state.notice} </p>}

                    <input type="submit" className="btn btn-primary" />
                   

                </form>
            </div>
        </div> 
        )
    }
}
export default Register