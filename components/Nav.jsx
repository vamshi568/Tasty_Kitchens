"use client";

import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activehome, activecart } from "../app/globalredux/slices/slice";

import Cookies from "js-cookie";

const Nav = () => {
  // const [navclick, setnavclick] = useState(true);
  const [menubtn, setMenu] = useState(false);
  const navclick=useSelector((state)=>state.navigation.value)
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="flex justify-around sm:justify-between items-center sm:w-11/12 w-screen max-w-[1040px] h-[96px]">
          <div className=" flex gap-4">
            <img
              className="h-[53px] 
              w-[43px]"
              src="/Frame274.svg"
              alt="logo"
              
            />
            <h1 className="italic text-2xl font-bold text-[#F7931E]">
              Tasty kitchens
            </h1>
          </div>
          <div className="sm:flex hidden items-center gap-8">
           
            <Link href="/" onClick={() => dispatch(activehome())}>
              <p
                className="font-bold "
                style={{
                  color: navclick ? "#F7931E" : "#334155",
                  cursor: "pointer",
                }}
              >
                Home
              </p>
            </Link>
            <Link href="/cart" onClick={() => dispatch(activecart())}>
              <p
                className="font-bold"
                style={{
                  color: navclick ? "#334155" : "#F7931E",
                  cursor: "pointer",
                }}
              >
                Cart
              </p>
            </Link>
            <Link href="/login" onClick={()=>Cookies.remove('jwt_token')}>
            <button className="bg-[#F7931E] rounded-lg text-white  px-4 py-2">
              Logout
            </button>
            </Link>
          </div>

          <IoIosRestaurant
            className="sm:hidden text-4xl inline -rotate-90"
            onClick={() => setMenu(!menubtn)}
          />
        </div>
      </div>
      {/* mobile veiw */}

      {menubtn && (
        <div className="sm:hidden mb-5 flex justify-around">
          <div className="flex justify-around items-center gap-8">
            <Link href="/" onClick={() => dispatch(activehome())}>
              <p
                className="font-bold "
                style={{
                  color: navclick ? "#F7931E" : "#334155",
                  cursor: "pointer",
                }}
              >
                Home
              </p>
            </Link>
            <Link href="/cart" onClick={() => dispatch(activecart())}>
              <p
                className="font-bold"
                style={{
                  color: navclick ? "#334155" : "#F7931E",
                  cursor: "pointer",
                }}
              >
                Cart
              </p>
            </Link>
            <Link href="/login" onClick={()=>Cookies.remove('jwt_token')}>
            <button type="button" className="bg-[#F7931E] rounded-lg text-white  px-4 py-2" >
              Logout
            </button>
            </Link>
          </div>
          <MdRestaurantMenu
            className="text-2xl"
            onClick={() => setMenu(false)}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
