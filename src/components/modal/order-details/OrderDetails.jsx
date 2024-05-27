import orderModal from './OrderDetails.module.css';

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderDetails(){

   
    return(
        <>
                <h1 className={`${orderModal.OrderModal__namber}text text_type_digits-large`}>123213</h1>
                <p className="text text_type_main-medium pt-8 ">идентификатор заказа</p>
            
                <div className={`${orderModal.OrderModal__icon} pt-15 pb-15`}>
                    <img src="" alt="" />
                </div>
                <div className={orderModal.OrderModal__footer}>
                    <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default pt-2" style={{color:'#8585AD'}}>Дождитесь готовности на орбитальной станции</p>
                </div>
        </>
          
        )}
