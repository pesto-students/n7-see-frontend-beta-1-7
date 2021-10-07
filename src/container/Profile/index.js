import React, { Fragment, useEffect, useState,useRef } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
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
  CameraAlt
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
  LinearProgress,
  Chip, Modal
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Redirect, useNavigate } from 'react-router-dom';
// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';
import UpdateProfile from './updateProfile';
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
export default function Profile() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [pageEdit, setPageEdit] = useState(false);
  const [genderData,setGenderData]=useState([{value:"1",label:"Male"},{value:"1",label:"Female"}])
  const [myProfileData,setMyProfileData]=useState(null);
  const [cityData, setCityData] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    const getMyProfile = async () => {
      setLoadingIndicator(true);
      // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
      const u_id = sessionStorage.getItem('u_id');
      await axios.get(`http://localhost:4000/users/getmyprofile/${u_id}`).then((resp) => {
        console.log(resp.data);
        setMyProfileData(resp.data[0]);
        setLoadingIndicator(false);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });

      // setUser(result.data);
    };

    async function getCity() {
      setCityLoading(true);
      axios.get("http://localhost:4000/admin/getcity").then((resp)=>{
        const options = resp.data.response.map(function(row) {
          return { value : row._id, label : row.city }
       })
        console.log(resp)
        
        setCityData(options)
        setCityLoading(false);
      })
    }
    getMyProfile();
    getCity()
  }, []);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleClick = () => {
    console.info('You clicked the Chip.');
    setPageEdit(true);
  };

  const cancelEdit = () => {
    setPageEdit(false);
  };
  const user = {
    avatar: '/static/images/avatars/chil.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  return (
    <>
      <Grid container style={{ marginTop: '30px', backgroundColor: '#fcfcfc', padding: '0px 30px 60px 30px' }}>
        {/* <Grid item md={12} style={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
            <IconButton aria-label="add to favorites">
              <MenuBook />
            </IconButton>
            {' '}
            My Profile
          </div>
        </Grid> */}
        {
      !pageEdit ? (
        
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Card>
                {/* <CardHeader
                  avatar={(
                    <Avatar sx={{ bgcolor: '#000' }} className={classes.headerAvatar} aria-label="recipe">
                      R
                </Avatar>
                )}
                  title={(
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                      <div>{myProfileData!==null?myProfileData.firstName+" "+myProfileData.lastName:""}</div>
                   
                    </div>
                )}
                  // subheader={"Created on "+ myProfileData!==null?myProfileData.createddate:""}
                /> */}
                <CardHeader
                  title="My Profile"
                />
                <Divider/>
                <CardContent>
                 
                  <Grid container spacing={2}>
                  <Grid item md={4}>
                  <Grid container justifyContent="center">
                    <Card>
                    <CardHeader
                              avatar={(
                                <Avatar sx={{ bgcolor: '#000' }} className={classes.headerAvatar} aria-label="recipe"  src={myProfileData!==null&&myProfileData.image!==""?`http://localhost:4000/${myProfileData.image}`:user.avatar}
                                title={<div>{myProfileData!==null?myProfileData.firstName+" dsfsdf"+myProfileData.lastName:""}</div>}
                                subheader=  { myProfileData!==null?myProfileData.city!==undefined?myProfileData.city:"":""}
                                >
                    </Avatar>
                      )}
                            />
                    <Divider/>
                    <CardContent>
                    <div style={{textAlign:"center"}}>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h3"
                    >
                   {myProfileData!==null?myProfileData.firstName+" "+myProfileData.lastName:""}
                    </Typography>
                    {/* <Chip
                      label="Edit Profile"
                      onClick={() => handleClick()}
                      style={{ backgroundColor: '#ECA909',color:"#fff"}}
                    /> */}

                    <Button
                      color="primary"
                      fullWidth
                      variant="contained"
                      onClick={() => handleClick()}
                    >
                     Edit Profile
                    </Button>
                    </div>
                    </CardContent>
                    </Card>

                  </Grid>
                  

                  </Grid>
                    <Grid item md={8}>
                      <Card>
                    <CardHeader
                      className={classes.tabHeader}
                      title="General Information"
                    />
                    <CardContent>
                      <Grid container>
                      <Grid item md={12}>
                          <b> Gender</b>
                        </Grid>
                      <Grid item md={12}>
                     { myProfileData!==null?myProfileData.gender!==undefined?myProfileData.gender:"...":"..."}
                        </Grid>

                      </Grid>
                      <Grid container>
                      <Grid item md={12}>
                          <b> Mobile Number</b>
                        </Grid>
                      <Grid item md={12}>
                      { myProfileData!==null?myProfileData.mobno:""}
                        </Grid>

                    </Grid>
                      <br />
                      <Grid container>
                      <Grid item md={12}>
                          <b> Email</b>
                        </Grid>
                      <Grid item md={12}>
                      { myProfileData!==null?myProfileData.email:""}
                        </Grid>

                    </Grid>
                      <br />
                      <Grid container>
                      <Grid item md={12}>
                          <b> Address</b>
                        </Grid>
                      <Grid item md={12}>
                      { myProfileData!==null?myProfileData.address:""}
                        </Grid>

                    </Grid>
                    <br/>
                    <Grid container>
                      <Grid item md={12}>
                          <b> City</b>
                        </Grid>
                      <Grid item md={12}>
                      { myProfileData!==null?myProfileData.city!==undefined?myProfileData.city:"...":"..."}
                        </Grid>

                    </Grid>
                   
                   
                      <br />


                    </CardContent>
                  </Card>

                    </Grid>
                 
                  </Grid>

                </CardContent>
                  {/* <Divider/> */}

                  {/* <div style={{display:"flex",justifyContent:"end",alignItems:"center",height:"7vh",paddingRight:"10px"}}> */}
                  {/* <Chip
                      label="Edit Profile"
                      onClick={() => handleClick()}
                      style={{ backgroundColor: '#ECA909',color:"#fff"}}
                    /> */}
                  &nbsp;&nbsp;
                    {/* <Chip
                      label="Close"
                      onClick={() => handleClose()}
                      style={{ backgroundColor: '#f50057',color:"#fff" }}
                    /> */}
                  {/* </div> */}

              </Card>

            </Grid>

          </Grid>
        </Grid>
     
     )
        : 
        
        (
          <Grid item md={12}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <UpdateProfile setPageEdit={setPageEdit} myProfileData={myProfileData}/>
              </Grid>
              <ToastContainer />
            </Grid>
          </Grid>
        )

    }



      </Grid>
     
    </>
  );
}
