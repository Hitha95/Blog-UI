import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:'auto',
        marginTop:'30px',
        padding:'20px',
        color:'#893330',
        width: '90%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ShowPost = (props) =>{
    const classes = useStyles();
    const { id } = useParams()
    const [userId, setUserId] = useState()
    const [user, setUser] = useState({})
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp)=>{
            setPost(resp.data)
            setUserId(resp.data.userId)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((resp)=>{
            setComments(resp.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])
    useEffect(()=>{
        if(userId !== undefined) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((resp)=>{
                    setUser(resp.data)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
    },[userId])

    return(
        <Card className={classes.root}>
            <Typography variant="h5" style={{textAlign:'center', paddingBottom:'20px'}}>
                Username: {user.name}
            </Typography>
            <Divider />
            <Typography variant="h6" style={{ paddingTop:'20px'}}>
                Title: {post.title}
            </Typography>
            <ul>
                {
                    comments.map((comment)=>{
                        return <li key={comment.id}  style={{color:'#893330', fontFamily:'"Roboto", "Helvetica", "Arial"'  }}>{comment.body}</li>
                    })
                }
            </ul>
            <Typography variant="h6" >
                Body:<br />
            </Typography>
            <Typography variant="body1" >
                {post.body}
            </Typography>
            <Button color="inherit" style={{width:'100%'}}><Link to={`/users/${user.id}`} style={{paddingTop:'15px', color:'#aa6f5d'}}>More posts of author {user.name}</Link></Button> 
        </Card>
    )
}

export default ShowPost