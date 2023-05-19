import './app-about.css';
import '../app/app.css';

function AppAbout() {
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="about__box">
                    <h2 className="about__title">О нас</h2>
                    <p className="about__text text-regular">Мы — амбициозная команда профессионалов, где каждый горит своим делом и прилагает все усилия для реализации лучшего решения для бизнеса!</p>
                    <div className="about__cards">
                        <div className="about__card">
                            <h4 className="about__card_title">Гибкие в общении</h4>
                            <p className="about__card_text text-regular">Мы всегда находимся на связи, даем выбор и помогаем с ним, если возникают трудности. Мы открыты к предложениям и улучшениям в рамках существующих договоренностей между заказчиком и нами — исполнителем. Наша главная цель — качественно выполненная услуга и довольные клиенты.</p>
                            <h4 className="about__card_number">01</h4>
                        </div>
                        <div className="about__card">
                            <h4 className="about__card_title">Работаем честно и открыто</h4>
                            <p className="about__card_text text-regular">Мы заключаем договор на предоставление услуг, в рамках которого предоставляем отчет об оказанных услугах. В договоре прописываем сроки выполнения работ и меры, которые предпринимаются в случае невыполнения всех услуг в срок. Но такое точно не случится, ведь мы ценим ваше время:)</p>
                            <h4 className="about__card_number">02</h4>
                        </div>
                    </div>
                    <img src="/pictures/background/about-bg-image.png" alt="" className="about__img-bg"/>
                    <div className="about__specialists_card">
                        <div className="about__specialists_content">
                            <h3 className="about__specialists_title">9 специалистов</h3>
                            <p className="about__specialists_text text-regular">из Беларуси</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AppAbout;