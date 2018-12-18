import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import Home from '../components/Home/Home';
import Header from '../boilerplate/Header';
// Style
import '../assets/application.css';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className= {classes.root}>
        <Header />
        <Route path="/" exact component={Home}/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
