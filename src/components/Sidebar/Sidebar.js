import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import { mainListItems, secondaryListItems } from './listItems';
import seelogo from '../../assets/images/seelogo.png';
import avatarimg from '../../assets/images/avatar.jpg';

const drawerWidth = 240;

const styles = (theme) => ({
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
    border: 'none',
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
    border: 'none',
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
    height: '10vh'
  },
  listStyle: {
    padding: '0 8px',
  }
});

const Sidebar = (props) => {
  const { open, classes } = props;
  return (

    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
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
        {/* <List>{secondaryListItems}</List> */}
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


// import { useEffect } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   Drawer,
//   Hidden,
//   List,
//   Typography
// } from '@material-ui/core';
// import {
//   AlertCircle as AlertCircleIcon,
//   BarChart as BarChartIcon,
//   Lock as LockIcon,
//   Settings as SettingsIcon,
//   ShoppingBag as ShoppingBagIcon,
//   User as UserIcon,
//   UserPlus as UserPlusIcon,
//   Users as UsersIcon,
//   Repeat,
//   Copy,
//   Map
// } from 'react-feather';
// import NavItem from '../NavItem';
// import { mainListItems, secondaryListItems } from './listItems';
// const user = {
//   avatar: '/static/images/avatars/chil.png',
//   jobTitle: 'Adminstrator',
//   name: 'Super Admin'
// };

// const items = [
//   {
//     href: "/",
//     icon: BarChartIcon,
//     title: 'Dashboard'
//   },
//   {
//     href: "/user/request",
//     icon: UsersIcon,
//     title: 'Request'
//   },
//   {
//     href: "/user/interest",
//     icon: Repeat,
//     title: 'Interest'
//   },
//   {
//     href: "/user/complaint",
//     icon: Copy,
//     title: 'Complaint'
//   },
//   {
//     href: "/user/search",
//     icon: Map,
//     title: 'Search'
//   },
//   {
//     href: "/user/viewall",
//     icon: AlertCircleIcon,
//     title: 'View'
//   },
//   // {
//   //   href: '/app/customers',
//   //   icon: UsersIcon,
//   //   title: 'Customers'
//   // },
//   // {
//   //   href: '/app/products',
//   //   icon: ShoppingBagIcon,
//   //   title: 'Products'
//   // },
//   // {
//   //   href: '/app/account',
//   //   icon: UserIcon,
//   //   title: 'Account'
//   // },
//   // {
//   //   href: '/app/settings',
//   //   icon: SettingsIcon,
//   //   title: 'Settings'
//   // },
//   // {
//   //   href: '/login',
//   //   icon: LockIcon,
//   //   title: 'Login'
//   // },
//   // {
//   //   href: '/register',
//   //   icon: UserPlusIcon,
//   //   title: 'Register'
//   // },
//   // {
//   //   href: '/404',
//   //   icon: AlertCircleIcon,
//   //   title: 'Error'
//   // }
// ];

// const Sidebar = ({ onMobileClose, openMobile }) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (openMobile && onMobileClose) {
//       onMobileClose();
//     }
//   }, [location.pathname]);

//   const content = (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%'
//       }}
//     >
//       <Box
//         sx={{
//           alignItems: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//           p: 2
//         }}
//       >
//         <Avatar
//           component={RouterLink}
//           src={user.avatar}
//           sx={{
//             cursor: 'pointer',
//             width: 64,
//             height: 64
//           }}
//           to="/app/account"
//         />
//         <Typography
//           color="textPrimary"
//           variant="h5"
//         >
//           {user.name}
//         </Typography>
//         <Typography
//           color="textSecondary"
//           variant="body2"
//         >
//           {user.jobTitle}
//         </Typography>
//       </Box>
//       <Divider />
//       <Box sx={{ p: 2 }}>
//         <List>
//           {items.map((item) => (
//             <NavItem
//               href={item.href}
//               key={item.title}
//               title={item.title}
//               icon={item.icon}
//             />
//           ))}
//         </List>
//       </Box>
//       <Box sx={{ flexGrow: 1 }} />
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           m: 2,
//           p: 2
//         }}
//       >
//         Serve End Team
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       <Hidden lgUp>
//         <Drawer
//           anchor="left"
//           onClose={onMobileClose}
//           open={openMobile}
//           variant="temporary"
//           PaperProps={{
//             sx: {
//               width: 256
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       </Hidden>
//       <Hidden xlDown>
//         <Drawer
//           anchor="left"
//           open
//           variant="persistent"
//           PaperProps={{
//             sx: {
//               width: 256,
//               top: 64,
//               height: 'calc(100% - 64px)'
//             }
//           }}
//         >
//           {content}
//         </Drawer>
//       </Hidden>
//     </>
//   );
// };

// Sidebar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool
// };

// Sidebar.defaultProps = {
//   onMobileClose: () => {
//   },
//   openMobile: false
// };

// export default Sidebar;
