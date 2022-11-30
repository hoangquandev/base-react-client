import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import TopBar from './TopBar'

const Public = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Outlet />
        </div>
    )
}

export default Public