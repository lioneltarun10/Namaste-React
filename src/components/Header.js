import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
  const [btnNameReact,setBtnNameReact] = useState("Login");
  console.log("Header Render");

  const onlineStatus = useOnlineStatus()

  //if no dependency array => useEffect is called on every component render
  // if dependency array is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [btnNameReact] => useEffect called everytime btnNameReact is updated
  useEffect(()=>{
    console.log("useEffect Called");
  })


    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-56" src= {LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">

              <li className="px-4">
              Online Status : {onlineStatus?"✅":"🔴"}
              </li>
              <li className="px-4">
              <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About Us</Link>  
               </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link> 
              </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link> 
              </li>
              <li className="px-4">Cart</li>
              <button className="login" onClick={()=>{
                
                btnNameReact === 'Login'?setBtnNameReact("Logout"):setBtnNameReact("Login")
                
              }}>{btnNameReact}</button>              
            </ul>
        </div>
      </div>
    )
  }

 export default Header