import React from 'react'

import youtube from '../images/icons/youtube.svg'
import instagram from '../images/icons/instagram.svg'
import facebook from '../images/icons/facebook.svg'

const Footer = () => {
  return (
    <footer className='footer'>

        <div className="footer_top">
            <div className="footer__content">
                <div className="footer_top-1">
                    <h1 className='bold fnsz24 flexCAdaptive'>маффин</h1>
                    <p className='light fnsz14 footer-1-p'>Мы готовим маленькие сладости, которые приносят большие улыбки в любой день и без повода</p>
                </div>
                <div className="footer_top-2">
                    <h2 className='flexCAdaptive bold fnsz14' style={{marginBottom: 24}}>Информация</h2>
                    <ul>
                        <li className='flexCAdaptive mb16 light fnsz14 cursorPointer'>Почему мы?</li>
                        <li className='flexCAdaptive mb16 light fnsz14 cursorPointer'>Как сделать заказ?</li>
                        <li className='flexCAdaptive light fnsz14 cursorPointer'>Оплата и доставка</li>
                    </ul>
                </div>
                <div className="footer_top-3">
                    <h2 className='flexCAdaptive bold fnsz14' style={{marginBottom: 24}}>Служба поддержки</h2>
                    <ul>
                        <li className='flexCAdaptive mb16 light fnsz14 cursorPointer'>Обратная связь</li>
                        <li className='flexCAdaptive mb16 light fnsz14 cursorPointer'>Возврат маффинов</li>
                        <li className='flexCAdaptive light fnsz14 cursorPointer'>Отзывы</li>
                    </ul>
                </div>
                <div className="footer_top-4">
                    <h2 className='bold fnsz14 footer__socialNet' style={{marginBottom: 50}}>Мы в соцсетях</h2>
                    <div className="footer_top__icons">
                        <a href=""><img src={youtube} /></a>
                        <a href=""><img src={instagram} /></a>
                        <a href=""><img src={facebook} /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_bot">
            <span className='light fnsz14'>2023 год. Сделано и хорошо</span>
        </div>
    </footer>
  )
}

export default Footer