import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import CurrentSection from './CurrentSection'
import { GlobalContext } from "./GlobalState";

const AppContainer = () => {
    return (
        <Router>
            <Route component={CurrentSection} />
        </Router>
    )
}

export default AppContainer