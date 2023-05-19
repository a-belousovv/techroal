import './app-nav.css';
import '../app/app.css'
import React from 'react';
function openBurgerMenu() {
    let menu = document.querySelector('.nav__burger');
    menu.style.height = "100vh"; 
    menu.style.width = "100%";
}
function closeBurgerMenu() {
    let menu = document.querySelector('.nav__burger');
    menu.style.height = "0%"; 
    menu.style.width = "0%";
}
function AppNav() {
    return (
        <nav className="nav">
            
            <div className="nav__box">  
                <div className="nav__burger_box" onClick={openBurgerMenu}>
                        <div className="nav__burger_line-top"></div>
                        <div className="nav__burger_line-bottom"></div>
                </div>
                <img src="/pictures/icons/logo.svg" alt="" className='nav__logo' />
                <div className="nav__items">
                    <a href="#development-sites" className="nav__items_item text-regular">Услуги</a>
                    <a href="#technologies" className="nav__items_item text-regular">Технологии</a>
                    <a href="#trust" className="nav__items_item text-regular">Нам доверяют</a>
                    <a href="#about" className="nav__items_item text-regular">О нас</a>
                </div>
                <a href='#contact' className="nav__contact-button"><h4>Связаться с нами</h4></a>


                <div className="nav__burger">
                    <div className="nav__burger_content">
                        <div className="nav__burger_content-top">
                            <img src="/pictures/icons/icon-close.svg" alt="" className="nav__button-close" onClick={closeBurgerMenu} />
                            <img src="/pictures/icons/logo.svg" alt="" className="nav__logo-burger"/>
                            <div className="nav__items-burger">
                                <a href="#development-sites" className="nav__items_item-burger text-bold">Услуги</a>
                                <a href="#technologies" className="nav__items_item-burger text-bold">Технологии</a>
                                <a href="#trust" className="nav__items_item-burger text-bold">Нам доверяют</a>
                                <a href="#about" className="nav__items_item-burger text-bold">О нас</a>
                            </div>
                        </div>
                        <div className="nav__contact-burger">
                            <p className=" text-regular">Напишите нам</p>
                            <p className=" text-bold">techroal.development@gmail.com</p>
                            <p className=" text-regular">Или позвоните</p>
                            <h4 className="nav__contact_text-burger">+375 (44) 778-02-52</h4>
                        </div>

                        </div>
                    </div>
            </div>
    </nav>
    );
}

export default AppNav;