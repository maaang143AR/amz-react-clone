import './Card.css';
import CardOne from './CardOne';
import game from '../Images/game.jpg';
import third from '../Images/third.jpg';
import toy from '../Images/toys.jpg';
import dog from '../Images/box6_image.jpg';



const Card = () => {
    const cards = [{
        title: "Game accessories",
        pic: game
        
    },
    {
        title: "Chair",
        pic: third

    },
    {
        title: "Toy",
        pic: toy

    },
    {
        title: "Dog",
        pic:dog

    }]

   
    return (
        <div className="card">
            
            {cards.map((card, index)=>(
                <CardOne key={index} title={card.title} pic={card.pic} />
            ))};

        </div>
    );
}

export default Card;