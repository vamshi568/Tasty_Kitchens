import React, { useEffect, useState } from "react";
import { BiDish,BiSearchAlt } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { IoFishSharp } from "react-icons/io5";
import { TbFishBone } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { activehome } from "@app/globalredux/slices/slice";
import MyLoader from '@components/Reasturant';

import Cookies from "js-cookie";
import Link from "next/link";
const Home1 = () => {
  const token = Cookies.get("jwt_token");
  const dispatch=useDispatch()
  const [selectedOption, setSelectedOption] = useState("");
  const [offset, setoffset] = useState(0);
  const [limit, setlimit] = useState(9);
  const [search,setsearch]=useState('')
  const [index,setindex]=useState(1)
  const [totallist,settotallist]=useState(0)
  const [isloading,setloading]=useState(false)

  const [popularres, setpopulares] = useState([]);
  const handleSortChange = async (event) => {
    const selectedValue = event.target.value;
    
    setSelectedOption(selectedValue);

    renderresturant()}

  async function renderresturant() {
    setloading(true)
    const res = await fetch(
      `https://apis.ccbp.in/restaurants-list?search=${search}&offset=${offset}&limit=${limit}&sort_by_rating=${selectedOption}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    
    settotallist(data.total)
    setpopulares(data.restaurants);
    setloading(false)
  }
  useEffect(() => {

    renderresturant();
    dispatch(activehome())
  }, [setpopulares,offset,limit]);

  const changeindex=()=>{
    setindex(p=>p-1)
    setoffset(p=>p-9)
    renderresturant()
  }
  const changeindex1=()=>{
    setindex(p=>p+1)
    setoffset(p=>p+9)
    renderresturant()
  }
  const rendersort=(e)=>{
    setsearch(e.target.value)
    
    
    if (search==='' ||  e.target.value===''){
      renderresturant()
    }
  }
  const rendersearch=()=>{
    setoffset(0)
    setindex(1)
      renderresturant()
  }
  if (isloading){
    return <MyLoader/>
  }
  

  return (
    <>
   
      <div className=" relative flex flex-col  items-center sm:h-[740px]">
        <div className="max-w-[1040px] w-screen max-[600px]:px-8 sm:w-11/12 py-8 sm:pt-16">
          <h1 className="text-3xl  font-bold text-[#183B56] mb-2">
            Popular Restaurants
          </h1>
          <div className="sm:flex-row flex flex-col max-[600px]:gap-4  sm:justify-between">
            <p className="text-[#64748B]">
              Select Your favarote resturant special dish and make your day
              happy...
            </p>
            <div className="flex items-center">

            <input className="focus:outline-none border-2 border-solid h-6 border-gray-600 rounded-l-md px-2" type="search" placeholder="search here.." onChange={rendersort} value={search}/>
            <button className="text-xl h-6 bg-gray-600 rounded-r-md text-white" onClick={rendersearch}><BiSearchAlt/></button>
            </div>
            <div className="flex sm:justify-center items-center gap-1">
              <BiDish className="text-[#475569] text-xl " />
              <select
                id="sortDropdown"
                value={selectedOption}
                onChange={handleSortChange}
                className="text-[#475569]"
              >
                <option className="" value="">
                  Select an option
                </option>
                <option value="Lowest">Sort by Lowest</option>
                <option value="Highest">Sort by Highest</option>
              </select>
            </div>
          </div>
        </div>
        <hr className=" w-screen sm:w-11/12 max-w-[1040px] h-1 opacity-50 bg-[#475569]" />
        <div className="flex sm:flex-row flex-col mt-12  sm:justify-center max-w-[1040px]  flex-wrap text-[#64748B] gap-8 ">
          {popularres!==undefined ?popularres.map((e) => (
            <Link href={`/resturant?id=${e.id}`} key={e.id}>
            <div   className="flex gap-4">
              <img
                className="w-[160px] h-[100px] sm:w-[148px] sm:h-24 rounded-lg"
                src={e.image_url}
                alt={e.id}
                />
              <div className="w-40">
                <h1 className="font-bold text-base text-[#334155] mb-1">{e.name}</h1>
                <p className="text-[ #64748B] mb-2">{e.cuisine}</p>
                <div className="flex items-center">
                  <AiTwotoneStar className="text-[#FFCC00]" />
                  <p className="font-bold text-[#1E293B]">
                    {" "}
                    {e.user_rating.rating}
                  </p>
                  <p>({e.user_rating.total_reviews})</p>
                </div>
              </div>
            </div>
                 </Link> 
          )):<div className="flex h-[400px] flex-col justify-center items-center">
            <div className="h-15 w-15 mb-4 border-2 border-gray-800 rounded-full p-5">
              <BsShopWindow className="text-3xl text-gray-700"/>
              </div>
              <h1 className="text-2xl mb-2 font-semibold ">Search results are not found</h1>
              <p>Try with other keywords</p>
            </div>}
        </div>
        {popularres!==undefined?
        <div className="sm:absolute bottom-0">

        
        <div className="flex gap-3 text-3xl text-[#334155] mb-16 mt-16  ">
          <button >
          {index>1 ? <IoFishSharp className="scale-x-[-1]" onClick={changeindex}/>:<TbFishBone className="scale-x-[-1]"/>}

          </button>
          
          <p className="text-xl">{index} of {Math.ceil(totallist/9)}</p>
          <button>

          {index<Math.ceil(totallist/9) ? <IoFishSharp onClick={changeindex1}/>:<TbFishBone/>}
          </button>
          </div>
        </div>:null}
      </div>
    </>
  );
};

export default Home1;
