import React,{ useCallback, useEffect, useMemo, useRef, useState } from "react";


import IngredientBurger from "../card-ingredients/card-ingredietns";

import burger from '../burger-ingredients/burger-ingredients.module.css'
import ingredientType from "../../utils/types";
import PropTypes from "prop-types";


function IngredientCotigary(props){

    const { bunIngredients, sauseIngredients, mainIngridietns, handleClick} = props;
    return(
        <>
        <div>
            <h2 className="text text_type_main-medium pb-6 pt-10">Булки</h2>
            <div className={`${burger.Rolls__WrapperIngredietns}`} >
                
            
                {bunIngredients.map(item  =>
                    <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)} />
                )} 
                
                
            </div>
        </div>
        <div>
            <h2 className="text text_type_main-medium pb-6">Соусы</h2>
            <div className={`${burger.Souse__WrapperIngredietns}`}>
             
                {sauseIngredients.map(item => <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        <div>
            <h2 className="text text_type_main-medium pb-6">Начинка</h2>
            <div className={burger.Main__WrapperIngredietns}>
             
                {mainIngridietns.map(item => <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        
        </>
    )
     
}


IngredientBurger.propTypes = {
    props: ingredientType
    
}
export default IngredientCotigary;
