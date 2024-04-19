import '../styles/modal_request.css'
import { AiOutlineClose  } from "react-icons/ai"

export default function ModalRequest( {setOpenModal} ) {

  return (
    <div className="modalBackground" onClick={() => {
      setOpenModal(false)}}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <div className="titleCloseBtn">
        <AiOutlineClose size={"20px"} className='close_btn' onClick={() => {
          setOpenModal(false)
        }} />
        </div>
        <div className="title">
          <h1>Оставить заявку</h1>
        </div>
      </div>
    </div>
  )
}