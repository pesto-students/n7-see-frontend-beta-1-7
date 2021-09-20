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
  makeStyles,
  Avatar,
  Checkbox,
  withTheme,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  CardHeader,
  Collapse 
} from '@material-ui/core';
import avatarimg from '../../../assets/images/chil.png';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector,useDispatch } from 'react-redux';
import {fetchData} from '../../../redux/actions';
import UserCard from './UserCard';
export default function UserCardRedux() {

  const dispatch = useDispatch();
  let user = useSelector(state=>state.fetchDataReducer.user);
  let loading = useSelector(state=>state.fetchDataReducer.loading);
  console.log("user",user);

  useEffect(()=>{
    dispatch(fetchData());
  },[])
  
  return (<Fragment>
           <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
        //   justifyContent="center"
          style={{ minHeight: '100vh'}}
          item
          md={12}
        >
  
           {
              user!==undefined&&user.length>0?user.map((newuser,i)=>{
                return <Grid 
                            container
                            item xs={2} 
                            key={i}  
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <UserCard data={newuser}/>
                        </Grid>
              }):"No User"
           }


        
      
            
          </Grid>
  </Fragment>);
}



