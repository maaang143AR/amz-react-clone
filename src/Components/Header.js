import "./Header.css";
import logo from '../Images/amazon_logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar">
        <div class="nav_logo border">
          <div class="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}/>
          <img src={logo} className="logo_amz"/>
          </div>
        </div>
        <div class="nav_address border">
          <p class="nav_address_p1">Deliver to</p>
          <div class="nav_address_icon">
            <i class="fa-solid fa-location-dot"></i>
            <p class="nav_address_p2">Pakistan</p>
          </div>
        </div>

        <div class="nav_search">
          <select class="nav_search_select">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            class="nav_search_input"
          />
          <div class="nav_search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div class="nav_signin border">
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav_signin_p">Account & Lists</p>
          </Link>
        </div>

        <div class="nav_return border">
          <p>
            <span>Returns</span>
          </p>
          <p class="nav_return_p">& Order</p>
        </div>

        <div class="nav_cart border">
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
        </div>
      </div>
    </div>
  );
};

export default Header;