import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// Components

const styles = theme => ({
  grid: {
    minHeight: '60vh',
    width: '100%',
  },
  innerGrid: {
    width: '40%',
  },
  underline: {
    textTransform: 'uppercase',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    marginTop: 20,
    margin: theme.spacing.unit,
    width: '100px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
  };

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
              className={classes.textField}
              id="outlined-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              className={classes.textField}
              id="outlined-email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              className={classes.textField}
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              rowsMax="4"
              value={this.state.message}
              onChange={this.handleChange('message')}
              margin="normal"

            />
            <Grid 
              container
              justify="flex-end">
              <Button className={classes.button} variant="contained" color="primary">
                Send
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </Grid>
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