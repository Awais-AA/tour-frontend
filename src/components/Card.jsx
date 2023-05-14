import { useState } from "react";
import { useDispatch } from "react-redux"
import { createBookedPoll } from "../redux/features/booked-polling/bookedPollingSlice"

function Card({componentVal,userPoll,componentType}) {

  const [bookData,setBookData]=useState({
    pollId:"",
    totalSeats:"",
    totalPrice:"",
    pollType:""

})

const onChange=(e)=>{
  setBookData((prevState)=>({...prevState,[e.target.name]:e.target.value}))



}

  const dispatch =useDispatch();

  const submit=(e)=>{
    e.preventDefault();
    dispatch(createBookedPoll(bookData))

  }
    return (
      <>
      <div className="container px-4 py-5" id="custom-cards" >
      <h2 className="pb-2 border-bottom">{componentVal}</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      {userPoll.map(userPoll=>{return(
        <div className="col" key={userPoll._id}>
          
           
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <p>Created By:</p><h5>{userPoll.createdBy}</h5>
              <div className="mt-5 d-flex justify-content-between">
              <p className="text-info">Source: </p><p className="fw-bold">{userPoll.source}</p>
              <p className="text-info">Destination: </p><p className="fw-bold">{userPoll.destination}</p>
              </div>
              <div className="mt-2 d-flex justify-content-between">
              <p className="text-info">Total Seats: </p><p className="fw-bold">{userPoll.totalSeats}</p>
              <p className="text-info">Available Seats: </p><p className="fw-bold">{userPoll.availableSeats}</p>
              </div>
              <div className="mt-2 d-flex justify-content-between">
              <p className="text-info">Total Price: </p><p className="fw-bold">{userPoll.totalPrice}</p>
              <p className="text-info">Total Days: </p><p className="fw-bold">{userPoll.totalDays}</p>
              </div>
              <div className="mt-2 d-flex justify-content-between">
              <p className="text-info">Tour Start: </p><p className="fw-bold">{userPoll.startDate}</p>
              <p className="text-info">Tour End: </p><p className="fw-bold">{userPoll.endDate}</p>
              </div>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                 <button className="btn btn-info">Chat</button>
                </li>
                <li className="d-flex align-items-center me-3">

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setBookData((prevState)=>({...prevState,["pollId"]:userPoll._id,["pollType"]:componentType}))}}>
  Book trip
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Book Poll</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form on onSubmit={submit}>

                    <div className="form-outline mb-4">
                        <input type="number" className="form-control" placeholder="Total Seats" name="totalSeats" value={bookData.totalSeats} onChange={onChange}/>
                    </div>

                   
                    <div className="form-outline mb-4">
                        <input type="number"  className="form-control" placeholder="Total Price" name="totalPrice" value={bookData.totalPrice} onChange={onChange}/>

                    </div>

                    
                    <button type="submit" className="btn btn-primary btn-block">Book</button>
                </form>
      </div>
      
    </div>
  </div>
</div>

                
                </li>
              </ul>
            </div>
          </div>
              
           
          
        </div>
   )})}
      </div>

    </div>
  
</>
  )
}
export default Card