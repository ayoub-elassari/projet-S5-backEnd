import React,{useState} from 'react'
import SideBar from '../SideBar'
import axios from 'axios'

export default function Ask() {
    const [post, setPost] = useState({
        title: null,
        question: null,
    })
    const id_user= JSON.parse(localStorage.getItem('userdata')).id
    const access_token= JSON.parse(localStorage.getItem('userdata')).accessToken
    console.log(access_token);
    

    const handlePost = (e) => {
        e.preventDefault();
        console.log(post);
        
    
        axios.post(`http://localhost:8082/post/add/${id_user}`, post, {
     
            headers: {
          
              'Authorization': `Bearer ${access_token}`
            }
          })
          .then((res) => {
            console.log(res.data);
           
          //  navigate("/Home");
    
          })
          .catch((err) => {
            console.log(err.response.data.message);
           // setError(err.response.data.message);
          });
      };
    

  return (
    <>
     <SideBar/>
     <div className="p-7 text-2x1 font-semibold flex-1 h-screen md:ml-80 sm:ml-20">
            
          
            <h1 className="text-3xl  mb-7">ASk community</h1>
    <div>
   
    <form>   
  <div className="w-full  p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
    <input onChange={(e) =>setPost({ ...post, title: e.target.value })} type="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your title" required/>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Question</label>
<textarea  onChange={(e) =>setPost({ ...post, question: e.target.value })}  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a Question..."></textarea>
<button type="submit"    onClick={(e) => handlePost(e)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mt-4">Ask</button>
  </div>
  </form>
  </div>
  </div>
  </>
  )
}
