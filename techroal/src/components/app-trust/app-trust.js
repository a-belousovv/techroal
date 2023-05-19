import './app-trust.css';
import '../app/app.css';


function AppTrust() {
    return (
        <section className="trust" id='trust'>
        <div className="container">
            <div className="trust__box">
                <h2 className="trust__title">Нам доверяют</h2>
                <div className="trust__cards">
                    <div className="trust__cards_card">
                        <div className="trust__card_left">
                            <img src="/pictures/images/trust-primus-image.png" alt=""/>
                        </div>
                        <div className="trust__card_content">
                            <h3 className="trust__card_title">Primus Capital</h3>
                            <p className="trust__card_text text-regular">Primus Capital — динамично развивающаяся инвестиционная компания, базирующаяся в Казахстане, цель которой — расширять возможности сообществ и улучшать жизнь людей за счет инвестиций в инновационное производство, образование, здравоохранение, строительство, девелопмент недвижимости и другие отрасли. </p>
                            <p className="trust__card_list_title text-bold">Что было сделано</p>
                            <div className="trust__card_lists">
                                <ul>
                                    <li className="caption">Создание концепции и дизайн-макета</li>
                                    <li className="caption"> Front-end и Back-end разработка</li>
                                    <li className="caption">SEO-оптимизация</li>
                                </ul>
                                <ul>
                                    <li className="caption">Подключение https</li>
                                    <li className="caption">Покупка домена</li>
                                    <li className="caption">Развертывание сайта на хостинге</li>
                                </ul>
                            </div>
                            <a href='https://www.primuscapital.kz/' className="trust__card_button text-bold">Смотреть сайт</a>
                        </div>
                    </div>
                    <div className="trust__cards_card">
                        <div className="trust__card_left">
                            <img src="/pictures/images/trust-eurasian-image.png" alt=""/>
                        </div>
                        <div className="trust__card_content">
                            <h3 className="trust__card_title">Eurasian Resources Group</h3>
                            <p className="trust__card_text text-regular">ERG — Eurasian Resources Group является одной из ведущих в мире компаний по добыче и переработке природных ресурсов. Также имеет полностью интегрированные энергетические, транспортные и маркетинговые операции. Компания представлена в 16 странах мира на четырех континентах и является одним из крупнейших работодателей в отрасли.</p>
                            <p className="trust__card_list_title text-bold">Что было сделано</p>
                            <div className="trust__card_lists">
                                <ul>
                                    <li className="caption">Разработка корпоративного портала</li>
                                    <li className="caption">Админ-панель с возможностью добавлять новости компании</li>
                                    <li className="caption">Техническая поддержка</li>
                                </ul>
                            </div>
                            <button className="trust__card_button text-bold">Смотреть сайт</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    )
}
export default AppTrust;