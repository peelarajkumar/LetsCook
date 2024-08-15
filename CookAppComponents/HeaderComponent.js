const Header = ()=>{

    let headerContent = (<div id="HeaderContent">
        <img  id="main-logo" src="https://static.vecteezy.com/system/resources/previews/008/212/813/large_2x/cooking-logo-design-vector.jpg" alt="Logo "></img>

        <h2 id="title">Cook Up Delicious Meals with Our Recipes </h2>

        <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item"><a href="home">Home</a></li>
            <li className="nav-item"><a href="about">About Us</a></li>
            <li className="nav-item"><a href="recipes">Our Recipes</a></li>
            <li className="nav-item"><a href="profile">Profile</a></li>
        </ul>
    </nav>
    </div>);
    return headerContent;
}

export default Header