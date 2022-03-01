import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Doing.css";
import {toast} from "react-toastify"
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Doing = () => {
    const [data, setData] = useState([]); 

    function refreshPage(){
        window.location.reload();
    }


    const loadData = async () => {
        const response = await axios.get("https://backenddddd.herokuapp.com/api/get2");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
    },[]);

    const deleteCard = (id) => {
        if(window.confirm("Are you sure you want to delete the card ?")
        ) {
            axios.delete(`https://backenddddd.herokuapp.com/api/remove/${id}`);
            toast.success("Card Deleted Successfully");
            setTimeout(() => loadData(), 500);
        }
    }
    const moveCardBackward = (id) => {
        if(window.confirm("Are you sure you want to Drag the card ?")
        ) {
            axios.put(`https://backenddddd.herokuapp.com/api/update2/${id}`);
            toast.success("Card Dragged Successfully");
            setTimeout(() => loadData(), 500);
            refreshPage();
        }
    }
    const moveCardForward = (id) => {
        if(window.confirm("Are you sure you want to Drag the card ?")
        ) {
            axios.put(`https://backenddddd.herokuapp.com/api/update3/${id}`);
            toast.success("Card Dragged Successfully");
            setTimeout(() => loadData(), 500);
            refreshPage();
        }
    }
  return (
    <div style={{marginTop:"50px"}}>
        <div className='doing-tb'>
        <table className='styled-table1'>
        <caption className='tab-cap'>In Progress <Link to="/addCardDoing">  <button className='btn btn-contact'>Add Card</button> </Link></caption>
            <tbody>
                {data.map((item,index) => {
                    return(
                        <tr key = {item.id}>
                            <td>{item.title}</td>
                            <td>
                                <div className='icons'>
                                    <Link to={`/view/${item.id}`}><VisibilityIcon sx={{ color: 'black' }}/></Link>
                                    <Link to={`/update/${item.id}`}><EditIcon sx={{ color: 'black' }}/></Link>
                                    <ArrowBackIosIcon onClick={()=> moveCardBackward(item.id)}/>
                                    <ArrowForwardIosIcon onClick={()=> moveCardForward(item.id)}/>
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

export default Doing;