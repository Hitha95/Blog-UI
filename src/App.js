import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Posts from './components/Posts'
import ShowPost from './components/ShowPost'
import UserPosts from './components/UserPosts'
import Users from './components/Users'
import NotFound from './components/NotFound'
import Header from './components/Header'

const App = (props) => {

    return(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact={true} ><Home /></Route>
            <Route path='/users' exact={true} ><Users /></Route>
            <Route path='/posts' exact={true} ><Posts /></Route>
            <Route path='/users/:id' ><UserPosts /></Route>
            <Route path='/posts/:id' ><ShowPost /></Route>
            <Route component={NotFound} />
        </Switch>
        
    </div>
    )
}

export default App