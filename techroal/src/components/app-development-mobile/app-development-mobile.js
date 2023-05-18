import './app-development-mobile.css';
import '../app/app.css';
import { AppDevelopmentMobileCard } from '../app-development-mobile-card/app-development-mobile-card';
function DevelopmentMobileAccordion() {
    const parent = document.querySelector('.development-mobile');
    const cards = parent.querySelectorAll('.development__card');
    cards.forEach(card => {
      card.addEventListener('click', (event) => {
        if (event.target.classList.contains('development__card_button-plus')) {
         
          card.querySelector('.development__card_button-plus').classList.add('hide');
          card.querySelector('.development__card_button-close').classList.add('show');
          card.querySelector('.development__card_button-plus').classList.remove('show');
          card.querySelector('.development__card_button-close').classList.remove('hide');


          card.querySelector('.development__card_content').classList.add('show');
          card.querySelector('.development__card_content').classList.remove('hide');
        }
        else if (event.target.classList.contains('development__card_button-close') ) {
          card.querySelector('.development__card_button-plus').classList.remove('hide');
          card.querySelector('.development__card_button-close').classList.remove('show');
          card.querySelector('.development__card_button-plus').classList.add('show');
          card.querySelector('.development__card_button-close').classList.add('hide');


          card.querySelector('.development__card_content').classList.remove('show');
          card.querySelector('.development__card_content').classList.add('hide');
        }
        
       
      })
    });
  }
function AppDevelopmentMobile() {
    const data = {
        card1: {
            title: "01. Сбор ваших требований и определений целей",
            textHide: "Определяем, какие задачи будут решаться с помощью приложения и какие бизнес-процессы будут автоматизированы."
        },
        card2: {
            title: "02. Разработка технического задания",
            textHide: "Пишем документ, в котором фиксируем объем работ и полный список функций под реализацию."
        },
        card3: {
            title: "03. Создание дизайн-макета",
            textHide: "Отрисовываем каждый экран, ориентируясь на гайдлайны Android и iOS и визуальный стиль приложения."
        },
        card4: {
            title: "04. Разработка согласно дизайн-макету",
            textHide: "Переводим в код отрисованные дизайнером макеты."
        },
        card5: {
            title: "05. Наполнение контентом",
            textHide: "Наполняем актуальным текстовым и графическим контентом."
        },
        card6: {
            title: "06. Тестирование",
            textHide: "Проверяем наличие нужного функционала, сверяем на соответствие дизайн-макету и тестируем производительность."
        },
        card7: {
            title: "07. Запуск приложения в AppStore, Google Play",
            textHide: "Анализируем приложение на соответствие правилам Google Play и App Store, проходим модерацию и запускаем приложение."
        },
    }
    return (
        <section className="development-mobile" onClick={DevelopmentMobileAccordion}>
            <div className="container">
                <div className="development__box">
                    <div className="development__content">
                        <h2 className="development__title">Разработка мобильных <br/> приложений</h2>
                        <p className="development__subtitle text-regular">Мы разрабатываем мобильные приложения под любые нужды на кроссплатформенном фреймворке — React Native. На нем написаны такие мировые гиганты, как Instagram, UberEats, Facebook Ads, Airbnb и многие другие. Мы можем воплотить в реальность абсолютно любую вашу идею.</p>
                        <button className="development__button text-bold">Связаться с нами</button>
                    </div>
                    <div className="development__cards">
                        <AppDevelopmentMobileCard title={data.card1.title} textHide={data.card1.textHide}/>
                        <AppDevelopmentMobileCard title={data.card2.title} textHide={data.card2.textHide}/>
                        <AppDevelopmentMobileCard title={data.card3.title} textHide={data.card3.textHide}/>
                        <AppDevelopmentMobileCard title={data.card4.title} textHide={data.card4.textHide}/>
                        <AppDevelopmentMobileCard title={data.card5.title} textHide={data.card5.textHide}/>
                        <AppDevelopmentMobileCard title={data.card6.title} textHide={data.card6.textHide}/>
                        <AppDevelopmentMobileCard title={data.card7.title} textHide={data.card7.textHide}/>
                    </div>
                </div>
            </div>
        </section> 
    )
}
export default AppDevelopmentMobile;