import '../styles/modal_request.css'
import Form from "./Form"

export default function ModalRequest( {setOpenModal} ) {

  return (
    <div className="modalBackground" onClick={() => {
      setOpenModal(false)}}
    >
      <Form isModal={true} setOpenModal={setOpenModal}/>
    </div>
  )
}