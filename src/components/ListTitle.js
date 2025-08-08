import React, { useState } from "react"
import styled from "styled-components";

import Breadcrumb from "./Breadcrumb";

export default function ListTitle(props) {
  const {sid, data, setItems} = props;
  const [selectTag, setSelectTag] = useState();

  let tags = data.reduce((prev, cur) => { 
    prev.push(...cur.info.tags);
    return prev;
  }, []);
  tags = Array.from(new Set(tags));
  tags.unshift("오리지널");
  tags.unshift("버츄오");

  const Tag = styled.span`
    display: inline-block;
    padding: 3px 12px;
    margin: 10px 5px 10px;
    border-radius: 20px;
    border: 1px solid #999;
    font-size: 14px;

    &:hover {
      background-color: #eee;
    }

    &.select {
      border-color: var(--point-color);
      background-color: var(--point-color);
      color: white;
    }
  `;

  const handleClickTag = (e) => {
    let tag = e.currentTarget.textContent;
    let idx = tags.indexOf(tag);

    if (idx === selectTag) {
      setItems(data);
      setSelectTag();
    }
    else {
      let newItems = data.filter(item => item.info.tags.includes(tag) || item.info.cid === tag);
      setItems(newItems);
      setSelectTag(idx);
    }
  }

  return (
    <div className="list-title">
      <Breadcrumb sid={sid} />
      <p className="title">{sid==="coffee" ? "커피 캡슐" : "홈카페 레시피"}</p>
      <div className="tags">
        {tags.map(
          (tag, idx) => <Tag key={idx} className={idx===selectTag && "select"} onClick={handleClickTag}>{tag}</Tag>
        )}
      </div>
    </div>
  )
}
