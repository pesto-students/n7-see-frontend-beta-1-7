import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  CardHeader,
  InputAdornment,
  SvgIcon,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Input,
  Typography

} from '@material-ui/core';
import clsx from 'clsx';
import { Search as SearchIcon } from 'react-feather';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import moment from 'moment';
const View = (props) => {
  const navigate = useNavigate();
  const u_id = sessionStorage.getItem('u_id');
  const email = sessionStorage.getItem('email');
  const username = sessionStorage.getItem('username');
  return(
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
    </Box>
    <Card>
              <CardHeader
                subheader={props.showSelectedData.subject}
                title={props.showComponentType=="add"?"Register New Complaint":"View Message"}
              />
              <Divider />
              <CardContent>
              <Grid
                container
                spacing={3}
              >


                  <Grid
                  item
                  md={12}
                >
              {props.showSelectedData.content}
              </Grid>
                 <Grid
                  item
                  md={12}
                  style={{textAlign:"end"}}
                >
              <b>Reply by Admin</b>
              {props.showSelectedData.reply!==null&&props.showSelectedData.reply!==undefined?<div>
              <br/>
              {props.showSelectedData.reply}
              <br/>
              {props.showSelectedData.replydate}
                </div>:<div><br/>Admin Not replied Yet</div>}
             
              </Grid>

            </Grid>
            
                     
      
      </CardContent>
      <Divider />
      <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          

        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
        

        &nbsp;
        <Button
          color="error"
          variant="contained"
          type="button"
          onClick={()=> props.setShowComponent(false)}
        >
         Close
        </Button>
        </Grid>
      </Grid>
    </Box>
  

    </Card>

    <ToastContainer />
  </Box>
    )
};

export default View;
