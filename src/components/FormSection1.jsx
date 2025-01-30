import React from 'react'
import Form from '../UI/Form'

import imgForm from '../images/img2Form.png'

const FormSection1 = () => {
  return (
    <div className='FormSection1'>
    
        <div className="formSection1_img">
                <img src={imgForm}/>
        </div>
        <div className='formSection1_form' style={{marginTop: 84}}>
            <Form/>
        </div>
    </div>
  )
}

export default FormSection1