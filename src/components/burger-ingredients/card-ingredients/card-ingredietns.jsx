
import {CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import cardIngredient from './card-ingredient.module.css';
import ingredientType from "../../utils/types";

function IngredientBurger(props){

    return(
        <>
        <label onClick={() => props.handleClick(props.item)} className={`${cardIngredient.wrapper_card} mb-10 pr-6`}>
            
            {/* <Counter count={1} size="default" extraClass="m-1" /> */}
            <img src={props.image} alt="svinka" />
            <div className={`${cardIngredient.card_price} pb-1`}>
                <p className="text text_type_digits-default pr-2">{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <p className="text text_type_main-default mb-6">{props.name}</p>
            </div>
        </label>
        
               
        </>
    )
     
};
IngredientBurger.propTypes = {
    props: ingredientType}


export default IngredientBurger;