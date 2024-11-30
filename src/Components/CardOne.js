import './CardOne.css';

const CardOne = ({title,pic}) =>{
    

    return(
        <div className="card_skeleton">
            <h2>{title}</h2>
            
                <img src={pic} className="card_img"/>
            
        </div>
     );
}

export default CardOne;