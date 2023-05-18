import './app.css'
import AppNav from '../app-nav/app-nav';
import AppHeader from '../app-header/app-header';
import AppDevelopmentSites from '../app-development-sites/app-development-sites';
import AppTechnologies from '../app-technologies/app-technologies';
import AppSteps from '../app-steps/app-steps';
import AppServices from '../app-serivces/app-services';
import AppDevelopmentMobile from "../app-development-mobile/app-development-mobile";
function App() {
    return (
        <div className="app">
            <AppNav/>
            <AppHeader/>
            <main>
                <AppDevelopmentSites/>
                <AppTechnologies/>
                <AppSteps/>
                <AppServices/>
                <AppDevelopmentMobile/>
            </main>
        </div>
    )
}

export default App;