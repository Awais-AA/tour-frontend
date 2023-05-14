import './App.css'
import { Layout } from './components/Layout';
import {useSelector} from 'react-redux'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register/Register';
import Login from './pages/login/Login'
import { Route, Routes,useNavigate } from "react-router-dom";
import CreateUserPolling from './pages/create-user-polling/CreateUserPolling';
import UserPollingList from './pages/user-polling-list/UserPollingList';


function App() {
  const navigate=useNavigate()

  const {user}=useSelector(state=>state.auth)
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}> 
        {/* public */}
        <Route path="/" element={<LandingPage/>} />

       
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>} />
        

       
          {/* private User */}
          <Route path="/user-polling" element={<CreateUserPolling/>} />
          <Route path="/user-polling-list" element={<UserPollingList/>} />
      
          </Route> 
        
    
    </Routes>
    
    </>
  )
}

export default App
