import React from 'react'

import ButtonOrder from '../UI/ButtonOrder'
import img1 from '../images/section1Img1.png'
import img2 from '../images/section1Img2.png'
import img3 from '../images/section1Img3.png'
import img4 from '../images/section1Img4.png'
import img5 from '../images/section1Img5.png'
import img6 from '../images/section1Img6.png'

const Sweets = () => {
  return (
    <>
        <h2 className='fnsz36 accentColor extraBold flexC sweets_h1' style={{marginBottom: 26}}>
            Сладости на праздник
        </h2>
        
    <div className="sweets__mainWrapper">
        <div className="sweets__wrapper">
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img1}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img2}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img3}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        </div>
        <div className="sweets__wrapper">
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img4}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img5}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        <div className="sweets">
            <div className="sweets__card shadow">
                <div className="sweets__card_img mb16">
                    <img src={img6}/>
                </div>
                <p className='fnsz14 medium mb16 flexC'>
                    День рождения
                </p>
                <div className="mb40 flexC">
                    <ButtonOrder/>
                </div>
                
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Sweets