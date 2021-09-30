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
  CameraAlt,
  Chat,
  MoreVert

} from '@material-ui/icons';
import {
  IconAdjustmentsHorizontal, IconSearch, IconX, IconBrandHipchat
} from '@tabler/icons';
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
  Chip, Modal,
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
import axios from 'axios';
import avatarimg from '../../assets/images/avatar.jpg';
// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Redirect, useNavigate } from 'react-router-dom';
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
    minHeight: '10vh',
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
export default function InterestInDetail(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [contactData, setContactData] = useState(null);
  const handleClose = () => {
    props.manageViewInDetailFunc(false);
  };

  useEffect(() => {
    const getMyContactDetails = async () => {
      setLoadingIndicator(true);
      await axios.get(`http://localhost:4000/users/getcontactinfo/${props.selectedData.u_id}`).then((resp) => {
        console.log(resp);
        setContactData(resp.data.response);
        setLoadingIndicator(false);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });

      // setUser(result.data);
    };

    getMyContactDetails();

  }, []);
  return (
    <>
      <Grid container style={{ marginTop: '0px', backgroundColor: '#fcfcfc', padding: '0px 30px 60px 30px' }}>

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
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '24px' }}>{props.selectedData.productname}</div>

                </div>
                )}
                  subheader={(
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Rating
                    name="simple-controlled"
                    value={2}
                  />
                  <div style={{ color: '#fff', fontSize: '30px' }}>₹ {props.selectedData.cost}</div>
                </div>
                )}
                />
                <CardContent>
                  <Grid container spacing={2}>
                <Grid item md={8}>
                  <Grid container>
                    <Grid item md={4}>
                      <Avatar variant="rounded" style={{ height: '300px', width: '300px' }} />

                    </Grid>
                    <Grid item md={8}>
                      {props.selectedData.description}

                    </Grid>
                  </Grid>

                </Grid>
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
                    <CardContent>
                      <Grid container>
                        <Grid item md={12}>
                        <b> Contact Name</b>
                      </Grid>
                        <Grid item md={12}>
                        {contactData!==null?contactData.firstName+" "+contactData.lastName:""}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                        <b> Mobile Number</b>
                      </Grid>
                        <Grid item md={12}>
                        {contactData!==null?contactData.mobno:""}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                        <b> Email</b>
                      </Grid>
                        <Grid item md={12}>
                        {contactData!==null?contactData.email:""}
                        </Grid>

                      </Grid>
                      <br />
                      <Grid container>
                        <Grid item md={12}>
                        <b> Address</b>
                      </Grid>
                        <Grid item md={12}>
                        {contactData!==null?contactData.address:"No Address Added"}
                        </Grid>

                      </Grid>
                    </CardContent>
                  </Card>

                </Grid>

              </Grid>

                </CardContent>
                <Divider/>
          
          <div style={{display:"flex",justifyContent:"end",alignItems:"center",height:"7vh",paddingRight:"10px"}}>
            &nbsp;&nbsp;
              <Chip
                label="Close"
                onClick={() => handleClose()}
                style={{ backgroundColor: '#f50057',color:"#fff" }}
              />
            </div>
              </Card>

            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <ToastContainer />
    </>
  );
}
