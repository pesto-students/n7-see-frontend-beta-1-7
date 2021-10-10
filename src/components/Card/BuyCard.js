import React, { Fragment,useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/core/Rating';
// import Rating from '@material-ui/lab/Rating';
import { myApi } from 'src/Api';
import {
  Avatar,
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight,
  Favorite,
  MoreVert,
  Chat,
  Visibility
} from '@material-ui/icons';

// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import { collapseClasses, Chip, Skeleton } from '@material-ui/core';
import { Redirect, useNavigate,Navigate } from 'react-router-dom';
import dashboardimg from '../../assets/images/dashboardimg.png';
import SearchCard from './SearchCard';
import img1 from '../../assets/images/img1.png';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: '40px',
    // border:"1px solid #000"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
    // border:"1px solid #000"
  },
  headerAvatar: {
    height: '10vh'
  },
  grid1Col1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border:"1px solid #000",
    padding: '40px'
  },
  grid1Col1Img: {
    height: '100%',
    width: '600px'
  },
  grid1Col2: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  grid1Col2Buyer: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  padding: {
    width: '500px',
    height: '200px',
    // marginTop: 10,
    // marginBottom: 20
    // border:"1px solid #000",
  },
  searchBox: {
    margin: '10px',
  },
  image: {
    width: 150,
    height: 150,
    //   border:"1px solid #000"
  },
  endStyle: {
    display: 'flex'
  }
}));

export default function BuyCard(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  var u_id=sessionStorage.getItem('u_id');
  // console.log(props.item.interest.length>0&&props.item.interest[0]._id)
  // console.log(sessionStorage.getItem('u_id'));
  var isInclude=props.item.interest.length>0?props.item.interest.some(item=>item._id===u_id):false
  // console.log(isInclude);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const getDetails = (items) => {
    navigate('/user/details',{
      state: items
    })
    // history.push({
    //   pathname: '/details',
    //   state: items
    // });
  };

  const expressInterestFunc = (r_id,u_id) => {
    const expressInterest = async () => {
      setLoadingIndicator(true);
      var expressreq={
        r_id:r_id,
        u_id:u_id
      }
      await axios.post(`${myApi}/request/expressinterest`,expressreq).then((resp) => {
        // console.log(resp);
        toast.success(resp.data.response.message, { autoClose: 3000, });
        setLoadingIndicator(false);
        // navigate('/')
        // window.location.reload();
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };
    expressInterest(r_id,u_id);
  };


  return (
    <>
{
  !loadingIndicator? <Grid
  container
  spacing={2}
  direction="row"
  alignItems="center"
    //   justifyContent="center"
  style={{ marginBottom: '50px', borderRadius: '4px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
  item
  md={12}
>
  <Grid item md={4} lg={4}>
    <div className={classes.image}>
      <img src={img1} className={classes.image} />
    </div>

  </Grid>
  <Grid item md={8} lg={8} style={{ paddingLeft: '20px' }}>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>

          <Typography variant="body2" gutterBottom>
            {props.item.category}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {props.item.productname}
          </Typography>
          <br />
        </Grid>
        <Grid item>

          <Rating
            name="simple-controlled"
            value={2}
          />
          <Typography variant="subtitle1">
            Rs.
            {props.item.cost}
          </Typography>

        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          <IconButton aria-label="settings">
            <Visibility onClick={() => getDetails(props.item)} />
          </IconButton>
        </Typography>
        <Typography variant="h4">
          <IconButton aria-label="add to favorites">
            {isInclude?<Favorite color="error" onClick={() => expressInterestFunc(props.item._id,u_id)}/>:<Favorite onClick={() => expressInterestFunc(props.item._id,u_id)}/>}
          </IconButton>
        </Typography>
        <Typography variant="h4">
          <IconButton aria-label="chat">
            <Chat />
          </IconButton>
        </Typography>
      </Grid>

    </Grid>

  </Grid>
</Grid>: <Skeleton animation="wave" variant="rectangular" width={40} height={40}/>
}
   </>

  );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import img1 from '../../assets/images/img1.png';
// import { Avatar, Card,Chip,List, ListItem, ListItemAvatar, ListItemText,CardActions,Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     maxWidth:'100%',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 250,
//     height: 250,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//       <Card style={{border:"1px solid #000"}}>
//           <Grid item md={4} lg={4}>
//               <img src={img1} className={classes.image}/>
//           </Grid>
//           <Grid item md={8} lg={8}>
//               sdsasdasdas ada sdasd
//           </Grid>
//       </Card>
//      );
// }
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import img1 from '../../assets/images/img1.png';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image={img1}
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import img1 from '../../assets/images/img1.png';
// import Chip from '@material-ui/core/Chip';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
// import EarningCard from './EarningCard';
// import Grid from '@material-ui/core/Grid';
// import { Avatar, List, ListItem, ListItemAvatar, ListItemText,CardActions,Button } from '@material-ui/core';
// const useStyles = makeStyles((theme) => ({
//     card: {
//         overflow: 'hidden',
//         position: 'relative',
//         '&:after': {
//             content: '""',
//             position: 'absolute',
//             width: '210px',
//             height: '210px',
//             borderRadius: '50%',
//             top: '-30px',
//             right: '-180px'
//         },
//         '&:before': {
//             content: '""',
//             position: 'absolute',
//             width: '210px',
//             height: '210px',
//             borderRadius: '50%',
//             top: '-160px',
//             right: '-130px'
//         }
//     },
//     content: {
//         padding: '12px !important'
//     },
//     avatar: {
//         // ...theme.typography.commonAvatar,
//         // ...theme.typography.largeAvatar,
//         backgroundColor: "#fff",
//         color: '#000',
//         width:"150px",
//         height:"150px",
//     },
//     primary: {
//         fontSize:"8px",
//         color: '#000'
//     },
//     secondary: {
//         color: '#000',
//         marginTop: '5px'
//     },
//     padding: {
//         width:"500px",
//         height:"150px",
//         marginTop: 10,
//         marginBottom: 20
//     },
//     categorybtn:{
//         width:"100px",
//         height:"20px",
//     },
//     primaryMargin:{
//         marginLeft:"10px",
//         border:"1px solid #000"

//     }

// }));
// export default function MediaControlCard() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (

//     <Card className={classes.card}>
//      <CardMedia
//         className={classes.avatar}
//         image={img1}
//         title=""
//       />
//     <CardContent>
//       <Typography className={classes.title} color="textSecondary">
//         Test
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">ACTION</Button>
//     </CardActions>
//   </Card>
// //     <List className={classes.card}>
// //     <ListItem alignItems="center" disableGutters className={classes.padding}>
// //         <ListItemAvatar>
// //             <Avatar variant="rounded" className={classes.avatar} style={{backgroundColor:"#fff",color:"#000"}} src={img1}>
// //             </Avatar>
// //         </ListItemAvatar>
// //         <ListItemText
// //             className={classes.padding}
// //             sx={{
// //                 mt: 0.45,
// //                 mb: 0.45
// //             }}
// //             primary={

// //                 <Grid item className={classes.primaryMargin}>
// //                       <Grid item xs={8} md={8}>
// //                       <Chip
// //                             label="Category"
// //                             color="secondary"
// //                             className={classes.categorybtn}
// //                         />
// //                       </Grid>
// //                       <Grid item xs={4} md={4}>
// //                       <Chip
// //                             label="Category"
// //                             color="secondary"
// //                             className={classes.categorybtn}
// //                         />
// //                       </Grid>

// //                 </Grid>

// //             }
// //             secondary={
// //                 // <Typography variant="subtitle2" className={classes.secondary} style={{fontSize:"10px"}}>
// //                 //    MyCategory
// //                 // </Typography>
// //                 <div>

// //                 </div>
// //             }
// //         />
// //          <IconButton
// //             edge="end"
// //             size="small"
// //             >
// //             <MoreVertIcon />
// //             </IconButton>
// //     </ListItem>
// // </List>

//   );
// }
