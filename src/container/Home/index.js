import React, {
  Fragment, useState, useEffect, useRef
} from 'react';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
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
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Card,
  CardContent
} from '@material-ui/core';
import { sizing } from '@material-ui/system';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import UserCard from './components/UserCard';
import UserCardRedux from './components/UserCardRedux';
// import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUser(result.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Redux</h2>
      <UserCardRedux />
      <h2>Normal</h2>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        //   justifyContent="center"
        style={{ minHeight: '100vh' }}
        item
        md={12}
      >

        {
              user.length > 0 ? user.map((newuser, i) => (
                <Grid
                  container
                  item
                  xs={2}
                  key={i}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <UserCard data={newuser} />
                </Grid>
              )) : 'No User'
           }

      </Grid>

    </div>
  );
}

export default Home;
