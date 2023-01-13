import React from 'react'
import {Link} from 'react-router-dom'

 



export default function NavBar() {
  const current_user = JSON.parse(localStorage.getItem("userdata")).username;

  return (
     
    
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a href="#" class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 hover:border-black mx-1.5 sm:mx-6">Street Workout</a>   

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">Parkour</a>

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-black  mx-1.5 sm:mx-6">Skateboarding</a>


            <a href="#" class="border-b-2 border-transparent  transition-colors duration-200 transform dark:hover:text-gray-200   mx-1.5 sm:mx-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
            </a>

            <a href="#" class="border-b-2 border-transparent   transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>

            </a>
            <div className="absolute right-10"> Welcome {current_user}</div>
            
          
        </div>
    </nav>
  )
}