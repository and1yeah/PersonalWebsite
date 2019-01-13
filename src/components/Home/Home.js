import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Typography from '@material-ui/core/Typography';
// Components
// Assets
import * as Constants from '../../assets/constants';
import '../../assets/application.css';

const quote = createMuiTheme({
  typography: {
    fontFamily: 'Charm',
  },
});

const styles = {
  grid: {
    minHeight: '80vh',
    width: '100%',
  },
  bigAvatar: {
    margin: 30,
    color: '#fff',
    backgroundColor: deepPurple[500],
    width: 175,
    height: 175,
  },
  socialIcon: {
    marginLeft: 20,
    marginRight: 20,
  }
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
          <Typography component="h2" variant="headline" gutterBottom>Andy Wong Ye | Software Engineer</Typography>
          <MuiThemeProvider theme={quote}>
            <Typography variant="title" gutterBottom>"Be Happy, But Never Satisfied"</Typography>
          </MuiThemeProvider>
          <Grid item>
            <IconButton className={classes.socialIcon} href="https://www.facebook.com/And1.Yeah">
              <SvgIcon fontSize="large" nativeColor='#3b5998'>
                <path d={Constants.facebook}/>
              </SvgIcon>
            </IconButton>
            <IconButton className={classes.socialIcon} href="http://www.linkedin.com/in/And1-Yeah">
              <SvgIcon fontSize="large" nativeColor='#007bb6'>
                <path d={Constants.linkedin}/>
              </SvgIcon>
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <SvgIcon fontSize="large" nativeColor='#bc2a8d'>
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