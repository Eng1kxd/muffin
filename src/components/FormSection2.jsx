import React from 'react'
import Form from '../UI/Form'

import imgHeaderSection from '../images/img1Header.png'

const FormSection2 = () => {
  return (
    <div className='FormSection1'>
    <div style={{marginTop: 61}}>
            <Form/>
        </div>
        <div className="formSection1_img">
                <img src={imgHeaderSection}/>
        </div>
        
    </div>
  )
}

export default FormSection2