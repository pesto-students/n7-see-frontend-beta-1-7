import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
import {
  Avatar, ListItem, ListItemAvatar, ListItemText,
  CardHeader, collapseClasses,
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Input,
  LinearProgress, Chip, Modal,
  IconButton
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import HistoryCard from '../../components/Card/HistoryCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import { useLocation, Redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';

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
    height: '20vh',
    width: '20vh'
  },
  grid1Col1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  tabHeader: {
    backgroundColor: '#252F3E',
    color: '#fff'
  },
  headerStyle: {
    backgroundColor: '#252F3E',
    // minHeight: '20vh',
    color: '#fff'
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
};
export default function Detail(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [contactData, setContactData] = useState(null);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [pageEdit, setPageEdit] = useState(false);
  const location = useLocation();
  const [itemDetails, setItemDetails] = useState(null);
  const u_id = sessionStorage.getItem('u_id');
  console.log("asdsad",u_id)
  const [include,setInclude]=useState(false);
  useEffect(() => {
    const getMyContactDetails = async () => {
      console.log(itemDetails);
      setLoadingIndicator(true);
      await axios.get(`http://localhost:4000/users/getcontactinfo/${itemDetails.u_id}`).then((resp) => {
        console.log(resp);
        setContactData(resp.data.response);
        setLoadingIndicator(false);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });

      // setUser(result.data);
    };
    if (itemDetails != null) {
      setInclude( itemDetails.interest.length>0?itemDetails.interest.some(item=>item._id===u_id):false)
      getMyContactDetails();
    }
  }, [itemDetails]);

  useEffect(() => {
    //  console.log(location.pathname); // result: '/secondpage'// result: '?query=abc'
    //  console.log(location.state);
    setItemDetails(location.state);// result: 'some_value'
  }, [location]);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const categoryFunc = (value, setFieldValue) => {
    setFieldValue('category', value);
  };
  const expressInterestFunc = (r_id,u_id) => {
    console.info('You clicked the Chip.');
    const expressInterest = async () => {
      console.log(itemDetails);
      setLoadingIndicator(true);
      var expressreq={
        r_id:r_id,
        u_id:u_id
      }
      await axios.post(`http://localhost:4000/request/expressinterest`,expressreq).then((resp) => {
        console.log(resp);
        toast.success(resp.data.response.message, { autoClose: 3000, });
        setLoadingIndicator(false);
        navigate('/user/home')

      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };
    expressInterest(r_id,u_id);
    setPageEdit(true);
  };

  const cancelEdit = () => {
    setPageEdit(false);
  };

  return (
    <>
      <Grid container style={{ marginTop: '30px', backgroundColor: '#fcfcfc', padding: '0px 30px 60px 30px' }}>


        <Grid item md={12}>
          <Grid container spacing={2}>
        
            <Grid item md={12}>
              <Card>
                <CardHeader
                  className={classes.headerStyle}
                  avatar={(
                <Avatar sx={{ bgcolor: '#000' }} variant="rounded" aria-label="recipe">
                  R
                </Avatar>
                )}
                  title={(
                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                  <div style={{ fontSize: '24px' }}>{itemDetails != null ? itemDetails.productname : ''}</div>
                  {include?<IconButton aria-label="add to favorites">
                    <Favorite color="error"/>
                  </IconButton>:""
                  }
                </div>
                )}
                  subheader={(
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Rating
                    name="simple-controlled"
                    value={2}
                  />
                  <div style={{ color: '#fff', fontSize: '24px' }}>₹{itemDetails != null ? itemDetails.cost : ''}</div>
                </div>
                )}
                />
                <CardContent>
                  <Grid container spacing={2}>
                <Grid item md={12}>
                  <Grid container>
                    <Grid item md={4}>
                      <Avatar variant="rounded" style={{ height: '300px', width: '300px' }}
                        src={itemDetails!==null&&itemDetails.image!==undefined&&itemDetails.image.length>0?`http://localhost:4000/${itemDetails.image[0].filename}`:""} />

                    </Grid>
                    <Grid item md={8}>
                      {itemDetails != null ? itemDetails.description : ''}

                    </Grid>
                  </Grid>

                </Grid>
{/* 
                <Grid item md={4}>
                  <Card>
                    <CardHeader
                      className={classes.tabHeader}
                      title={(
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>Contact Info</div>
                        <div>
                            <Typography variant="h4">
                              <IconButton aria-label="chat">
                                <Chat style={{ color: '#fff' }} />
                              </IconButton>
                            </Typography>
                          </div>
                      </div>
                    )}
                    />
                    {
                  !loadingIndicator ? (
                    <CardContent>
                      <Grid container>
                        <Grid item md={12}>
                          <b> Contact Name</b>
                        </Grid>
                        <Grid item md={12}>
                          {contactData != null ? `${contactData.firstName} ${contactData.lastName}` : ''}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                          <b> Mobile Number</b>
                        </Grid>
                        <Grid item md={12}>
                          {contactData != null ? contactData.mobno : ''}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                          <b> Email</b>
                        </Grid>
                        <Grid item md={12}>
                          {contactData != null ? contactData.email : ''}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                          <b> Address</b>
                        </Grid>
                        <Grid item md={12}>
                          {contactData != null ? contactData.address : ''}
                        </Grid>

                      </Grid>
                    </CardContent>
                  )
                    : <Skeleton />
                }
                  </Card>

                </Grid> */}



              </Grid>

                </CardContent>
                {
                  !include&&(u_id!==undefined&&u_id!==null)&&(itemDetails!==null&&itemDetails.u_id!==u_id)?<>
                      <Divider/>
                 <div style={{display:"flex",justifyContent:"end",alignItems:"center",height:"7vh",paddingRight:"10px"}}>
                  <Chip
                      label="Express Interest"
                      onClick={() => expressInterestFunc(itemDetails._id,u_id)}
                      style={{ backgroundColor: '#ECA909', color:"#fff"}}
                      />
                 
                  </div>
                  </>:""
                }
            
              </Card>

            </Grid>
       
          </Grid>
        </Grid>

      </Grid>
      <ToastContainer />
    </>
  );
}
