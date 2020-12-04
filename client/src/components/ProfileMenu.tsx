import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect } from "react";
import {Auth} from "aws-amplify";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProfileMenu:React.FC = ()=>{
    const [userInfo,setUserInfo] = useState<{username:string}>({username:""});
    useEffect(()=>{
        Auth.currentUserInfo().then(setUserInfo);
    },[]);
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout = async () => {
        await Auth.signOut({global:true});
        history.push("/admin");
      };

    return (
      <div>
        <Button aria-controls="profile-menu" aria-haspopup="true" onClick={handleClick}>
          {userInfo.username}
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
}

export default ProfileMenu