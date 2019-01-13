import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// Components

const styles = {
  grid: {
    minHeight: '50vh',
    width: '100%',
  },
  innerGrid: {
    width: '60%',
  },
  underline: {
    textTransform: 'uppercase',
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
  },
};

class Contact extends React.Component {

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
          <Typography className={classes.underline} component="h2" variant="display1" gutterBottom>Contact</Typography>
          <Typography variant="title" gutterBottom>Have a question or want to work together?</Typography>
          <Grid
            className={classes.innerGrid}
            container
            direction="column"
            justify="center">
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Email"
              className={classes.textField}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              rowsMax="4"
              onChange={this.handleChange('multiline')}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Contact);