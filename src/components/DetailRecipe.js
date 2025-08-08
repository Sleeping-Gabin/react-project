import React from "react"
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import recipes from "./data/recipes";

import { ReactComponent as HeartIcon } from "../img/Heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeItem } from "./store";
import Breadcrumb from "./Breadcrumb";

export default function DetailRecipe() {
  const {pid} = useParams();
  const recipe = recipes.find(r => r.pid === pid);

  const Chip = styled.span`
    padding: 7px 15px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: var(--sub-color);

    &:last-of-type: {
      margin-right: 0;
    }
  `

  const DivideLine = styled.div`
    margin: 30px 0;
    border-top: 1px solid var(--sub-color);
  `

  return (
    <div className="detail-recipe">
      <Breadcrumb sid="recipe" title={recipe.info.title}/>

      <RecipeInfo info={recipe.info} intro={recipe.detail.intro} coffee={recipe.detail.coffee}/>

      <div className="recipe-img">
        <img src={process.env.PUBLIC_URL+"/img/recipe/"+recipe.detail.img} alt={recipe.info.title} />
      </div>

      <section className="recipe-ingredient">
        <p className="section-title">재료</p>
        <div>
          {recipe.detail.ingredients.map((ingredient, idx) => <Chip key={idx}>{ingredient}</Chip>)}
        </div>
      </section>
      <DivideLine />

      <section className="recipe-order">
        <p className="section-title">만드는 법</p>
        <ol>
          {recipe.detail.order.map((method) => <li>{method}</li>)}
        </ol>
      </section>
    </div>
  )
}


function RecipeInfo(props) {
  const {pid} = useParams();
  const {info, intro, coffee} = props;
  
  const likes = useSelector(state => state.like);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Tag = styled.span`
    box-sizing: border-box;
    padding: 3px 10px;
    margin-right: 5px;
    border-radius: 15px;
    background-color: ${props => props.bg ? props.bg : "var(--point-color)"};
    color: white;
  `

  const EnterBtn = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 20px;
    top: 10px;
  `
    
  const likeStyle = {
    fill: likes.some((item) => item.pid === pid) ? "#f8382a": "none",
    color: likes.some((item) => item.pid === pid) ? "#f8382a": "#ccc",
  }
  
  const handleClickLike = () => {
    dispatch(toggleLikeItem({pid: pid, sid: "recipe", info: info}));
  }

  return (
    <div className="recipe-info">
      <div className="recipe-txt">
        <div className="tags">
          <Tag>{info.cid}</Tag>
          {info.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
        </div>
        <p style={{fontSize: "32px"}}>
          {info.title}
          <HeartIcon className="heart-icon" onClick={handleClickLike} style={likeStyle}/>
        </p>
        <p>{intro}</p>
      </div>
      <div className="coffee" onClick={() => navigate("/coffee/"+coffee.pid)}>
        <EnterBtn>→</EnterBtn>
        <div className="coffee-img">
          <img src={process.env.PUBLIC_URL+"/img/coffee/"+coffee.img} alt={coffee.title} />
        </div>
        <p>{coffee.title}</p>
      </div>
    </div>
  )
}
