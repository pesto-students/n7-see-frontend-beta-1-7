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
        <Container style={{margin:"100px"}}>
        {/* <Container maxWidth="lg" className="App" style={{padding: 24}}>     
           <div>
             <Grid container
                direction="row"
                alignItems="center">
            <Button type="submit" variant="contained" color={type=="type1"?"primary":"secondary"} onClick={()=>setType("type1")} >
              Type 1 
            </Button>&nbsp;
            <Button type="submit" variant="contained" color={type=="type2"?"primary":"secondary"} onClick={()=>setType("type2")} >
              Type 2
            </Button>&nbsp;
            <Button type="submit" variant="contained" color={type=="type3"?"primary":"secondary"} onClick={()=>setType("type3")} >
              Type 3
            </Button>
          </Grid>
          </div>
          </Container> */}
          
          <Grid container direction="row" alignItems="center" item xs={12} justifyContent="flex-end" >
          <Grid item xs={4} direction="column" alignItems="flex-end" justifyContent="center" >
            <TypeTwo/>
            </Grid>

           
          
            {/* {
          (() => {
            switch (type) {
                case 'type1':
                  return <TypeOne/>
                case 'type2':
                  return <TypeTwo/>
                  default:
                    return ('')
                  } 
                })()
            } */}
          </Grid>
          </Container>
        
        
      </div>
  );

}

export default Register;

