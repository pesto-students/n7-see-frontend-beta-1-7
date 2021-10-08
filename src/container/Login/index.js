import React, { useEffect } from 'react';
import {
  Formik, Field, Form, ErrorMessage, move
} from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { Redirect, useNavigate } from 'react-router-dom';
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
  Avatar,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { myApi } from 'src/Api';
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

export default function Login() {
  const classes = useStyles();
  const history = useNavigate();
 const move = ()=>{
  history("/register",{ replace: true })
 }
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
                        Sign In
                </Typography>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                              setSubmitting(true);
                              console.log(values);
                              axios.post(`${myApi}/users/login`, values).then((resp) => {
                                console.log('resp');

                                setSubmitting(false);
                                if (resp.status == 200) {
                                  console.log('resp', resp);
                                  // localStorage.setItem('username', values.email);
                                  sessionStorage.setItem('email', values.email);
                                  sessionStorage.setItem('username', values.username);
                                  sessionStorage.setItem('u_id', resp.data.response._id);
                                  toast.success(resp.data.message, { autoClose: 3000, });
                                  setInterval(function(){ 

                                  }, 3000);
                                  history("/")
                                } else {
                                  toast.error(resp.data.message, { autoClose: 3000, });
                                  console.log(resp);
                                }
                              }).catch((e) => {
                                toast.error('Failed to login', { autoClose: 3000, });
                              });
                            }}

                        validationSchema={
                  Yup.object().shape({
                    email: Yup.string().email().required('Required'),
                    password: Yup.string()
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
                        <Grid container spacing={1}>
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
                          <Grid item xs={12} sm={12}>
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
                      fullWidth
                    />
                        </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                          {isSubmitting && <LinearProgress />}
                          <Grid item xs={12}>
                          <Button type="submit" fullWidth color="primary" variant="contained">
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
                          <Link href="" onClick={()=>move()} variant="body2">
                      Don't have an account? Sign up
                    </Link>
                        </Grid>
                        </Grid>
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

      <ToastContainer />
    </div>
  );
}
