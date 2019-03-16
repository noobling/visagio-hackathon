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
import MapCard from './MapCard'
import Grid from '@material-ui/core/Grid';
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
    marginTop: '100px'
  }
};
const MyCard =  (props) => {
  const { classes } = props;
  
  return (
  <div  className={classes.container}>
  <AppBar >
        <Toolbar>
          <Typography variant="h6" color="inherit" onClick={() => window.location.href="/#"}>
            Mapper
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{paddingLeft: '20px'}} spacing={16}>
        <Grid item xs={12}>
    <Grid container justify="center">
      <Grid xs={12} md={4} item>
      <MapCard img='/armadale.png' title="Armadale" matchAmount={90}  />
      </Grid>
      <Grid xs={12} md={4}>
      <MapCard img='/karrinyup.png' title="Karrinyup" matchAmount={80} />
      </Grid>
      <Grid xs={12} md={4} item>
      <MapCard img='/thornlie.png' title="Thornlie" matchAmount={50} />
      </Grid>
      </Grid>
      </Grid>
    </Grid>
  </div>
)}

export default withStyles(styles)(MyCard)