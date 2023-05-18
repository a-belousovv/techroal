import './app-header.css';
import '../app/app.css';
import React from 'react';
function AppHeader() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div className="header__content">
                        <h1 className="header__title"><span>&lt;H1&gt;</span>DIGITAL решения <br/> для вашего бизнеса <span>&lt;H1&gt;</span></h1> 
                        <p className="header__subtitle text-regular">Создаем сайты и мобильные приложения. Разработка под ключ: от проектирования до запуска и технической поддержки. </p>
                        <div className="header__buttons">
                            <button className="header__buttons_button button-left text-bold">Веб-сайты</button>
                            <button className="header__buttons_button button-right text-bold">Приложения</button>
                        </div>
                    </div>
                    <div className="header__right">
                        <img src="/pictures/images/header-right-img.png" alt="" className="header__right_img" />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default AppHeader;