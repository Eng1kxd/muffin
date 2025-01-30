import React from 'react'
import ButtonOrder from './ButtonOrder'

const Form = () => {
  return (
    <form action="#">
        <p className='fnsz32 accentColor extraBold form__title'>
            Закажи маффин по фото
        </p>
        <div className="inputs">
            <input type="text" placeholder='Имя' className='input mt26'/>

            <input type="number" id='phone' required placeholder='Номер телефона' className='input mt26'/>
            
            
            <label class="custom-button input mt26" for="file-upload" style={{opacity: 0.7}}>Загрузить фото</label>
            <input type="file" id="file-upload" class="file-input" />
        </div>
        <div className="mt26 ButtonOrder__form">
            <ButtonOrder/>
        </div>
    </form>
  )
}

export default Form