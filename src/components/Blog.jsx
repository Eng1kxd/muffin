import React from 'react'
import ButtonMore from '../UI/ButtonMore'

import img from '../images/section1Img2.png'

const Blog = () => {
  return (
    <>
    <h1 className="extraBold fnsz36 accentColor textAlCenter" style={{marginTop: 62}}>Наш блог</h1>
    <div className="blog">
        <div className='blog__wrapper' style={{marginTop: 21}}>
            <img src={img} />
            <p className='bold fnsz14 textAlCenter'style={{marginTop: 45}}>
                7 рецептов самых вкусных шоколадных маффинов
            </p>
            <div className="flexC" style={{marginTop: 40}}>
            <ButtonMore/></div>
        </div>
        <div className='blog__wrapper' style={{marginTop: 21}}>
            <img src={img} />
            <p className='bold fnsz14 textAlCenter'style={{marginTop: 45}}>
                7 рецептов самых вкусных шоколадных маффинов
            </p>
            <div className="flexC" style={{marginTop: 40}}>
            <ButtonMore/></div>
        </div>
        <div className='blog__wrapper' style={{marginTop: 21}}>
            <img src={img} />
            <p className='bold fnsz14 textAlCenter'style={{marginTop: 45}}>
                7 рецептов самых вкусных шоколадных маффинов
            </p>
            <div className="flexC" style={{marginTop: 40}}>
            <ButtonMore/></div>
        </div>
    </div>
    </>
  )
}

export default Blog