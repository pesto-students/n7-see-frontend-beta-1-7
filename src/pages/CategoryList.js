import React, { Fragment, useEffect, useState,useContext,useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import CustomerListResults from '../components/customer/CustomerListResults';
import CategoryListResult from '../components/List/CategoryListResult';
import AddCategory from '../components/master/AddCategory';
import customers from '../__mocks__/customers';

export default function CategoryList() {
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender,setRerender]=useState(true);
  const setRerenderFunc=(value)=>{
    console.log("value",value);
    setRerender(value);
  }
  return (
    <>

<Helmet>
      <title>Dashboard | Serve End</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <AddCategory setRerenderFunc={setRerenderFunc}/> */}
        <Box sx={{ pt: 3 }}>
          <CategoryListResult/>
        </Box>
      </Container>
    </Box>
   <ToastContainer />
    </>
  );
}


