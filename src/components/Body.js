import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"
import resList from "../utils/mockData"

const Body = () =>{

  //Local  State Variable - Super powerful variable

  const [listOfRestaurants,setListOfRestaurants] = useState(resList); 

    return (
      <div className="body">
          <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
              
              // Filter Logic here
              const filteredList = listOfRestaurants.filter((res)=>res.data.avgRating>4)
              setListOfRestaurants(filteredList)
            }}
              
              >
              Top Rated Restaurants
              </button>
          </div>
          <div className="res-container">
             {/* RestaurantCard */}
             {
              listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
              ))
             }
            
          </div>
      </div>
    )
  }

  export default Body