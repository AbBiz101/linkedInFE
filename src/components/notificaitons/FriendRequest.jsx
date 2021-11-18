import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FastRewind } from "@material-ui/icons";
import './css/FriendRequest.css'

function FriendRequest({ title, Icon, to }) {
    const [friendRequests, setFriendRequests] = useState([]);



    const fetchFriendRequests = async () => {
      const response = await fetch(`https://linkedin-backend-strive.herokuapp.com/profile/6194d84aad6c687f678236e0`);
       const data = await response.json();
       const array = data.friendRequests;
       setFriendRequests(array);
  
  
  
      console.log(array, "array");
    }

  //   const fetchFriendRequests = async () => {
  //   const response = await fetch(`https://linkedin-backend-strive.herokuapp.com/request`);
  //    const data = await response.json();
  //    setFriendRequests(data);



  //   console.log(data)
  // }
 
const acceptFriendRequests = async (id, status) => {
    console.log(id)


    const response = await fetch(`https://linkedin-backend-strive.herokuapp.com/request/${id}`, {
        method: status,
        body: JSON.stringify({ status: 'accepted' }),

        headers: {
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        console.log("accepted")
        const data = await response.json();

     fetchFriendRequests()

    }

     
    
  }


 useEffect(() => {
    fetchFriendRequests()
  
 },[])


  return (
    <>
      
      <Dropdown >
        <Dropdown.Toggle className='btn-primary-remove' id="dropdown-basic" >
        <IconButton className="header_icons" onClick={()=>{
            console.log(friendRequests)
        }}  to={to}>
                <Icon className="header_icons" src={Icon} />
            </IconButton>
        </Dropdown.Toggle>

  <Dropdown.Menu>
   
    { 
   

        friendRequests.map(request => (
        <Dropdown.Item href="#/action-3"> {request.userSent.name} want to connect with you
        <Button variant="" className="ignoreButton" onClick={()=>{
          acceptFriendRequests(request._id, "DELETE")
        }}>Ignore</Button>
        <Button variant="primary " className=" acceptButton
" onClick={()=>{
            acceptFriendRequests(request._id, "PUT")
        }}>Accept</Button>
        
        
        </Dropdown.Item>
            
        )
        )
    }


  </Dropdown.Menu>
</Dropdown>
    </>
  );
}

export default FriendRequest;
