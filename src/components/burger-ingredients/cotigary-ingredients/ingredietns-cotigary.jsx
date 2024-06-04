import React,{ useCallback, useEffect, useMemo, useRef, useState } from "react";


import IngredientBurger from "../card-ingredients/card-ingredietns";

import burger from '../burger-ingredients/burger-ingredients.module.css'
// import ingredients from "../../utils/data";
import PropTypes from "prop-types";


function IngredientCotigary(props){

    const { bunIngredients, sauseIngredients, mainIngridietns, handleClick} = props;
    return(
        <>
        <div className="Rolls__Ingredients">
            <h2 className="text text_type_main-medium pb-6 pt-10">Булки</h2>
            <div className={burger.Rolls__WrapperIngredietns} >
                
            
                {bunIngredients.map(item  =>
                    <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)} />
                )} 
                
                
            </div>
        </div>
        <div className="Sause__Ingredients ">
            <h2 className="text text_type_main-medium pb-6">Соусы</h2>
            <div className={burger.Souse__WrapperIngredietns}>
             
                {sauseIngredients.map(item => <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        <div className="Sause__Ingredients ">
            <h2 className="text text_type_main-medium pb-6">Начинка</h2>
            <div className={burger.Souse__WrapperIngredietns}>
             
                {mainIngridietns.map(item => <IngredientBurger key={item._id} {...item} handleClick={() => handleClick(item)}/>)} 
             
            </div>
        </div>
        
        </>
    )
     
}


IngredientBurger.propTypes = {
    props: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
      })
  )}
export default IngredientCotigary;
