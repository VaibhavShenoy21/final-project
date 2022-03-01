import React  from 'react'
import Todo from './sec/Todo'
import Doing from './sec/Doing'
import Done from './sec/Done'
import "./Homepage.css"
import axios from 'axios'
import Header from '../components/navbar/Header'


const Homepage = () => {

  axios.defaults.withCredentials = true;

  return (
    <div>
    <div>
      <Header />
    </div>
      <div>
        <Done/>
        <Todo/>
        <Doing/>
      </div>
    </div>
  )
}

export default (Homepage);