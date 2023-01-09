import { restaurantList } from "../config";
import { IMG_CDN_URL } from "../config";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card">
            
            <img src={IMG_CDN_URL+ cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} rating</h4>
            
        </div>
    );
};

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