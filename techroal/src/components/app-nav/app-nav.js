import './app-nav.css';
import '../app/app.css'
import React from 'react';
function AppNav() {
    return (
        <nav className="nav">
            
            <div className="nav__box">  
                <div className="nav__burger_box">
                        <div className="nav__burger_line-top"></div>
                        <div className="nav__burger_line-bottom"></div>
                </div>
                <img src="/pictures/icons/logo.svg" alt="" className='nav__logo' />
                <div className="nav__items">
                    <a href="" className="nav__items_item text-regular">Услуги</a>
                    <a href="" className="nav__items_item text-regular">Технологии</a>
                    <a href="" className="nav__items_item text-regular">Нам доверяют</a>
                    <a href="" className="nav__items_item text-regular">О нас</a>
                </div>
                <button className="nav__contact-button"><h4>Связаться с нами</h4></button>


                <div className="nav__burger_content">
                <img src="/public/pictures/icons/logo.svg" alt="" className="nav__logo-burger"/>
                    <div className="nav__items-burger">
                        <a href="" className="nav__items_item-burger text-bold">Услуги</a>
                        <a href="" className="nav__items_item-burger text-bold">Технологии</a>
                        <a href="" className="nav__items_item-burger text-bold">Нам доверяют</a>
                        <a href="" className="nav__items_item-burger text-bold">О нас</a>
                    </div>
                    <div className="nav__contact-burger">
                        <p className=" text-regular">Напишите нам</p>
                        <p className=" text-bold">techroal.development@gmail.com</p>
                        <p className=" text-regular">Или позвоните</p>
                        <h4 className="nav__contact_text-burger">+375 (44) 778-02-52</h4>
                    </div>

                </div>
            </div>
    </nav>
    );
}

export default AppNav;