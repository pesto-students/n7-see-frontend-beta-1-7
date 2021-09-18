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
  ControlCamera
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
  withStyles,Chip,Modal 
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
export default function NewRequest(props) {
  const classes = useStyles();
  
  const [categoryData,setCategoryData]=useState([{value:1,label:"category 1"},{value:2,label:"category 2"}])
  let history = useHistory();
  const [historyData,setHistoryData]=useState([]);
  const [loadingIndicator,setLoadingIndicator]=useState(false);
  const [pageEdit,setPageEdit]=useState(false)
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


  const cancelAddRequest = () => {
    props.setAddNewRequest(false)
  };
  
  return (
<Fragment>
  <Grid container style={{marginTop:"30px",backgroundColor:"#fcfcfc",padding:"0px 30px 60px 30px"}}>
    <Grid item md={12} style={{display:"flex",justifyContent:"space-between",minHeight:"70px"}}>
      <div style={{display:"flex",alignItems:"center",fontSize:"24px"}}>
      <IconButton aria-label="add to favorites">
                          <MenuBook />
        </IconButton> My Request
      </div>
    </Grid>
    <Grid item md={12}>
    <Grid container spacing={2}>
      <Grid item md={12}>
      <Card>
                <CardHeader className={classes.tabHeader}
                    title="Add New Request"
                />
      <CardContent>
      <Formik
                initialValues={{ productname: '', category: null,cost:'',city:null,description:''}}
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
            <Grid item md={6}>
              <Grid container spacing={2}>
                  <Grid item xs={6} sm={6}>
                  <Field
                  component={TextField}
                  error={errors.productname && touched.productname}
                  label="Product Name"
                  name="productname"
                  id="productname"
                  value={values.productname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.productname && touched.productname) && errors.productname}
                  margin="normal"
                  variant="outlined" 
                  fullWidth
                />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <Field
                      component={TextField}
                      label="Cost"
                      name="cost"
                      id="cost"
                      error={errors.cost && touched.cost}
                      value={values.cost}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.cost && touched.cost) && errors.cost}
                      margin="normal"
                      variant="outlined" 
                      type="cost"
                      maxLength="9"
                      fullWidth
                    />
                  </Grid>  
                  <Grid item xs={6} sm={6}>
                  <Field
                              component={RSelect}
                              name="category"
                              id="category"
                              value={values.category}
                              onChange={ev => categoryFunc(ev, setFieldValue)}
                              options={categoryData}
                              placeholder="--Select--"
                              error={errors.category}
                              touched={touched.category}
                              // isLoading={categoryLoading}
                              isClearable={true}
                              />  
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <Field
                              component={RSelect}
                              name="city"
                              id="city"
                              value={values.city}
                              onChange={ev => categoryFunc(ev, setFieldValue)}
                              options={categoryData}
                              placeholder="--Select--"
                              error={errors.city}
                              touched={touched.city}
                              // isLoading={categoryLoading}
                              isClearable={true}
                              />  
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Field
                      type="textarea" 
                      rows="12"
                      maxLength="201"
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={values.description}
                      as={Input}
                      multiline
                      className="form-control"
                      invalid={errors.description && touched.description}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Grid container spacing={2} justifyContent="flex-end">
                    {isSubmitting && <LinearProgress />}
                    <Grid item xs={4}>
                      <Button type="submit" fullWidth color="primary" variant="contained" disabled={isSubmitting}>
                                      Submit New Request
                                    </Button>
                      </Grid>

                      <Grid item xs={2}>
                      <Button type="button" fullWidth color="default" variant="contained" onClick={()=>cancelAddRequest()}>
                          Cancel
                        </Button>
                      </Grid>

                   </Grid> 



                  </Grid>
                

           
              </Grid>
          </Grid>
           <Grid item md={6} style={{width:"25px",height:"25px"}}>
             <Grid container justifyContent="center">
             <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#000" }} className={classes.headerAvatar} aria-label="recipe">
                   <IconButton aria-label="add to favorites">
                          <CameraAlt />
                    </IconButton>
                  </Avatar>
                }
                title={
                  <IconButton aria-label="add to favorites">
                          <ControlCamera />
                    </IconButton>
                }
              />
             </Grid>
             <Grid container justifyContent="center">
      
             </Grid>

         
          </Grid>

            
            

          </Grid>
          <Grid container spacing={2} justifyContent="flex-end">
              show

          </Grid> 
        </Form>
            );
            }}
          </Formik>
          
          
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