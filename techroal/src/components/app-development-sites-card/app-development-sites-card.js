import './app-development-sites-card.css';
import '../app/app.css';

function AppDevelopmentSitesCard({url,title,text}) {
    return (
        <div className="development__cards_card">
            <img src={url} alt="" className="development__card-icon"/>
            <div className="development__card_content">
                <h4 className="development__card_title">{title}</h4>
                <p className="development__card_text text-regular">{text}</p>
            </div>
        </div>
    )
}
export default AppDevelopmentSitesCard;