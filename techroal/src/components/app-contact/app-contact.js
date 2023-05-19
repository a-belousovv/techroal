import './app-contact.css';
import '../app/app.css';

function AppContact() {
    return (
        <section className="contacts" id='contact'>
            <div className="container">
                <div className="contacts__box">
                    <img src="/pictures/background/contacts-bg-image.png" alt="" className="contacts__bg" />
                    <h2 className="contacts__title">Свяжитесь с нами</h2>
                    <div className="contacts__content">
                        <p className="contacts__text text-regular">Позвоните нам</p>
                        <h3 className="contacts__subtitle">+375 (44) 778-02-52</h3>
                        <p className="contacts__text text-regular">Напишите нам</p>
                        <h4 className="contacts__text text-bold">techroal.development@gmail.com</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppContact;