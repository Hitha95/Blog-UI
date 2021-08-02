import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Divider, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight:'auto',
        marginLeft:'auto',
      width: '90%',
      //maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },  
    table: {
        minWidth: 650,
      },
    inline: {
      display: 'inline',
    },
    divider:{
        width:'100%'
    }
  }));


const Posts = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            setPosts(resp.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <List className={classes.root} >            
        {
            posts.map((post)=>{
                return(
                <>
                <ListItem key={post.id}> 
                    <Button color="inherit" style={{width:'100%'}}><Link to={`/posts/${post.id}`} style={{textDecoration:'none', color:'#893330'}}>{post.title}</Link></Button>                                
                </ListItem>
                <Divider className={classes.divider}/>
                </>
                )
            })
        }                
        </List>
    )

}

export default Posts