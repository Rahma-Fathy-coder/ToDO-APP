import React ,{useRef} from "react";
import './Modal.css';
function Modal({children ,showModal ,setShowModal}){
const modalRef =useRef();

const closeModal =(e)=>{
    if(e.target === modalRef.current){
        setShowModal=false;
    }
}

return (

showModal&& 

<div className="Modal" ref={modalRef} onClick={closeModal}>
    <div className="container">
        hello
        <button onClick={()=>setShowModal(false)}>X</button>
        {children}
    </div>
</div> 
)
}
export default Modal ;