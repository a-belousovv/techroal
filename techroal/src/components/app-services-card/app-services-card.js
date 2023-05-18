import './app-services-card.css';
import '../app/app.css';

export function AppServicesCard({url,text}) {
    return (
        <div className="services__cards_card">
            <img src={url} alt="" className="services__card_img"/>
            <h4 className="services__card_text">{text}</h4>
        </div>
    )
}