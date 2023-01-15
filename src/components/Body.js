import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function dataFilter(searchText, allRestaurants){
    
    const filterData = allRestaurants.filter((r) =>
    r.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
    
}

const Body = () => {
    
    const [searchText ,setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        // API call
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining
         setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
         setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }

      console.log("render()");
      //avoid rendering component (early return)
      if(!allRestaurants){
            return null;
      }

    

    return  (allRestaurants?.length === 0)? <Shimmer /> :(
       /* <div className="restaurent-list">
        <RestaurantCard restaurant = {restaurantList[0]} />
        <RestaurantCard restaurant = {restaurantList[1]}/>
        <RestaurantCard restaurant = {restaurantList[2]}/>
        <RestaurantCard restaurant = {restaurantList[3]}/>
        <RestaurantCard restaurant = {restaurantList[4]}/>
        <RestaurantCard restaurant = {restaurantList[5]}/>
        </div>
       */ 
    <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={
                (e)=>{
                    setSearchText(e.target.value);
                }

            } />
            
            <button className="search-btn" onClick={    
                ()=>{
                  const data = dataFilter(searchText, allRestaurants);
                  setFilteredRestaurants(data);
                 
                  console.log(filteredRestaurants);
                }

            }    
            >Search</button>

        </div>

        {/*using .map() instead hard coded*/}
       <div className="restaurent-list">
        {   (filteredRestaurants?.length === 0 )? <h1>No result found!!!</h1>:  //if filteredRestaurants === 0 return not found
             filteredRestaurants.map((restaurant)=>{
                return(
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                );
            })
        }
       </div>
    </>
    );
};

export default Body;