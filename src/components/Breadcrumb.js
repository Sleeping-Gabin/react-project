import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

export default function Breadcrumb(props) {
  const {sid, title} = props;
  const navigate = useNavigate();

  let subTitle = sid==="coffee" ? "커피" : "레시피";

  const RightIcon = styled.div`
    width: 16px;
    height: 16px;
    margin: 0 5px;
  `

  return (
    <div className="breadcrumb">
      <p onClick={() => navigate("/")} style={{cursor: "pointer"}}>홈</p>
      <RightIcon><img src={process.env.PUBLIC_URL + "/img/icons/chevron_right.png"} alt="" /></RightIcon>
      <p onClick={() => navigate("/list/"+sid)} style={{cursor: "pointer"}}>{subTitle}</p>
      {
        title && 
        <>
          <RightIcon><img src={process.env.PUBLIC_URL + "/img/icons/chevron_right.png"} alt="" /></RightIcon>
          <p>{title}</p>
        </>
      }
    </div>
  )
}
