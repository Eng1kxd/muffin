import React from 'react'


import youtube from '../images/icons/youtube.svg'
import instagram from '../images/icons/instagram.svg'
import facebook from '../images/icons/facebook.svg'

const Location = () => {
  return (
    <div className='location__wrapper'>

        <div className="location_left">

            <div className="location_left-top">
                <h1 className='extraBold fnsz32 accentColor location__h1'>Где мы находимся?</h1>
                <p className='light fnsz14 location__textAlCenter' style={{marginTop: 29}}>Кондитерская “Маффин” находится по адресу г.Ижевск, ул. Цветочная, 6</p>
            </div>

            <div className="location_left-mid" style={{marginTop: 62}}>
                <h1 className='extraBold fnsz32 accentColor location__h1 location__textAlCenter' style={{marginBottom: 26}}>Время работы:</h1>
                <ul className='light fnsz14 lineHeight24 location__textAlCenter'>
                    <li>Пн - Пт: 08:00 - 18:00</li>
                    <li>Сб: 08:00 - 15:00</li>
                    <li>Вс: выходной</li>
                </ul>
            </div>

            <div className="location_left-bot" style={{marginTop: 62}}>
                <h1 className='extraBold fnsz32 accentColor location__textAlCenter' style={{marginBottom: 34}}>Наши контакты</h1>
                <div id='location__tel' style={{display: 'flex'}}>
                    <a className='light fnsz14 ' href="tel:+73412569874">+ 7 3412 569874</a><pre>; </pre>
                    <a className='light fnsz14 ' href="tel:+79505698741">+7 950 5698741</a>
                </div>
            </div>

            <div className="location__icons">
            <a href=""><img src={youtube} /></a>
            <a href=""><img src={instagram} /></a>
            <a href=""><img src={facebook} /></a>
            </div>
        </div>
        <div className="location_right">
            <div>
                <iframe className='location_right__img' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.414787711848!2d53.26408547721917!3d56.87313070514817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e139a54cfb441f%3A0x3a50ae5ee0c2b134!2z0KbQstC10YLQvtGH0L3QsNGPINGD0LsuLCA2LCDQmNC20LXQstGB0LosINGA0LXRgdC_0YPQsdC70LjQutCwINCj0LTQvNGD0YDRgtC40Y8sIDQyNjA2MQ!5e0!3m2!1sru!2sru!4v1738151462665!5m2!1sru!2sru" width="408" height="480" loading='lazy'></iframe>
            </div>
        </div>

    </div>
  )
}

export default Location