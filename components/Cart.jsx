"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activehome, decrement, increment,removeitems } from "../app/globalredux/slices/slice";
import { FaCartArrowDown } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import Link from "next/link";
import Foater from '@components/Foater'


const Cart1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [total, settotal] = useState(0);

  const renderones = () => {
    settotal(0);
    count.map((e) => settotal((p) => p + e.cost * e.count));
    
  };

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0;
      count.forEach((e) => {
        newTotal += e.cost * e.count;
      });
      settotal(newTotal);
    };

    calculateTotal();
  }, [count]);

  const rendercartm = (index) => {
    renderones();
    dispatch(decrement(count[index]));
  };
  const rendercartp = (index) => {
    renderones();
    dispatch(increment(count[index]));
  };
  if (count.length<=0){
    return <div className="flex flex-col justify-center items-center h-[85vh]">
      <img className="w-[205px] h-[175px] sm:w-[425px] sm:h-[367px]" src='/cooking1.svg' alt="no orders"/>
      <h1 className="text-[#1E293B] font-medium mt-4 sm:mt-10 mb-3 text-2xl sm:text-3xl">No Orders Yet!</h1>
      <p className="text-[#64748B] mb-4 text-base">Your cart is empty. Add something from the menu.</p>
      <Link href="/" >
          <button className="text-white bg-[#F7931E] py-2 px-4 rounded-lg" onClick={()=>dispatch(activehome())}>Order Now</button>
          </Link>
    </div>
  }
  return (
    <>
    
    <div className="flex w-screen justify-center ">
      <div className="sm:w-11/12 w-screen max-w-[1040px] px-12 sm:p-12 sm:border-[1px] mt-12 mb-8 sm:mb-16 border-[#0b69ff36]">
        <div className="sm:flex justify-around hidden">
          <p>Item</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <div className="flex flex-col gap-6 mt-6">

        
        {count.map((e, index) => (
          <div key={e.id} className="sm:grid grid-cols-3 gap-6 justify-items-center place-items-center">
            
            <div className="flex  items-center gap-4 justify-self-start">
              <img
                className="w-[136px] h-[100px] rounded-lg"
                src={e.image_url}
                alt={e.id}
                />
              <p className="text-[#183B56] max-[600px]:hidden text-xl font-medium">{e.name}</p>
              <div className="sm:hidden flex flex-col  gap-2 text-[#475569]">
              <p className="text-[#183B56] text-xl font-medium">{e.name}</p>
              <div className="flex items-center gap-4">
              {
                <button>
                  {" "}
                  <BsFillCartDashFill
                    className="text-md"
                    onClick={() => rendercartm(index)}
                    />
                </button>
              }
              <p className="text-[#475569] font-medium">{e.count}</p>

              <button>
                <FaCartArrowDown
                  className="text-md"
                  onClick={() => rendercartp(index)}
                  />
              </button>
                  </div>
            <p className="text-[#FFA412] font-bold text-base">&#8377; {e.cost * e.count}.00</p>
            </div>
          </div>
                
            <div className="sm:flex hidden items-center gap-4 text-[#475569]">
              {
                <button>
                  {" "}
                  <BsFillCartDashFill
                    className="text-md"
                    onClick={() => rendercartm(index)}
                  />
                </button>
              }
              <p className="text-[#475569] font-medium">{e.count}</p>

              <button>
                <FaCartArrowDown
                  className="text-md"
                  onClick={() => rendercartp(index)}
                />
              </button>
            </div>
            <p className="text-[#FFA412] font-bold sm:inline hidden text-base">&#8377; {e.cost * e.count}.00</p>
          </div>
        ))}
        </div>
        <hr className="border-[1px] border-[#CBD2D9] mt-8 mb-6 border-dashed"/>
        <div className="grid grid-cols-3 justify-items-center place-items-center">
          <h1 className="place-self-start text-[#3E4C59] text-xl sm:text-2xl font-medium">Order Total:</h1>
          <p></p>
          <div className="flex flex-col gap-8">

          <h1 className="text-[#3E4C59] text-xl sm:text-2xl font-medium ">&#8377; {total}.00</h1>
          <Link href="/payment" >
          <button className="text-white bg-[#F7931E] p-2 sm:py-2 sm:px-4 rounded-lg" onClick={()=>dispatch(removeitems())}>Place Order</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
      <Foater/>
    </>
  );
};

export default Cart1;
