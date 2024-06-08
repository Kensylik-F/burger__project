

import Overlay from './../modal-overlay/modalOverlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({onClose}){
    return(
        <div className={Overlay.modalOverlay} onClick={onClose}>
            
        </div>
    )
}
ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}