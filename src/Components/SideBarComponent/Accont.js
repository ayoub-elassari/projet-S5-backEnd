import React from 'react';
import SideBar from '../SideBar';

import ProfileCard from './ProfileCard';
export default function Acount() {
  return (
    <div> 
       
    
    <SideBar/>

     
     
    <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">

          
        
            <h1 className="text-3xl  mb-7">User Profile</h1>
            <ProfileCard/>
    </div>
    </div>
  )
}