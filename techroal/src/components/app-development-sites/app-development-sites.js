import './app-development-sites.css';
import '../app/app.css';
import AppDevelopmentSitesCard from '../app-development-sites-card/app-development-sites-card';

const data = {
    firstCard: {
        url: "/pictures/icons/development-cards-aesthetics.svg",
        title: "Эстетика",
        text: "Делаем стильный и лаконичный дизайн, оптимизированный под все устройства."
    },
    secondCard: {
        url: "/pictures/icons/development-cards-comfort.svg",
        title: "Удобство использования",
        text: "Создаем сайты с четкой структурой и понятной навигацией."
    },
    thirdCard: {
        url: "/pictures/icons/development-cards-efficiency.svg",
        title: "Эффективность",
        text: "Наполняем сайт конверсионным функционалом для получения заявок."
    },
    fourCard: {
        url: "/pictures/icons/development-cards-advance.svg",
        title: "Продвижение",
        text: "Учитываем все факторы продвижения сайта в поисковых системах Google и Yandex."
    }
}

function AppDevelopmentSites() {
    return (
        <section className="development-sites">
            <div className="container">
                <div className="development__box">
                    <div className="development__content">
                        <h2 className="development__title">Разработка сайтов</h2>
                        <p className="development__subtitle text-regular">Создаем эффективный инструмент для презентации вашей компании в сети и привлечения новых клиентов. Разрабатываем сайты с уникальным дизайном и наполняем их всем необходимыми модулями и функционалом.</p>
                        <button className="development__button text-bold">Связаться с нами</button>
                    </div>
                    <div className="development__cards">
                    <AppDevelopmentSitesCard url={data.firstCard.url} title ={data.firstCard.title} text={data.firstCard.text}/>
                    <AppDevelopmentSitesCard url={data.secondCard.url} title ={data.secondCard.title} text={data.secondCard.text}/>
                    <AppDevelopmentSitesCard url={data.thirdCard.url} title ={data.thirdCard.title} text={data.thirdCard.text}/>
                    <AppDevelopmentSitesCard url={data.fourCard.url} title ={data.fourCard.title} text={data.fourCard.text}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppDevelopmentSites;