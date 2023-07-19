
import React from 'react'
import './category.css'
import {  useParams } from 'react-router-dom'
// import { useState,useEffect } from 'react'
// import axios from 'axios'


const Category = () => {
    // const [data,setData]=useState([])
    const params =useParams()
    // console.log(params)
    // const APP_ID = "e02b4185"
    // const APP_KEY = '10d6695c27eb990084f13190aed3fa9f'

    // useEffect(() => {
    //     getRecipe()
    // }, [])

    // const getRecipe = async () => {
    //     const response = await axios.get(`https://api.edamam.com/search?q=${params.recipename}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //     .then((response)=>setData(response.data))
    //     console.log(response.data)
       
    // }

    return (
        <>
        
            <div className='category'>
              
                    <h2 id='recipe-categories-page-one-heading'>TOP 50 {params.recipename.toUpperCase()}  </h2>
                    <div className='mainimg'>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_fill,q_80,w_621,fl_progressive,h_349/v1/img/recipes/51/17/52/ZlmHVdO4SU6PAXvJrm8q_0S9A7193.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/w_621,h_349,c_fill,fl_progressive,q_80/v1/img/recipes/53/72/52/BetB5lhjRgGvnWlrCEHJ_Cauli%20crust%20Rainbow%20SITE-2.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN PARMESAN</h4>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                  

                  </div>
        </>
    )
}

export default Category
