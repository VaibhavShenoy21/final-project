import React, {useEffect, useState} from 'react'
import {useHistory, useParams, Link} from "react-router-dom"
import "./AddTodo.css"
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
    title: "",
    des: "",
    status: "",
    useruser: "",
}

const AddDoing = () => {

    axios.defaults.withCredentials = true;

    useEffect(()=>{
      axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
        console.log(response);
      })
    }, [])

    const [useruser,setUser] = useState('')

    useEffect(()=>{
      axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
        if (response.data.loggedIn === true) {
          setUser(response.data.user[0].username)
          console.log(setUser);
        }
      })
    }, [])
    
    const [state, setState] = useState(initialState);

    const {title ,des ,status} = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://backenddddd.herokuapp.com/api/get/${id}`).then((resp)=> setState({...resp.data[0]}))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !des) {
            toast.error("Please provide value into each input field")
        } else {
            if (!id) {
                axios.post("https://backenddddd.herokuapp.com/api/post2", {
                    title,
                    des,
                    status,
                    useruser,
                })
                .then(() => {
                    setState({title: "", des: "", status: "", useruser:""});
                })
                .catch((err)=> toast.error(err.response.data))
            toast.success("Card Added Successfully") 
            } else {
                axios.put(`https://backenddddd.herokuapp.com/api/update/${id}`, {
                title,
                des,
                status,
            })
            .then(() => {
                setState({title: "", des: "", status: ""});
            })
            .catch((err)=> toast.error(err.response.data))
        toast.success("Card Edited Successfully")
            }
            
        setTimeout(() => history.push("/board"), 500);
        }
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
            alignContent: "center"
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor='title'>Title</label>
            <input
            type='text'
            id='title'
            name='title'
            placeholder='Your Title...'
            value={title || ""}
            onChange={handleInputChange}
            />
            <label htmlFor='des'>Description</label>
            <input
            type='textarea'
            id='des'
            name='des'
            placeholder='Your Description...'
            value={des || ""}
            onChange={handleInputChange}
            />
            <input type="submit" value={id ? "Update" : "Save"} />
            <Link to="/board">
                <input type="button" value="Go Back" />
            </Link>
        </form>
    </div>
  )
}
export default AddDoing