import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Assets
import Background from '../../assets/images/background/projects.jpg';

const styles = {
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
};

class Projects extends React.Component {
  render() {

    return (
      <div>

      </div>
    )
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Projects);