import React, {useState, useEffect} from 'react'
import {useHistory,Link} from "react-router-dom"
import "./Signup.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import {Alert} from '@mui/material'

const initialState = {
    username: "",
    password: "",
}

const Signup = () => {
    const [state, setState] = useState(initialState);

    axios.defaults.withCredentials = true;

    useEffect(()=>{
      axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
        console.log(response);
      })
    }, [])

    const {username,password,confirmpassword} = state;

    const history = useHistory();

    const [error,setError] = useState("Password Should Contain 6 to 10 characters, A capital letter , A number and A Special character")

    const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== confirmpassword){
        return setError("Passwords do not match")
      }if (password.length >10) {
      return setError("Password should contain less than 10 characters")
      }
      if (password.length <6) {
          return setError("Password should contain atleast 6 characters")
      }
      if (password.search(/[A-Z]/) === -1) {
          return setError("Enter a capital letter")
      }
      if (password.search(/[0-9]/) === -1) {
          return setError("Enter a number")
      }
      if (password.search(/[!@#$%^&*]/) === -1){
          return setError("Enter a special character")
      }else {
              axios.post("https://backenddddd.herokuapp.com/api/register", {
                  username,
                  password,              
              })
              .then(() => {
                  setState({username: "", password: ""});
              })
              .catch((err)=> toast.error(err.response.data))
          toast.success("Signed in Successfully") 
        }        
      setTimeout(() => history.push("/login"), 500);
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
              <h1 style={{textAlign: "center"}}>Registration</h1>
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
                 <label htmlFor='password'>Confirm Password</label>
                <input
                type='password'
                id='confirmpassword'
                name='confirmpassword'
                placeholder='Confirm Password...'
                onChange={handleInputChange}
                required
                />
                {error && <Alert severity="error">{error}</Alert>}
                <input type="submit" style={{backgroundColor: "blue"}} value="Sign Up" />
                <p className='center'>Already Registered? <Link to="/login">Login</Link></p>
                <p className='center'>Visit our Homepage <Link to="/">Home</Link></p>
            </form>
            </div>
            )    
}
export default Signup