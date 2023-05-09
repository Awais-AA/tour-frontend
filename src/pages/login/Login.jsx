import LoginPic from "../../assets/images/LoginPic.jpg"
import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login} from '../../redux/features/auth/authSlice'


function Login() {
    const [user, setUser]= useState({
        email:"",
        password:"",
       });
       const navigate=useNavigate()
       const dispatch=useDispatch()
       const {userdata,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
       console.log(isSuccess,isError,userdata,message,userdata);
       
       useEffect(()=>{
        
       },[])
        const onchange=(e)=>{
          setUser((prevState)=>({...prevState,[e.target.name]:e.target.value}))
          
    
        }
    
      
      const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(user))
        setUser({email:"",password:""})
       
        
    
      }







  return (
    <div className="bg-gradient-primary">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-login-image" style={{backgroundImage: `url(${LoginPic})`,backgroundSize: 'cover',  backgroundRepeat  : 'no-repeat',backgroundPosition: 'center'}}></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                                    </div>
                                    <form className="user" onSubmit={submitHandler}>
                                        <div className="mb-3"><input id="exampleInputEmail" className="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" value={user.email} onChange={onchange}/></div>
                                        <div className="mb-3"><input id="exampleInputPassword" className="form-control form-control-user" type="password" placeholder="Password" name="password" value={user.password} onChange={onchange}/></div>
                                        <div className="mb-3">
                                            <div className="custom-control custom-checkbox small">
                                                <div className="form-check"><input id="formCheck-1" className="form-check-input custom-control-input" type="checkbox" /><label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label></div>
                                            </div>
                                        </div><button className="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
                                        <hr /><a className="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button"><i className="fab fa-google"></i>Login with Google</a>
                                        <hr />
                                    </form>

                                    <div className="text-center"><a className="small" href="register.html">Create an Account!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Login