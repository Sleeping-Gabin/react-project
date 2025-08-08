import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import coffeeData from "./data/coffees";
import recipeData from "./data/recipes";
import Coffee from "./Coffee";
import Recipe from "./Recipe";
import VisualMain from "./VisualMain";

export default function Home() {
  const [coffees] = useState(coffeeData.slice(0, 12));
  const [recipes] = useState(recipeData.slice(0, 4));
  const navigate = useNavigate();

  const BannerEnterBtn = styled.button`
    width: 120px;
    height: 120px;
    margin: 40px 20px;
    border: none;
    border-radius: 50%;
    background-color: var(--point-color);
    color: white
  `

  return (
    <div className="home">
      <VisualMain/>

      <TitleBar title="캡슐 커피" path="/list/coffee" />
      <div className="coffee-list">
        {coffees.map((coffee) => <Coffee coffee={coffee} />)}
      </div>
      
      <div className="banner">
        <div className="banner-img">
          <img src={process.env.PUBLIC_URL+"/img/banner_book.avif"} alt="7월 커피레터" />
        </div>
        <div className="banner-txt">
          <p style={{fontSize: "24px", marginBottom: "10px"}}>7월의 커피 레터 - 휴가</p>
          <p style={{fontSize: "18px"}}>아이스 커피와 함께라면 어느 곳이든 휴양지가 되는 7월.<br/>버츄오 아이스 레제로, 오리지널 프레도 인텐소로 시원한 휴가 분위기를 만끽해 보세요.</p>
        </div>
        <BannerEnterBtn onClick={() => navigate("/letter")}>
          커피 레터<br/>→
        </BannerEnterBtn>
      </div>

      <TitleBar title="홈카페 레시피" path="/list/recipe" />
      <div className="recipe-list">
        {recipes.map((recipe) => <Recipe recipe={recipe} />)}
      </div>
    </div>
  )
}

function TitleBar(props) {
  const {title, path} = props;
  const navigate = useNavigate();

  const EnterBtn = styled.button`
    padding: 3px 15px;
    border: 1px solid var(--point-color);
    border-radius: 10px;
    background: none;
    color: var(--point-color);
    font-size: 14px;
  `

  return (
    <div className="title-bar">
      <p>{title}</p>
      <EnterBtn onClick={() => navigate(path)}>전체 보기</EnterBtn>
    </div>
  )
}