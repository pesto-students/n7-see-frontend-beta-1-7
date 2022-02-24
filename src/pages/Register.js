import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { myApi } from 'src/Api';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  CircularProgress
} from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  return (
    <>
      <Helmet>
        <title>Register | Serve End</title>
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
              email: '',
              firstName: '',
              lastName: '',
              mobno:'',
              password: '',
            }}
            validationSchema={
            Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              firstName: Yup.string().max(255).required('First name is required'),
              lastName: Yup.string().max(255).required('Last name is required'),
              password: Yup.string().max(255).required('password is required'),
              mobno:Yup.number().positive().typeError("Must be Positive number").required('Mobile Number is required'),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            //console.log(values);
            setLoading(true);
            axios.post(`${myApi}/users`, values,
              // {
              //   headers: {
              //     'Access-Control-Allow-Origin': '*',
              //     'Content-Type': 'application/json',
              //   }
              // },
            ).then((resp) => {
              //console.log(resp.status);

              setSubmitting(false);
              if (resp.status == 200) {
                //console.log(resp);
                setLoading(false);
                toast.success(resp.data.message, { autoClose: 3000, });
                setInterval(() => {
                  // history.push('/login');
                }, 1000);
                navigate('/login', { replace: true });
              } else {
                setLoading(false);
                toast.error(resp.data.message, { autoClose: 3000, });
                //console.log(resp);
              }
              
            });
          }}
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
              <Form>
                 {!loading?<div>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First name"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
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
                  error={Boolean(touched.mobno && errors.mobno)}
                  fullWidth
                  helperText={touched.mobno && errors.mobno}
                  label="Mob No"
                  margin="normal"
                  name="mobno"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mobno}
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
                
                {/* <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                 */}
                {/* {Boolean(touched.policy && errors.policy) && (
                <FormHelperText error>
                  {errors.policy}
                </FormHelperText>
                )} */}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link component={RouterLink} to="/login" variant="h6" underline="hover">
                    Sign in
                  </Link>
                </Typography>
                </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
      }
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
