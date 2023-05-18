import './app-technologies-card.css';
import '../app/app.css';

function AppTechnologiesCard({title,text,url}) {
    return (
        <div className="technologies__cards_card">
            <h4 className="technologies__card_title">{title}</h4>
            <p className="technologies__card_text">{text}</p>
            <img src={url} alt="" className="technologies__card_icon"/>
        </div>
    )
}

export default AppTechnologiesCard;