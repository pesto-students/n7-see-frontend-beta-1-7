import { useState,useEffect } from 'react';
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
  Typography,
  CircularProgress
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
import { myApi } from 'src/Api';
const AddView = (props) => {
  const navigate = useNavigate();
  const u_id = sessionStorage.getItem('u_id');
  const email = sessionStorage.getItem('email');
  const username = sessionStorage.getItem('username');
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  return(
  <Box {...props}>
  <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
    </Box>
    <Formik
            initialValues={{
              subject:"",
              content:""
            }}
            validationSchema={Yup.object().shape({
              subject: Yup.string().max(255).required('Subject is required'),
              content: Yup.string().max(2000).required('Content is required')
            })}
            onSubmit={(values,{setSubmitting,resetForm}) => {
              // navigate('/app/dashboard', { replace: true });
              setLoadingIndicator(true);
              console.log("hyy")
              values.from=u_id;
              values.email=email;
              values.name=username;
              axios.post(`${myApi}/complaint`, values).then((resp) => {
                setSubmitting(false);
                if (resp.status == 200) {
                  console.log('resp', resp);
                  setLoadingIndicator(false);
                  toast.success(resp.data.message, { autoClose: 3000, });
                  resetForm();
                  props.setShowComponent(false)
                  props.setReRender(true);
                  // history.push('/');
                  // navigate('/app/dashboard', { replace: true });
                } else {
                  setLoadingIndicator(false);
                  toast.error(resp.data.message, { autoClose: 3000, });
                  console.log(resp);
                }
              }).catch((e) => {
                toast.error('Failed to login', { autoClose: 3000, });
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
              values,
              resetForm
            }) => (
              <Form onSubmit={handleSubmit}>
              <Card>
              <CardHeader
                // subheader={props.showSelectedData.name}
                title={props.showComponentType=="add"?"Register New Complaint":"View"}
              />
              <Divider />
              {
      !loadingIndicator?<div>
              <CardContent>
              <Grid
                container
                spacing={3}
              >


                  <Grid
                  item
                  md={12}
                >

            <Field
                  component={TextField}
                  error={errors.subject && touched.subject}
                  label="Subject"
                  name="subject"
                  id="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.subject && touched.subject) && errors.subject}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  invalid={errors.subject && touched.subject}
                />
              </Grid>
                 <Grid
                  item
                  md={12}
                >

                <Field
                    type="textarea"
                    rows="5"
                    maxLength="201"
                    name="content"
                    id="content"
                    placeholder="Description.."
                    value={values.content}
                    as={Input}
                    multiline
                    className="form-control"
                    invalid={errors.content && touched.content}
                    fullWidth
                    style={{border:"3px solid #F1F1F1",padding:"3px"}}
                  />
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
        
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >
          Send
        </Button>
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
  
      </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
    }

  

    </Card>
    </Form>
    )}
    </Formik>
    <ToastContainer />
  
    </Box>
    )
};

export default AddView;
