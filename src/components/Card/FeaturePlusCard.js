import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import {
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight,
  Favorite,
  MoreVert,
  Chat,
  CallMadeOutlined,
  AutoAwesomeOutlined,
  CameraswitchOutlined
} from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import { collapseClasses, Chip } from '@material-ui/core';
import dashboardimg from '../../assets/images/dashboardimg.png';
import SearchCard from './SearchCard';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img11 from '../../assets/images/11.png';
import img21 from '../../assets/images/21.png';
import img31 from '../../assets/images/31.png';
import info1 from '../../assets/images/info1.png';
import info2 from '../../assets/images/info2.png';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: '40px',
    // border:"1px solid #000"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
    // border:"1px solid #000"
  },
  headerAvatar: {
    height: '10vh'
  },
  grid1Col1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border:"1px solid #000",
    padding: '40px'
  },
  grid1Col1Img: {
    height: '100%',
    width: '600px'
  },
  grid1Col2: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  grid1Col2Buyer: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  padding: {
    width: '500px',
    height: '200px',
    // marginTop: 10,
    // marginBottom: 20
    // border:"1px solid #000",
  },
  searchBox: {
    margin: '10px',
  },
  image: {
    width: 150,
    height: 150,
    //   border:"1px solid #000"
  },
  endStyle: {
    display: 'flex'
  }
}));

export default function FeaturePlusCard(props) {
  // console.log(props);
  const classes = useStyles();
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Card 
      style={{backgroundColor:"#18192A",
      borderRadius:"10px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      border:"1px solid #000",
      // backgroundImage: `url(${info1})`,
      // backgroundSize: "contain",
      // backgroundRepeat:"no-repeat"
      }}>
    <CardContent>
      <div style={{
        // border:"1px solid #fff",
        height:"200px",
        width:"100%",
        borderRadius:"10px",
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
        }}>
       
      </div>
      <div>
        adasd
      </div>
    
    </CardContent>

  </Card>

  );
}
