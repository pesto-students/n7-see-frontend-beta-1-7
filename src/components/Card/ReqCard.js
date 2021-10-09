import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Box,
  Button,
  Card,
  Chip,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import {
  IconAdjustmentsHorizontal, IconSearch, IconX, IconBrandHipchat
} from '@tabler/icons';
import avatarimg from '../../assets/images/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100%',
    marginTop: '10px',
    // border:"1px solid #000"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  action: {
    alignItems: 'flex-end'
  },
  chat: {
    backgroundColor: '#343287',
  },
  item: {
    fontSize: '8px',
    paddingLeft: '10px'
  },
  primaryText: {
    fontSize: '10px'
  },
  secondaryText: {
    fontSize: '14px'
  },
  amtText: {
    fontSize: '14px',
    padding: '10px'
  }
}));

export default function ReqCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (

    <List>
      <Card className={classes.root}>
        <ListItem>
          <Avatar alt="Remy Sharp" src={avatarimg} />
          <ListItemText
            primary={(
              <Typography color="textSecondary" variant="body1" className={classes.primaryText}>
                {props.historydata.productname}
              </Typography>
          )}
            secondary={(
              <Typography variant="body1" className={classes.secondaryText}>
                {props.historydata.description}
              </Typography>
          )}
            className={classes.item}
          />
          <Typography className={classes.amtText}>
            Rs.
            {props.historydata.cost}
          </Typography>
          <Avatar className={classes.chat}>
            <IconBrandHipchat stroke={1.5} size="1.3rem" />
          </Avatar>
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>

        </ListItem>
      </Card>
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-disqus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.847 21c-2.259 0 -4.323 -.667 -5.919 -2h-3.928l1.708 -3.266c-.545 -1.174 -.759 -2.446 -.758 -3.734c0 -4.97 3.84 -9 8.898 -9c5.052 0 9.152 4.03 9.152 9c0 4.972 -4.098 9 -9.153 9z" />
  <path d="M11.485 15h-1.485v-6h1.485c2.112 0 3.515 .823 3.515 2.981v.035c0 2.18 -1.403 2.984 -3.515 2.984z" />
</svg> */}
      {/* <Card className={classes.root}> */}
      {/* <div className={classes.details}> */}
      {/* <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={avatarimg}/>
        }
        action={

          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}

      {/* <CardContent className={classes.content}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item xs={12} md={2} lg={2}>
                <Avatar alt="Remy Sharp" src={avatarimg}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                sdfsdf
                </Grid>
                <Grid item xs={6} md={1} lg={1}>
                    $100
                </Grid>
                <Grid item xs={6} md={1} lg={1}>
                    <Avatar className={classes.chat}>
                    <MoreVertIcon />
                    </Avatar>
                </Grid>
                <Grid item xs={6} md={1} lg={1}>
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                </Grid>

            </Grid>

        </CardContent>
      */}
      {/* </div> */}
      {/* </Card> */}
    </List>

  );
}
