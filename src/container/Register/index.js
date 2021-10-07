import React, { useState } from 'react';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  TextField,
  LinearProgress,
  CircularProgress,
  Avatar,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import BlockUI from 'react-block-ui';
import Loader from 'react-loaders';
import RSelect from '../../components/Select/RSelect';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: '2%',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    opacity: '.8',
    zIndex: '1'

  },
  fragment: {
    // backgroundColor:"#f0f0f0",
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: '2%',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    // opacity:".9",
    padding: '10px',
    zIndex: '-1',
    border: '1px solid secondary'
  }

}));

export default function Register() {
  const classes = useStyles();
  const history = useNavigate();
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [loading,setLoading]=useState(false);
  return (

    <div>
      <div className="App">
        <div className="bg">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            item
            md={12}
          >
            <Grid item xs={3}>
              <div className={classes.fragment}>
                <Container
                  component="main"
                  border={1}
                  maxWidth="xs"
                  className={classes.container}
                >
                  <CssBaseline />
                  <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                      </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                </Typography>
                    <Formik
                        initialValues={{
                              firstName: '', email: '', lastName: '', password: '', cpassword: ''
                            }}
                        onSubmit={(values, { setSubmitting }) => {
                              setSubmitting(true);
                              console.log(values);
                              setLoading(true);
                              axios.post('http://localhost:4000/users', values,
                                // {
                                //   headers: {
                                //     'Access-Control-Allow-Origin': '*',
                                //     'Content-Type': 'application/json',
                                //   }
                                // },
                              ).then((resp) => {
                                console.log(resp.status);

                                setSubmitting(false);
                                if (resp.status == 200) {
                                  console.log(resp);
                                  toast.success(resp.data.message, { autoClose: 3000, });
                                  
                                  // setInterval(() => {
                                    
                                  // }, 3000);
                                  history('/login');
                                  setLoading(false);
                                } else {
                                  toast.error(resp.data.message, { autoClose: 3000, });
                                  console.log(resp);
                                }
                                setLoading(false);
                              });
                            }}

                        validationSchema={
                  Yup.object().shape({
                    email: Yup.string()
                      .email(),
                    // .required('Required'),
                    lastName: Yup.string(),
                    // .required('Required'),
                    firstName: Yup.string(),
                    // .required('Required'),
                    // password: Yup.string()
                    //   .min(6, 'Password should be of minimum 6 characters length')
                    //   .max(8, 'Password should be of maximum 8 characters length')
                    //   .matches(
                    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/,
                    //     // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,8})$/,
                    //     "One Uppercase, One Lowercase, One Number and one special case Character"
                    //   ),
                    //   //.required('Required'),
                    // cpassword: Yup.string()
                    //   .oneOf([Yup.ref('password'), ""], 'Passwords must match')
                    //  .required('Password confirm is required'),
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
                              } = props;
                              return (
                       
                        <Form className={classes.form}>
                          {
                            !loading?<>
                          <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        error={errors.firstName && touched.firstName}
                        helperText={(errors.firstName && touched.firstName) && errors.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="outlined"
                      />
                    </Grid>
                          <Grid item xs={12} sm={6}>
                      <Field
                        component={TextField}
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        error={errors.lastName && touched.lastName}
                        helperText={(errors.lastName && touched.lastName) && errors.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="outlined"
                      />
                    </Grid>
                          <Grid item xs={12} sm={12}>

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
                          <Grid item xs={6} sm={6}>
                      <Field
                        component={TextField}
                        label="Password"
                        name="password"
                        id="password"
                        error={errors.password && touched.password}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.password && touched.password) && errors.password}
                        margin="normal"
                        variant="outlined"
                        type="password"
                        maxLength="9"
                      />
                    </Grid>
                          <Grid item xs={6}>

                      <Field
                        component={TextField}
                        label="Confirm Password"
                        name="cpassword"
                        id="cpassword"
                        error={errors.cpassword && touched.cpassword}
                        value={values.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.cpassword && touched.cpassword) && errors.cpassword}
                        margin="normal"
                        variant="outlined"
                        type="password"
                        maxLength="9"
                      />
                    </Grid>

                        </Grid>

                          <Grid container spacing={2}>
                          {isSubmitting && <LinearProgress />}
                          <Grid item xs={6}>
                      <Button
                        type="button"
                        className="outline"
                        color="secondary"
                        variant="contained"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                        fullWidth
                      >
                        Reset
                      </Button>
                    </Grid>
                          <Grid item xs={6}>
                      <Button type="submit" fullWidth color="primary" variant="contained" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Grid>

                        </Grid>
                          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button> */}

                          <Grid container justifyContent="flex-end" spacing={4}>
                          <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                        </Grid>
                        </>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
                          }
                        <ToastContainer />
                        </Form>
                              );
                            }}
                      </Formik>
                  </div>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </Container>

              </div>

            </Grid>

            {/* <Grid item xs={4} direction="column" alignItems="flex-center" justifyContent="center" >
            <TypeTwo/>
            </Grid> */}
          </Grid>

        </div>

      </div>
      {/* <NavBar/> */}

     
    </div>

  );
}
