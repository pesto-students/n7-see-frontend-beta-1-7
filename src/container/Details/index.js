import React, { Fragment,useEffect,useState } from "react";
import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight,
  Favorite,
  FileCopy,
  Delete,
  MenuBook,
  CameraAlt,
  Chat
} from '@material-ui/icons';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import HistoryCard from '../../components/Card/HistoryCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import { CardHeader, collapseClasses } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Input,
  LinearProgress,
  makeStyles,
  withStyles,Chip,Modal,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import RSelect from "../../components/Select/RSelect";
import { Redirect, useHistory } from 'react-router-dom';
import { Skeleton } from "@material-ui/lab";
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
    marginLeft:"40px",
    //border:"1px solid #000"
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
    height:'20vh',
    width:'20vh'
  },
  grid1Col1:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  grid1Col1Img:{
    height: "100%",
    width: "600px"
  },
  grid1Col2:{
    backgroundColor:"#F9F9FB",
    marginRight:'10px',
    // border:"1px solid #000",
    borderRadius: "0px 5px 5px 0px",
    padding:"40px"
  },
  grid1Col2Buyer:{
    backgroundColor:"#F9F9FB",
    marginRight:'10px',
    // border:"1px solid #000",
    borderRadius: "0px 5px 5px 0px",
    padding:"40px"
  },
  tabHeader:{
    backgroundColor:"#252F3E",
    color:"#fff"
  },
  headerStyle:{
    backgroundColor:"#252F3E",
    minHeight:"20vh",
    color:"#fff"
  }
}));


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export default function Details(props) {
  const classes = useStyles();
  const [categoryData,setCategoryData]=useState([{value:1,label:"category 1"},{value:2,label:"category 2"}])
  let history = useHistory();
  const [historyData,setHistoryData]=useState([]);
  const [loadingIndicator,setLoadingIndicator]=useState(false);
  const [pageEdit,setPageEdit]=useState(false)
  const location = useLocation();
  const [itemDetails,setItemDetails]=useState(null);
  useEffect(()=>{
    const getMyHistory = async () => {
      setLoadingIndicator(true);
      // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
      let email=sessionStorage.getItem('email');
      await axios.post('http://localhost:4000/request/history',{email:email}).then((resp)=>{
        console.log(resp.data.response)
        setHistoryData(resp.data.response);
        setLoadingIndicator(false);
      }).catch(e=>{
        setLoadingIndicator(false);
        toast.error("Something Went Wrong",{autoClose: 3000,});
       });
       
        // setUser(result.data);
    };
    
    getMyHistory()
  },[])



  useEffect(() => {
    //  console.log(location.pathname); // result: '/secondpage'// result: '?query=abc'
    //  console.log(location.state);
     setItemDetails(location.state)// result: 'some_value'
  }, [location]);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const categoryFunc=(value,setFieldValue)=>{
    setFieldValue("category",value)
  }
  const handleClick = () => {
    console.info('You clicked the Chip.');
    setPageEdit(true);
  }

  const cancelEdit = () => {
    setPageEdit(false);
  };
  
  return (
<Fragment>
  <Grid container style={{marginTop:"30px",backgroundColor:"#fcfcfc",padding:"0px 30px 60px 30px"}}>

      <Grid item md={12}>
      <Grid container spacing={2}>
        <Grid item md={12}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
                className={classes.headerStyle}
                avatar={
                  <Avatar sx={{ bgcolor: "#000" }} variant="rounded" aria-label="recipe">
                    R
                  </Avatar>
                }
                title={
                  <div style={{display:"flex",justifyContent:"space-between",}}>
                    <div style={{fontSize:"24px"}}>{itemDetails!=null?itemDetails.productname:""}</div>
                    <Chip
                      label="Express Interest"
                      onClick={()=>handleClick()}
                      style={{backgroundColor:"#ECA909"}}
                    />
                  </div>
                }
                subheader={
                  <div>
                  <Rating
                    name="simple-controlled"
                    value={2}
                  />
                  <div style={{color:"#fff",fontSize:"24px"}}>₹ 200</div>
                  </div>
                }
              />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={8}>
                <Grid container>
                  <Grid item md={4}>
                      <Avatar variant="rounded" style={{height:"300px",width:"300px"}}>

                      </Avatar>
              
                  </Grid>
                  <Grid item md={8}>
                {itemDetails!=null?itemDetails.description:""}
              
                  </Grid>
                </Grid>
         
                </Grid>
                <Grid item md={4}>
                <Card>
                <CardHeader className={classes.tabHeader}
                    title={
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div>Contact Info</div>
                        <div>
                        <Typography variant="h4" > 
                          <IconButton aria-label="chat">
                          <Chat style={{color:"#fff"}}/>
                      </IconButton>
                      </Typography>
                        </div>
                      </div>
                    }
                />
                <CardContent>
                <Grid container>
                    <Grid item md={12}>
                      <b> Contact Name</b>
                    </Grid>
                    <Grid item md={12}>
                     aa
                    </Grid>

                  </Grid>
                  <br/>
                  <Grid container>
                    <Grid item md={12}>
                      <b> Mobile Number</b>
                    </Grid>
                    <Grid item md={12}>
                     99999999
                    </Grid>

                  </Grid>
                  <br/>
                  <Grid container>
                    <Grid item md={12}>
                      <b> Email</b>
                    </Grid>
                    <Grid item md={12}>
                       a@a.com
                    </Grid>
                    

                  </Grid>
                  <br/>
                  <Grid container>
                    <Grid item md={12}>
                      <b> Address</b>
                    </Grid>
                    <Grid item md={12}>
                    Ut pharetra luctus est quis sodales. 
                    Duis nisi tortor.
                    </Grid>

                  </Grid>
                </CardContent>
               </Card>
              
                </Grid>
             
             </Grid>
               
            </CardContent>
            </Card>

        </Grid>
      </Grid>
    </Grid>

   

  </Grid>
  <ToastContainer />
  </Fragment>
  );
};