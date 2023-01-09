import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function dataFilter(searchText, restaurants){
    const filterData = restaurants.filter((r) =>
    r.data.name.includes(searchText)
  );

  return filterData;
    
}

const Body = () => {
    
    const [searchText,setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);



    return(
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
                  const data = dataFilter(searchText, restaurants);
                  setRestaurants(data);
                  console.log(restaurants);
                }

            }    >Search</button>

        </div>

        {/*using .map() instead hard coded*/}
       <div className="restaurent-list">
        {
             restaurants.map((restaurant)=>{
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