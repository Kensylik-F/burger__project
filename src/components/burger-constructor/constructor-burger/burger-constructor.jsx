
import constructor from './burger-constructor.module.css';
import { ConstructorElement,CurrencyIcon,Button,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useState,useEffect } from 'react';
import PropTypes from "prop-types";
import OrderDetails from "../../modal/order-details/OrderDetails";
import ConstructorItem from '../constructor-item/constructor-item';
import Modal from '../../modal/modal/modal';

import ingredientType from '../../utils/types';
function BurgerConstructor({data}){

    
    const [modalOpen, setModalOpen] = useState(false);
    
    const onClose = () =>{
        setModalOpen(false)
    }
    const orderHandleClick = () =>{
        setModalOpen(!modalOpen);
    };

    
    return(
        <section className={`${constructor.burger_constructor}`}>
            <div className="pt-25">

                <ConstructorItem  data={data}/>
            
            </div>
            <div className={`${constructor.constructor__footer} pt-10`}>
                <div className={`${constructor.constructor__priceTotal} pr-10`}>
                    <p className="text text_type_digits-medium pr-2">600</p>
                    <CurrencyIcon type="primary" className={`${constructor.icon__burger}`}/>
                </div>
                <div>
                    <Button onClick={()=> orderHandleClick()} htmlType="button" type="primary" size="large">
                        Нажми на меня
                    </Button>   
                </div>
            </div>

            <Modal modalOpen={modalOpen} onClose={onClose} >
                <OrderDetails/>
            </Modal>
                
        </section>
    )
}


ConstructorItem.propTypes = {
    data: ingredientType}

export default BurgerConstructor;