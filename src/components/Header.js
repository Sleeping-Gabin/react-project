import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../img/logo.svg";
import heartIcon from "../img/Heart.svg";
import cartIcon from "../img/Shopping cart.svg";

export default function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header-outer">
      <header className="header">
        <nav className="gnb">
          <NavLink to="/"><Logo className="logo"/></NavLink>
          <NavLink to="/list/coffee">커피</NavLink>
          <NavLink to="/list/recipe">레시피</NavLink>
          <NavLink to="/letter">커피 레터</NavLink>
        </nav>
        <ul className="icons">
          <li>
            <NavLink to="/like">
              <img src={heartIcon} alt="하트 아이콘" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img src={cartIcon} alt="장바구니 아이콘" />
            </NavLink>
            {cart.length > 0 && <div className="cart-badge">{cart.length}</div>}
          </li>
        </ul>
      </header>
    </div>
  )
}
