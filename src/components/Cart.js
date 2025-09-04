import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { decreaseCartItem, deleteAllCart, deleteCartItem, increaseCartItem } from "./store";
import { numToPriceStr } from "../utils";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <p>장바구니</p>
      <div className="all-delete-btn">
        <button type="button" onClick={() => dispatch(deleteAllCart())}>전체 삭제</button>
      </div>
      {
        items.length > 0 
        ? <>
          <ul className="cart-list">
            {items.map((item) => <CartItem key={item.pid} item={item}/>)}
          </ul>
          <div className="total-price">
            <p>
              총&nbsp;&nbsp;&nbsp;{items.reduce((prev, cur) => prev + cur.count, 0)} 개&nbsp;
              <span>
                ({items.reduce((prev, cur) => prev + cur.info.capsule * cur.count, 0)} 캡슐)
              </span>              
              </p>
            <p>
              합계&nbsp;&nbsp;&nbsp;{numToPriceStr(items.reduce((prev, cur) => prev + cur.info.price * cur.count, 0))} 원
            </p>
            <button type="button">결제하기</button>
          </div>
        </>
        : <p>
          장바구니에 상품이 없습니다.
        </p>
      }
    </div>
  )
}

function CartItem(props) {
  const {pid, info, count} = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <li>
      <div className="cart-img" onClick={() => navigate("/coffee/"+pid)}>
        <img src={process.env.PUBLIC_URL+`/img/coffee/${info.img}`} alt={info.title} />
      </div>
      <p style={{width: "295px"}} onClick={() => navigate("/coffee/"+pid)}>
        {info.title}
        </p>
      <p onClick={() => navigate("/coffee/"+pid)}>{numToPriceStr(info.price)} 원</p>
      <div className="cart-num">
        <p>{count} <span>({count * info.capsule} 캡슐)</span></p>
        <div className="num-btns">
          <div onClick={() => dispatch(increaseCartItem(pid))}>
            <img src={process.env.PUBLIC_URL+"/img/icons/plus.png"} alt="+" />
          </div>
          <div onClick={() => dispatch(decreaseCartItem(pid))}>
            <img src={process.env.PUBLIC_URL+"/img/icons/minus.png"} alt="-" />
          </div>
        </div>
      </div>
      <p>{numToPriceStr(info.price * count)} 원</p>
      <div className="delete-btn" onClick={() => dispatch(deleteCartItem(pid))}>
        <img src={process.env.PUBLIC_URL+"/img/icons/close.png"} alt="삭제 버튼" />
      </div>
    </li>
  )
}