import React from 'react'
import {Switch, Route} from "react-router"
import Main from './main/Main.jsx'
import Scheduled from './lists/Scheduled.jsx'
import Read from './lists/Read.jsx'
import Readed from './lists/Readed.jsx'
import Thrown from './lists/Thrown.jsx'
import Profile from './profile/Profile.jsx'
import Manga from './Manga/Manga.jsx'
import Chapter from './Manga/Chapter.jsx'

const Body = () => {
    return(
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/:link' component={Manga}/>
            <Route exact path='/:link/:chapter' component={Chapter}/>
            <Route exact path='/lists/scheduled' component={Scheduled}/>
            <Route exact path='/lists/read' component={Read}/>
            <Route exact path='/lists/readed' component={Readed}/>
            <Route exact path='/lists/thrown' component={Thrown}/>
            <Route exact path='/profile' component={Profile}/>
        </Switch>
    )
};

export default Body;