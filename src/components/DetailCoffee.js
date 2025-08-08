import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import coffees from "./data/coffees";
import recipes from "./data/recipes";

import { addCartItem, toggleLikeItem, showModal } from "./store";
import { numToPriceStr } from "../utils";
import cartIcon from "../img/Shopping cart.svg";
import { ReactComponent as HeartIcon } from "../img/Heart.svg";
import Breadcrumb from "./Breadcrumb";
import Recipe from "./Recipe";

export default function DetailCoffee() {
  const {pid} = useParams();
  const coffee = coffees.find(c => c.pid === pid);

  const DivideLine = styled.div`
    margin: 30px 0;
    border-top: 1px solid var(--sub-color);
  `

  return (
    <div className="detail-coffee">
      <Breadcrumb sid="coffee" title={coffee.info.title}/>

      <div className="coffee-main">
        <div className="coffee-img">
          <img src={process.env.PUBLIC_URL + "/img/coffee/" + coffee.detail.img} alt={coffee.info.title} />
        </div>
        <CoffeeInfo pid={coffee.pid} info={coffee.info} intro={coffee.detail.intro}/>
      </div>
      <DivideLine />

      <CoffeeText text={coffee.detail.text} sizes={coffee.info.sizes} />

      {
        coffee.detail.recipes && 
        <>
        <DivideLine />
        <section className="coffee-recipe">
          <p className="section-title">레시피</p>
          <div className="recipe-list">
            {coffee.detail.recipes.map((pid) => <Recipe key={pid} recipe={recipes.find(recipe => recipe.pid === pid)}/>)}
          </div>
        </section>
        </>
      }

      {
        coffee.detail.reviews && 
        <>
        <DivideLine />
        <section className="coffee-review">
          <p className="section-title">리뷰</p>
          <div>
            {coffee.detail.reviews.map((review, idx) => <p key={idx} className="review">{review}</p>)}
          </div>
        </section>
        </>
      }
    </div>
  )
}


function CoffeeInfo(props) {
  const likes = useSelector(state => state.like);
  const dispatch = useDispatch();
  const {pid, info, intro} = props;

  const Tag = styled.span`
    box-sizing: border-box;
    padding: 3px 10px;
    margin-right: 5px;
    border-radius: 15px;
    background-color: ${props => props.bg ? props.bg : "var(--point-color)"};
    color: white;
  `

  const likeStyle = {
    fill: likes.some((item) => item.pid === pid) ? "#f8382a": "none",
    color: likes.some((item) => item.pid === pid) ? "#f8382a": "#ccc",
  }

  const handleClickCart = () => {
    dispatch(addCartItem({pid: pid, info: info, count: 1}));
    dispatch(showModal());
  }

  const handleClickLike = () => {
    dispatch(toggleLikeItem({pid: pid, sid: "coffee", info: info}));
  }

  return (
    <div className="coffee-info">
      <div className="tags">
        <Tag>{info.cid}</Tag>
        {info.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
      </div>
      <p style={{fontSize: "20px"}}>{intro}</p>
      <p style={{marginBottom: "30px", fontSize: "32px"}}>{info.title}</p>
      <p>{info.capsule} 캡슐</p>
      <p style={{marginBottom: "50px", fontSize: "32px"}}>{numToPriceStr(info.price)} 원</p>
      <div className="btns">
        <div className="cart-btn" onClick={handleClickCart}>
          <div className="cart-icon">
            <img src={cartIcon} alt="장바구니 아이콘" />
          </div>
          <p>장바구니</p>
        </div>
        <HeartIcon className="heart-icon" onClick={handleClickLike} style={likeStyle}/>
      </div>
    </div>
  )
}

function CoffeeText(props) {
  const {text, sizes} = props;

  const Chip = styled.span`
    padding: 7px 15px;
    margin: 0 10px;
    border-radius: 5px;
    background-color: var(--sub-color);
  `

  return (
    <div className="coffee-text">
      <p className="description">
        {text.description.split("\n").reduce((prev, cur) => <>{prev}<br/>{cur}</>)}
      </p>
      <div className="size-box">
        <p>커피 사이즈</p>
        <div className="chips">
          {sizes.map((size) => <Chip key={size}>{size}</Chip>)}
        </div>
        {
          text.aromas &&
          <>
            <p>아로마 특징</p>
            <div className="chips">
              {text.aromas.map((aroma) => <Chip key={aroma}>{aroma}</Chip>)}
            </div>
          </>
        }
      </div>
      {
        text.taste && 
        <div className="taste-box">
          <TasteBar score={text.taste.body} title="바디감"/>
          <TasteBar score={text.taste.bitter} title="쓴맛" />
          <TasteBar score={text.taste.acidity} title="산미" />
          <TasteBar score={text.taste.roasting} title="로스팅" />
        </div>
      }
    </div>
  )
}

function TasteBar(props) {
  const {title, score} = props;

  let pStyle = {
    width: "85px",
    textAlign: "center",
    fontSize: "20px",
    float: "left",
  }

  let barStyle = {
    width: "405px",
    height: "5px",
    margin: "0 50px",
    borderRadius: "5px",
    backgroundColor: "var(--sub-color)",
    position: "relative",
    float: "right",
  }

  let colorStyle = {
    width: (405 / 5* score) + "px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "var(--point-color)",
    position: "absolute",
    top: 0,
    left: 0,
  }

  return(
    <div className="taste-bar">
      <p style={pStyle}>{title}</p>
      <div style={barStyle}>
        <div style={colorStyle}></div>
      </div>
    </div>
  )
}