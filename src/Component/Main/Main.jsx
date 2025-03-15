import React from 'react'
import Header from '../../Core/Header/Header'
import Footer from '../../Core/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Core/Header/Navigation'
import About from '../About'
import CallForPapers from '../CallForPapers'
import Speakers from '../Speakers'
import ImportantDates from '../ImportantDates'
import Contact from '../Contact'

export default function Main() {
  return (
    <>
    <Navigation/>
    <Header/>
    <About/>
    <CallForPapers/>
    <Speakers/>
    <ImportantDates/>
    <Contact/>
    {/* <main>
        <Outlet></Outlet>
    </main> */}
    <Footer/> 
    </>
  )
}


