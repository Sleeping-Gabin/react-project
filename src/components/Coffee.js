import coffeeStyle from "../css/coffee.module.css";

import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as HeartIcon } from "../img/Heart.svg";
import { ReactComponent as CartIcon } from "../img/Shopping cart.svg";
import { addCartItem, toggleLikeItem, showModal } from "./store";
import { numToPriceStr } from "../utils";

function Coffee(props) {
  const {coffee} = props;
  const info = coffee.info;

  const like = useSelector(state => state.like.some((item) => item.pid === coffee.pid));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Tag = styled.div`
    width: fit-content;
    margin-bottom: 5px;
    padding: 3px 8px;
    border-radius: 15px;
    background-color: white;
    font-size: 11px;
  `;

  const likeStyle = {
    fill: like ? "#f8382a": "none",
    color: like ? "#f8382a": "#ccc",
  }

  const handleClickCart = () => {
    dispatch(addCartItem({pid: coffee.pid, info: coffee.info, count: 1}));
    dispatch(showModal());
  }
  
  const handleClickLike = () => {
    dispatch(toggleLikeItem({pid: coffee.pid, sid: "coffee", info: info}));
  }

  return (
    <div className={coffeeStyle.coffee}>
      <div className={coffeeStyle.img} onClick={() => navigate("/coffee/"+coffee.pid)}>
        <img src={process.env.PUBLIC_URL+"/img/coffee/"+info.img} alt={coffee.pid + "이미지"} />
        <div className={coffeeStyle.tags}>
          <Tag>{info.cid}</Tag>
          {info.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
        </div>
      </div>

      <div className={coffeeStyle.txt} onClick={() => navigate("/coffee/"+coffee.pid)}>
        <p className={coffeeStyle.size}>
          {info.sizes.reduce((prev, cur) => prev + " / " + cur)}
        </p>
        <p className={coffeeStyle.title}>{info.title}</p>
        <p className={coffeeStyle.price}>
          {numToPriceStr(info.price)} 원
          <span>({info.capsule} 캡슐)</span>
        </p>
      </div>
      <HeartIcon className={coffeeStyle.heart} onClick={handleClickLike} style={likeStyle}/>

      <button type="button" className={coffeeStyle.btn} onClick={handleClickCart}>
        <CartIcon className={coffeeStyle.cart} />
        <p>장바구니</p>
      </button>
    </div>
  )
}

export default Coffee