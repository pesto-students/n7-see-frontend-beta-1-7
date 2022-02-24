import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import TotalUser from '../components/dashboard/TotalUser';
import LatestRequest from '../components/dashboard/LatestRequest';
import LatestCategory from '../components/dashboard/LatestCategory';
import UserRequest from '../components/dashboard/UserRequest';
import RequestApproved from '../components/dashboard/RequestApproved';
import TotalRequest from '../components/dashboard/TotalRequest';
import PendingRequest from '../components/dashboard/PendingRequest';
import RequestByCategory from '../components/dashboard/RequestByCategory';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import { myApi } from 'src/Api';

export default function Dashboard() {
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingIndicator(true);
      await axios(`${myApi}/admin/getadmindashboard`).then((resp) => {
        //console.log(resp);
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
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {data!=null?<TotalUser data={data.totalUser}/>:<Skeleton variant="rectangular" width={300} height={118} />}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {data!=null?<TotalRequest data={data.totalRequest}/>:<Skeleton variant="rectangular" width={300} height={118} />}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
             {data!=null?<PendingRequest sx={{ height: '100%' }} data={data.requestPending}/> :<Skeleton variant="rectangular" width={300} height={118} />}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {data!=null?<RequestApproved data={data!=null?data.requestApproved:""}/>:<Skeleton variant="rectangular" width={300} height={118} />}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
           {data!=null? <UserRequest data={data}/>:<Skeleton animation="wave" width={900} height="300px"/>}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {data!=null&&data.topCategory.length>0?<RequestByCategory sx={{ height: '100%' }} data={data.topCategory} total={data.totalRequest} />:<Skeleton animation="wave" width={300} height="100%"/>}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {data!=null?<LatestCategory sx={{ height: '100%' }} data={data.latestCategory}/>:<Skeleton animation="wave" width={300} height={300}/>}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {data!=null?<LatestRequest data={data!=null?data.latestRequest:[]}/>:<Skeleton animation="wave" width={300} height={300}/>}
          </Grid>
        </Grid>
      </Container>
    </Box>
      <ToastContainer />
    </>
  );
}



// const Dashboard = () => (
//   <>
//     <Helmet>
//       <title>Dashboard | Material Kit</title>
//     </Helmet>
//     <Box
//       sx={{
//         backgroundColor: 'background.default',
//         minHeight: '100%',
//         py: 3
//       }}
//     >
//       <Container maxWidth={false}>
//         <Grid
//           container
//           spacing={3}
//         >
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalUser />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <TotalCustomers />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <RequestApproved />
//           </Grid>
//           <Grid
//             item
//             lg={3}
//             sm={6}
//             xl={3}
//             xs={12}
//           >
//             <PendingRequest sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <UserRequest />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <RequestByCategory sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={4}
//             md={6}
//             xl={3}
//             xs={12}
//           >
//             <LatestCategory sx={{ height: '100%' }} />
//           </Grid>
//           <Grid
//             item
//             lg={8}
//             md={12}
//             xl={9}
//             xs={12}
//           >
//             <LatestRequest />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </>
// );

// export default Dashboard;
