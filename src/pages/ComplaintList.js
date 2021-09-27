import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import CustomerListResults from '../components/customer/CustomerListResults';
import ComplaintListResult from '../components/List/ComplaintListResult';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';
import customers from '../__mocks__/customers';
export default function ComplaintList() {

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
        <Box sx={{ pt: 3 }}>
          <ComplaintListResult />
        </Box>
      </Container>
    </Box>
   <ToastContainer />
    </>
  );
}


