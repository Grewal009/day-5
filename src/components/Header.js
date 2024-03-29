import {useState} from 'react';
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

const loggedInUser = () => {
    //check authentication
    return true;
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            {   isLoggedIn?
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
                :<button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    );
};

export default Header;