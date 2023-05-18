import './app-services.css';
import '../app/app.css';
import { AppServicesCard } from '../app-services-card/app-services-card';

function AppServices() {
    const data = {
        card1: {
            url: "pictures/icons/services-icon-support.svg",
            text: "Техническая поддержка",
        },
        card2: {
            url: "pictures/icons/services-icon-optimization.svg",
            text: "Оптимизация скорости загрузки",
        },
        card3: {
            url: "pictures/icons/services-icon-audit.svg",
            text: "Аудит и улучшение юзабилити",
        },
        card4: {
            url: "pictures/icons/services-icon-security.svg",
            text: "Защита от взломов и спама",
        },
        card5: {
            url: "pictures/icons/services-icon-sslcertificate.svg",
            text: "Установка SSL-сертификата",
        },
        card6: {
            url: "pictures/icons/services-icon-adaptive.svg",
            text: "Создание адаптивов",
        },
        card7: {
            url: "pictures/icons/services-icon-content.svg",
            text: "Наполнение контентом",
        },
        card8: {
            url: "pictures/icons/services-icon-analitycs.svg",
            text: "Установка сервисов аналитики",
        },
        card9: {
            url: "pictures/icons/services-icon-cleaning.svg",
            text: "Чистка от вирусов",
        },
        card10: {
            url: "pictures/icons/services-icon-plugins.svg",
            text: "Подключение чатов, плагинов",
        },

    }
    return (
        <section className="services">
            <div className="container">
                <div className="services__box">
                    <h2 className="services__title">Дополнительные услуги</h2>
                    <div className="services__cards">
                        <div className="services__cards_top">
                            <AppServicesCard url={data.card1.url} text = {data.card1.text}/>
                            <AppServicesCard url={data.card2.url} text = {data.card2.text}/>
                            <AppServicesCard url={data.card3.url} text = {data.card3.text}/>
                            <AppServicesCard url={data.card4.url} text = {data.card4.text}/>
                            <AppServicesCard url={data.card5.url} text = {data.card5.text}/>
                            <AppServicesCard url={data.card6.url} text = {data.card6.text}/>
                        </div>
                        <div className="services__cards_bottom">
                            <div className="services__cards_bottom-left">
                            <AppServicesCard url={data.card7.url} text = {data.card7.text}/>
                            <AppServicesCard url={data.card8.url} text = {data.card8.text}/>
                            <AppServicesCard url={data.card9.url} text = {data.card9.text}/>
                            <AppServicesCard url={data.card10.url} text = {data.card10.text}/>
                            </div>
                            <form action="" className="services__cards_form">
                                <h3 className="services__form_title">Давайте обсудим <br/> ваш проект</h3>
                                <p className="services__form_text text-regular">Напишите нам</p>
                                <p className="services__form_text text-bold">techroal.development@gmail.com</p>
                                <p className="services__form_text text-regular">Или позвоните</p>
                                <p className="services__form_text text-bold">+375 (44) 778-02-52</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
export default AppServices;