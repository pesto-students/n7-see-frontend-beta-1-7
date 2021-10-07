import React from 'react';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import seelogo from '../../assets/images/seelogo.png';
import avatarimg from '../../assets/images/chil.png';
// var seelogo = require('../../assets/linux_logo.jpg');
import SearchSection from '../SearchSection';
import ProfileSection from 'src/container/Profile/ProfileSection';
import {Login} from '@material-ui/icons';
import '../../assets/autumn-in-november.regular.ttf'; 
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons';
const drawerWidth = 240;
const styles = (theme) => ({
  toolbarRoot: {
    paddingRight: 24,

  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  title: {
    flexGrow: 1,
  },
  titleStyle:{
    color:"#FF8367",
    fontSize:"24px",
    fontFamily:"AssistantRegular"
  },
  loginStyle:{
    color:"#fff",
    paddingLeft:"10px"
  },
  appBar: {
    backgroundColor: '#242A37',
    border: 'none !important',
    color: '#000',
    boxShadow: 'none'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    boxShadow: 'none',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  grow: {
    flexGrow: 1
},
headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
        background: theme.palette.secondary.dark,
        color: theme.palette.secondary.light
    }
},
boxContainer: {
    width: '228px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        width: 'auto'
    }
},
startAdornment: {
  fontSize: '1rem',
  color:"#CFD0D2"
},
});

const Header = (props) => {
  const { classes, handleToggleDrawer, open } = props;
  const u_id = sessionStorage.getItem('u_id');
  const navigate = useNavigate();
  console.log(open);
  const logout = () => {
    sessionStorage.removeItem('u_id');
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };
  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleDrawer}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >

          <MenuIcon />
        </IconButton> */}

        
        
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <Link to="/" style={{
           textDecoration: "none"
            }} className={classes.titleStyle}>
          Serve End
          </Link>
          </Typography>
          
        
        {/* <SearchSection theme="light"/> */}
        <IconButton>
           <Link to="/user/search">
              <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
              </Link>
            </IconButton>
        {
        u_id === null ? (
          <Link to="/login" style={{
            textDecoration: "none"
             }} className={classes.loginStyle}>
            <Login/>
            {/* <ListItem button>
          <ListItemText primary="Login/Signup" />
        </ListItem> */}
          </Link>
        ) : (
          <>
          <div className={classes.toolbarIcon}>
          <ProfileSection/>
          {/* <Link to="/user/profile">
            <Avatar alt="Remy Sharp" src={avatarimg} />
          </Link> */}
        </div>
          {/* <Button variant="contained" color="primary" onClick={() => logout()}>
            Logout
          </Button> */}
          </>
        )
      }

      

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
