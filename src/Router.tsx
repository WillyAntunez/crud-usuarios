import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, UserPosts } from './pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/posts/:id' Component={UserPosts} />
                <Route path='/*' Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}
