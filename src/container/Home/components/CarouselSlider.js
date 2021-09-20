import React from 'react';
import { createTheme  } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Carousel from 'react-material-ui-carousel';
import CarouselSlide from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const theme = createTheme  ({
    palette: {
        primary:{
            main:'#3c52b2'
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Button: {
        "&:hover": {
            backgroundColor: "#fff !important"
          }
    },
    title: {
      flexGrow: 1,
    },
}));



export default function UMainPage (){
    const pictures = [
        {image:'https://picsum.photos/800/300/?random', title:'Iu 1'},
        {image:'https://picsum.photos/800/300/?random', title:'Iu 2'},
        {image:'https://picsum.photos/800/300/?random', title:'Iu 3'}
    ];
    const classes = useStyles();

    return (

            <Carousel indicators={false}>
                {pictures.map(({image, title}) => (
                    <CarouselSlide key={image}>
                        <Card>
                            <CardMedia
                                image={image}
                                title={title}
                                style={{
                                    height: 0,
                                    paddingTop: '25%',
                                }}
                            />
                        </Card>
                    </CarouselSlide>
                ))}
            </Carousel>
    );
} 