import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import Header from '../boilerplate/Header';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
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
        <Route path="/about" exact component={About}/>
        <Route path="/experience" exact component={Experience}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
