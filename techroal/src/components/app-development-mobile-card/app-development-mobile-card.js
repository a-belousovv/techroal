import './app-development-mobile-card.css';
import '../app/app.css';

export function AppDevelopmentMobileCard({title,textHide}) {
    
    return (
        <div className="development__card">
            <div className="development__card_header">
                <h4 className="development__card_title">{title}</h4>
                <div className="development__card_button development__card_button-plus show">
                    <img src="/pictures/icons/development-icon-plus.svg" alt="" className="development__card_button-plus"/>
                    
                </div>
                <div className="development__card_button development__card_button-close hide">
                        <img src="/pictures/icons/development-icon-close.svg" alt="" className="development__card_button-close"/>
                </div>
            </div>
            <div className="development__card_content hide">
            
                <p className="text-bold">{textHide}</p>
            </div>
    </div>
    )
}