import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FastRewind } from "@material-ui/icons";

function FriendRequest({ title, Icon, to }) {
    const [friendRequests, setFriendRequests] = useState([]);
    const fetchFriendRequests = async () => {
    const response = await fetch(`https://linkedin-backend-strive.herokuapp.com/request`);
     const data = await response.json();
     setFriendRequests(data);
    console.log(data)
  }
 



 useEffect(() => {
    fetchFriendRequests()
  
 },[])


  return (
    <>
      
      <Dropdown >
        <Dropdown.Toggle id="dropdown-basic" >
        <IconButton className="header_icons" onClick={()=>{
            console.log(friendRequests)
        }}  to={to}>
                <Icon className="header_icons" src={Icon} />
            </IconButton>
        </Dropdown.Toggle>

  <Dropdown.Menu>
   
    { friendRequests.length >0  &&
   

        friendRequests.map(request => (
        <Dropdown.Item href="#/action-3">Request from: {request.userReceived}
        <Button variant="primary" onClick={()=>{}}>Accept</Button>
        <Button variant="danger" onClick={()=>{}}>Reject</Button>
        
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
