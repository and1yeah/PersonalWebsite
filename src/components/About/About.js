import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Assets
import Background from '../../assets/images/background/about1.jpg';
// Components
import Biography from './Biography';

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
});

class About extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
          <MuiThemeProvider theme={text}>
            <Typography component="h2" variant="display2" gutterBottom><b>Discover Who I Am...</b></Typography>
          </MuiThemeProvider>
          <Biography/>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(About);