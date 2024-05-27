import { CloseIcon,Box } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyle from './../modal/modal.module.css';
import ModalOverlay from "../modal-overlay/modalOverlay";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const element = document.querySelector('#modal')

export default function Modal({modalOpen, onClose, children}){

    
    if(modalOpen){
        return createPortal(
            <div className={ModalStyle.modal} >
                <ModalOverlay onClose={onClose}/>
                <div className={`${ModalStyle.modal__wrapper}  p-10 pb-15`}>
                    <div className={`${ModalStyle.modal__header} text text_type_main-large`}>
                        <h1>Детали ингредиента</h1>
                        <button>
                            <CloseIcon type="primary" onClick={onClose} />
                        </button>
                    </div>
                    
                    {children}
                </div>
            </div>,
            element
        );
    }
    return null
}