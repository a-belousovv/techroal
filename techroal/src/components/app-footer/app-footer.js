import './app-footer.css';
import '../app/app.css';

function AppFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__box">
                <div className="footer__content">
                        <img src="/pictures/icons/logo.svg" alt="" className="footer__logo"/>
                        <div className="footer__items">
                            <a href="#development-sites" className="footer__items_item text-regular">Услуги</a>
                            <a href="#technologies" className="footer__items_item text-regular">Технологии</a>
                            <a href="#trust" className="footer__items_item text-regular">Нам доверяют</a>
                            <a href="#about" className="footer__items_item text-regular">О нас</a>
                        </div>
                </div>
                <p className="footer__law caption">© Techroal. Все права защищены </p>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;