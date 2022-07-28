import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [post, setpost] = useState(false);
  const [user, setuser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    axios
      .post("http://localhost:8080/auth/user/login", payload)
      .then((res) => {
        setpost(true);
        setuser(res.data);
        localStorage.setItem("chatapp", JSON.stringify(res.data));
        console.log(res.data);

        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      })
      .catch((err) => {
        setpost(false);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-400">
        <div>
          {setpost ? null : <p>Wrong credentials</p>}
          <Link to="/">
            <h3 className="text-4xl font-bold text-purple-600">GOChat</h3>
          </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  className="px-3 py-4 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                  className="px-3 py-4 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <br />
            <Link to="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </Link>
            <div className="flex items-center mt-4">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={handleSubmit}
              >
                Login here
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
              <Link className="text-purple-600 hover:underline" to="/signup">
                Sign Up
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            ></button>
          </div>
        </div>
      </div>
    </div>
    //     <div className=" grid justify-center">

    //     <div className="font-mono bg-gray-400 w-96 space-y-4 	 ">
    //         <h3 className="pt-4 text-2xl text-center">Login !</h3>
    //       <div className="grid justify-center gap-8 px-8 pt-6 pb-8 mb-4  rounded bg-gray-400">

    //         <input
    // className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    // id="firstName"
    //     type="text" placeholder="username"/>
    //         {/* <input
    // className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    // id="firstName"
    //     type="text" placeholder="email"/> */}
    //         <input
    // className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    // id="firstName"
    //     type="text" placeholder="password"/>

    //                             <button
    //                                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    //                                 type="button"
    //                             >
    //                                 Click here
    //                             </button>
    //                             </div>
    // </div>
    //  </div>
  );
};
