import React, {Component} from 'react';
import {Route} from 'react-router';
import AddFilm from './AddFilm';
import AllFilms from './AllFilms'

class DashboardRouter extends Component {
    render(){
        return (
            <>
                <Route path="/add" component={AddFilm}/>
                <Route path="/all" component={AllFilms}/>
            </>
        );
    }
}

export default DashboardRouter;