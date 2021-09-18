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
  MenuBook
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
  withStyles
} from '@material-ui/core';
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
    height:'10vh'
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
    backgroundColor:"#f50057",
    color:"#fff"
  }
}));

export default function Complaint() {
  const classes = useStyles();
  const [categoryData,setCategoryData]=useState([{value:1,label:"category 1"},{value:2,label:"category 2"}])
  let history = useHistory();
  const [historyData,setHistoryData]=useState([]);
  const [loadingIndicator,setLoadingIndicator]=useState(false);
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
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const categoryFunc=(value,setFieldValue)=>{
    setFieldValue("category",value)
  }
  return (
<Fragment>
  <Grid container style={{marginTop:"30px",backgroundColor:"#fcfcfc",padding:"0px 30px 60px 30px"}}>
    <Grid item md={12} style={{display:"flex",justifyContent:"space-between",minHeight:"70px"}}>
      <div style={{display:"flex",alignItems:"center",fontSize:"24px"}}>
      <IconButton aria-label="add to favorites">
                          <MenuBook />
        </IconButton>  Complaint Box
      </div>
    </Grid>
    <Grid item md={12}>
      <Grid container spacing={2}>
        <Grid item md={6}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
                className={classes.tabHeader}
                avatar={
                  <Avatar sx={{ bgcolor: "#000" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Register New Complaint"
                subheader="September 14, 2016"
              />
            <CardContent>
            <Formik
                initialValues={{ productname: '', category: null,cost:'',description:''}}
                onSubmit={(values, { setSubmitting }) => {
                   setSubmitting(true);
                   console.log(values);
                   let valueCopy = JSON.parse(JSON.stringify(values));
                   valueCopy.category=values.category.label;
                   valueCopy.email=sessionStorage.getItem('email');
                   valueCopy.username=sessionStorage.getItem('username');
                   console.log(valueCopy);
                   axios.post("http://localhost:4000/request",valueCopy,
                      // {
                      //   headers: {
                      //     'Access-Control-Allow-Origin': '*',
                      //     'Content-Type': 'application/json',
                      //   }
                      // }, 
                    ).then((resp) => {
                      console.log(resp);

                      setSubmitting(false);
                      if(resp.status==200)
                      {
                        console.log("resp",resp);
                        toast.success(resp.data.message,{autoClose: 3000,});
                        history.push("/");
                      }
                      else{
                        toast.error(resp.data.message,{autoClose: 3000,});
                        console.log(resp);
                      }
                      
                    }
                    );
                }}

                validationSchema={
                  Yup.object().shape({
                    productName: Yup.string(),
                      //.required('Required'),
                    category: Yup.object(),
                    cost:Yup.string(),
                    description:Yup.string()
                      //.required('Required'),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    setFieldValue
                  } = props;
                  return (
        <Form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>

              <Field
                  component={TextField}
                  error={errors.subject && touched.subject}
                  label="Subject"
                  name="subject"
                  id="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.subject && touched.subject) && errors.subject}
                  margin="normal"
                  variant="outlined" 
                  fullWidth
                />
            </Grid>
              <Grid item xs={12} sm={12}>
              <div style={{border:"1px solid #fcfcfc"}}>
              <Field
                type="textarea" 
                rows="29"
                maxLength="1000"
                name="description"
                id="description"
                placeholder="Description"
                value={values.description}
                variant="outlined" 
                as={Input}
                multiline
                className="form-control"
                invalid={errors.description && touched.description}
                fullWidth
              />
                </div>
  
              </Grid>
            

          </Grid>
          
          <Grid container spacing={2}>
          {isSubmitting && <LinearProgress />}
          <Grid item xs={12}>
          <Button type="submit" fullWidth color="primary" variant="contained" disabled={isSubmitting}>
                          Register New Complaint
                        </Button>
          </Grid>

          </Grid> 
        </Form>
            );
            }}
          </Formik>
    
            </CardContent>
            </Card>

        </Grid>

        <Grid item md={6} style={{minHeight:"80px"}}>
               <Card sx={{ maxWidth: 345 }}>
               <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#000" }} aria-label="recipe">
                    L
                  </Avatar>
                }
                title="Latest Complaints"
                subheader="September 14, 2016"
              />
                  <CardContent>
                  <Divider/>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar >
                          <IconButton aria-label="add to favorites">
                          <FileCopy />
                        </IconButton>
                        
                        </Avatar>
                      </ListItemAvatar>
                        <ListItemText primary="dfgdddddddddddddddddddg dffffffffffffffffffd fgdf sdfgdfgd
                        f dfg dfg dfg dfg dfgdfg dfgdfg dfg dfg dfgdfg dfghdfg dfg dfg dfg dfg dfg dfg
                        sdfsdfsd sdf sdf sdf sdfd s sdfsd fdsf sdfd sdf dsfsdf sdf sdfsdf df sdfsdfsdfsd
                        ffsd ffdsf"
                        secondary="Jan 9, 2014" />
                          <IconButton
                                  edge="end"
                                  size="small"
                                  >
                          <Delete />
                          </IconButton>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                        
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {/* <BeachAccessIcon /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
              
                  </List>
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