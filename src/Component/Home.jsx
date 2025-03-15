import React from 'react'
import About from './About'
import OrganizingCommittee from './OrganizingCommittee'
import Speakers from './Speakers'
import CallForPapers from './CallForPapers'
import ImportantDates from './ImportantDates'
import PaperSubmission from './PaperSubmission'
import Contact from './Contact'
import MapSection from './MapSection'

export default function Home() {
  return (
    <>
       <About/>
       <OrganizingCommittee/>
       <Speakers/>
       <CallForPapers/>
       <ImportantDates/>
       <PaperSubmission/>
       <Contact/>
       <MapSection/>
    </>
  )
}
