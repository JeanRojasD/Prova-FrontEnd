import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/Index/Index'

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Index} />
            </Switch>
        </Router>
    )
}

export default Routes