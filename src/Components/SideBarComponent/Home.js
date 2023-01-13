import React from 'react'
import SideBar from '../SideBar'
import Post from './Post'
import Ask from './Ask'
import NavBar from './NavBar'


export default function Home() {
    
    return (
      <>
      
      <SideBar/>
      <NavBar/>
       
       
       
       
          <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">
            
          
              <h1 className="text-3xl  mb-7">Home</h1>
              <Post/>
              
              {/* <Ask/> */}
              
                
             
               
               
                  
                   
                   
              
              </div>    
              </>
              
    )
  }