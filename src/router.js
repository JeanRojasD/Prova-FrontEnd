import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index/Index'
import Create from './pages/Create/Create'

const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/create' element={<Create />} />

            </Routes>
        </Router>
    )
}

export default RouterLinks