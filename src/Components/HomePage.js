// HomePage.js
import React from 'react';
import Panel from './Panel';
import Slider from './Slider';
import Card from './Card';
import CardOne from './CardOne';


const HomePage = () => {
    return (
        <div>
            <Panel />
            <Slider />
            <Card>
                <CardOne />
            </Card>
        </div>
    );
}

export default HomePage;
