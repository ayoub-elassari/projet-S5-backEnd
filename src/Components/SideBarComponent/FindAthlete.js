import React from 'react'
import SideBar from '../SideBar'

import AthleteCard from './AthleteCard'


export default function FindAthlete() {
  return (
    <>
    <SideBar/>
    <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">
           
         
           <h1 className="text-3xl  mb-7">Find Athlete</h1>

           <div>
           <AthleteCard/>
            </div>

 </div>
 </>
  )
}
