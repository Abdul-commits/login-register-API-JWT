import React from 'react' 
import axios from 'axios'

import Button from '@material-ui/core'


class Login extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3005/users/login', formData)
            .then(response => {
                
                if (response.data.errors) {
                    this.setState(() => ({
                        errors: response.data.errors,
                        password: ''
                    }))
                } else {
                    // write this to localStorage 
                    localStorage.setItem('token', response.data.token)
                
                    this.props.history.push('/users/account')
                    // change the navigation links = update the state of isAuthenticated in the parent component
                    this.props.handleAuthentication(true)
                }
            })
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        
        return (
            <div style = {{background: 'orange'}}>
        
            <div>
                <div >
                    <h2 style = {{textAlign: 'center'}}> Login </h2>
                    <form  style = {{textAlign: 'center'}} onSubmit={this.handleSubmit}>
                        { this.state.errors && <p className="alert alert-danger">{ this.state.errors}</p> }
                        <div>
                            <label style = {{textAlign: 'center'}}>
                                Email
                                <input type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="your email"
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
                                    placeholder="your password"
                                />
                            </label>
                        </div>

                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Login