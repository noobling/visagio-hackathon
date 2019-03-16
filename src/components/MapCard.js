import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
  }
};
const MyCard = (props) => {
  const { classes } = props
  
  return (

  <Card className={classes.card} style={{marginBottom: '20px'}}>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    className={classes.media}
    height="300"
    image={props.img}
    title={props.title}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      {props.title}
    </Typography>
    <Typography component="p">
    <LinearProgress variant="determinate" value={props.matchAmount} />
      Using advanced AI we have determined this to be the best place for you. At {props.matchAmount}%
    </Typography>
  </CardContent>
<CardActions>
  <Button size="small" color="primary" onClick={() => window.location.href="/#/user/create"}>
    Back to Search Page
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>
)
  }

export default withStyles(styles)(MyCard)