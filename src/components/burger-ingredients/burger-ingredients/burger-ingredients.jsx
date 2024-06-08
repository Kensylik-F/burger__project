import React, {useState, useEffect, useRef, useCallback, useMemo, memo} from "react";
import PropTypes from "prop-types";
import burger from './burger-ingredients.module.css';

// import './burger-ingredients.css';
import IngredientCotigary from "../cotigary-ingredients/ingredietns-cotigary";
import { Tab,} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal/modal";
import IngredientsDetails from "../../modal/ingredients-details/ingredietns-details";
import ingredientType from "../../utils/types";
const BurgerIngredients = memo(({data}) => {
    const [current, setCurrent] = React.useState('Булки');

    const bunIngredients = useCallback(data.filter(function(e){
        return e.type ===  "bun";
    }));
    const sauseIngredients = useCallback(data.filter(function(e){
        return e.type ===  "sauce";
    }));
    const mainIngridietns = useCallback(data.filter(function(e){
        return e.type === "main"
    }));
    
    const [modalOpen, setModalOpen] = useState(false);
    const [ingredient, setIngredient] = useState([]);
    const onClose = () =>{
        setModalOpen(false)
    };
    const handleClick = useCallback((props) =>{
    setModalOpen(!modalOpen);
    setIngredient(props);
    
    });
   
    
    return(
        <section className={`${burger.BurgerIngredients} pb-10`}>

            <h1 className="text text_type_main-large pb-5 pt-10">Соберите бургер</h1>
            <div className={`${burger.navIngredients}`}>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    <p>Булки</p>
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    <p>Соусы</p>
                </Tab>
                <Tab value="Начинка" active={current === 'Начинка'} onClick={setCurrent}>
                    <p>Начинка</p>
                </Tab>
            </div>


            <div className={`${burger.Ingredients__wrapper} custom-scroll`}>

                <IngredientCotigary
                    
                    handleClick={handleClick}
                    
                    bunIngredients={bunIngredients}
                    sauseIngredients={sauseIngredients}
                    mainIngridietns={mainIngridietns}
                />
                
                <Modal modalOpen={modalOpen} onClose={onClose}>
                    <IngredientsDetails ingredient={ingredient}/>
                </Modal>
                
                
    
                    
                
            </div>

        </section>
    )

    
})

IngredientCotigary.propTypes = {
    data: ingredientType
}

export default BurgerIngredients;
