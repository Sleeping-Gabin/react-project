import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { toggleLikeItem } from "./store";
import { ReactComponent as HeartIcon } from "../img/Heart.svg";
import { numToPriceStr } from "../utils";

export default function Like() {
  const [sid, setSid] = useState(null);
  const likes = useSelector((state) => state.like.filter((like) => like.sid === sid || !sid));

  return (
    <div className="like">
      <div className="like-title">
        <p>찜 목록</p>
        <LikeToggle sid={sid} setSid={setSid}/>
      </div>
      {
        likes.length > 0 ? 
          <ul className="like-list">
            {likes.map((like) => <LikeItem key={like.pid} item={like}/>)}
          </ul>
        : <p>
          찜한 상품이 없습니다.
        </p>
      }
    </div>
  )
}

function LikeToggle(props) {
  const {sid, setSid} = props;

  const Toggle = styled.span`
    width: 100%;
    padding: 5px 0;
    border-radius: 20px;
    ${(props) => props.text===sid && 
      "background-color: var(--point-color);"
      + "color: white;"
    }
    text-align: center;
    font-size: 14px;
    line-height: 20px;

    &:hover {
      font-weight: bold;
    }
  `

  return (
    <div className="like-toggle">
      <Toggle text="coffee" onClick={() => 
        sid==="coffee" ? setSid(null) : setSid("coffee")
      }>
        커피
      </Toggle>
      <div className="divide-line"></div>
      <Toggle text="recipe" onClick={() => 
        sid==="recipe" ? setSid(null) : setSid("recipe")
      }>
        레시피
      </Toggle>
    </div>
  )
}

function LikeItem(props) {
  const {pid, sid, info} = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ItemImg = styled.div`
    width: 130px;
    height: 130px;
    ${sid==="coffee" && "padding: 20px;"}
    margin-bottom: 5px;
    border-radius: 10px;
    background-color: white;
    position: relative;
    overflow: hidden;
    float: left;
  `
  
  const handleClickLike = () => {
    dispatch(toggleLikeItem({pid: pid, sid: sid, info: info}));
  }

  return (
    <li>
      <ItemImg onClick={() => navigate(`/${sid}/${pid}`)}>
        <img src={process.env.PUBLIC_URL+`/img/${sid}/${info.img}`} alt={pid} />
      </ItemImg>
      <div className="item-txt">
        <p style={{fontSize: "18px"}} onClick={() => navigate(`/${sid}/${pid}`)}>{info.title}</p>
        {
          sid === "coffee" &&
          <p>
            {numToPriceStr(info.price)} 원
            <span style={{fontSize: "14px", marginLeft: "5px"}}>({info.capsule} 캡슐)</span>
          </p>
        }
      </div>
      <HeartIcon className="heart-icon" onClick={handleClickLike} style={{cursor: "pointer"}}/>
    </li>
  )
}