import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate()
    const [navbar, setNavbar] = useState(false);

    const chatuser = JSON.parse(localStorage.getItem('chatapp'))

    // const handleuserlogout = ()=>{
    //     localStorage.removeItem('chatapp')
    //     navigate("/")
    // }

 return (
    <div>
         <nav className="w-full bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/" >
                            <h2 className="text-2xl font-bold text-white">GOChat</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/chat">Chat</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/about">About US</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/contact">Contact US</Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {chatuser? <button onClick={()=>{
                                 localStorage.removeItem("chatapp");
           
                                 navigate("/login")
                            }}>Log out</button> : <>  <Link
                        to="/login"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </Link></>}
                   
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {chatuser? <button  onClick={()=>{
                                 localStorage.removeItem("chatapp");
           
                                 navigate("/login")
                            }}>Logout</button> : <>  <Link
                        to="/login"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </Link>
                    <Link
                        to="/signup"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </Link></>}
                  
                </div>
            </div>
        </nav>
    </div>
 )

//   return (
//     <div>
//           <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <Link
//               className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//             to="/login"
//             >
//              Login
//             </Link>
//             <Link
//                   className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//                   to="/signup"
//                 >
//                     Signup
//                 </Link>
//             <button
//               className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id="example-navbar-danger"
//           >
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="nav-item">
               
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
}
