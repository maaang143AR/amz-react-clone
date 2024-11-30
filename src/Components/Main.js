import './Main.css';
import Header from './Header';
import Panel from './Panel';
// import hero from '../Images/hero-img-amz.jpg';
import Slider from './Slider';
import Card from './Card';
import CardOne from './CardOne';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const Main = () =>{
    return (
        <div>
            <Router>
            <Header />
            <Routes>
                {/* Default route for your main page */}
                <Route path="/" element={<HomePage />} />

                {/* Additional route for login */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <FooterOne />
            <FooterTwo />
        </Router>
        </div>
    );
}

export default Main;