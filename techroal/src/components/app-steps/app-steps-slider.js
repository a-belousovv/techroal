import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper';
import AppStepsSliderButtons from './app-steps-slider-buttons';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css'
import './app-steps.css'
import '../app/app.css';
function AppStepsSlider() {
    let width = document.documentElement.clientWidth;
    return (
        width <=360 ? <Swiper
        spaceBetween={50}
        slidesPerView={1}
       
        >
        <SwiperSlide>
            <div className="swiper__number">
                <h4>01</h4>
            </div>
            <h4 className="swiper__title">Постановка целей проекта</h4>
            <p className="swiper__text">Анализируем сайты конкурентов по структуре, функциональности и дизайну, описываем вашу целевую аудиторию. Определяем, какие задачи бизнеса будет решать сайт.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>02</h4>
            </div>
            <h4 className="swiper__title">Разработка техзадания</h4>
            <p className="swiper__text">Определяем структуру сайта и согласовываем наличие модулей. Описываем элементы дизайна (цвет, шрифты, графику) на основе фирменного стиля и понравившихся вам сайтов.</p>
        </SwiperSlide>
        <SwiperSlide>
                <div className="swiper__number">
                    <h4>03</h4>
                </div>
                <h4 className="swiper__title">Создание дизайн-макета</h4>
                <p className="swiper__text">Прорабатываем оговоренное количество дизайн-макетов главной страницы и согласовываем один вариант. Создаем макеты внутренних страниц и согласовываем каждую из них, вносим правки.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>04</h4>
            </div>
            <h4 className="swiper__title">Разработка сайта</h4>
            <p className="swiper__text">Пишем "красивый" код и проверяем его на валидность (корректность). Это позволит без труда разобраться с кодом стороннему специалисту.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>05</h4>
            </div>
            <h4 className="swiper__title">Наполнение контентом</h4>
            <p className="swiper__text">Заполняем сайт текстовым и графическим контентом или даем вам инструкцию по работе с админ-панелью, чтобы вы могли сделать это самостоятельно. </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>06</h4>
            </div>
            <h4 className="swiper__title">Тестирование</h4>
            <p className="swiper__text">Проверяем работоспособность сайта и соответствие верстки дизайну. Устраняем недочеты при их выявлении.</p>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swiper__number">
                <h4>07</h4>
            </div>
            <h4 className="swiper__title">Запуск сайта</h4>
            <p className="swiper__text">Переносим проект на хостинг и присваиваем ему доменное имя. Выполняем все оговоренные в ТЗ дополнительные услуги.</p>
        </SwiperSlide>
        <AppStepsSliderButtons/>
        </Swiper> : width >=360 && width<= 768 ? <Swiper
        spaceBetween={50}
        slidesPerView={2}
        
        >
        <SwiperSlide>
            <div className="swiper__number">
                <h4>01</h4>
            </div>
            <h4 className="swiper__title">Постановка целей проекта</h4>
            <p className="swiper__text">Анализируем сайты конкурентов по структуре, функциональности и дизайну, описываем вашу целевую аудиторию. Определяем, какие задачи бизнеса будет решать сайт.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>02</h4>
            </div>
            <h4 className="swiper__title">Разработка техзадания</h4>
            <p className="swiper__text">Определяем структуру сайта и согласовываем наличие модулей. Описываем элементы дизайна (цвет, шрифты, графику) на основе фирменного стиля и понравившихся вам сайтов.</p>
        </SwiperSlide>
        <SwiperSlide>
                <div className="swiper__number">
                    <h4>03</h4>
                </div>
                <h4 className="swiper__title">Создание дизайн-макета</h4>
                <p className="swiper__text">Прорабатываем оговоренное количество дизайн-макетов главной страницы и согласовываем один вариант. Создаем макеты внутренних страниц и согласовываем каждую из них, вносим правки.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>04</h4>
            </div>
            <h4 className="swiper__title">Разработка сайта</h4>
            <p className="swiper__text">Пишем "красивый" код и проверяем его на валидность (корректность). Это позволит без труда разобраться с кодом стороннему специалисту.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>05</h4>
            </div>
            <h4 className="swiper__title">Наполнение контентом</h4>
            <p className="swiper__text">Заполняем сайт текстовым и графическим контентом или даем вам инструкцию по работе с админ-панелью, чтобы вы могли сделать это самостоятельно. </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>06</h4>
            </div>
            <h4 className="swiper__title">Тестирование</h4>
            <p className="swiper__text">Проверяем работоспособность сайта и соответствие верстки дизайну. Устраняем недочеты при их выявлении.</p>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swiper__number">
                <h4>07</h4>
            </div>
            <h4 className="swiper__title">Запуск сайта</h4>
            <p className="swiper__text">Переносим проект на хостинг и присваиваем ему доменное имя. Выполняем все оговоренные в ТЗ дополнительные услуги.</p>
        </SwiperSlide>
        <AppStepsSliderButtons/>
        </Swiper> :<Swiper
        spaceBetween={50}
        slidesPerView={3}
        
        >
        <SwiperSlide>
            <div className="swiper__number">
                <h4>01</h4>
            </div>
            <h4 className="swiper__title">Постановка целей проекта</h4>
            <p className="swiper__text">Анализируем сайты конкурентов по структуре, функциональности и дизайну, описываем вашу целевую аудиторию. Определяем, какие задачи бизнеса будет решать сайт.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>02</h4>
            </div>
            <h4 className="swiper__title">Разработка техзадания</h4>
            <p className="swiper__text">Определяем структуру сайта и согласовываем наличие модулей. Описываем элементы дизайна (цвет, шрифты, графику) на основе фирменного стиля и понравившихся вам сайтов.</p>
        </SwiperSlide>
        <SwiperSlide>
                <div className="swiper__number">
                    <h4>03</h4>
                </div>
                <h4 className="swiper__title">Создание дизайн-макета</h4>
                <p className="swiper__text">Прорабатываем оговоренное количество дизайн-макетов главной страницы и согласовываем один вариант. Создаем макеты внутренних страниц и согласовываем каждую из них, вносим правки.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>04</h4>
            </div>
            <h4 className="swiper__title">Разработка сайта</h4>
            <p className="swiper__text">Пишем "красивый" код и проверяем его на валидность (корректность). Это позволит без труда разобраться с кодом стороннему специалисту.</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>05</h4>
            </div>
            <h4 className="swiper__title">Наполнение контентом</h4>
            <p className="swiper__text">Заполняем сайт текстовым и графическим контентом или даем вам инструкцию по работе с админ-панелью, чтобы вы могли сделать это самостоятельно. </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__number">
                <h4>06</h4>
            </div>
            <h4 className="swiper__title">Тестирование</h4>
            <p className="swiper__text">Проверяем работоспособность сайта и соответствие верстки дизайну. Устраняем недочеты при их выявлении.</p>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swiper__number">
                <h4>07</h4>
            </div>
            <h4 className="swiper__title">Запуск сайта</h4>
            <p className="swiper__text">Переносим проект на хостинг и присваиваем ему доменное имя. Выполняем все оговоренные в ТЗ дополнительные услуги.</p>
        </SwiperSlide>
        <AppStepsSliderButtons/>
        </Swiper>
            
        
    )
}
export default AppStepsSlider;