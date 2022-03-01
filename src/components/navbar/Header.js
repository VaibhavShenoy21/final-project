import React , {useEffect, useState} from 'react'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link , useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Header() {
    const history = useHistory();

  const logout = () => {
    setLoginStatus(null);
    axios.get("https://backenddddd.herokuapp.com/api/logout").then((response)=>{
      response.data.loggedIn = false 
    });
    history.push('/login')
  }
  axios.defaults.withCredentials = true;
  const [loginStatus,setLoginStatus] = useState()

  useEffect(()=>{
    axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username)
      }
    })
  }, [])
return (
	<AppBar position="static" style={{background: "#019B79"}}>
		<Toolbar>
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
		</IconButton>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 , fontFamily: "sans-serif"}}>
			Worflow Management System
		</Typography>
        {loginStatus && (<Typography variant="h6">User: {loginStatus}</Typography>)}
        <nav>
      <Link style={{color: "white",textDecoration: "none",marginLeft: "-1020px",marginRight: "20px"}} color="inherit" to="/"> HOME </Link>
      {loginStatus && (<Link style={{color: "white",textDecoration: "none",marginLeft: "20px",marginRight: "20px"}} color="inherit" to="/board"> BOARD </Link>)}
      {!loginStatus && (<Link style={{color: "white",textDecoration: "none",marginLeft: "20px",marginRight: "20px"}} color="inherit" to="/signup"> SIGNUP </Link>)}
      {!loginStatus && (<Link style={{color: "white",textDecoration: "none",marginLeft: "20px",marginRight: "20px"}} color="inherit" to="/login"> LOGIN </Link>)}
      {loginStatus && (<Button color="inherit" onClick={logout}>LOGOUT</Button>)}
           </nav>
		</Toolbar>
	</AppBar>
);
}
