import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Component/Main/Main'
import Home from '../Component/Home'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
        <Route path="/" element={<Home/>} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
