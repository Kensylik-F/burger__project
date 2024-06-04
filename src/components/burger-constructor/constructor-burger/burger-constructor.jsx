import './burger-constructor.css';
// import constructor from './burger-constructor.module.css';
import { ConstructorElement,CurrencyIcon,Button,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useState,useEffect } from 'react';
import PropTypes from "prop-types";
import OrderDetails from "../../modal/order-details/OrderDetails";
import ConstructorItem from '../constructor-item/constructor-item';
import Modal from '../../modal/modal/modal';

function BurgerConstructor({data}){

    
    const [modalOpen, setModalOpen] = useState(false);
    
    const onClose = () =>{
        setModalOpen(false)
    }
    const orderHandleClick = () =>{
        setModalOpen(!modalOpen);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
    
      useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown, false);
        };
      }, []);
    return(
        <section className='burger-constructor'>
            <div className="constructor__wrapper pt-25">

                <ConstructorItem  data={data}/>
            
            </div>
            <div className="constructor__footer pt-10">
                <div className="constructor__price-total pr-10">
                    <p className="text text_type_digits-medium pr-2">600</p>
                    <CurrencyIcon type="primary" className='icon-burger'/>
                </div>
                <div className="constructor__button" >
                    <Button onClick={()=> orderHandleClick()} htmlType="button" type="primary" size="large">
                        Нажми на меня
                    </Button>   
                </div>
            </div>

            <Modal modalOpen={modalOpen} onClose={onClose} >
                <OrderDetails/>
            </Modal>
                

            {/* <OrderDetails
                 isVisible={modalOpen}
                 onClose={()=>setModalOpen(false)}
            /> */}
                
            

            
        </section>
    )
}


ConstructorItem.propTypes = {
    data: PropTypes.arrayOf(
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

export default BurgerConstructor;