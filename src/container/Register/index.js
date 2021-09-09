import React, { Fragment,useState,useEffect,useRef} from 'react';
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
  TextField
} from '@material-ui/core';
import TypeOne from './components/TypeOne';
import TypeTwo from './components/TypeTwo';
import NavBar from '../../components/NavBar';
import { sizing } from '@material-ui/system';
// import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
function Register() {

const [type,setType]=useState("type2");

  return (
      <div>
        {/* <NavBar/> */}  
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
        <TypeTwo/>
        </Grid>
      
            
          {/* <Grid item xs={4} direction="column" alignItems="flex-center" justifyContent="center" >
            <TypeTwo/>
            </Grid> */}
          </Grid>
        
        
      </div>
  );

}

export default Register;

