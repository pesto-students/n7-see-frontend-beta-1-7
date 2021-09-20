import React,{ Fragment,useState,useEffect,useRef} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  LinearProgress,
  Dialog,
  DialogActions,
  Card,
  Avatar,
  Checkbox,
  withTheme,
  makeStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import zIndex from '@material-ui/core/styles/zIndex';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
  container:{
    backgroundColor:"#fff",
    borderRadius:"2%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    opacity:".8",
    zIndex:"1"

  },
  fragment:{
    // backgroundColor:"#f0f0f0",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius:"2%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // opacity:".9",
    padding:"10px",
    zIndex:"-1",
    border:"1px solid secondary"
  }
  
}));


export default function TypeTwo() {
  const classes = useStyles();



  return (
    <div className={classes.fragment}>
    <Container component="main" 
       border={1} maxWidth="xs"  className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
                initialValues={{ firstName:'',email: '', lastName: '', password: '',cpassword:'' }}
                onSubmit={(values, { setSubmitting }) => {
                   setSubmitting(true);
                   console.log(values);
                   setSubmitting(false);
                   
                  // axios.post(contactFormEndpoint,
                  //   values,
                  //   {
                  //     headers: {
                  //       'Access-Control-Allow-Origin': '*',
                  //       'Content-Type': 'application/json',
                  //     }
                  //   },
                  // ).then((resp) => {
                  //   setSubmitionCompleted(true);
                  // }
                  // );
                }}

                validationSchema={
                  Yup.object().shape({
                    email: Yup.string()
                      .email()
                      .required('Required'),
                    lastName: Yup.string()
                      .required('Required'),
                    firstName: Yup.string()
                    .required('Required'),                    
                    password: Yup.string()
                      .min(6, 'Password should be of minimum 6 characters length')
                      .max(8, 'Password should be of maximum 8 characters length')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/,
                        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,8})$/,
                        "One Uppercase, One Lowercase, One Number and one special case Character"
                      )
                      .required('Required'),
                    cpassword: Yup.string()
                      .oneOf([Yup.ref('password'), ""], 'Passwords must match')
                      .required('Password confirm is required'),
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
                  } = props;
                  return (
        <form className={classes.form} onSubmit={handleSubmit}>
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
        </form>
                      );
            }}
          </Formik>
      </div>
      <Box mt={5}>
     <Copyright />
   </Box>
    </Container>

   </div>
  );
}


//  <Grid container spacing={2}>
// <Grid item xs={6}>
// <Button
//     type="button"
//     className="outline"
//     color="secondary"
//     variant="contained"
//     onClick={handleReset}
//     disabled={!dirty || isSubmitting}
//     fullWidth
//   >
//     Reset
//   </Button>
// </Grid>
// <Grid item xs={6}>
// <Button type="submit" fullWidth color="primary" variant="contained" disabled={isSubmitting}>
//                  Submit
//                </Button>
// </Grid>

// </Grid> 
// import React, { Fragment,useState,useEffect,useRef} from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import {
//   Container,
//   Box,
//   Typography,
//   Paper,
//   Link,
//   Grid,
//   Button,
//   CssBaseline,
//   RadioGroup,
//   FormLabel,
//   MenuItem,
//   FormGroup,
//   FormControl,
//   FormControlLabel,
//   TextField,
//   LinearProgress,
//   Dialog,
//   DialogActions,
//   Card,
//   makeStyles
// } from '@material-ui/core';
// import wq from '../../../assets/images/images.png'
// import imgbg from '../../../assets/images/imgbg.png'
// // import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: theme.spacing(2),

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '300px',
//     },
//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2),
//     },
//   },
// }));
// function TypeTwo() {
//   const classes = useStyles();

//   const validationSchema = Yup.object({
//     email: Yup
//       .string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     firstName: Yup
//       .string('Enter your firstName')
//       .min(8, 'firstName should be of minimum 8 characters length')
//       .required('firstName is required'),
//   });


//   return (
//         <Card>
//            <Grid container>
//           <Box style={{position:"absolute",display:"flex",marginTop:"30px",backgroundColor:"#cedeff",height:"40px",width:"100px",borderRadius:"0px 10px 10px 0px"}} alignItems="center" justifyContent="flex-end">
//           <div style={{padding:"5px",fontWeight:"bold"}}>SIGN UP</div>
//           </Box>
         
//           <img src={imgbg} style={{width:"100%",height:"200px"}}/>
//           </Grid>
//           <Grid container spacing={1}>

         
//           <div style={{marginTop:"20px"}}>
        // <Formik
        //         initialValues={{ firstName:'',email: '', lastName: '', password: '',cpassword:'' }}
        //         onSubmit={(values, { setSubmitting }) => {
        //            setSubmitting(true);
        //            console.log(values);
        //            setSubmitting(false);
        //           // axios.post(contactFormEndpoint,
        //           //   values,
        //           //   {
        //           //     headers: {
        //           //       'Access-Control-Allow-Origin': '*',
        //           //       'Content-Type': 'application/json',
        //           //     }
        //           //   },
        //           // ).then((resp) => {
        //           //   setSubmitionCompleted(true);
        //           // }
        //           // );
        //         }}

        //         validationSchema={
        //           Yup.object().shape({
        //             email: Yup.string()
        //               .email()
        //               .required('Required'),
        //             lastName: Yup.string()
        //               .required('Required'),
        //             firstName: Yup.string()
        //             .required('Required'),                    
        //             password: Yup.string()
        //               .min(6, 'Password should be of minimum 6 characters length')
        //               .max(8, 'Password should be of maximum 8 characters length')
        //               .matches(
        //                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/,
        //                 // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,8})$/,
        //                 "One Uppercase, One Lowercase, One Number and one special case Character"
        //               )
        //               .required('Required'),
        //             cpassword: Yup.string()
        //               .oneOf([Yup.ref('password'), ""], 'Passwords must match')
        //               .required('Password confirm is required'),
        //         })}
        //       >
        //         {(props) => {
        //           const {
        //             values,
        //             touched,
        //             errors,
        //             dirty,
        //             isSubmitting,
        //             handleChange,
        //             handleBlur,
        //             handleSubmit,
        //             handleReset,
        //           } = props;
        //           return (
//                     <form onSubmit={handleSubmit} className={classes.root}>
//                        <Grid container direction="column" spacing={1}>
//                          <Grid direction="row" item xs={12}>
                           
                            // <Field
                            //   component={TextField}
                            //   label="First Name"
                            //   id="firstName"
                            //   name="firstName"
                            //   value={values.firstName}
                            //   error={errors.firstName && touched.firstName}
                            //   helperText={(errors.firstName && touched.firstName) && errors.firstName}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   variant="outlined" 
                            // />
                            
                            //   <Field
                            //   component={TextField}
                            //   label="Last Name"
                            //   id="lastName"
                            //   name="lastName"
                            //   value={values.lastName}
                            //   error={errors.lastName && touched.lastName}
                            //   helperText={(errors.lastName && touched.lastName) && errors.lastName}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   variant="outlined" 
                            // />
                             

//                           </Grid>
//                           <Grid direction="row" item xs={12}>
//                           <Grid item xs={12}>
                          // <Field
                          //     component={TextField}
                          //     error={errors.email && touched.email}
                          //     label="Email"
                          //     name="email"
                          //     id="email"
                          //     value={values.email}
                          //     onChange={handleChange}
                          //     onBlur={handleBlur}
                          //     helperText={(errors.email && touched.email) && errors.email}
                          //     margin="normal"
                          //     variant="outlined" 
                          //   />

//                           {/* <TextField
//                               error={errors.email && touched.email}
//                               label="email"
//                               name="email"
//                               value={values.email}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                               helperText={(errors.email && touched.email) && errors.email}
//                               margin="normal"
//                               variant="outlined" 
//                             /> */}
//                           </Grid>
//                           {/* <Grid item xs={6}> */}
                          // <Field
                          //     component={TextField}
                          //     label="Password"
                          //     name="password"
                          //     id="password"
                          //     error={errors.password && touched.password}
                          //     value={values.password}
                          //     onChange={handleChange}
                          //     onBlur={handleBlur}
                          //     helperText={(errors.password && touched.password) && errors.password}
                          //     margin="normal"
                          //     variant="outlined" 
                          //     // type="password"
                          //     maxLength="9"
                          //   />
                            // <Field
                            //   component={TextField}
                            //   label="Confirm Password"
                            //   name="cpassword"
                            //   id="cpassword"
                            //   error={errors.cpassword && touched.cpassword}
                            //   value={values.cpassword}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   helperText={(errors.cpassword && touched.cpassword) && errors.cpassword}
                            //   margin="normal"
                            //   variant="outlined" 
                            //   // type="password"
                            //   maxLength="9"
                            // />
//                               {/* <TextField
//                                   label="password"
//                                   name="password"
//                                   error={errors.password && touched.password}
//                                   value={values.password}
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   helperText={(errors.password && touched.password) && errors.password}
//                                   margin="normal"
//                                   variant="outlined" 
//                                   type="password"
//                                 /> */}
//                               {/* </Grid> */}
//                           </Grid>
//                     </Grid>

//                       {/* <Grid  container spacing={1} direction="row">
//                         <Grid item xs={4}>
//                        <Field
//                         component={TextField}
//                         label="firstName"
//                         id="firstName"
//                         name="firstName"
//                         value={values.firstName}
//                         error={errors.firstName && touched.firstName}
//                         helperText={(errors.firstName && touched.firstName) && errors.firstName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         variant="outlined" 
//                       />
//                      </Grid>
//                      <Grid item xs={4}>
//                       <TextField
//                         label="name"
//                         name="name"
//                         value={values.name}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         helperText={(errors.name && touched.name) && errors.name}
//                         margin="normal"
//                         error={errors.name && touched.name}
//                         variant="outlined" 
//                       />
//                        </Grid>
//                      </Grid>
                     
//                       <TextField
//                         error={errors.email && touched.email}
//                         label="email"
//                         name="email"
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         helperText={(errors.email && touched.email) && errors.email}
//                         margin="normal"
//                         variant="outlined" 
//                       />
                      
//                       <TextField
//                         label="password"
//                         name="password"
//                         error={errors.password && touched.password}
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         helperText={(errors.password && touched.password) && errors.password}
//                         margin="normal"
//                         variant="outlined" 
//                       /> */}
                    
//                         {isSubmitting && <LinearProgress />}
//                       <div>
                    
//                         <Button
//                           type="button"
//                           className="outline"
//                           color="secondary"
//                           variant="outlined"
//                           onClick={handleReset}
//                           disabled={!dirty || isSubmitting}
//                         >
//                           Reset
//                         </Button>
//                         <Button type="submit"  color="primary" variant="contained" disabled={isSubmitting}>
//                           Submit
//                         </Button>
//                         {/* <DisplayFormikState {...props} /> */}
//                       </div>
//                     </form>
//                   );
//                 }}
//               </Formik>

//            </div>
//            </Grid>
//         </Card>

//   );

// }

// export default TypeTwo;

