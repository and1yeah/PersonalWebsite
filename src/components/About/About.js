import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Assets

const styles = {
  grid: {
    minHeight: '80vh',
    width: '100%',
  },
};

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
        <Typography component="h2" variant="headline" gutterBottom><b>ABOUT ME</b></Typography>
        </Grid>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(About);