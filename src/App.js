import {BrowserRouter , Switch , Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddDoing from './pages/Add/AddDoing';
import AddTodo from './pages/Add/AddTodo';
import AddDone from './pages/Add/AddDone';
import NewHome from './pages/NewHome';
import Homepage from './pages/Homepage';
import View from './pages/View';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Switch>
          <Route exact path='/' component={NewHome} />
          <Route path='/board' component={Homepage} />  
          <Route path='/addCardTodo' component={AddTodo} /> 
          <Route path='/addCardDoing' component={AddDoing} /> 
          <Route path='/addCardDone' component={AddDone} />
          <Route path='/update/:id' component={AddTodo} />  
          <Route path='/view/:id' component={View} />  
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />      
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
