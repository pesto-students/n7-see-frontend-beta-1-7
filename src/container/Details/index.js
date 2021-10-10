import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {
  Chat
} from '@material-ui/icons';
import {
  Avatar, ListItem, ListItemAvatar, ListItemText,
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
  LinearProgress, Chip, Modal,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import HistoryCard from '../../components/Card/HistoryCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import { useLocation, Redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';
import Detail from './Detail';
const Details = () => (
  <>
<Detail/>

  </>
);

export default Details;
