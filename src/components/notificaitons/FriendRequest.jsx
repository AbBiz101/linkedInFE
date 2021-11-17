import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'


import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function FriendRequest({ title, Icon, to }) {

 const fetchFriendRequests = async () => {
    const response = await fetch(`https://linkedin-backend-strive.herokuapp.com/request`);
    const data = await response.json();
    console.log(data)
  }
 

 useEffect(() => {
    fetchFriendRequests()
  
 },[])


  return (
    <>
      
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-basic">
        <IconButton className="header_icons"  to={to}>
                <Icon className="header_icons" src={Icon} />
            </IconButton>
        </Dropdown.Toggle>

  <Dropdown.Menu>
    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}


  </Dropdown.Menu>
</Dropdown>
    </>
  );
}

export default FriendRequest;
