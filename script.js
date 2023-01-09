import React from "react";
import ReactDOM  from "react-dom/client";


const Title = () => {
    return(
        <a href="/">
             <img className="logo"
             src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
             alt="logo image"
            />
        </a>
       
        
    );
};

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const restaurantList = [
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "221310",
            "name": "Sweet Truth - Cake and Desserts",
            "uuid": "014a9fbb-7669-4c58-ac66-192a579a508a",
            "city": "11",
            "area": "Sector 22",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "7c51efd1c5a12b7925e428a87977f85d",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "sweet-truth-sector-22-east-chd",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "SCO 2927/2928,13 Ground floor Sec 22 Chandigarh, Near Hotel Diamond hotel , Pincode 160022",
            "locality": "Near Hotel Diamond Hotel",
            "parentId": 4444,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5700507~p=1~eid=00000185-8e19-f3e6-13dd-31660089016b",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "221310",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "383787",
            "name": "Burger Singh (Big Punjabi Burgers)",
            "uuid": "f1c88370-4d76-45ba-b963-78b4fe546195",
            "city": "11",
            "area": "East Chd",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "rgg5wgob786fhhcnlfjq",
            "cuisines": [
              "American",
              "Snacks",
              "Indian",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
              "restaurant": "burger-singh-(big-punjabi-burgers)-east-chd-east-chd",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "SCO 124-125-126 Sector 9 C, Chandigarh, Chandigarh- 160009",
            "locality": "Sector 9 C",
            "parentId": 375065,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "383787",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 1.899999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "40897",
            "name": "Captain Sam's Pizza",
            "uuid": "2bbe59c4-98fc-498d-8320-7a80412240ce",
            "city": "11",
            "area": "Sector 26",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "gq3lmem3uyofushcdbaj",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Beverages",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 3.5,
            "slugs": {
              "restaurant": "captain-sams-sector-26-manimajra",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "SCO 11, Madhya Marg, Sector 26, Chandigarh",
            "locality": "Madhya Marg",
            "parentId": 382786,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "70% off",
              "shortDescriptionList": [
                {
                  "meta": "70% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                },
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "70% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                },
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "70% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Free Delivery",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "70% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                },
                {
                  "meta": "FREE DELIVERY",
                  "discountType": "FREE_DELIVERY",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "40897",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 3.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "367586",
            "name": "Momo Magic Cafe",
            "uuid": "a1263970-e178-4039-94b0-5ac5028c62ca",
            "city": "11",
            "area": "Sector 22",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "u3lkwqkykuidipj0vv9a",
            "cuisines": [
              "Chinese",
              "Snacks",
              "Pastas",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
              "restaurant": "momo-magic-cafe-east-chd-east-chd",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "BOOTH NO-4284, SECTOR-22D, CHANDIGARH, Sector 22, Chandigarh, Chandigarh, 160022",
            "locality": "East Chd",
            "parentId": 138188,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "367586",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 1.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.3",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "221306",
            "name": "Faasos - Wraps & Rolls",
            "uuid": "e982ff2c-03e5-485a-9b20-01a21bec5f08",
            "city": "11",
            "area": "Sector 22",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "fphdqfddwenehxpdrioe",
            "cuisines": [
              "Fast Food",
              "Snacks",
              "North Indian",
              "Indian",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "faasos-sector-22-east-chd",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "SCO 2927/2928,13 Ground floor Sec 22 Chandigarh, Near Hotel Diamond hotel , Pincode 160022",
            "locality": "Near Hotel Diamond Hotel",
            "parentId": 21809,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "Flat ₹125 off",
              "shortDescriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹299",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹299 | Use code FLAT125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLAT125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "Flat ₹125 off on orders above ₹299 | Use code FLAT125",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "221306",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "221313",
            "name": "LunchBox - Meals and Thalis",
            "uuid": "7d648bc3-ad22-43ed-9836-de6306039d12",
            "city": "11",
            "area": "Sector 22",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "t3tidwie2ux7aabjrfba",
            "cuisines": [
              "North Indian",
              "Punjabi",
              "Biryani",
              "Healthy Food",
              "Jain",
              "Thalis",
              "Indian",
              "Mughlai",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "lunchbox-sector-22-east-chd",
              "city": "chandigarh"
            },
            "cityState": "11",
            "address": "SCO 2927/2928,13 Ground floor Sec 22 Chandigarh, Near Hotel Diamond hotel , Pincode 160022",
            "locality": "Near Hotel Diamond Hotel",
            "parentId": 4925,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "221313",
              "deliveryTime": 33,
              "minDeliveryTime": 33,
              "maxDeliveryTime": 33,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        }
];

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card">
            
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
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

const Footer = () => {
    return(
        <h4>Footer</h4>
    );
};

const AppLayout = () => {
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);