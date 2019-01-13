import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
// Assets
import '../assets/application.css';

const styles = {
  appBar: {
    boxShadow: 'none',
    background: 'transparent',
  },
  tabs: {
    marginTop: 0,
  },
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
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center">
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
                <Tab color="inherit" label={<b>Home</b>} component={Link} to="/"/>
                <Tab color="inherit" label={<b>About</b>} component={Link} to="/about"/>
                <Tab color="inherit" label={<b>Experience</b>} component={Link} to="/experience"/>
                <Tab color="inherit" label={<b>Projects</b>} component={Link} to="/projects"/>
                <Tab color="inherit" label={<b>Contact</b>} component={Link} to="/contact"/>
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
