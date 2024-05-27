import './burgerConstructor.css';
// import constructor from './burger-constructor.module.css';
import { ConstructorElement,CurrencyIcon,Button,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useState,useEffect } from 'react';
import PropTypes from "prop-types";
import OrderDetails from "../../modal/order-details/OrderDetails";
import ConstructorItem from '../constructor-item/constructorItem';
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
        if (event.keyCode === 27) {
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
                    <CurrencyIcon type="primary"style={{width:'50px', height: '50px'}}/>
                </div>
                <div className="constructor__button" >
                    <Button onClick={()=> orderHandleClick()} htmlType="button" type="primary" size="large">
                        Нажми на меня
                    </Button>   
                </div>
            </div>

            <Modal modalOpen={modalOpen} onClose={onClose}>
                <OrderDetails/>
            </Modal>
                

            {/* <OrderDetails
                 isVisible={modalOpen}
                 onClose={()=>setModalOpen(false)}
            /> */}
                
            

            
        </section>
    )
}

BurgerConstructor.propTypes ={
    ConstructorItem: PropTypes.shape({
        
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};
ConstructorItem.defaultProps ={
    thumbnail: '...',
    price: '???',
    text: '⍑ᒷꖎꖎ𝙹𝙹 ᓭꖌ𝙹∷𝙹  ʖ⚍↸ᒷℸ ̣',
}

export default BurgerConstructor;