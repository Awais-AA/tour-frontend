import Card from "./Card"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserPoll } from "../redux/features/user-polling/userPollingSlice"
import { getAgentPoll } from "../redux/features/agent-polling/agentPollingSlice"
import { getGroupPoll } from "../redux/features/group-polling/groupPollingSlice"
import { getBookedPoll } from "../redux/features/booked-polling/bookedPollingSlice"

function CardGroup() {

  const {userPoll}=useSelector(state=>state.userPoll)
  const {agentPoll}=useSelector(state=>state.agentPoll)
  const {groupPoll}=useSelector(state=>state.groupPoll)
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getUserPoll())
  dispatch(getAgentPoll())
  dispatch(getGroupPoll())
 
},[])
  return (
    <div>
        <Card componentVal="User Poll" componentType="userPoll" userPoll={userPoll}/>
        <Card componentVal="Agent Poll" componentType="agentPoll" userPoll={agentPoll}/>
        <Card componentVal="Group Poll" componentType="groupPoll" userPoll={groupPoll}/>



    </div>
  )
}
export default CardGroup