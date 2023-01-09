import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
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

        //using .map() instead hard coded
        
       <div className="restaurent-list">
        {
             restaurantList.map((restaurant)=>{
                return(
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                );
            })
        }

       </div>

    );
};

export default Body;