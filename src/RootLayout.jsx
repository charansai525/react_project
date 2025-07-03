import React from 'react'
import { Header } from './Component/Header/Header'
import { Fotter } from './Component/Fotter/Fotter'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Header/>
        
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default RootLayout