import React from 'react'
import About from './About'
import OrganizingCommittee from './OrganizingCommittee'
import Speakers from './Speakers'
import CallForPapers from './CallForPapers'
import ImportantDates from './ImportantDates'
import PaperSubmission from './PaperSubmission'
import Contact from './Contact'
import MapSection from './MapSection'
import Scope_of_Conference from './Scope_of_Conference'
import Editoral from './Editoral'
import Venue from './venue'

export default function Home() {
  return (
    <>
       <About/>
       <Scope_of_Conference/>
       <CallForPapers/>
       <Speakers/>
       <OrganizingCommittee/>
       <Editoral/>
       <ImportantDates/>
       <PaperSubmission/>
       <Venue/>
       <Contact/>
       {/* <MapSection/> */}
    </>
  )
}
