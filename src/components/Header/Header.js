import React from "react";
import { Link,useHistory,Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import classNames from "classnames";
import seelogo from '../../assets/images/seelogo.png';
import Avatar from '@material-ui/core/Avatar';
import avatarimg from '../../assets/images/avatar.jpg';
// var seelogo = require('../../assets/linux_logo.jpg');
import SearchSection from '../SearchSection';
const drawerWidth = 240;
const styles = theme => ({
  toolbarRoot: {
    paddingRight: 24
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  title: {
    flexGrow: 1
  },
  appBar: {
   backgroundColor:"#fff",
   border:'none !important',
   color:'#000',
   boxShadow: 'none'
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
});

const Header = props => {
  const { classes, handleToggleDrawer,open } = props;
  let username=sessionStorage.getItem('username')
  let history = useHistory();
  console.log(open);
  const logout=()=>{
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    history.push("/login");
  }
  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>

      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleToggleDrawer}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        
        {/* <MenuIcon /> */}
      </IconButton>
     
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
      {/* <SearchSection theme="light" /> */}
      Serve End
      </Typography>
      {
        username===null? <Link to="/login">
        <Button variant="contained" color="primary">
            Login/Signup
        </Button>
        {/* <ListItem button>
          <ListItemText primary="Login/Signup" />
        </ListItem> */}
        </Link>:<Button variant="contained" color="primary" onClick={()=>logout()}>
            Logout
        </Button>
      }

      <div className={classes.toolbarIcon}>
      
      <Avatar alt="Remy Sharp" src={avatarimg}/>
      </div>

      {/* <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton> */}
    </Toolbar>
  </AppBar>
    
    // <AppBar position="absolute" 
    // classes={{
    //   paper: classNames(
    //     classes.appBar, open && classes.appBarShift
    //   )
    // }}

    // // className={clsx(classes.appBar, open && classes.appBarShift)}
    // >
    //   <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
    //     <IconButton
    //       color="inherit"
    //       aria-label="Open drawer"
    //       onClick={handleToggleDrawer}
    //       className={classes.menuButton}
    //     >
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography
    //       variant="h6"
    //       color="inherit"
    //       noWrap
    //       className={classes.title}
    //     >
    //       Dashboard
    //     </Typography>
    //     <IconButton color="inherit">
    //       <Badge badgeContent={4} color="secondary">
    //         <NotificationsIcon />
    //       </Badge>
    //     </IconButton>
    //     <IconButton color="inherit">
    //       <PersonIcon />
    //     </IconButton>
    //   </Toolbar>
    // </AppBar>
 
 
 );
};

export default withStyles(styles)(Header);
