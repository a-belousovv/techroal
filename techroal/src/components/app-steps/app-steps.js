import './app-steps.css';
import '../app/app.css';

import AppStepsSlider from './app-steps-slider';
import AppStepsSliderButtons from './app-steps-slider-buttons';
function AppSteps() {
    return (
        <section className="steps">
        <div className="container">
            <div className="steps__box">
                <div className="steps__header">
                    <h2 className="steps__title">Этапы разработки сайта</h2>
                    <div className="slider__arrow">
                    </div>
                </div>
                <AppStepsSlider/>
                {/* <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>01</h4>
                            </div>
                            <h4 className="swiper__title">Постановка целей проекта</h4>
                            <p className="swiper__text">Анализируем сайты конкурентов по структуре, функциональности и дизайну, описываем вашу целевую аудиторию. Определяем, какие задачи бизнеса будет решать сайт.</p>
                        </div>

                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>02</h4>
                            </div>
                            <h4 className="swiper__title">Разработка техзадания</h4>
                            <p className="swiper__text">Определяем структуру сайта и согласовываем наличие модулей. Описываем элементы дизайна (цвет, шрифты, графику) на основе фирменного стиля и понравившихся вам сайтов.</p>
                        </div>
                      
                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>03</h4>
                            </div>
                            <h4 className="swiper__title">Создание дизайн-макета</h4>
                            <p className="swiper__text">Прорабатываем оговоренное количество дизайн-макетов главной страницы и согласовываем один вариант. Создаем макеты внутренних страниц и согласовываем каждую из них, вносим правки.</p>
                        </div>

                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>04</h4>
                            </div>
                            <h4 className="swiper__title">Разработка сайта</h4>
                            <p className="swiper__text">Пишем "красивый" код и проверяем его на валидность (корректность). Это позволит без труда разобраться с кодом стороннему специалисту.</p>
                        </div>

                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>05</h4>
                            </div>
                            <h4 className="swiper__title">Наполнение контентом</h4>
                            <p className="swiper__text">Заполняем сайт текстовым и графическим контентом или даем вам инструкцию по работе с админ-панелью, чтобы вы могли сделать это самостоятельно. </p>
                        </div>

                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>06</h4>
                            </div>
                            <h4 className="swiper__title">Тестирование</h4>
                            <p className="swiper__text">Проверяем работоспособность сайта и соответствие верстки дизайну. Устраняем недочеты при их выявлении.</p>
                        </div>

                        <div className="swiper-slide">
                            <div className="swiper__number">
                                <h4>07</h4>
                            </div>
                            <h4 className="swiper__title">Запуск сайта</h4>
                            <p className="swiper__text">Переносим проект на хостинг и присваиваем ему доменное имя. Выполняем все оговоренные в ТЗ дополнительные услуги.</p>
                        </div>

                    </div>

                  
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  
                   
                  </div> */}

            </div>
        </div>
    </section>
    )
}

export default AppSteps;