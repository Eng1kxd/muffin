import React from 'react'

import stars from '../images/stars.png'
import olga from '../images/olga.png'
const Reviews = () => {
  return (
    <>
    <p className='extraBold fnsz36 accentColor textAlCenter' style={{marginTop: 86}}>Что о нас говорят наши клиенты?</p>
    <div className='reviews__wrapper'>
        <div className="reviews__card">
            <p className='light fnsz14 textAlCenter' style={{marginTop: 74}}>
                Мягкие, немного влажные, будто с пропиткой. Дети на завтрак смолотили в секунду. очень вкусно! Буду покупать еще.
            </p>
            <div className="flexC" style={{marginTop: 12}}>
                <img src={stars} width={180}/>
            </div>
            <p className='bold fnsz14 textAlCenter' style={{marginTop: 11}}>Ольга</p>
            <div className="flexC" style={{marginTop: 10}}>
                <img src={olga} width={78}/>
            </div>
        </div>
        <div className="reviews__card">
            <p className='light fnsz14 textAlCenter' style={{marginTop: 74}}>
                Мягкие, немного влажные, будто с пропиткой. Дети на завтрак смолотили в секунду. очень вкусно! Буду покупать еще.
            </p>
            <div className="flexC" style={{marginTop: 12}}>
                <img src={stars} width={180}/>
            </div>
            <p className='bold fnsz14 textAlCenter' style={{marginTop: 11}}>Ольга</p>
            <div className="flexC" style={{marginTop: 10}}>
                <img src={olga} width={78}/>
            </div>
        </div>
        <div className="reviews__card">
            <p className='light fnsz14 textAlCenter' style={{marginTop: 74}}>
                Мягкие, немного влажные, будто с пропиткой. Дети на завтрак смолотили в секунду. очень вкусно! Буду покупать еще.
            </p>
            <div className="flexC" style={{marginTop: 12}}>
                <img src={stars} width={180}/>
            </div>
            <p className='bold fnsz14 textAlCenter' style={{marginTop: 11}}>Ольга</p>
            <div className="flexC" style={{marginTop: 10}}>
                <img src={olga} width={78}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reviews