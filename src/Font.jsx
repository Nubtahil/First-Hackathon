import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
const Font = () => {
    const notify = () => toast("great nubtahil keep going!");
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} />
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default Font
