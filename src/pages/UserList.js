import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import CustomerListResults from '../components/customer/CustomerListResults';
import UserListResult from '../components/List/UserListResult';
import UserListToolbar from '../components/master/UserListToolbar';
import customers from '../__mocks__/customers';
export default function UserList() {

  return (
    <>

<Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <UserListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <UserListResult />
        </Box>
      </Container>
    </Box>
   <ToastContainer />
    </>
  );
}


