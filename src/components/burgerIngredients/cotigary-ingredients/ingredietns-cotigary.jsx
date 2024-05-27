import React,{ useCallback, useEffect, useMemo, useRef, useState } from "react";


import IngredientBurger from "../card-ingredients/card-ingredietns";

import burger from './../burger-ingredients/burger-ingredients.module.css'
// import ingredients from "../../utils/data";
import PropTypes from "prop-types";


function IngredientCotigary({ bunIngredients, sauseIngredients, mainIngridietns, handleClick}){
    
    return(
        <>
        <div className="Rolls__Ingredients">
            <h2 className="text text_type_main-medium pb-6 pt-10">Булки</h2>
            <div className={burger.Rolls__WrapperIngredietns} >
                
            
                {bunIngredients.map(item  =>
                    <IngredientBurger key={item.id} {...item} handleClick={() => handleClick(item)} />
                )} 
                
                
            </div>
        </div>
        <div className="Sause__Ingredients ">
            <h2 className="text text_type_main-medium pb-6">Соусы</h2>
            <div className={burger.Souse__WrapperIngredietns}>
             
                {sauseIngredients.map(item => <IngredientBurger key={item.id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        <div className="Sause__Ingredients ">
            <h2 className="text text_type_main-medium pb-6">Начинка</h2>
            <div className={burger.Souse__WrapperIngredietns}>
             
                {mainIngridietns.map(item => <IngredientBurger key={item.id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        
        </>
    )
     
}


IngredientBurger.prototype ={
    data: PropTypes.shape({
        data: PropTypes.array.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};
IngredientBurger.defaultProps = {
    
    image: '...',
    price: 'ᓭ𝙹𝙹リ',
    name: "⍑ᒷꖎꖎ𝙹𝙹 ᓭꖌ𝙹∷𝙹  ʖ⚍↸ᒷℸ ̣",
};
export default IngredientCotigary;
