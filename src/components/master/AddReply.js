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
import { myApi } from 'src/Api';
import moment from 'moment';
const AddReply = (props) => {
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
              reply: props.showSelectedData.reply,
            }}
            validationSchema={Yup.object().shape({
              reply: Yup.string().max(255).required('Reply message is required')
            })}
            onSubmit={(values,{setSubmitting,resetForm}) => {
              // navigate('/app/dashboard', { replace: true });
              console.log("hyy")
              values.c_id=props.showSelectedData._id
              axios.post(`${myApi}/admin/reply`, values).then((resp) => {
                setSubmitting(false);
                if (resp.status == 200) {
                  console.log('resp', resp);
                  toast.success(resp.data.message, { autoClose: 3000, });
                  resetForm();
                  props.setShowReplyComponent(false)
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
                subheader={props.showSelectedData.name}
                title="Reply to"
              />
              <Divider />
              <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                 item
                  md={12}>
                    <b>Subject:</b>
                    {props.showSelectedData.subject}
                  </Grid>
                  <Grid
                 item
                  md={12}>
                    <Typography component="p" className={clsx.text} paragraph={true}>
                    {props.showSelectedData.content}
                    </Typography>
                  </Grid>
                 <Grid
                  item
                  md={12}
                >

                <Field
                    type="textarea"
                    rows="5"
                    maxLength="201"
                    name="reply"
                    id="reply"
                    placeholder="Reply.."
                    value={values.reply}
                    as={Input}
                    multiline
                    className="form-control"
                    invalid={errors.reply && touched.reply}
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
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
          {props.showSelectedData.createddate}
          </Typography>
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
          Send Reply
        </Button>
        &nbsp;
        <Button
          color="error"
          variant="contained"
          type="button"
          onClick={()=> props.setShowReplyComponent(false)}
        >
         Close
        </Button>
        </Grid>
      </Grid>
    </Box>
  

    </Card>
    </form>
    )}
    </Formik>
    <ToastContainer />
  </Box>
    )
};

export default AddReply;
