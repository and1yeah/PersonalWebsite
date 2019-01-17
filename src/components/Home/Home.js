import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Typography from '@material-ui/core/Typography';
// Assets
import * as Constants from '../../assets/constants';
import Background from '../../assets/images/background/background1.jpg';

const quote = createMuiTheme({
  typography: {
    fontFamily: 'Charm',
  },
});


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
  grid: {
    minHeight: '80vh',
    width: '100%',
  },
  bigAvatar: {
    margin: 30,
    color: '#fff',
    backgroundColor: deepPurple[500],
    width: 200,
    height: 200,
  },
  socialBtn: {
    marginLeft: 20,
    marginRight: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
};

class Home extends React.Component {
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
          <Avatar alt="Andy Ye" className={classes.bigAvatar}>AY</Avatar>
          <Typography component="h2" variant="headline" gutterBottom><b>Andy Wong Ye | Software Engineer</b></Typography>
          <MuiThemeProvider theme={quote}>
            <Typography variant="title" gutterBottom><b>"Be Happy, But Never Satisfied"</b></Typography>
          </MuiThemeProvider>
          <Grid item>
            <IconButton className={classes.socialBtn} href="https://www.facebook.com/And1.Yeah">
              <SvgIcon className={classes.socialIcon} fontSize="large" nativeColor='#3b5998'>
                <path d={Constants.facebook}/>
              </SvgIcon>
            </IconButton>
            <IconButton className={classes.socialBtn} href="http://www.linkedin.com/in/And1-Yeah">
              <SvgIcon className={classes.socialIcon} fontSize="large" nativeColor='#007bb6'>
                <path d={Constants.linkedin}/>
              </SvgIcon>
            </IconButton>
            <IconButton className={classes.socialBtn} href="https://www.instagram.com/and1.yeah/">
              <SvgIcon className={classes.socialIcon} fontSize="large" nativeColor='#bc2a8d'>
                <path d={Constants.instagram}/>
              </SvgIcon>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);