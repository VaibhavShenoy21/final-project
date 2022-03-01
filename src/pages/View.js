import React,{useEffect ,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
import "./View.css"



const View = () => {
    axios.defaults.withCredentials = true;

    useEffect(()=>{
      axios.get("https://backenddddd.herokuapp.com/api/login").then((response)=>{
        console.log(response);
      })
    }, [])
    
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://backenddddd.herokuapp.com/api/get/${id}`).then((resp)=> setUser({...resp.data[0]}))
    }, [id])

  return (
    <div style={{marginTop: "150px"}}>
        <div className='card'>
            <div className='card-header'><p> Card Details</p></div>
            <div className='container'>
                <strong>Title: </strong>
                <span>{user.title}</span>
                <br />
                <br />
                <strong>Description: <br/> </strong>
                <span>{user.des}</span>
                <br />
                <br />
                <strong>Status: </strong>
                <span>{user.status}</span>
                <br />
                <br />
                <strong>Created By: </strong>
                <span>{user.useruser}</span>
                <br />
                <br />
                <Link to="/board">
                    <div className='btn-edit'>Go Back</div>
                </Link>
            </div>

        </div>   
    </div>
  )
}

export default View