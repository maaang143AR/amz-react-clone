import './Panel.css';

const Panel = () =>{
    return (
        <div class="panel">
        <div class="panel_all">
            <i class="fa-solid fa-bars"></i>
            All
        </div>
        <div class="panel_options">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </div>
       </div>

    );
}

export default Panel;