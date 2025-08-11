import React from "react"
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { hideModal } from "./store";

export default function MyModal() {
  const show = useSelector((state) => state.modal.show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Button = styled.button`
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    background-color: var(--sub-color);
    font-size: 14px;

    &:hover {
      background-color: var(--sub-hover);
    }
  `

  const PointButton = styled(Button)`
    background-color: var(--point-color);
    color: white;

    &:hover {
      background-color: var(--point-hover);
    }
  `

  return (
    <Modal show={show} onHide={() => dispatch(hideModal())}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        상품이 장바구니에 추가되었습니다.
      </Modal.Body>
      <Modal.Footer style={{border: "none"}}>
        <Button onClick={() => dispatch(hideModal())}>
          닫기
        </Button>
        <PointButton 
        onClick={() => {
          dispatch(hideModal());
          navigate("/cart");
        }}>
          장바구니로 이동
        </PointButton>
      </Modal.Footer>
    </Modal>
  )
}
