import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:'auto',
        marginTop:'30px',
        padding:'20px',
        color:'#893330',
        //marginLeft:'auto',
      width: '50%',
      //maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
}));


const UserPosts = (props) => {
    const classes = useStyles();
    const {id} = useParams()    
    const [user, setUser] = useState({})
    const [userPosts, setUsersPost] = useState()
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((resp)=>{
            setUser(resp.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((resp)=>{
            setUsersPost(resp.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    },[id])

    return(
        <Card className={classes.root}>
            <Typography variant="h5" style={{textAlign:'center', paddingBottom:'20px'}}>
            Posts written by the user: {user.name}
            </Typography>
            {userPosts && (
                <ul>
                    {
                        userPosts.map((post)=>{
                            return <li><Link to={`/posts/${post.id}`} style={{paddingTop:'15px', color:'#893330',width:'100%'}}>{post.title}</Link></li>
                        })
                    }
                </ul>            
            )}       
        </Card>
        
    )
}

export default UserPosts