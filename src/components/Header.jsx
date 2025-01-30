import React from 'react'
import LogoImg from '../images/icons/logo.svg'
import ButtonCall from '../UI/ButtonCall'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__row">
            <div className="header__wrapper">
                <div className="logo">
                    <img src={LogoImg} />
                </div>
                <div className="header__nav-list">
                    <nav>
                        <ul className='header__nav-list bold accentColor'>
                            <li>О нас</li>
                            <li>Цены</li>
                            <li>Доставка</li>
                            <li>Блог</li>
                            <li>Контакты</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="header__buttonCall">
                <ButtonCall/>
            </div>
        </div>
    </header>
  )
}

export default Header