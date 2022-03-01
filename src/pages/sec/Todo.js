import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import "./Todo.css";
import {toast} from "react-toastify"
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {

    const [data, setData] = useState([]); 

    function refreshPage(){
        window.location.reload();
    }

    const deleteCard = (id) => {
        if(window.confirm("Are you sure you want to delete the card ?")
        ) {
            axios.delete(`https://backenddddd.herokuapp.com/api/remove/${id}`);
            toast.success("Card Deleted Successfully");
            setTimeout(() => loadData(), 500);
        }
    }

    const moveCard = (id) => {
        if(window.confirm("Are you sure you want to Drag the card ?")
        ) {
            axios.put(`https://backenddddd.herokuapp.com/api/update1/${id}`);
            toast.success("Card Dragged Successfully");
            setTimeout(() => loadData(), 500);
            refreshPage();
        }
    }

    const loadData = async () => {
        const response = await axios.get("https://backenddddd.herokuapp.com/api/get1");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
    },[]);


  return (
    <div style={{marginTop:"50px"}}>
        <div className='todo-tb'>
        <table className='styled-table'>
        <caption className='tab-cap'>To Do <Link to="/addCardTodo">  <button className='btn btn-contact'>Add Card</button> </Link></caption>
            <tbody>
                {data.map((item,index) => {
                    return(
                        <tr key = {item.id}>
                            <td>{item.title}</td>
                            <td>
                                <div className='icons'>
                                    <Link to={`/view/${item.id}`}><VisibilityIcon sx={{ color: 'black' }}/></Link>
                                    <Link to={`/update/${item.id}`}><EditIcon sx={{ color: 'black' }}/></Link>
                                    <ArrowForwardIosIcon onClick={()=> moveCard(item.id)}/>
                                    <DeleteIcon onClick={()=> deleteCard(item.id)} sx={{ color: 'black' }}/>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </div>      
    </div>
    
  )
}

export default Home;