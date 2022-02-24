import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Visibility from '@material-ui/icons/Visibility';
import Chat from '@material-ui/icons/Chat';
import { Redirect, useNavigate } from 'react-router-dom';
import img2 from '../../assets/images/img2.png';
import defaultimg from '../../assets/images/defaultimg.png';
import { myApi,myApiS3 } from 'src/Api';
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 320,
    // marginRight:"20px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function HighlightCard(props) {
  const classes = useStyles();
  const history = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getDetails = (items) => {
    history('/user/details',{
      state: items
    })
    // history.push({
    //   pathname: '/details',
    //   state: items
    // });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar} style={{cursor:"pointer"}}>
             <Visibility onClick={() => getDetails(props.item)} />
          </Avatar>
        )}
        // action={(
        //   <IconButton aria-label="settings">
        //    <Visibility onClick={() => getDetails(props.item)} />
        //   </IconButton>
        // )}
        title={props.item.category}
        subheader={props.item.productname}
      />
      <Divider/>
      <div style={{display:"flex",justifyContent:"center"}} >

      <img src={props.item!==""&&props.item.image.length>0?`${myApiS3}/${props.item.image[0].filename}`:img2} onError={e => { e.currentTarget.src = img2; }} width="300px" height="200px" />
        </div>
      
      {/* <CardMedia
        className={classes.media}
        image={ props.item!==""&&props.item.image.length>0?`${myApi}/${props.item.image[0].filename}`:img2}
        title="Paella dish"
      /> */}

{/* {
        props.item.image.length>0? <img src={`${myApi}/${props.item.image[0].filename}`} width="400px" height="300px"/>:
        <img src={defaultimg} width="400px" height="300px"/>
      } */}
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" style={{ whiteSpace: 'nowrap' }}>
          <Box sx={{
            textOverflow: 'ellipsis',
            // my:1,
            overflow: 'hidden',
            bgcolor: 'background.paper',
          }}
          >
            {props.item.description}
          </Box>

        </Typography>
        Rs 200
      </CardContent>
       */}
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <IconButton aria-label="chat">
            <Chat />
          </IconButton>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          // onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Visibility onClick={() => getDetails(props.item)} />
        </IconButton>
      </CardActions>
     */}
    </Card>
 
 );
}
