import React from 'react'
import './Users.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import logo from "./logo.svg"

// ..

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/react';
AOS.init();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
   
    
  },
});

export default function Users({link,text}) {
  const classes = useStyles();

  return (
    <Card data-aos="fade-left" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <a href={link}>REACT FRONTEND PROJECT</a>
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            click on the above line to open my project,
            these are some react frontend project ...
            more project comming soon
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
    

    
    
  );
  <img src={logo}/>
}



