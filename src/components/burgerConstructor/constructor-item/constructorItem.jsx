import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
    
        <ul className='constructor__wrapper '>
            {   
            bun && <li className='ml-8'>  
                <ConstructorElement  
                    type="top"    
                    isLocked={true} 
                    text={`${bun.name} (вверх)`} 
                    price= {bun.price} 
                    thumbnail={bun.image_large} 
                />   
            </li>


        }
            <ul  className='Main__block-constructor 'style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                {filling.map(item => 

                    <span  style={{display: 'flex', gap:'10px', flexGrow:'1'}}>
                        <DragIcon  type="primary"/>
                        
                        <ConstructorElement 
                            className='item-constructor pl-10' 
                            key={item._id} 
                            text={item.name} 
                            price={item.price} 
                            thumbnail={item.image_large}/> 
                    </span>)}

            </ul>
            <li className='ml-8'>{
                bun && <ConstructorElement 
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

