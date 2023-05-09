import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createUserPoll } from '../../../redux/features/user-polling/userPollingSlice';

const PoolingMap = () => {
  const [userPoll, setUserPoll]= useState({
    source:"",
    destination:"",
    totalSeats:"",
    availableSeats:"",
    totalDays:"",
    totalPrice:"",
    startDate:"",
    endDate:"",

   });
   console.log(userPoll);

   const dispatch=useDispatch(createUserPoll(userPoll))

   
    const onChange=(e)=>{
      if(e.target.name==="startDate"){
        const startdate = new Date(e.target.value);
        const enddate  = new Date();
        enddate.setDate(startdate.getDate()+5);
          setUserPoll((prevState)=>({...prevState,['endDate']:enddate.toLocaleDateString(),[e.target.name]:startdate.toLocaleDateString()}))
          return
        }
      setUserPoll((prevState)=>({...prevState,[e.target.name]:e.target.value}))



    }

  const submitHandler=(e)=>{
    e.preventDefault();
    
      dispatch(createUserPoll(userPoll));
      
    

  }


  return (






    <section className="text-center">


  <h3 className="mb-5 mt-5">Add Pool</h3>

  <div className="d-flex justify-content-center row w-100">
    <div className="col-lg-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
        className="h-100 w-100" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
    </div>

    <div className="col-lg-6">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-12">
            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                
              <input id="name-1" className="form-control" type="text" name="source" value={userPoll.source} onChange={onChange} placeholder="Source" />

                
              </div>
              <div className="col-md-6">
              
                <input id="name-1" className="form-control" type="text" name="destination" value={userPoll.destination} onChange={onChange} placeholder="Destination" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                
              <input id="name-1" className="form-control" type="text" name="totalSeats" value={userPoll.totalSeats} onChange={onChange} placeholder="Total Seats" />

                
              </div>
              <div className="col-md-6">
              
                <input id="name-1" className="form-control" type="text" name="availableSeats" value={userPoll.availableSeats} onChange={onChange} placeholder="Available Seats" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                
              <input id="name-1" className="form-control" type="text" name="totalDays" value={userPoll.totalDays} onChange={onChange} placeholder="Total Days" />

                
              </div>
              <div className="col-md-6">
              
                <input id="name-1" className="form-control" type="text" name="totalPrice" value={userPoll.totalPrice} onChange={onChange} placeholder="Total Price" />
              </div>
            </div>
            <div className="form-outline mb-4">
              <input type="date" id="form3Example3" className="form-control" name='startDate' value={userPoll.startDate} onChange={onChange} placeholder="Choose Date"/>
            </div>
            <div className="form-outline mb-4">
              <textarea className="form-control" id="form4Example3" rows="4" placeholder="Message"></textarea>

            </div>
            <div className="text-center text-md-start">
            <button className="btn btn-primary shadow d-block w-100" type="submit">Post Information</button>
            </div>
          </div>
          
        </div>
      </form>

    </div>
  </div>


</section>
  )
}
export default PoolingMap