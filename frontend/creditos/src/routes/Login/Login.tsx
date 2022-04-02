import React, { useState } from 'react'
import "./Login.scss"
export default function Login() {


    const [logData,setLogData] = useState({
        user: '',
        password: ''
    })

    const handleInputChange = (event: any) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setLogData({
            ...logData,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event: any) => {
        event.preventDefault()
        console.log('enviando datos...' + logData.user + ' ' + logData.password)
    }
      
    return (
        // <main style={{ padding: "1rem 0" }}>
        //   <h2>login</h2>
        // </main>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange} name="user" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={handleInputChange} name="password"/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={sendData}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

