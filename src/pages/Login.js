import React, { Fragment, useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  CircularProgress
} from '@material-ui/core';
import FacebookIcon from '../icons/Facebook';
import GoogleIcon from '../icons/Google';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { myApi } from 'src/Api';
const Login = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'admin@serveend.com',
              password: 'admin'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setLoading(true);
              console.log(values);
              axios.post(`${myApi}/users/login`, values).then((resp) => {
                console.log('resp');

                setSubmitting(false);
                if (resp.status == 200) {
                  if(resp.data.response.role=="user")
                  {
                    console.log('resp', resp);
                    // localStorage.setItem('username', values.email);
                    sessionStorage.setItem('email', values.email);
                    sessionStorage.setItem('username', resp.data.response.firstName);
                    sessionStorage.setItem('u_id', resp.data.response._id);
                    setLoading(false);
                    toast.success(resp.data.message, { autoClose: 3000, });
                    navigate('/', { replace: true })
                    // setTimeout(() => {}, 3000);
                    
                  }
                  if(resp.data.response.role=="admin")
                  {
                    console.log('resp', resp);
                    // localStorage.setItem('username', values.email);
                    sessionStorage.setItem('email', values.email);
                    sessionStorage.setItem('username', resp.data.response.firstName);
                    sessionStorage.setItem('u_id', resp.data.response._id);
                    setLoading(false);
                    toast.success(resp.data.message, { autoClose: 3000, });
                    navigate('/app/dashboard', { replace: true })
                    // setTimeout(() => {)}, 3000);
                    
                  }


                  // history.push('/');
                  
                } else {
                  setLoading(false);
                  toast.error(resp.data.message, { autoClose: 3000, });
                  console.log(resp);
                }
              }).catch((e) => {
                setLoading(false);
                toast.error('Failed to login', { autoClose: 3000, });
              });
            }}
            // onSubmit={() => {
            //   navigate('/app/dashboard', { replace: true });
            // }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>

                {!loading?<div>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the Serve End
                  </Typography>
                </Box>
    
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="warning"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography>
                </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
      }
              </form>
            )}
          </Formik>
        </Container>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Login;



            {/* <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                */}