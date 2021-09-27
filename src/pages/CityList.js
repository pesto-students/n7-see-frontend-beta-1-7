import React, { Fragment, useEffect, useState,useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import CustomerListResults from '../components/customer/CustomerListResults';
import CityListResult from '../components/List/CityListResult';
import AddCity from '../components/master/AddCity';
import customers from '../__mocks__/customers';
export default function CityList() {

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
        {/* <AddCity setRerender={setRerender}/> */}
        <Box sx={{ pt: 3 }}>
          <CityListResult />
        </Box>
      </Container>
    </Box>
   <ToastContainer />
    </>
  );
}


