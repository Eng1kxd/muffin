import React from 'react'
import ButtonOrderBlack from '../UI/ButtonOrderBlack'

const CTABanner = () => {
  return (
    <div className='CTABanner' style={{marginTop: 117}}>
        
        <div className="CTABanner__wrapper">
            <div className="CTABanner_H1 extraBold fnsz32"><h1>Сделай заказ</h1></div>
            <div className="CTABanner_bot">
                <p className='light fnsz14 CTABanner_bot_p'>Порадуй себя чем-то вкусненьким. Позвони и закажи маффин прямо сейчас!</p>
                <ButtonOrderBlack/>
            </div>
        </div>

    </div>
  )
}

export default CTABanner