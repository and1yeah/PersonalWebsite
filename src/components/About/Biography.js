import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const text = createMuiTheme({
  typography: {
    fontFamily: 'Charm',
  },
});

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 10,
    marginBottom: 20,
  },
  imageGrid: {
    width: "30%",
  },
  image: {
    width: 200,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  body: {
    width: "50%",
  },
});

class Biography extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container direction="row" justify="space-evenly">
            <Grid className={classes.imageGrid} item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
              </ButtonBase>
            </Grid>
            <Grid className={classes.body} item container>
              <Grid item container direction="column" alignItems="center" spacing={16}>
                <Grid item>
                  <MuiThemeProvider theme={text}>
                    <Typography component="h2" variant="headline" gutterBottom><b>About Me</b></Typography>
                  </MuiThemeProvider>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    Born April 25, 1994, Andy Ye is an Chinese American born and raised in Pennsylvania.
                    He graduated from Pennsylvania State University with a bachelors in Computer Science.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

Biography.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Biography);