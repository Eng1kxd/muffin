import React from 'react'

import heart from '../images/icons/heart.svg'
import box from '../images/icons/box.svg'
import grass from '../images/icons/grass.svg'

const WhyWe = () => {
  return (
    <div className='whyWe__wrapper'>
        <h1 className='fnsz36 extraBold accentColor flexC'>Почему мы?</h1>

        <div className="whyWe">

            <div className="whyWe__container shadow">
                <div className="flexC">
                    <img src={heart} className='whyWe__img'/>
                </div>
                <div className="whyWe__title flexC fnsz14 bold">
                    Мы работаем с любовью!
                </div>
                <div className="whyWe__desc light flexC">
                    Большой опыт и квалификация<br /> специалистов гарантирует<br /> безупречное качество заказов
                </div>

            </div>
            <div className="whyWe__container shadow mt41 whyWe__adaptive">
                <div className="flexC">
                    <img src={box} className='whyWe__img'/>
                </div>
                <div className="whyWe__title flexC fnsz14 bold">
                    Бережная доставка заказа
                </div>
                <div className="whyWe__desc light flexC">
                    Мы упакуем все ваши маффины<br /> в коробки целыми и<br /> невредимыми
                </div>

            </div>
            <div className="whyWe__container shadow whyWe__adaptive">
                <div className="flexC">
                    <img src={grass} className='whyWe__img'/>
                </div>
                <div className="whyWe__title flexC fnsz14 bold">
                    Натуральные продукты
                </div>
                <div className="whyWe__desc light flexC">
                    Отсутствие в маффинах консервантов и красителей гарантирует базопасность для здоровья
                </div>

            </div>

        </div>

    </div>
  )
}

export default WhyWe