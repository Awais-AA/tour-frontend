import RegisterPic from "../../assets/images/RegisterPic.jpg"
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {register,resetStatus} from '../../redux/features/auth/authSlice'

const Register = () => {
    const [userData, setUserData]= useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNo:"",
        userType:"",
       });
       const {user,errorMessage,successMessage}= useSelector(state=>state.auth)
       console.log(user,errorMessage,successMessage);
       const dispatch=useDispatch()
       const navigate=useNavigate()

       
        const onChange=(e)=>{
          setUserData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    
    
    
        }
    
      const submitHandler=async(e)=>{
        e.preventDefault();
        if(userData.password === userData.confirmPassword){
          const {confirmPassword, ...others}=userData
           const res= await dispatch(register(others));
           console.log(res);
           if(res.type==='/register/fulfilled'){
            console.log(successMessage);
            dispatch(resetStatus());
            navigate("/login")
          }
          else if(res.type==='/register/rejected'){
            console.log(errorMessage);
            dispatch(resetStatus());
          }
        
        }
        else{
          console.log('password not correct');
        }
         
    
      }




  return (
    <div className="bg-gradient-primary">
    <div className="container">
        <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-flex">
                        <div className="flex-grow-1 bg-register-image" style={{backgroundImage: `url(${RegisterPic})`, backgroundSize: 'cover', backgroundRepeat  : 'no-repeat',backgroundPosition: 'center'}}></div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h4 className="text-dark mb-4">Create an Account!</h4>
                            </div>
                            <form className="user" onSubmit={submitHandler}>
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input id="exampleFirstName" className="form-control form-control-user" type="text" placeholder="UserName" name="username" value={userData.username} onChange={onChange} /></div>
                                    <div className="col-sm-6"><input id="exampleLastName" className="form-control form-control-user" type="text" placeholder="Phone No" name="phoneNo" value={userData.phoneNo} onChange={onChange} /></div>
                                </div>
                                <div className="mb-3"><input id="exampleInputEmail" className="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Email Address" name="email" value={userData.email} onChange={onChange} /></div>
                                <select value={userData.userType} name="userType" onChange={onChange} className="form-select mb-3" aria-label=".form-select-lg example">
  <option>Select User Type</option>
  <option value="normalUser">Normal User</option>
  <option value="travelAgent">Travel Agent</option>
  <option value="hotelManger">Hotel Manger</option>
</select>
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input id="examplePasswordInput" className="form-control form-control-user" type="password" placeholder="Password" name="password" value={userData.password} onChange={onChange} /></div>
                                    <div className="col-sm-6"><input id="exampleRepeatPasswordInput" className="form-control form-control-user" type="password" placeholder="Repeat Password" name="confirmPassword" value={userData.confirmPassword} onChange={onChange}/></div>
                                </div><button className="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                <hr /><a className="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button"><i className="fab fa-google"></i>Register with Google</a>
                                <hr />
                            </form>
                            <div className="text-center"><a className="small" href="/login">Already have an account? Login!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Register