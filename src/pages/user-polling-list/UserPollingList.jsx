import {Link} from "react-router-dom"

import PollCard from "../../components/PollCard"
import PollingPic from "../../components/PoolingPic"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserPoll } from "../../redux/features/user-polling/userPollingSlice"

const UserPollingList = () => {
const {userPoll}=useSelector(state=>state.userPoll)
console.log(userPoll);
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getUserPoll())
 
},[])

  return (
    <>
    <div className="container">
    <PollingPic/>
    </div>
    <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className="card card-nav-tabs">
              <div className="card-header card-header-primary">
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <ul className="nav nav-tabs" data-tabs="tabs">
                      <li className="nav-item">
                       
                      <Link
                          className="nav-link"
                          to="/user-polling"
                          data-toggle="tab"
                        >
                          
                          Create Poll
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link active" to="/user-polling-list" data-toggle="tab">
                          
                          User Polling List
                          </Link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body ">
                <div className="tab-content text-center">
                  <PollCard componentvalue="User Polling List" userPoll={userPoll}/>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>

    </>
  )
}
export default UserPollingList