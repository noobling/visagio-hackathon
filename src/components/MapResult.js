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
const MyCard =  (props) => {
  const { classes } = props;
  
  return (
  <div  className={classes.container}>
  <AppBar >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Mapper
          </Typography>
        </Toolbar>
      </AppBar>
  <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="300"
          image="/armadale.png"
          title="Armadale"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your most suitable location is Armadale
          </Typography>
          <Typography component="p">
            Using advanced AI we have determined this to be the best place for you.
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
  </div>
)}

export default withStyles(styles)(MyCard)