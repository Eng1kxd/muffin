import React from 'react'
import ButtonCall from '../UI/ButtonCall'
import imgHeaderSection from '../images/img1Header.png'

const SectionHeader = () => {
  return (
    <div className='SectionHeader'>
        <div className="SectionHeader_left"style={{maxWidth: 521}}>

            <div className="SectionHeader__title">
                <h1 className='extraBold fnsz48 accentColor' >
                Свежие маффины на любой вкус
                </h1>
            </div>
            <div className="SectionHeader__desc">
                <p className='medium fnsz18'>
                    Мы готовим маленькие сладости, которые приносят большие улыбки в любой день и без повода
                </p>
            </div>
            <div id="SectionHeader__buttonCall">
                <ButtonCall/>
            </div>
        </div>
        <div className="SectionHeader_right">
            <img src={imgHeaderSection} />
        </div>
    </div>
  )
}

export default SectionHeader