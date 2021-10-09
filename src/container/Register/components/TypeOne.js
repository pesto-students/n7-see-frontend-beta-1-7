import React, {
  Fragment, useState, useEffect, useRef
} from 'react';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
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
  TextField
} from '@material-ui/core';
// import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
function TypeOne() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const onSubmit = async values => {
  //   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  //   await sleep(300);
  //   window.alert(JSON.stringify(values, 0, 2));
  // };
  // const validate = values => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = 'Required';
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = 'Required';
  //   }
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   }
  //   return errors;
  // };

  // function to handle modal open

  const setValue = (type, value) => {
    switch (type) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        // code block
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
  };
  return (
    <div>
      <Container maxWidth="lg" className="App">

        {/* <Formik
           initialValues={{ employed: true, stooge: 'larry' }}
           validationSchema={validate}
           onSubmit={onSubmit}
           >
          {({
          errors,
          touched,
          isSubmitting,
          dirty,
          resetForm,
          values,
          setFieldValue,
          setFieldTouched,
        }) => ( */}

        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App + Material-UI
          </Typography>
          <form>
            <TextField
              label="First Name"
              variant="filled"
              required
              value={firstName}
              onChange={(e) => setValue('firstName', e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              onChange={(e) => setValue('lastName', e.target.value)}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              onChange={(e) => setValue('email', e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              onChange={(e) => setValue('password', e.target.value)}
            />
            <div>
              <Button variant="contained">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Signup
              </Button>
            </div>

          </form>

        </Paper>

        {/* // )}
        // </Formik> */}

      </Container>

    </div>
  );
}

export default TypeOne;
