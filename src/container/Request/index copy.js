import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import {
  Avatar,
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight
} from '@material-ui/icons';
import HistoryCard from '../../components/Card/HistoryCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import {
  CardHeader, collapseClasses,
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Input,
  LinearProgress,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Redirect, useHistory } from 'react-router-dom';
// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: '40px',
    // border:"1px solid #000"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
    // border:"1px solid #000"
  },
  headerAvatar: {
    height: '10vh'
  },
  grid1Col1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid1Col1Img: {
    height: '100%',
    width: '600px'
  },
  grid1Col2: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  grid1Col2Buyer: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  }
}));

export default function RequestProducts() {
  const classes = useStyles();

  const [categoryData, setCategoryData] = useState([{ value: 1, label: 'category 1' }, { value: 2, label: 'category 2' }]);
  const history = useHistory();
  const [historyData, setHistoryData] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  useEffect(() => {
    const getMyHistory = async () => {
      setLoadingIndicator(true);
      // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
      const email = sessionStorage.getItem('email');
      await axios.post('http://localhost:4000/request/history', { email }).then((resp) => {
        // console.log(resp.data.response);
        setHistoryData(resp.data.response);
        setLoadingIndicator(false);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });

      // setUser(result.data);
    };

    getMyHistory();
  }, []);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const categoryFunc = (value, setFieldValue) => {
    setFieldValue('category', value);
  };
  return (
    <>

      <Grid className={classes.container}>
        <Card>
          <CardHeader
            title="Buy Request"
          />
          <Grid container>
            <Grid item xs={12} md={7} lg={8}>
              <Box className={classes.grid1Col1}>
                <Formik
                  initialValues={{
                productname: '', category: null, cost: '', description: ''
              }}
                  onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                // console.log(values);
                const valueCopy = JSON.parse(JSON.stringify(values));
                valueCopy.category = values.category.label;
                valueCopy.email = sessionStorage.getItem('email');
                valueCopy.username = sessionStorage.getItem('username');
                // console.log(valueCopy);
                axios.post('http://localhost:4000/request', valueCopy,
                  // {
                  //   headers: {
                  //     'Access-Control-Allow-Origin': '*',
                  //     'Content-Type': 'application/json',
                  //   }
                  // },
                ).then((resp) => {
                  // console.log(resp);

                  setSubmitting(false);
                  if (resp.status == 200) {
                    // console.log('resp', resp);
                    toast.success(resp.data.message, { autoClose: 3000, });
                    history.push('/');
                  } else {
                    toast.error(resp.data.message, { autoClose: 3000, });
                    // console.log(resp);
                  }
                });
              }}

                  validationSchema={
                  Yup.object().shape({
                    productName: Yup.string(),
                    // .required('Required'),
                    category: Yup.object(),
                    cost: Yup.string(),
                    description: Yup.string()
                    // .required('Required'),
                  })
}
                >
                  {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue
                } = props;
                return (
                  <Form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>

                    <Field
                                component={TextField}
                                error={errors.productname && touched.productname}
                                label="Product Name"
                                name="productname"
                                id="productname"
                                value={values.productname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.productname && touched.productname) && errors.productname}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                              />
                  </Grid>
                    <Grid item xs={12} sm={12}>
                    <Field
                                component={RSelect}
                                name="category"
                                id="category"
                                value={values.category}
                                onChange={(ev) => categoryFunc(ev, setFieldValue)}
                                options={categoryData}
                                placeholder="--Select--"
                                error={errors.category}
                                touched={touched.category}
                              // isLoading={categoryLoading}
                                isClearable
                              />
                    {/*
            <Field
                component={TextField}
                label="Category"
                name="category"
                id="category"
                error={errors.category && touched.category}
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.category && touched.category) && errors.category}
                margin="normal"
                variant="outlined"
                type="category"
                maxLength="9"
                fullWidth
              /> */}
                  </Grid>
                    <Grid item xs={12} sm={12}>
                    <Field
                                component={TextField}
                                label="Cost"
                                name="cost"
                                id="cost"
                                error={errors.cost && touched.cost}
                                value={values.cost}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={(errors.cost && touched.cost) && errors.cost}
                                margin="normal"
                                variant="outlined"
                                type="cost"
                                maxLength="9"
                                fullWidth
                              />

                    <Field
                                type="textarea"
                                rows="6"
                                maxLength="201"
                                name="description"
                                id="description"
                                placeholder="Description"
                                value={values.description}
                                as={Input}
                                multiline
                                className="form-control"
                                invalid={errors.description && touched.description}
                                fullWidth
                              />

                    {/* <Field
                component={TextField}
                label="Description"
                name="description"
                id="description"
                error={errors.description && touched.description}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.description && touched.description) && errors.description}
                margin="normal"
                variant="outlined"
                type="description"
                maxLength="9"
                fullWidth
              /> */}
                  </Grid>

                  </Grid>

                  <Grid container spacing={2}>
                    {isSubmitting && <LinearProgress />}
                    <Grid item xs={12}>
                    <Button type="submit" fullWidth color="primary" variant="contained" disabled={isSubmitting}>
                                Submit
                          </Button>
                  </Grid>

                  </Grid>
                </Form>
                );
              }}
                </Formik>

              </Box>

            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Container className={classes.grid1Col2}>
                <Box>
                  <Grid item>
                My History
              </Grid>
                  <Grid item>
                {
                      !loadingIndicator && historyData.length > 0 ? historyData.map((historydata, i) => (
                        <HistoryCard key={i} historydata={historydata} />
                      )) : <Skeleton />
                    }

              </Grid>
                </Box>

              </Container>

            </Grid>

          </Grid>
        </Card>
      </Grid>
      <Box pt={4}>
        {/* <Copyright /> */}
      </Box>
      <ToastContainer />
      {/* </Container>  */}
    </>
  );
}
