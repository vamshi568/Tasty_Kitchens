"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Searchload from "@components/Serachload";
import './index.css'
const Login = () => {
  const [error, seterrror] = useState("");
  const router = useRouter();
  const jwttoken = Cookies.get("jwt_token");
  const [isloading,setloading]=useState(false)
  const authLogin = async (e) => {

    e.preventDefault();
    setloading(true)
    const userDetails = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const res = await fetch("https://apis.ccbp.in/login", options);
    const data = await res.json();
    setloading(false)
    if (res.status === 200) {
      const token = data.jwt_token;
      Cookies.set("jwt_token", token, { expires: 30 });
      router.push("/");
    } else {
      seterrror(`* ${data.error_msg}`);
    }
  };
  if (jwttoken) {
    router.push("/");
  }


  return (
    <div >
      <div className="flex sm:flex-row overflow-x-hidden overflow-y-hidden  flex-col relative">
        <div className="sm:w-1/2  h-screen flex justify-center sm:items-center">
          <div className="flex flex-col w-9/12 sm:w-[456px] mt-40 sm:p-12 justify-center ">
            <div className="flex flex-col items-center">
              <img className='sm:inline hidden ' src="/Frame274.svg" alt="logo"  />
              <h1 className="italic text-2xl mb-8 sm:inline hidden  text-[#F7931E] font-bold">
                Tasty Kitchens
              </h1>
              <h1 className="text-3xl font-medium mb-16 max-[600px]:self-start">Login</h1>
            </div>

            <div>
              <form className="flex flex-col  gap-2 " onSubmit={authLogin}>
                <label htmlFor="username">Username</label>
                <input
                  className="mb-6 py-2 px-4 bg-[#E2E8F0] h-10"
                  type="text"
                  id="username"
                  required
                />
                <label htmlFor="Password">Password</label>
                <input
                  className="mb-6 px-4 py-2 bg-[#E2E8F0] h-10"
                  type="password"
                  name=""
                  id="Password"
                  required
                />
                <button
                  className="bg-[#F7931E] h-10 rounded-lg text-white"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p>{error}</p>
              <div className="flex justify-center items-center h-16 w-full">

              {isloading && <Searchload />}
              </div>
            </div>
          </div>
        </div>
        <img src="/Rectangle1456.png" alt="logo" className="cut sm:w-1/2 sm:h-screen sm:inline max-[600px]:absolute max-[600px]:rounded-full max-[600px]:w-[387px] max-[600px]:h-[387px] max-[600px]:-right-20 max-[600px]:-top-20" />
      </div>
    </div>
  );
};

export default Login;
