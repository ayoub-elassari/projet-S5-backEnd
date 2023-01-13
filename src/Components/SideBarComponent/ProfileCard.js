import React from 'react'
import sp4life2 from './../Assets/images/sp4life2.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  {useState,useEffect,useRef} from 'react';
export default function ProfileCard() {
    const current_user = JSON.parse(localStorage.getItem("userdata")).username;
    const email = JSON.parse(localStorage.getItem("userdata")).email;
    const sport = JSON.parse(localStorage.getItem("userdata")).sport;
    const ville = JSON.parse(localStorage.getItem("userdata")).ville;
    const instagram = JSON.parse(localStorage.getItem("userdata")).instagram;
    const facebook = JSON.parse(localStorage.getItem("userdata")).facebook;
    const tele = JSON.parse(localStorage.getItem("userdata")).tele;
    




    

  
  return (
    <div>
    <div class="bg-white shadow-md w-11/12 border rounded-md mt-10">
        <div class="p-12">
            <div className="flex">
             <img src={sp4life2} className="rounded-full shadow-2xl w-40 h-40"/>
             <div className="ml-10 mt-10">
                 
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">Username:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{current_user}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">email:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{email}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">ville:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{ville}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">Sport:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{sport}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">telephone:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{tele}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">instagram:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{instagram}</h5>
                 </div>   
                 <div className="flex">
                 <label className="text-gray-900 font-semibold text-2xl  text-center  tracking-tight mb-2 dark:text-white">facebook:</label>
                <h5 class="text-gray-900 font-semibold text-2xl ml-5  text-center  tracking-tight mb-2 dark:text-white">{facebook}</h5>
                 </div>   
            <div className="ml-80 mt-5">
            <Link className="flex" to="/">
            <a href="#" class="text-white   bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                LogOut
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </Link>
            </div>
            </div>
            </div>
         
        </div>
    </div>
</div>
  )
}