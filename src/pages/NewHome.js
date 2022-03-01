import React  from 'react'
import axios from 'axios'
import Header from '../components/navbar/Header';


const NewHome = () => {
  axios.defaults.withCredentials = true;
  
  return (
    <div>
      <div>
      <Header />
      </div>
      <div>
        <div class="w3-container w3-content w3-center w3-padding-64" style={{textAlign: "center"}} id="band">
    <h1 class="w3-wide" style={{ flexGrow: 1 , fontFamily: "cursive"}}>Components</h1>
    <p class="w3-opacity"><i>These are the Various components</i></p>
    
    <div class="w3-row w3-padding-32">
      <div class="w3-third" style={{borderstyle: "outset"}}>
        <h1 style={{ flexGrow: 1 , fontFamily: "cursive"}}>Board</h1>
        <p class="w3-justify"><i>Create Cards and perform various CRUD operations on the Data</i></p>
        <img src="https://www.linkpicture.com/q/board.png" class="w3-round w3-margin-bottom" alt="Random Name" style={{width: "90%",height: "100%",borderStyle: "outset",borderRadius:"8px"}}/>

      </div>
      <div class="w3-third">
        <h1 style={{ flexGrow: 1 , fontFamily: "cursive"}}>Signup</h1>
        <p class="w3-justify"><i>Registration Page with all required Validations</i></p>
        <img src="https://www.linkpicture.com/q/signup.png" class="w3-round w3-margin-bottom" alt="Random Name" style={{width: "30%",height: "30%"}} />

      </div>
      <div class="w3-third">
        <h1 style={{ flexGrow: 1 , fontFamily: "cursive"}}>Login</h1>
        <p class="w3-justify"><i>Fully Functional Login System with Cookies</i></p>
        <img src="https://www.linkpicture.com/q/login_1.png" class="w3-round" alt="Random Name" style={{width: "30%",height: "30%"}}/>
 
      </div>
      <div class="w3-third">
        <h1 style={{ flexGrow: 1 , fontFamily: "cursive"}}>Actions</h1>
        <p class="w3-justify"><i>View , Edit , Drag and Delete Options</i></p>
        <img src="https://www.linkpicture.com/q/actions.png" class="w3-round" alt="Random Name" style={{width: "15%",height: "15%",marginBottom: "30px",borderStyle: "none"}}/>

      </div>
      <div style={{
      backgroundColor: "#019B79",
      color: "white",
      paddingBottom: "10px",
      paddingTop: "10px",
    }}>
      <p>Copyright @2022 | Designed by Vaibhav Shenoy</p>
      </div>
      </div>
      </div>
      </div>
  </div>
  )
}

export default NewHome