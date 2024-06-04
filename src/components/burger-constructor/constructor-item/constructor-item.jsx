import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import constructorItem from './constructor-item.module.css';
import PropTypes from 'prop-types';

export default function ConstructorItem({data}) { 



    // ФИЛЬТРАЦИЯ МАССИВА 
    const filling = data.filter(function(e){
        return e.type !== 'bun'
    });
    const bun = data.filter(function(e){
        return e.type === "bun"
    })[0];

    console.log(filling)
    console.log(bun)
    return(
    
        <ul className={`${constructorItem.wrapper_constructorBun}`}>
            {   
            bun && <li className='ml-8'>  
                <ConstructorElement  
                    key={bun._id}
                    type="top"    
                    isLocked={true} 
                    text={`${bun.name} (вверх)`} 
                    price= {bun.price} 
                    thumbnail={bun.image_large} 
                />   
            </li>


        }
            <ul  className={`${constructorItem.wrapper_constructor} `}>

                {filling.map(item => 

                    <span className={`${constructorItem.item} `} >
                        <DragIcon  type="primary"/>
                        
                        <ConstructorElement 
                            key={item._id} 
                            className='item-constructor pl-10' 
                            text={item.name} 
                            price={item.price} 
                            thumbnail={item.image_large}/> 
                    </span>)}

            </ul>
            <li className='ml-8'>{
                bun && <ConstructorElement 
                    key={bun._id}
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image_large}
                    />
                
            }
            </li>
        </ul>
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
