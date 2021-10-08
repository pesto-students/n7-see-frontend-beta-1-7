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
import { myApi } from 'src/Api';
const AddCategory = (props) => {
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
              category: '',
            }}
            validationSchema={Yup.object().shape({
              category: Yup.string().max(255).required('Category is required')
            })}
            onSubmit={(values,{setSubmitting,resetForm}) => {
              // navigate('/app/dashboard', { replace: true });
              axios.post(`${myApi}/admin/addcategory`, values).then((resp) => {
                console.log('resp');

                setSubmitting(false);
                if (resp.status == 200) {
                  console.log('resp', resp);
                  toast.success(resp.data.message, { autoClose: 3000, });
                  resetForm();
                  props.setReRender(true)
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
              values
            }) => (
              <form onSubmit={handleSubmit}>
              <Card>
              <CardHeader
                subheader="Add New Category"
                title="Category List"
              />
              <Divider />
              <CardContent>
                
              <Field
                      component={TextField}
                      error={errors.category && touched.category}
                      label="Enter Category"
                      name="category"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.category && touched.category) && errors.category}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
      
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
          Save Category
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

export default AddCategory;
