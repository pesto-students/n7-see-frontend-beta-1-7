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
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
const AddCity = (props) => {
  const navigate = useNavigate();
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
              city: '',
              latitude:'',
              longitude:''
            }}
            validationSchema={Yup.object().shape({
              city: Yup.string().max(255).required('City is required'),
              latitude: Yup.string().max(255).required('Latitude is required'),
              longitude: Yup.string().max(255).required('Longitude is required')
            })}
            onSubmit={(values,{setSubmitting,resetForm}) => {
              // navigate('/app/dashboard', { replace: true });
              axios.post('http://localhost:4000/admin/addcity', values).then((resp) => {
                console.log('resp');

                setSubmitting(false);
                if (resp.status == 200) {
                  console.log('resp', resp);
                  toast.success(resp.data.message, { autoClose: 3000, });
                  resetForm();
                  props.setReRender(true);
                  // history.push('/');
                  // navigate('/app/dashboard', { replace: true });
                } else {
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
              <form onSubmit={handleSubmit}>
              <Card>
              <CardHeader
                subheader="Add New City"
                title="City List"
              />
              <Divider />
              <CardContent>
              <Grid
                container
                spacing={3}
              >
                 <Grid
                  item
                  md={4}
                  xs={12}
                >
                <Field
                      component={TextField}
                      error={errors.city && touched.city}
                      label="Enter City"
                      name="city"
                      id="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.city && touched.city) && errors.city}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
              </Grid>
              <Grid
                  item
                  md={4}
                  xs={12}
                >
              <Field
                      component={TextField}
                      error={errors.latitude && touched.latitude}
                      label="Enter Latitude"
                      name="latitude"
                      id="latitude"
                      value={values.latitude}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.latitude && touched.latitude) && errors.latitude}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
              </Grid>
              <Grid
                  item
                  md={4}
                  xs={12}
                >
              <Field
                      component={TextField}
                      error={errors.longitude && touched.longitude}
                      label="Enter Longitude"
                      name="longitude"
                      id="longitude"
                      value={values.longitude}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.longitude && touched.longitude) && errors.longitude}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
              </Grid>

            </Grid>
            
                     
      
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >
          Save City
        </Button>
      </Box>
    </Card>
    </form>
    )}
    </Formik>
    <ToastContainer />
  </Box>
    )
};

export default AddCity;
