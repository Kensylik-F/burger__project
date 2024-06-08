
import Details from '../ingredients-details/ingredients-details.module.css';
import PropTypes from "prop-types";
import ingredientType from '../../utils/types';
export default function IngredientsDetails({ingredient}){

    return(
        <div className={Details.ingredients__info}>
                <img src={ingredient.image_large} alt="img" />
               
                <div className="name text text_type_main-medium pb-8 pt-4" >{ingredient.name}</div>
                
                <div className={`${Details.info_ingredient} text text_type_main-default text_color_inactive`}>
                    <div className="calories">
                        <p>Калории,ккал</p>
                        <p>{ingredient.calories}</p>
                    
                    </div>
                    <div className="Proteins">
                        <p>Белки,г</p>
                        <p>{ingredient.proteins}</p>
                        
                    </div>
                    <div className="Fats">
                        <p>Жиры,г</p>
                        <p>{ingredient.fat}</p>
                       
                    </div>
                    <div className="Carbohydrates">
                        <p>Углеводы,г</p>
                        <p>{ingredient.carbohydrates}</p>
                    </div>
                </div>
            </div>
    )
}
IngredientsDetails.propTypes = {
    ingredient: ingredientType}