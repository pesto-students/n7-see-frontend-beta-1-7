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
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    
    },
    // large: {
    //   width: theme.spacing(10),
    //   height: theme.spacing(10),
    // },
    button: {
        margin: theme.spacing(1),
        borderRadius: "5em"
      },
    imgsize:{
      width:"80px",
      height:"80px"
    }
  }));
export default function UserCard(props) {


      const classes = useStyles();
      var cardStyle = {
        display: 'block',
        width: '15vw',
        transitionDuration: '0.3s',
        
    }
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (<Fragment>
      <Card style={cardStyle}>
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Avatar alt="Alias" src={avatarimg} className={classes.imgsize} />
      </Box>
      {/* <CardHeader
        style={{alignItems:"center",justifyContent:"center"}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        >
 {/* style={{maxHeight:"10vh",margin:"0px"}} */}
        {/* </CardHeader> */} 
        
      <CardActionArea>
     
            <Typography gutterBottom style={{wordWrap: "break-word"}}>
           {props.data.name.toUpperCase()}
          </Typography>
          <div style={{lineHeight: 1}}>
          {props.data.company.name}
          
          </div>
          <div>
          {props.data.email}
          </div>
        <CardContent>
      
       
        </CardContent>
      </CardActionArea>
      <CardActions style={{alighnItems:"center",justifyContent:"center"}}>
      <Button type="submit" color="secondary" variant="outlined" className={classes.button}
       onClick={handleExpandClick}
       aria-expanded={expanded}>
            Show More
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph> Address:</Typography>
        <div style={{lineHeight: 1}}>
            {props.data.address.street+" "+props.data.address.street+" "+props.data.address.city+" "+props.data.address.zipcode}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  </Fragment>);
}

