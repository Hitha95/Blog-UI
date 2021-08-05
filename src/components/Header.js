import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
 
  title: {
    flexGrow: 1,
  },

}));

const Header = (props)=> {
  const classes = useStyles();
  
  const handleClick = (urlRoute) =>{
        props.history.push(urlRoute)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#aa6f5d'}}>
        <Toolbar>
                <Button onClick={()=>{handleClick('/')}} color="inherit">Home</Button>
                <Button onClick={()=>{handleClick('/users')}} color="inherit">Users</Button>
                <Button onClick={()=>{handleClick('/posts')}} color="inherit">Posts</Button>                           
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)
