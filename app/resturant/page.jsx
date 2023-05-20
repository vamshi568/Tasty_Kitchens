"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AiTwotoneStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../globalredux/slices/slice";
import Foater from "@components/Foater";
import Nav from "@components/Nav";
import MyResturant from "@components/Login";

const Restaurant = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const token = Cookies.get("jwt_token");
  const [addtocart, setcart] = useState([]);
  const [addtocart1, setcart1] = useState([]);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isloading,setloading]=useState(false)
  const [Restaurantdetails, setresturant] = useState({
    food_items: [
      {
        cost: 345,
        food_type: "NON-VEG",
        id: "2200043ddf818ab-15eb-4d7f-8284-589f24ed3c48",
        image_url:
          "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/food-items-2/chicken-salad-16.jpg",
        name: "Chicken Sala",
        rating: 3.8,
      },
    ],
  });

  useEffect(() => {
    async function renderresturant(params) {
      setloading(true)
      const res = await fetch(
        `https://apis.ccbp.in/restaurants-list/${params}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      setresturant({ ...data });
      let fr = [];
      for (let i of data.food_items) {
        fr.push(0);
      }
      setcart1([...fr]);
      setloading(false)
    }
    renderresturant(promptId);
  }, [setcart1, setresturant]);
  const rendercart = (index) => {
    const cart = [...addtocart];
    cart[index] = true;
    setcart1([...cart]);
  };
  const rendercartm = (index) => {
    const cart = [...addtocart1];
    cart[index] = cart[index] - 1;
    setcart1([...cart]);
    dispatch(decrement(Restaurantdetails.food_items[index]));
  };
  const rendercartp = (index) => {
    const cart = [...addtocart1];
    cart[index] = cart[index] + 1;
    setcart1([...cart]);
    dispatch(increment(Restaurantdetails.food_items[index]));
  };
  if (isloading){
    return <MyResturant/>
  }

  return (
    <>
    <Nav/>
    <div>
    
      <div
        className="bg-cover w-screen flex justify-center backgroundi pb-8"
        style={{ backgroundImage: `url(${"/resturantbg.svg"})` }}
      >
        <div className="flex max-w-[1040px] w-screen sm:w-11/12 h-[344px] items-center gap-8 ">
          <img
            className="h-[280px] w-[445px]  rounded-lg"
            src={Restaurantdetails.image_url}
            alt={Restaurantdetails.id}
          />
          <div className="text-white">
            <h1 className="font-medium text-3xl mb-4">
              {Restaurantdetails.name}
            </h1>
            <p className="font-normal mb-2 text-sm">
              {Restaurantdetails.cuisine}
            </p>
            <p className="font-normal mb-4 text-sm">
              {Restaurantdetails.location}
            </p>
            <div className="flex gap-8">
              <div>
                <div className="flex gap-1 items-center">
                  <AiTwotoneStar className="text-white" />
                  <p className="font-bold text-sm">
                    {Restaurantdetails.rating}
                  </p>
                </div>
                <p className="font-normal text-xs mt-1">
                  {Restaurantdetails.reviews_count}+ Rating
                </p>
              </div>
              <hr className="border-[1px] h-auto border-solid" />
              <div>
                <p className="font-bold text-sm">
                  &#8377; {Restaurantdetails.cost_for_two}
                </p>
                <p className="font-normal text-xs mt-1">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap w-screen sm:w-11/12 max-w-[1040px] justify-between  gap-y-8">
          {Restaurantdetails.food_items.map((e, index) => (
            <div key={e.id} className="flex gap-8 text-[#334155] items-center">
              <img
                className="w-[255px] rounded-lg h-[150px]"
                src={e.image_url}
                alt={e.id}
              />
              <div className="flex gap-2 flex-col w-[118px]">
                <h1 className="text-[#334155] font-bold text-lg">{e.name}</h1>
                <p className="font-medium text-sm">&#8377; {e.cost}.00</p>
                <div className="flex gap-1 items-center">
                  <AiTwotoneStar className="text-yellow-400" />
                  <p className="font-bold text-sm">{e.rating}</p>
                </div>
                {addtocart1[index] < 1 ? (
                  <button
                    className="w-[64px] border-2 border-solid px-4 py-2 rounded-lg border-yellow-400 text-yellow-400"
                    onClick={() => rendercartp(index)}
                  >
                    Add
                  </button>
                ) : (
                  <div className="flex items-center gap-4 text-[#475569]">
                    {
                      <button>
                        {" "}
                        <BsFillCartDashFill className="text-md"
                          onClick={() => rendercartm(index)}
                        />
                      </button>
                    }
                    <p className="text-[#475569] font-medium">{addtocart1[index]}</p>
                    
                    <button>
                      <FaCartArrowDown className="text-md" onClick={() => rendercartp(index)} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Foater/>
    </>
  );
};

export default Restaurant;
