import { useEffect, useState } from "react";
import cupcakesData from "../assets/cupcakes.json";

const CupcakeList = () => {
   const [cupcakes, setCupcakes] = useState([]);

   useEffect(() => {
      setCupcakes(cupcakesData);
   }, []);

   return (
      <div className='cupcake-list'>
         {cupcakes.map((cupcake, index) => (
            <div className='cupcake-card' key={index}>
               <h2 className='cupcake-name'>{cupcake.name}</h2>
               <p className='cupcake-description'>{cupcake.description}</p>
               <p className='cupcake-price'>Price: ${cupcake.price.toFixed(2)}</p>
               <ul className='cupcake-ingredients'>
                  {cupcake.ingredients.map((ingredient, idx) => (
                     <li key={idx}>{ingredient}</li>
                  ))}
               </ul>
               {cupcake.glutenFree && <p className='gluten-free'>Gluten-Free</p>}
            </div>
         ))}
      </div>
   );
};

export default CupcakeList;
