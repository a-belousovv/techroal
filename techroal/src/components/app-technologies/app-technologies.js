
import './app-technologies.css';
import '../app/app.css';
import AppTechnologiesCard from '../app-technologies-card/app-technologies-card';

const data = {
    firstCard: {
        title: "Laravel фреймворк",
        text: "Обладает функциями безопасности — защищает от SQL-инъекции и кросс-сайтового скриптинга. Высокая отдача улучшает скорость загрузки веб-страниц в браузеры, а это значимый фактор поискового ранжирования.",
        url: "/pictures/icons/laravel-icon.svg"
    },  
    secondCard: {
        title: "Nuxt.js фреймворк",
        text: "Автоматически генерирует страницы, что значительно улучшает индексацию сайта поисковиками. Позволяет расширять функционал с малыми затратами в ресурсах. Это делает продукт легко масштабируемым.",
        url: "/pictures/icons/Nuxt-icon.svg"
    },
    thirdCard: {
        title: "Vue.js фреймворк",
        text: "Имеет большое количество готовых библиотек, а значит позволяет быстро разрабатывать без потерь в качестве. Пользуется популярностью, что упрощает поиск программиста на техническую поддержку.",
        url: "/pictures/icons/Vue-icon.svg"
    }
}

function AppTechnologies() {
    return (
        <section className="technologies" id='technologies'>
        <div className="container">
            <div className="technologies__box">
                <h2 className="technologies__title">Технологии</h2>
                <div className="technologies__cards">
                    <AppTechnologiesCard title = {data.firstCard.title} text = {data.firstCard.text} url = {data.firstCard.url}/>
                    <AppTechnologiesCard title = {data.secondCard.title} text = {data.secondCard.text} url = {data.secondCard.url}/>
                    <AppTechnologiesCard title = {data.thirdCard.title} text = {data.thirdCard.text} url = {data.thirdCard.url}/>
                </div>
            </div>
        </div>
    </section>
    )
}


export default AppTechnologies;