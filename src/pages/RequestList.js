import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import CustomerListResults from '../components/customer/CustomerListResults';
import RequestListResult from '../components/List/RequestListResult';
import RequestListToolbar from '../components/master/RequestListToolbar';
import customers from '../__mocks__/customers';
import { myApi } from 'src/Api';
export default function RequestList() {
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingIndicator(true);
      await axios.post(`${myApi}/admin/getallrequest`,{page:1,limit:10}).then((resp) => {
        console.log(resp);
        setLoadingIndicator(false);
        setData(resp.data.response);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };

    fetchData();
  }, []);
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
        {/* <RequestListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <RequestListResult data={data} />
        </Box>
      </Container>
    </Box>
   <ToastContainer />
    </>
  );
}


