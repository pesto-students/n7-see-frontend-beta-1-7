import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect,useState } from 'react';

const UserRequest = (props) => {
  const theme = useTheme();
  const [userCount,setUserCount]=useState([]);
  const [requestCount,setRequestCount]=useState([]);
  const [myDate,setMyDate]=useState([]);
  useEffect(()=>{
    if(props.data!==null)
    {
     
      var date=props.data.userCount.map((usercount)=>{
        // console.log(usercount._id)
        return usercount._id
      })

      var countofUser=props.data.userCount.map((usercount)=>{
        // console.log(usercount._id)
        return usercount.count
      })
      var countofRequest=props.data.requestCount.map((requestcount)=>{
        // console.log(requestcount)
        return requestcount.count
      })
      setMyDate([...date])
      setUserCount([...countofUser])
      setRequestCount([...countofRequest])
      
    }
  },[props.data])
  
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: userCount,
        label: 'Users',
        maxBarThickness: 10
      },
      {
        backgroundColor: colors.grey[200],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data:requestCount,
        label: 'Request',
        maxBarThickness: 10
      }
    ],
    labels: myDate
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            // endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Last {myDate.length} days
          </Button>
        )}
        title="User By Request"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          // endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview Only
        </Button>
      </Box>
    </Card>
  );
};

export default UserRequest;
