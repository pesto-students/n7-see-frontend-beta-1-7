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
  ArrowForwardOutlined
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
import { Redirect, useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '10vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: '40px',
    // border:"1px solid #000"
  },
}));

export default function SmallCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const getDetails = (items) => {
    navigate('/user/details',{
      state: items
    })
  };
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  return (
    <Card 
      style={{backgroundColor:"#afdadb",
      color:"#fff",
      cursor:"pointer"
      
      }} onClick={() => getDetails(props.item)}>
    <CardContent>
      <Grid container>
           <Grid item md={6}>
      <Typography variant="p">
      {props.item!==""?props.item.category:""}
      </Typography>
      <br/>
      <Typography variant="h2">
      {props.item!==""?props.item.productname:""}
      </Typography>
          </Grid>
          <Grid item md={6} style={{
              backgroundImage: `url(${info1})`,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat"
          }}>
              <div style={{display:"flex",justifyContent:"flex-end"}}>
      <div style={{
        height:"1vh",
        borderRadius:"5px",
        width:"100px",

      }}>
          {/* <IconButton aria-label="add to favorites">
          <ArrowForwardOutlined />
        </IconButton> */}
              <div style={{
          width:"100%",

          borderRadius:"10px",
          border:"1px solid #fff",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center"
        }}>
         ₹{props.item!==""?props.item.cost:""}
          </div>
      </div>
      
      
        </div>
          </Grid>
      </Grid>

    </CardContent>
  </Card>

  );
}
