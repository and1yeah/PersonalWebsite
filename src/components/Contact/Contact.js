import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// Assets
import Background from '../../assets/images/background/background2.jpg';

const styles = theme => ({
  "@global": {
    body: {
    	backgroundImage: 'url(' + Background + ')',
   		backgroundRepeat: "no-repeat",
     	backgroundPosition: "center center",
     	backgroundSize: "cover",
      backgroundAttachment: "fixed",
      opacity: 1,
      transition: '2s',
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
  innerGrid: {
    width: '40%',
  },
  contact: {
    color: '#0f0f13',
    textTransform: 'uppercase',
  },
  meet: {
    color: '#827e7e',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  send: {
    marginTop: 20,
    margin: theme.spacing.unit,
    width: '100px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  bar: {
    width: '100px',
    height: '5px',
    marginBottom: '10px',
    display: 'block',
    backgroundColor: '#3f51b5',
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
          <Typography className={classes.contact} component="h2" variant="display1" gutterBottom><b>Contact</b></Typography>
          <span className={classes.bar}></span>
          <Typography className={classes.meet} variant="title" gutterBottom><b>Have a question or want to work together?</b></Typography>
          <Grid
            className={classes.innerGrid}
            container
            direction="column"
            justify="center">
            <TextField
              className={classes.textField}
              id="outlined-name"
              label={<b>Name</b>}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              className={classes.textField}
              id="outlined-email"
              label={<b>Email</b>}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              className={classes.textField}
              id="outlined-multiline-flexible"
              label={<b>Message</b>}
              multiline
              rowsMax="4"
              value={this.state.message}
              onChange={this.handleChange('message')}
              margin="normal"

            />
            <Grid 
              container
              justify="flex-end">
              <Button className={classes.send} variant="contained" color="primary">
                <b>Send</b>
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