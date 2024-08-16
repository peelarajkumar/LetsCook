// Link is a React router dom component gives us the power of rendering to a new page/component without reloading the current page
// use link same as like anchor <a> tag but instead of href - use to

import { Link } from "react-router-dom";

const Header = ()=>{

    let headerContent = (<div id="HeaderContent">
        <img  id="main-logo" src="https://static.vecteezy.com/system/resources/previews/008/212/813/large_2x/cooking-logo-design-vector.jpg" alt="Logo "></img>

        <h2 id="title">Cook Up Delicious Meals with Our Recipes </h2>

        <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item"><Link to="home">Home</Link></li>
            <li className="nav-item"><Link to="about">About Us</Link></li>
            <li className="nav-item"><Link to="recipes">Our Recipes</Link></li>
            <li className="nav-item"><Link to="profile">Profile</Link></li>
        </ul>
    </nav>
    </div>);
    return headerContent;
}

export default Header