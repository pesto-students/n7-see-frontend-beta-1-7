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
  const [myFile,setMyFile]=useState(null);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [pageEdit, setPageEdit] = useState(false);
  const [genderData,setGenderData]=useState([{value:"1",label:"Male"},{value:"1",label:"Female"}])
  const [myProfileData,setMyProfileData]=useState(null);
  const [cityData, setCityData] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);
  const [showImage,setShowImage]=useState(null);
  const formRef = useRef();
  useEffect(() => {
    const getMyProfile = async () => {
      setLoadingIndicator(true);
      // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
      const u_id = sessionStorage.getItem('u_id');
      await axios.get(`http://localhost:4000/users/getmyprofile/${u_id}`).then((resp) => {
        // console.log(resp.data);
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
        // console.log(resp)
        
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
    // console.info('You clicked the Chip.');
    setPageEdit(true);
  };

      // Create a reference to the hidden file input element
      const hiddenFileInput = React.useRef(null);
  
      // Programatically click the hidden file input element
      // when the Button component is clicked
      const handleClickImage = event => {
        hiddenFileInput.current.click();
      };
      const onClickHandler = () => {
        const data = new FormData()
        // console.log("asdasd",myFile)
        if(myFile!==null)
        {
          // console.log("asdasdbajdbabhdbasdbhjasbd")
        data.append('file', myFile)
        axios.post("http://localhost:4000/request/upload", data)
          .then(res => { 
            setShowImage(res.data.filename);
            // console.log(`http://localhost:4000/${res.data.filename}`)
          })
        }
        else{
           toast.error("Please Upload atleast one image", { autoClose: 3000, });
        }
      
      }

      const onChangeHandler=(event,setFieldValue)=>{
        // setFieldValue("file",event.target.files[0])
        setMyFile(event.target.files[0]);
        // console.log(event.target.files[0])
    }
    
  const cancelEdit = () => {
    setPageEdit(false);
  };
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
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
                                <Avatar sx={{ bgcolor: '#000' }} className={classes.headerAvatar} aria-label="recipe"  src={user.avatar}
                                title={<div>{myProfileData!==null?myProfileData.firstName+" "+myProfileData.lastName:""}</div>}
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
                <Card>
                  <CardHeader
                    className={classes.tabHeader}
                    title="Update Profile"
                  />
                  <CardContent>
                    <Formik
                      innerRef={formRef}
                      initialValues={{
                        firstName: myProfileData!==null?myProfileData.firstName:"",
                        lastName: myProfileData!==null?myProfileData.lastName:"",
                        gender: myProfileData!==null?genderData.filter((genderdata)=>genderdata.label==myProfileData.gender):null,
                        mobno: myProfileData!==null?myProfileData.mobno:"",
                        email: myProfileData!==null?myProfileData.email:"",
                        city: myProfileData!==null?cityData.filter((citydata)=>citydata.label==myProfileData.city):null,
                        address:myProfileData!==null?myProfileData.address:"",
                      }}
                      validationSchema={
                        Yup.object().shape({
                          firstname: Yup.string().required('Required'),
                          lastname: Yup.string().required('Required'),
                          gender: Yup.object().nullable().required('Required'),
                          mobno: Yup.string().required('Required'),
                          email:Yup.string().required('Required'),
                          city:Yup.object().nullable().required('Required'),
                          address:Yup.string().nullable().required('Required'),
                          // .required('Required'),
                        })
                        }
                      onSubmit={(values, { setSubmitting }) => {
                        // console.log("helloooooooo")
                        setSubmitting(true);
                        // console.log("asdasd",values);
                        const valueCopy = JSON.parse(JSON.stringify(values));
                        valueCopy.u_id = sessionStorage.getItem('u_id');
                        valueCopy.city = values.city!=null?values.city.label:null
                        valueCopy.gender = values.gender!=null?values.gender.label:null
                        valueCopy.image=showImage;
                        // console.log("image",valueCopy)
                        axios.post('http://localhost:4000/users/updateuser', valueCopy,
                          // {
                          //   headers: {
                          //     'Access-Control-Allow-Origin': '*',
                          //     'Content-Type': 'application/json',
                          //   }
                          // },
                        ).then((resp) => {
                          // console.log(resp);

                          setSubmitting(false);
                          if (resp.status == 200) {
                            // console.log('resp', resp);
                            toast.success(resp.data.message, { autoClose: 3000, });
                            setTimeout(() => {navigate("/", { replace: true })}, 3000);
                            // navigate("/")
                           
                          
                          } else {
                            toast.error(resp.data.message, { autoClose: 3000, });
                            // console.log(resp);
                          }
                        });
                      }}

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
                  <Form className={classes.form}  onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                    <Grid item md={6}>
                    <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                              <Field
                                component={TextField}
                                error={errors.firstName && touched.firstName}
                                label="First Name"
                                name="firstName"
                                id="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.firstName && touched.firstName) && errors.firstName}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>
                    <Grid item xs={6} sm={6}>
                              <Field
                                component={TextField}
                                error={errors.lastName && touched.lastName}
                                label="Last Name"
                                name="lastName"
                                id="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>
                    <Grid item xs={6} sm={6}>
                              <Field
                                component={RSelect}
                                name="gender"
                                id="gender"
                                value={values.gender}
                                onChange={ev => setFieldValue("gender",ev)}
                                options={genderData}
                                placeholder="--Select Gender--"
                                error={errors.gender}
                                touched={touched.gender}
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
                                onChange={ev => setFieldValue("city",ev)}
                                options={cityData}
                                placeholder="--Select City--"
                                error={errors.city}
                                touched={touched.city}
                                isLoading={cityLoading}
                                isClearable
                              />
                            </Grid>

          
                    <Grid item xs={6} sm={6}>
                              <Field
                                component={TextField}
                                error={errors.mobno && touched.mobno}
                                label="Mobile No"
                                name="mobno"
                                id="mobno"
                                value={values.mobno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.mobno && touched.mobno) && errors.mobno}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>
                    <Grid item xs={6} sm={6}>
                              <Field
                                component={TextField}
                                error={errors.email && touched.email}
                                label="Email"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.email && touched.email) && errors.email}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>

                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Field
                    component={TextField}
                    label="Address"
                    name="address"
                    id="address"
                    error={errors.address && touched.address}
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.address && touched.address) && errors.address}
                    margin="normal"
                    variant="outlined"
                    type="address"
                    maxLength="9"
                    row={4}
                    fullWidth
                  />

                  </Grid>
                  </Grid>
                    {/* <Grid
                      item
                      lg={4}
                      md={4}
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
                            <Avatar
                              src={myFile!==null?URL.createObjectURL(myFile):user.avatar}
                              variant="rounded"
                              sx={{
                                height: 250,
                                width: 250
                              }}
                              onClick={()=>handleClickImage()}
                            />
                

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
                    
                  
                     
                    </Grid>

             */}

                  </Grid>
                  <br/>
                    <Divider/>
                    <br/>
                    <Grid container spacing={2} justifyContent="flex-end">
                    {isSubmitting && <LinearProgress />}
                    <Grid item xs={2}>

                    <Button type="submit" fullWidth color="primary" variant="contained">
                    Update Profile
                          </Button>
                  </Grid>
                    <Grid item xs={2}>
                    <Button type="button" fullWidth color="secondary" variant="contained" onClick={() => cancelEdit()}>
                    Cancel
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
              <ToastContainer />
            </Grid>
          </Grid>
        )

    }



      </Grid>
     
    </>
  );
}
