import React from 'react'
import { useState } from 'react'
import "./save.css"


import Savedrecipe from './Savedrecipe'

import Form from './Form'
import { Link } from 'react-router-dom'

const Save = () => {
    const [count,setCount] = useState(false);
    function tara() {
      setCount(!count)
    }
    const [mount,setMount] = useState(true);
    function sitara() {
      setMount(!mount)
    }
   
   
    return (
        <div className='savemain'>
            <button type='button' onClick={sitara} className='addb'>Add Your Own recipe</button>
         <Link to="/savedrecipe"><button type='button'  onClick={tara} className='addb'>Added Recipes</button></Link>   
         <Link to="/savedrecipea"><button type='button'  onClick={tara} className='addb'> Saved Recipes</button></Link>   
            {count?<Savedrecipe />:null}
            {mount?<Form />:null}
            
           

            
        </div>
    )
}

export default Save
