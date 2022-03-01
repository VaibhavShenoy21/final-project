import React, {useEffect, useState} from 'react'
import {useHistory,Link} from "react-router-dom"
import "./Login.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import {Alert} from '@mui/material'

const initialState = {
    username: "",
    password: "",
}

const Login = () => {
    const [state, setState] = useState(initialState);

    const {username,password} = state;

    const history = useHistory();

    const [error,setError] = useState("Enter Your Email and Password")

    axios.defaults.withCredentials = true;

    useEffect(()=>{
      axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
        console.log(response);
      })
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault();
              axios.post("https://backenddddd.herokuapp.com/api/login", {
                  username,
                  password,              
              })
              .then((response) => {
                if (response.data.message){
                  setError(response.data.message)
                }
                else {
                  toast.success("Logged in Successfully")        
                  setTimeout(() => history.push("/board"), 500);
                }
              })
              .catch((response)=> toast.error(response.data.message))
      }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value })
    }
  return ( 
      <div style={{marginTop: "100px"}}>
            <form style={{
                margin: "auto",
                padding: "50px",
                maxWidth: "400px",
                alignContent: "center",
                borderRadius: "8px",
                borderStyle: "outset"
            }}
            onSubmit={handleSubmit}
            >
              <h1 style={{textAlign: "center"}}>Login</h1>
                <label>Email</label>
                <input
                type='email'
                id='username'
                name='username'
                placeholder='Your Email...'
                onChange={handleInputChange}
                required
                />
                <label htmlFor='password'>Password</label>
                <input
                type='password'
                id='password'
                name='password'
                placeholder='Your Password...'
                onChange={handleInputChange}
                required
                />
                {error && <Alert severity="error">{error}</Alert>}
                <input type="submit" style={{backgroundColor: "blue"}} value="Log In" />
                <p className='center'>Not Registered? <Link to="/signup">Signup</Link></p>
                <p className='center'>Visit our Homepage <Link to="/">Home</Link></p>
            </form>
            </div>
            )    
}
export default Login