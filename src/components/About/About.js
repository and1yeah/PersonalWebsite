import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Assets
import Background from '../../assets/images/background/about1.jpg';

const text = createMuiTheme({
  typography: {
    fontFamily: 'Charm',
  },
});

const styles = theme => ({
  "@global": {
    body: {
    	backgroundImage: 'url(' + Background + ')',
   		backgroundRepeat: "no-repeat",
     	backgroundPosition: "center center",
     	backgroundSize: "cover",
      backgroundAttachment: "fixed",
      transition: '2s ease-in-out',
     	height: "100%",
    },
  	html: {
     	height: "100%",
    },
    "#componentWithId": {
     	height: "100%",
    }
	},
  grid: {
    minHeight: '60vh',
    width: '100%',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '50%',
    marginTop: 10,
    marginBottom: 20,
  }
});

class About extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid
          className={classes.grid}
          container
          direction="column"
          alignItems="center"
          justify="center">
          <MuiThemeProvider theme={text}>
            <Typography component="h2" variant="display2" gutterBottom><b>Discover Who I Am...</b></Typography>
          </MuiThemeProvider>
          <MuiThemeProvider theme={text}>
            <Typography component="h2" variant="headline" gutterBottom><b>Life</b></Typography>
          </MuiThemeProvider>
          <Paper className={classes.paper} elevation="2">
            <Typography variant="body2" gutterBottom>
              <b>
                Born April 25, 1994, Andy Ye is an Chinese American born and raised in Pennsylvania.
                He graduated from Pennsylvania State University with a bachelors in Computer Science.
              </b>
            </Typography>
          </Paper>
          <MuiThemeProvider theme={text}>
            <Typography component="h2" variant="headline" gutterBottom><b>Passions</b></Typography>
          </MuiThemeProvider>
          <Paper className={classes.paper} elevation="2">
            <Typography variant="body2" gutterBottom>
              <b></b>
            </Typography>
          </Paper>
          <MuiThemeProvider theme={text}>
            <Typography component="h2" variant="headline" gutterBottom><b>Skills</b></Typography>
          </MuiThemeProvider>
          <Paper className={classes.paper} elevation="2">
            <Typography variant="body2" gutterBottom>
              <b></b>
            </Typography>
          </Paper>
        </Grid>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(About);