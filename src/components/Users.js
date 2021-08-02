import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Divider, Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight:'auto',
        marginLeft:'auto',
      width: '90%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    divider:{
        width:'100%'
    }
  }));

const Users = (props) => {
    const classes = useStyles();
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const handleClick = (urlRoute) =>{
        props.history.push(urlRoute)
    }
    return(
        <List className={classes.root}>
            
        {
            users.map((user)=>{
                return(
                <>
                <ListItem alignItems="flex-start" key={user.id}> 
                    <Button color="inherit" style={{width:'100%'}}><Link to={`/users/${user.id}`} style={{textDecoration:'none', color:'#893330'}}>{user.name}</Link></Button>                                
                </ListItem>
                <Divider className={classes.divider}/>
                </>
                )
            })
        }                
        </List>
    )
}

export default Users
