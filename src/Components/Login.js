import React, { useEffect } from "react";
import logo from "./Assets/images/sp4life2.png";
import { useState } from "react";
import showPwdImg from "./Assets/images/show-password.svg";
import hidePwdImg from "./Assets/images/hide-password.svg";
import Slogon from "./Slogon.tsx";
import axios from "axios";
import { useNavigate} from 'react-router-dom';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Login() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [location, setLocation] = useState({ latitude: null, longitude: null });


  const [loginInfo, setLoginInfo] = useState({
    username: null,
    password: null,
  });

  const  handleLogin = async(e) => {
    e.preventDefault();
    console.log(loginInfo);

    await axios.post("http://localhost:8082/api/auth/signin", loginInfo).then((res) => {
        
        console.log(res.data);
        // if (JSON.parse(localStorage.getItem('workItems')).length > 0)
        localStorage.setItem("userdata", JSON.stringify(res.data));
        // localStorage.setItem("instagram",res.data.instagram)
        navigate("/Home");

      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });

      console.log("hado");
      console.log("latitude"+location.latitude);
      console.log("longitude"+location.longitude);

      const locationToSend={idUser:JSON.parse(localStorage.getItem('userdata')).id, latitude:location.latitude, longitude:location.longitude};

      const access_token = JSON.parse(localStorage.getItem("userdata")).accessToken;
    
      console.log(locationToSend);
      await  axios
          .post(
            `http://localhost:8082/location`,
            locationToSend ,
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            // console.error(error.response.data)
          });


      
  };

  useEffect(()=>{
    getLocation();
  }, [])



    function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCordinates,
        handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function getCordinates(position) {
    console.log("position");
    console.log(position.coords);
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occured");
    }
  }




  return (
    <div>
      <div>
        <div className="md:flex sm:block">
          <div class="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <img src={logo} class="md:w-1/2 sm:w-40" alt="logo" />
              <Slogon />
            </div>
            <div class="max-w-sm p-20 sm:-ml-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {error && (<p className="text-red-700 text-2xl ml-12 mb-5"> {error} </p>)}
              <form class="space-y-4 md:space-y-6">
                <input
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, username: e.target.value })
                  }
                  type="email"
                  placeholder="Adresse e-mail"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div className="pwd-container">
                  <div className="flex relative">
                    <input
                      onChange={(e) =>
                        setLoginInfo({ ...loginInfo, password: e.target.value })
                      }
                      Class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      name="pwd"
                      placeholder="Mot de passe "
                      type={isRevealPwd ? "text" : "password"}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <img
                      Class="object-contain mr-2   mt-2 h-6 sm:w-4 md:w-6 absolute right-0 top-0"
                      title={isRevealPwd ? "Hide password" : "Show password"}
                      src={isRevealPwd ? hidePwdImg : showPwdImg}
                      onClick={() => setIsRevealPwd((prevState) => !prevState)}
                    />
                  </div>
                  <div className="ml-20">
                    <a
                      href="#"
                      class=" relative text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      forget your password?
                    </a>
                  </div>
                </div>

                <button
                  onClick={(e) => handleLogin(e)}
                  type="submit"
                  class="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </form>
              <div class="  relative text-sm mt-10 font-medium text-gray-500 dark:text-gray-300">
                Creat your Account?
                <Link to="/SignUp">
                  <button className="text-red-600 sm:mr-4 md:ml-1 hover:underline dark:text-red-600">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}