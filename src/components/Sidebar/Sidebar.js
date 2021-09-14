import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import { mainListItems, secondaryListItems } from './listItems';
import Avatar from '@material-ui/core/Avatar';
import seelogo from '../../assets/images/seelogo.png';
import avatarimg from '../../assets/images/avatar.jpg';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  
  },
  toolbar: {
    paddingRight: 24, 
    // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'none',
    boxShadow: 'none',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    border:'none',
    boxShadow: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  headerAvatar: {
    height:'10vh'
},
listStyle:{
  padding: '0 8px',
}
});

const Sidebar = props => {
  const { open, classes } = props;
  return (

    <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    }}
    open={open}
    // style={{boxShadow: 'none'}}
  >
    <div className={classes.toolbarIcon}>
    <img src={seelogo} className={classes.headerAvatar} />

    {/* <Avatar src={seelogo} /> */}
    {/* <img src={seelogo}/> */}
    
      {/* <IconButton onClick={handleToggleDrawer}>
        <ChevronLeftIcon />
      </IconButton> */}
    </div>
    {/* <Divider /> */}
    <div className={classes.listStyle}>
    <List>{mainListItems}</List>
    {/* <Divider /> */}
    <List>{secondaryListItems}</List>
    </div>

    <div className={classes.toolbarIcon}>
      
    <Avatar alt="Remy Sharp" src={avatarimg}/>
    </div>
  </Drawer>



    // <Drawer
    //   variant="permanent"
    //   classes={{
    //     paper: classNames(
    //       classes.drawerPaper,
    //       !open && classes.drawerPaperClose
    //     )
    //   }}
    //   open={open}
    // >
      // <List>
      //   <Link to="/">
      //     <ListItem button>
      //       <ListItemIcon>
      //         <DashboardIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="Dashboard" />
      //     </ListItem>
      //   </Link>
      //   <Link to="/setting">
      //     <ListItem button>
      //       <ListItemIcon>
      //         <SettingsIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="Settings" />
      //     </ListItem>
      //   </Link>
      // </List>
    // </Drawer>
  
  
  );
};

export default withStyles(styles)(Sidebar);
