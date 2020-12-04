import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from "../useStyles";
import { NavLink } from "react-router-dom";
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
interface Props{
    open:boolean;
    onExpand: ()=>void;
}
const Sidebar: React.FC<Props> = (props:Props)=>{
    const {open,onExpand} = props;
    const classes = useStyles();
    return (
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={onExpand}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <NavLink to={"/admin/visits"}><ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Kunden" />
    </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="QR- Codes" />
    </ListItem>
    </List>
      </Drawer>)
}

export default Sidebar;