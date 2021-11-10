import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index/Index'

const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
            </Routes>
        </Router>
    )
}

export default RouterLinks