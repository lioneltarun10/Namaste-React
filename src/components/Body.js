import RestaurantCard,{ withPromotedLabel } from "./RestaurantCard"
import { useState,useEffect,useContext } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () =>{

  //Local  State Variable - Super powerful variable

  const [listOfRestaurants,setListOfRestaurants] = useState([]); 
const [filteredRestaurant,setFilteredRestaurant] = useState([]);

const [searchText,setSearchText] = useState("")

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//whenevr state vaiables update, react triggers a reconciliation cycle(re-renders the component)
 useEffect(()=>{
    fetchData();
 },[])


const fetchData = async () =>{
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

  const json = await data.json()

  //  console.log(json);
  //optional chaining
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //  console.log( listOfRestaurants);
  // console.log(filteredRestaurant);
}


// console.log(" body rendered",listOfRestaurants);

const onlineStatus = useOnlineStatus()

if(onlineStatus === false){
  return (
  <h1>Looks like you are offline!! Please check your internet connection!</h1>
  )
}

const {setUserName,loggedInUser} = useContext(UserContext)

    return listOfRestaurants.length === 0? (
    <Shimmer />
    ) : (
      <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
              <input 
              type="text" 
              data-testid = "searchInput"
              className="border border-solid border-black" 
              value={searchText} onChange={(e)=>{
                setSearchText( e.target.value)
              }}/>
              <button 
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={()=>{
                //Filter the restaurant cards and update the UI
                //SearchText
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                setFilteredRestaurant(filteredRestaurant);

              }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button 
            className="px-4 py-2 bg-gray-100 rounded-lg" 
            onClick={()=>{
              
              // Filter Logic here
              const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4)
              setFilteredRestaurant(filteredList)
            }}
              
              >Top Rated Restaurants
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="m-2">UserName </label>
              <input 
              className="border border-black p-2" 
              value = {loggedInUser}
              onChange={(e)=>{
                setUserName(e.target.value)
              }}/>
            </div>
          </div>
          <div className="flex flex-wrap">
             {/* RestaurantCard */}
             {
              filteredRestaurant.map((restaurant) => (
              <Link 
              key={restaurant.info.id} 
              to={'/restaurants/' + restaurant.info.id}
              >
                {
                
                restaurant.info.avgRating >= 4.3?(
                <RestaurantCardPromoted resData={restaurant}/>
                ):(
                   <RestaurantCard resData={restaurant}/>
                )
                }
               
                </Link>
              ))
             }
            
          </div>
      </div>
    )
  }

  export default Body