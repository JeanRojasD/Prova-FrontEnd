import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index/Index'
import Create from './pages/Create/Create'
import Put from './pages/Put/Put'


const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit' element={<Put />}>
                    <Route path=':userId' element={<Put />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouterLinks