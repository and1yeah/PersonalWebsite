import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import '../assets/application.css';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    boxShadow: 'none',
  }
};

class Header extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar className={classes.appBar} position="static" color="transparent">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
                <Tab color="inherit" label="About"/>
                <Tab color="inherit" label="Skills"/>
                <Tab color="inherit" label="Portfolio"/>
                <Tab color="inherit" label="Experience"/>
                <Tab color="inherit" label="Contact"/>
              </Tabs>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
