import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const CurrentSection = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" />
                <Route path="/search"/>
                <Route path="/liked"/>
                <Route />
                <Route />
                <Route />
                <Route />
            </Switch>
        </div>
    )
}

export default CurrentSection