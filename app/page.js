"use client";
import "./globals.css";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
import React from 'react'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Slider from "react-slick";
import Home1 from "@components/Home1";
import Nav from '@components/Nav';
import Foater from '@components/Foater';
import MyLoader from '@components/Reasturant';


export default function Home2() {
  // const route = useRouter();

  // if (token === undefined) {
  //   route.push("/login");
  // }

  
      const [offers, setoffers] = useState([]);
    const token = Cookies.get("jwt_token");
const [isloading,setloading]=useState(false)

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div>
        <ul className="-mt-20 listdots "> {dots} </ul>
      </div>
    ),
  };

    useEffect(() => {
        async function renderCurosule() {
          
            setloading(true)
          const res = await fetch("https://apis.ccbp.in/restaurants-list/offers", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          
          setoffers(data.offers);
          setloading(false)
        }
        renderCurosule();
      }, [setoffers]);
      if (isloading){
        return <MyLoader/>
      }
  return (
    <>
    <Nav/>
    <div>
        <div className="flex justify-center ">
        <Slider
          {...settings}
          className="max-w-[1040px]  w-screen sm:w-11/12 h-[320px]"
        >
          {offers.map((e) => (
            <div key={e.id}>
              <img src={e.image_url} alt={e.id} />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Home1 />
      </div>
        
    </div>
    <Foater/>
    
  
    </>
  );
}
