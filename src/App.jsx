import './App.css'
import { Layout } from './components/Layout';
import LandingPage from './pages/LandingPage'
import Register from './pages/Register/Register';
import Login from './pages/login/Login'
import { Route, Routes } from "react-router-dom";
import CreateUserPolling from './pages/create-user-polling/CreateUserPolling';
import UserPollingList from './pages/user-polling-list/UserPollingList';


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}> 
        {/* public */}
        <Route path="/" element={<LandingPage/>} />

       
          <Route path="/login" element={<Login />} />
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
