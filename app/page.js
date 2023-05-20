"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Slider from "react-slick";
import Home1 from "@components/Home";
import { useRouter } from 'next/navigation';
import Home from "./home/page";

export default function Home2() {
  const token = Cookies.get("jwt_token");
  const route=useRouter()
  
  if (token===undefined){
    route.push("/login")
  }
  

  
  return (
    <>
    <Home/>
      
    </>
  );
}
