import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const Upload = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {props.myProfileData!==null?props.myProfileData.firstName+" "+props.myProfileData.lastName:""}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          { props.myProfileData!==null?props.myProfileData.city!==undefined?props.myProfileData.city:"":""}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
           { props.myProfileData!==null?props.myProfileData.dateofbirth!==undefined?props.myProfileData.dateofbirth:"":""}
        </Typography>
      </Box>
    
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Edit Your Profile
      </Button>
    </CardActions>
  </Card>
);

export default Upload;
