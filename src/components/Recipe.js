import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleLikeItem } from "./store";
import { ReactComponent as HeartIcon } from "../img/Heart.svg";
import recipeStyle from "../css/recipe.module.css";

export default function Recipe(props) {
  const {recipe} = props;
  const info = recipe.info;

  const like = useSelector(state => state.like.some((item) => item.pid === recipe.pid));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const Tag = styled.div`
    width: fit-content;
    margin-bottom: 5px;
    padding: 3px 10px;
    border-radius: 15px;
    background-color: white;
    font-size: 12px;
  `
  
  const likeStyle = {
    fill: like ? "#f8382a": "none",
    color: like ? "#f8382a": "#ccc",
  }
  
  const handleClickLike = () => {
    dispatch(toggleLikeItem({pid: recipe.pid, sid: "recipe", info: info}));
  }

  return (
    <div className={recipeStyle.recipe}>
      <div className={recipeStyle.img} onClick={() => navigate("/recipe/"+recipe.pid)}>
        <img src={process.env.PUBLIC_URL+"/img/recipe/"+recipe.info.img} alt={recipe.pid + "이미지"} />
        <div className={recipeStyle.tags}>
          <Tag>{recipe.info.cid}</Tag>
          {info.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
        </div>
      </div>

      <p className={recipeStyle.title} onClick={() => navigate("/recipe/"+recipe.pid)}>
        {info.title}
      </p>

      <HeartIcon className={recipeStyle.heart} onClick={handleClickLike} style={likeStyle}/>
    </div>
  )
}
