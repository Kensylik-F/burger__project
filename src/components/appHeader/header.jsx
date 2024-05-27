
// import header from './header.module.css';
import './header.css';
import { Logo,BurgerIcon,ListIcon,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';




function Header() {
    return(
        <header className="header p-4">
            <div className="container">
                <div  className="Logo">
                    <Logo/>
                </div>
                
                <nav className="nav">
                    <div className="nav__list">
                        <button className="nav__list_item pr-5 pl-5 pb-4 pt-4">
                            <BurgerIcon type="primary" />
                            <p className="text text_type_main-default">
                                Конструтор
                            </p>
                        </button>
                       
                        <button className="nav__list_item pr-5 pl-5 pb-4 pt-4">
                           <ListIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive">
                                Лента заказов
                            </p> 
                        </button>
                        
                    </div>
                    <button className=' nav__list_item pr-5 pl-5 pb-4 pt-4'>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive">
                            Личный кабинет
                        </p>
                    </button>
                </nav>
            </div>
            
        </header>
    )
    
}

export default Header