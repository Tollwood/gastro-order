
import { AppBar, Badge, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../useStyles";
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ProfileMenu from "./ProfileMenu";
interface Props {
    open: boolean,
    onSidebarOpen: ()=>void
}
const Header: React.FC<Props> = (props: Props)=>{
    const {open, onSidebarOpen} = props;
    const classes = useStyles();
    
    return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={onSidebarOpen}
      className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
    >
      <MenuIcon />
    </IconButton>
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
      Dashboard
    </Typography>
    <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <ProfileMenu/>
  </Toolbar>
</AppBar>
    );
}

export default Header;