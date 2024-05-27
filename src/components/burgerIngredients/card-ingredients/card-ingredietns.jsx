
import {CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";



function IngredientBurger(props){

    return(
        <>
        <label onClick={() => props.handleClick(props.item)} className="mb-10 pr-6" style={{position:'relative',display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
            
            {/* <Counter count={1} size="default" extraClass="m-1" /> */}
            <img src={props.image} alt="svinka" />
            <div className="pb-1" style={{display: 'flex', justifyContent: 'center'}}>
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
IngredientBurger.propTypes={
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,

}
IngredientBurger.defaultProps={
    image: '...',
    price:'???',
    name: "ловим"
}


export default IngredientBurger;