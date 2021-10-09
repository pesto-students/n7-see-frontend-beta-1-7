import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const RequestByCategory = (props) => {
  // console.log(props);
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: props.data[0]!==undefined&&props.data[1]!==undefined&&props.data[2]!==undefined? [props.data[0].count, props.data[1].count, props.data[2].count]:[0,0,0],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: props.data[0]!==undefined&&props.data[1]!==undefined&&props.data[2]!==undefined?[props.data[0]._id, props.data[1]._id, props.data[2]._id]:["No Category","No Category","No Category"]
  };




  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = props.data[0]!==undefined&&props.data[1]!==undefined&&props.data[2]!==undefined?[
    {
      title: props.data[0]._id,
      value: props.data[0].count,
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: props.data[1]._id,
      value: props.data[1].count,
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: props.data[2]._id,
      value: props.data[2].count,
      icon: PhoneIcon,
      color: colors.orange[600]
    }
  ]:[
    {
      title: "Nil",
      value: 0,
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: "Nil",
      value: 0,
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: "Nil",
      value: 0,
      icon: PhoneIcon,
      color: colors.orange[600]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Request By Category" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {(value*100/props.total).toFixed(1)}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RequestByCategory;
