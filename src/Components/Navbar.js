import React, { useState } from 'react'
import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
   
  const navigate=useNavigate()
  return (
    <>
   
 
      <div className='empty'></div>
      <div className='navbar'> 
     
      
 <div>     <h1 onClick={()=>navigate("/")}> Food <span className='dot'>.</span></h1></div>

 <div className='mid'>

 <div class="dropdown">
  <button class="dropbtn">RECIPES</button>
  <div class="dropdown-content">
  <Link to="/recipes/breakfast & brunch recipes">Breakfast & Brunch Recipes</Link>
  <Link to="/recipes/lunch recipes">Lunch Recipes</Link>
  <Link to="/recipes/appetizers & snack recipes">Appetizers & Snack Recipes</Link> 
  <Link to="/recipes/dinner recipes">Dinner Recipes</Link>
  <Link to="/recipes/desert recipes">Dessert Recipes</Link> 
  <Link to="/recipes/drink & cocktail recipes"> Drink & Cocktail Recipes</Link> 
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">POPULAr</button>
  <div class="dropdown-content">
 <Link to="/recipes/Trending Now">Trending Now</Link>
  <Link to="/recipes/Casserole Recipes">Casserole Recipes</Link>
 <Link to="/recipes/chili Recipes">chili Recipes</Link>
<Link to="/recipes/Soup Recipes">Soup Recipes</Link>
<Link to="/recipes/Pasta Recipes">Pasta Recipes</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">meat and sesfood</button>
  <div class="dropdown-content">
   <Link to="/recipes/Chicken Recipes">Chicken Recipes</Link>
 <Link to="/recipes/Salmon Recipes">Salmon Recipes</Link>
<Link to="/recipes/Pork Chop Recipes">Pork Chop Recipes</Link>
 <Link to="/recipes/Ground Beef Recipes">Ground Beef Recipes</Link>
 <Link to="/recipes/Shrimp Recipes">Shrimp Recipes</Link>
 
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">healthy and diet</button>
  <div class="dropdown-content">
  <Link to="/recipes/Keto Recipes">Keto Recipes</Link>
<Link to="/recipes/Healthy Recipes">Healthy Recipes</Link>
<Link to="/recipes/Vegetarian Recipes">Vegetarian Recipes</Link>
<Link to="/recipes/Vegan Recipes">Vegan Rec</Link>
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">holidays</button>
  <div class="dropdown-content">
  
   <a href="#"> Dinner Party Recipes</a>
<a href="#">Game Day Recipes</a>
<a href="#">Valentine's Day Recipes</a>
<a href="#">St. Patrick's Day Recipes</a>
<a href="#">Easter Recipes</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">cuisine</button>
  <div class="dropdown-content">
   
     <Link to="/recipes/Mexican Recipes">Mexican Recipes</Link>
 <Link to="/recipes/Italian Recipes">Italian Recipes</Link>
<Link to="/recipes/Indian Recipes">Indian Recipes</Link>
 <Link to="/recipes/Thai Recipes">Thai Recipes</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">seosonal</button>
  <div class="dropdown-content">
     <Link to="/recipes/Spring Recipes">Spring Recipes</Link>
    <Link to="/recipes/Summer Recipes">Summer Recipes</Link>
 <Link to="/recipes/Fall Recipes">Fall Recipes</Link>
 <Link to="/recipes/Winter Recipes">Winter Recipes</Link>
   
  </div>
</div>



</div>

<div className='third'><Link to="https://www.food.com/search/"><button><i class="fa-solid fa-magnifying-glass"></i></button></Link>
  <Link to="/save"><button><i class="fa-sharp fa-regular fa-bookmark"></i></button></Link>
  <Link to="/auth"><button><i class="fa-regular fa-user"></i></button></Link></div>

</div>

     
    </>
  )
}

export default Navbar




