
import React from 'react'
import   { useState } from 'react'
import showPwdImg from './Assets/images/show-password.svg'
import hidePwdImg from './Assets/images/hide-password.svg'

import logo from './Assets/images/sp4life2.png'
import cities from '../data/cities.js'
import sport from '../data/sport.js'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
} from 'react-router-dom';



export default function SignUp() {
  const navigate = useNavigate();
    const [pwd, setPwd] = useState('');
    const [error, seterror] = useState("");

    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [registerInfo, setregisterInfo] = useState({
      email: "",
      facebook:"",
      instagram:"",
      password: "",
      sport:"",
      tele:"",
      username:"",
      ville:"",
      password:""
      
     });
     const handleRegisrer = (e) => {
      e.preventDefault();
      
      const data = {
        "email": registerInfo.email,
        "facebook":  registerInfo.facebook,
        "instagram":  registerInfo.instagram,
        "password":registerInfo.password,
        "sport":registerInfo.sport,
        "tele":registerInfo.tele,
        "username":registerInfo.username,
        "ville":registerInfo.ville,
        "role":["ROLE_USER"]

      }
      console.log(data);
      axios.post("http://localhost:8082/api/auth/signup", data)
      .then((res) => {
        console.log("success");
        navigate("/");
      })
      .catch((err) => {
        seterror(err.response.data.message);
        // console.log(error);
      })

    };
    
  return (
    <div>
    <div className="md:flex sm:block">
     <img    class="md:w-1/3 sm:w-1/2 object-contain"  src={logo}  alt="logo" />
     <div class="md:flex sm:block justify-center items-center">   
      
      <div class="grid mr-5 w-96 md:my-8  h-screen place-items-center">
      <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
<form  onSubmit={handleRegisrer}  class="space-y-6" action="#">
<h5 class="text-xl font-medium text-gray-900 dark:text-white">Creat you Account SPORT4LIFE </h5>
{error && (<p className="text-red-700 ml-9"> {error} </p>)}
<div>
    <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
    <input onChange={(e) => setregisterInfo({ ...registerInfo, username: e.target.value })}  name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required/>
   {/* Error handling  */}
   
    <label for="Instagram" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Instagram</label>
    <input   onChange={(e) => setregisterInfo({ ...registerInfo, instagram: e.target.value })}  name="Instagram" id="Instagram" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"   required/>
</div>
<div>
    <label for="Facebook" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Facebook</label>
    <input onChange={(e) => setregisterInfo({ ...registerInfo, facebook: e.target.value })}   name="Facebook" id="Facebook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required/>
    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">number phone</label>
      <input  onChange={(e) => setregisterInfo({ ...registerInfo, tele: e.target.value })}  name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
    {/* VILLE */}
    <div> 
        
    <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Your City</label>
     <select  onChange={(e) => setregisterInfo({ ...registerInfo, ville: e.target.value })}   id="small" class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  
                     {cities.map((city) => {
                        return (
                          <option   value={city.ville}> {city.ville}</option>
                        );
                      })}
  
      </select>
    
      </div>
      {/* FIN VILLE */}
        {/* sport */}
    <div> 
        
        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Your Sport</label>
         <select onChange={(e) => setregisterInfo({ ...registerInfo, sport: e.target.value })}  id="small" class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
     
      
                         {sport.map((sport) => {
                            return (
                              <option value={sport.sporttype}> {sport.sporttype}</option>
                            );
                          })}
      
          </select>
        
          </div>
          {/* FIN sport */}
      <label for="secondename" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
      <input onChange={(e) => setregisterInfo({ ...registerInfo, email: e.target.value })}   name="Workemail" id="Workemail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
</div>
<div>
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
    
    <div Class="flex relative">
    <input 
        onChange={(e) => setregisterInfo({...registerInfo, password: e.target.value })}
        Class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
          name="pwd"
          placeholder="Mot de passe "
          type={isRevealPwd ? "text" : "password"}
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
        />
        <img Class="object-contain mr-2   mt-2 h-6 w-6 absolute right-0 top-0"
        title={isRevealPwd ? "Hide password" : "Show password"}
        src={isRevealPwd ? hidePwdImg : showPwdImg}
        onClick={() => setIsRevealPwd(prevState => !prevState)}
        />
    </div>
</div>
<div class="flex items-start">
    <div class="flex items-start">
        <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Join Us and confirm that your accept all rules of the plateformess</label>
    </div>
   
</div>
<button type="submit" class="w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign Up</button>
<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
Do you have already an Account
<Link to="/"class="text-red-600 hover:underline dark:text-blue-500"> Login</Link>
</div>
</form>
</div>
</div>

<div class="ml-5">
<p class="font-bold md:text-lg sm:text-sm"> Create an account to access :</p>
<br/>
<div class="flex">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5  md:h-5  sm:h-5 w-5 " viewBox="0 0 20 20" fill="blue"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
<p class="font-semibold  ml-2  md:text-lg sm:text-sm">Join THE URBAIN COMUNITY </p>
</div>
<br/>
<div class="flex">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="blue"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
<p class="font-semibold ml-2  md:text-lg sm:text-sm"> STREET SPORT & STREET CULTURE<br/> FREE YOUR MIND WITH STREET  SPORT </p>
</div>
<br/>
<div class="flex">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="blue"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
<p class="font-semibold  ml-2  md:text-lg sm:text-sm"> ALL LEVELS ALL AGES <br/> JOIN SPORT FOR LIFE </p>
</div>


     </div>
      </div>
      
  

</div>


</div>

  )
}
