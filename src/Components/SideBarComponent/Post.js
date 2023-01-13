import React, { useState, useRef, useEffect } from "react";
import like_true from "../Assets/images/like_true.png";
import like_false from "../Assets/images/like_false.png";
import axios from "axios";

export default function Post() {
  const [Like, setLike] = useState(false);
  const [showComentform, setshowComentform] = useState(false);
  const [showAllcoment, setshowAllcoment] = useState(false);
  let [myData, setmyData] = useState([]);
  const [userCreat, setuserCreat] = useState({});
  const [comment, setComment] = useState("");
  const [listcomment, setListComment] = useState([]);


  const access_token = JSON.parse(localStorage.getItem("userdata")).accessToken;
  const current_user = JSON.parse(localStorage.getItem("userdata")).username;
  


  const handleClick = (index) => () => {
    // console.log("click",index);
    setLike((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index],
      // <-- update value by index key
    }));
  };

  const addComment = (e, comment, id_user, id_post) => {
    //e.preventDefault();

    axios
      .post(
        `http://localhost:8082/post/comment/${id_user}/${id_post}`,
        { comment },
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
    setComment("");
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //  console.log("You clicked outside of me!");
          setshowAllcoment(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  } 
  //geting post 
  useEffect(() => {
    const access_token = JSON.parse(
      localStorage.getItem("userdata")
    ).accessToken;

    axios
      .get("http://localhost:8082/post/get", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setmyData(res.data);
      })
      .catch((error) => {
        // console.error(error.response.data)
      });
  }, []);
  
  const getAllComments = (id_post) => {
    
    //e.preventDefault();

    axios.get(
        `http://localhost:8082/post/comments/${id_post}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setListComment(res.data)
        //console.log(listcomment);
      })
      .catch((error) => {
        // console.error(error.response.data)
      });
    setComment("");
  };

  const deletePsot=(id_post)=>{
   console.log("hhhhhhh",id_post);
   axios.delete(
    `http://localhost:8082/post/Post/${id_post}`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  )
  .then((res) => {
    console.log(res.data);
    //console.log(listcomment);
  })
  .catch((error) => {
    // console.error(error.response.data)
    console.log(error)
  });
  
  axios
  .get("http://localhost:8082/post/get", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  .then((res) => {
    console.log(res.data);
    setmyData(res.data);
  })
  .catch((error) => {
    // console.error(error.response.data)
  });

  }


  return (
    <div>
      {myData.map((data, index) =>(
        <div class="w-full mt-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="px-5 pb-5">
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-orange-800">
              {" "}
              Athlete asking : {data.userCreatPost?.["username"]== current_user  ? data.userCreatPost?.["username"]  : data.userCreatPost?.["username"] }
              
              
            </button>
       

            
            <div className="text-center">
              <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Tile : {data.title}
              </h5>
            </div>
            <div>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Content : {data.question}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div className="flex">
                <button className="w-8 h-5">
                  <img
                    src={Like[index] ? like_false : like_true}
                    onClick={handleClick(index)}
                  />
                </button>
                <span class="text-2xl ml-5 font-bold text-gray-900 dark:text-white">
                  Likes
                </span>
              </div>
              <div className="flex">
                <button className="w-8 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {setshowAllcoment(true)
                  getAllComments(data.id_post)}}
                  class="text-2xl ml-5 font-bold text-gray-900 dark:text-white"
                >
                  Coments
                </button>
              </div>
              <div className="flex">
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {data.userCreatPost?.["sport"]}
              </a>
              {data.userCreatPost?.["username"]== current_user  ? 
              
              <>
              <div>
              <button onClick={()=>deletePsot(data.id_post)} className="ml-5">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
  
              </button>
              </div>
              </>
              
              : null }
             
             
             
              </div>
            </div>
            {/* COmnet  */}
          </div>
          <form className="flex">
            <input
              onChange={(e) => {
                setComment(e.target.value);
              }}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comnent"
              type="text"
              placeholder="Write your coment"
            />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                onClick={(e) =>
                  addComment(
                    e,
                    comment,
                    JSON.parse(localStorage.getItem("userdata")).id,
                    data.id_post
                  )
                }
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>

          <>
          
            {showAllcoment ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                      ref={wrapperRef}
                      className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">All Coments</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setshowAllcoment(false)}
                        ></button>
                      </div>
                      {/*body*/}
                      {listcomment.map((data, index) => (
                               <div>
                               <div class="p-12">
                                 <div className="flex">
                                   <div className="ml-5">
                                     <div className="flex">
                                       <div className="mr-20">
                                         <p className="text-gray-500 font-semibold tracking-tight mb-2">
                                          
                                         {data.userComment.username}:
                                         </p>
                                       
                                       </div>
       
                                       <div>
                                         <h5 class="text-gray-900 font-semibold tracking-tight mb-2 text-xs   dark:text-white">
                                                 {data.comment}
                                         </h5>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        </div>
      ))}
    </div>
  );
}
