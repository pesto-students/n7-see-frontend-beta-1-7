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
  ControlCamera,
  HighlightOffOutlined
  
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
  LinearProgress,CircularProgress,
  Chip, Modal
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
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Redirect, useNavigate } from 'react-router-dom';
// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';
import Upload from './Upload';
import { myApi,myApiS3 } from 'src/Api';
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
    backgroundColor: '#010002',
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
export default function NewRequest(props) {
  const classes = useStyles();
  const [categoryData, setCategoryData] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);
  // const [categoryData, setCategoryData] = useState([{ value: 1, label: 'category 1' }, { value: 2, label: 'category 2' }]);
  const [cityData, setCityData] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);
  const history = useNavigate();
  const [historyData, setHistoryData] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [loading,setLoading]=useState(false);
  const [pageEdit, setPageEdit] = useState(false);
  const [myFile,setMyFile]=useState(null);
  const [showImage,setShowImage]=useState([]);
  var result;
  useEffect(() => {

    async function getCategory() {
      setCategoryLoading(true);
      axios.get(`${myApi}/admin/getcategory`).then((resp)=>{
        const options = resp.data.response.map(function(row) {
          return { value : row._id, label : row.category }
       })
        //console.log(resp)
        setCategoryData(options)
        setCategoryLoading(false);
      })
    }

    async function getCity() {
      setCityLoading(true);
      axios.get(`${myApi}/admin/getcity`).then((resp)=>{
        const options = resp.data.response.map(function(row) {
          return { value : row._id, label : row.city }
       })
        //console.log(resp)
        setCityData(options)
        setCityLoading(false);
      })
    }
    getCategory()
    getCity()
  }, []);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const categoryFunc = (value, setFieldValue) => {
    setFieldValue('category', value);
  };

  const cityFunc = (value, setFieldValue) => {
    setFieldValue('city', value);
  };

  const cancelAddRequest = () => {
    props.setAddNewRequest(false);
  };
  const user = {
    avatar: '/static/images/avatars/ins.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };


    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);
  
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      props.handleFile(fileUploaded);
    };



  
  const onChangeHandler=(event,setFieldValue)=>{
    // setFieldValue("file",event.target.files[0])
    setMyFile(event.target.files[0]);
    //console.log(event.target.files[0])
}

const onClickHandler = () => {
  setLoadingIndicator(true)
  const data = new FormData()
  //console.log(myFile)
  if(myFile!==null)
  {
  data.append('file', myFile)
  axios.post(`${myApi}/request/upload`, data)
    .then(res => { 
      // console.log("SDfdsf",res.data)
      var result=res.data;
      result.filename=res.data.originalname;
      setShowImage([...showImage,result]);
      setMyFile(null)
      //console.log(`${myApi}/${res.data.filename}`)
      setLoadingIndicator(false)
    })
  }
  else{
     toast.error("Please Upload atleast one image", { autoClose: 3000, });
     setLoadingIndicator(false)
  }
 
}

const removeImageFromList=(index)=>{
  var showImageTemp=[...showImage]
  showImageTemp.splice(index, 1);
  setShowImage(showImageTemp);
    
}
//console.log()

  return (
    <>
      {!loading?<div>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      {/* <img src={`${myApi}/1633271922833-info1.png`} /> */}
      <Grid container style={{ padding: '0px 30px 60px 30px' }}>
        {/* <Grid item md={12} style={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
            <IconButton aria-label="add to favorites">
              <MenuBook />
            </IconButton>
            {' '}
            My Request
          </div>
        </Grid> */}
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Card>
                <CardHeader
                  className={classes.tabHeader}
                  title="Add New Request"
                />
                <CardContent>
                  <Formik
                initialValues={{
                  productname: '', category: null, cost: '', city: null, description: '',file:''
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // const data = new FormData() 
                  // //console.log("ADAD",myFile)
                  // data.append('file', myFile)
                  // data.append('category', values.category.label)
                  // data.append('productname', values.productname)
                  // data.append('cost', values.cost)
                  // data.append('description', values.description)
                  // data.append('city', values.city.label)
                  // data.append('email', sessionStorage.getItem('email'))
                  // data.append('username', sessionStorage.getItem('username'))
                  // data.append('u_id', sessionStorage.getItem('u_id'))
                  setLoading(true)
                  setSubmitting(true);
                  //console.log(values);
                  const valueCopy = JSON.parse(JSON.stringify(values));
                  valueCopy.category = values.category.label;
                  valueCopy.city = values.city.label;
                  valueCopy.email = sessionStorage.getItem('email');
                  valueCopy.username = sessionStorage.getItem('username');
                  valueCopy.u_id=sessionStorage.getItem('u_id');
                  valueCopy.image=showImage;
                  //console.log(valueCopy);
                  axios.post(`${myApi}/request`, valueCopy,
                    // {
                    //   headers: {
                    //     'Access-Control-Allow-Origin': '*',
                    //     'Content-Type': 'application/json',
                    //   }
                    // },
                  ).then((resp) => {
                    //console.log(resp);

                    setSubmitting(false);
                    if (resp.status == 200) {
                      //console.log('resp', resp);
                      setLoading(false)
                      toast.success(resp.data.message, { autoClose: 3000, });
                      setTimeout(() => {history("/")}, 2000);
                      
                    } else {
                      setLoading(false)
                      toast.error(resp.data.message, { autoClose: 3000, });
                      //console.log(resp);
                    }
                    
                  });
                }}

                validationSchema={
                  Yup.object().shape({
                    productname: Yup.string().required('Required'),
                    category: Yup.object().nullable().required('Required'),
                    city: Yup.object().nullable().required('Required'),
                    cost: Yup.number().positive().typeError("Must be positive Integer").required('Required'),
                    description: Yup.string()
                  })
}
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
                      
                    <Grid container spacing={1} justifyContent="space-between">
                      <Grid item md={6}>
                      <Grid container spacing={2}>
                      <Grid item xs={6} sm={6}>
                      <Field
                                component={RSelect}
                                name="category"
                                id="category"
                                value={values.category}
                                onChange={(ev) => categoryFunc(ev, setFieldValue)}
                                options={categoryData}
                                placeholder="--Select--"
                                error={errors.category}
                                touched={touched.category}
                              // isLoading={categoryLoading}
                                isClearable
                              />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Field
                                component={RSelect}
                                name="city"
                                id="city"
                                value={values.city}
                                onChange={(ev) => cityFunc(ev, setFieldValue)}
                                options={cityData}
                                placeholder="--Select--"
                                error={errors.city}
                                touched={touched.city}
                                isLoading={cityLoading}
                                isClearable
                              />
                    </Grid>
                     
                      <Grid item xs={6} sm={6}>

                      {/* <TextField
                  error={Boolean(touched.productname && errors.productname)}
                  fullWidth
                  helperText={touched.productname && errors.productname}
                  label="Product Name"
                  margin="normal"
                  name="productname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.productname}
                  variant="outlined"
                /> */}

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
                                style={{border:"1px solid #F1F1F1",padding:"3px"}}
                                fullWidth
                              />
                    </Grid>
                      

                    </Grid>
                   
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      md={6}
                      xs={12}
                    >
                        <Card {...props}>
                        <CardContent>
                          <Box
                            sx={{
                              alignItems: 'center',
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            {
                              !loadingIndicator? <Avatar
                              src={myFile!==null?URL.createObjectURL(myFile):user.avatar}
                              variant="rounded"
                              sx={{
                                height: 250,
                                width: 250
                              }}
                              onClick={()=>handleClick()}
                            />:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
                            }
                  
                        
                          
                        {/* <Button onClick={handleClick}>
        Upload a file
      </Button> */}
      {/* <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      /> */}

                          </Box>
                        </CardContent>
                        <Divider />
                        <CardActions>
                          <Button
                            color="primary"
                            fullWidth
                            variant="text"
                            onClick={()=>onClickHandler()}
                          >
                            Upload picture
                          </Button>
                          <input type="file" style={{display: 'none'}}  ref={hiddenFileInput} name="file" onChange={(ev)=>onChangeHandler(ev,setFieldValue)}/>
                        </CardActions>
                      </Card>
                      <br/>
                      <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                      {
                        showImage.length>0? showImage.map((img,i) => (
                          <Grid item md={3} key={i} justifyContent="center" alignContent="center" style={{
                            // margin:"5px",
                            border:"1px solid #000"
                          }}>
                          {/* https://pesto-see-backend.s3.us-east-2.amazonaws.com/1643275404033-71D9ImsvEtL._UY500_.jpg */}
                          <img src={`${myApiS3}/${img.filename}`} width="100" height="100"/>
                          {/* <img src={`${myApi}/${img.filename}`} width="100" height="100"/> */}
                          <IconButton style={{color:"red"}} onClick={()=>removeImageFromList(i)}><HighlightOffOutlined/></IconButton>
                          </Grid>
                        )):<Grid item md={12}>No Image Added</Grid>
                      }

                      </Grid>
                     
                    </Grid>

                    </Grid>
                       <br/>
                      <Divider />
                      <br/>
                      <Grid item xs={12} sm={12}>
                      
                      <Grid container spacing={2} justifyContent="flex-end">
                            
                                <Grid item xs={2}>
                                  <Button type="submit" fullWidth color="primary" variant="contained">
                                  Submit New Request
                                </Button>
                                </Grid>

                                <Grid item xs={1}>
                                  <Button type="button"
                                           fullWidth 
                                             color="secondary" 
                                            variant="contained" 
                                            onClick={() => cancelAddRequest()}
                                          >
                                Cancel
                              </Button>
                                </Grid>

                              </Grid>

                    </Grid>
                    <ToastContainer />
                    
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
      

    </Box>
    </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
      }
    </>
  );
}
