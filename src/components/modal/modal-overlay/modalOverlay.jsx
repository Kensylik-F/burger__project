

import Overlay from './../modal-overlay/modalOverlay.module.css';

export default function ModalOverlay({onClose}){
    return(
        <div className={Overlay.modalOverlay} onClick={onClose}>
            
        </div>
    )
}