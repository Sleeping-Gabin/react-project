import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function VisualMain() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const swiper = useRef(null);

  const SlideStyle = [
    {
      backgroundImage: `url(${process.env.PUBLIC_URL+"/img/visual_main_01.jpg"})`
    },
    {
      paddingTop: "170px",
      backgroundImage: `url(${process.env.PUBLIC_URL+"/img/visual_main_02.jpg"})`,
      textAlign: "center"
    },
    {
      backgroundImage: `url(${process.env.PUBLIC_URL+"/img/visual_main_03.jpg"})`,
    }
  ]

  const EnterBtn = styled.button`
    margin-top: 30px;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 15px;
    background: none;
    color: black;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `

  const style = {
    width: "var(--swiper-navigation-size)",
    height: "var(--swiper-navigation-size)",
    padding: "30px",
    borderRadius: "50%",
    backgroundColor: "var(--point-color)",
    color: "white",
    opacity: show ? "1" : "0",
  }

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <Swiper className="visual-main"
        ref={swiper}
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        loop
        effect={"fade"}
        speed={500}
        onInit={(s) => {
          swiper.current = s;
        }}
      >
        <SwiperSlide style={SlideStyle[0]}>
          <p style={{fontSize: "20px"}}>
            네스프레소 X 블루보틀
          </p>
          <p style={{fontSize: "32px", marginBottom: "10px"}}>
            놀라 스타일 블렌드 출시!
          </p>
          <p>치커리 향이 가득한 놀라 스타일 블렌드로<br/>올 여름 레트로 무드를 완성해 보세요</p>
          <EnterBtn onClick={() => navigate("/coffee/nola-blend-v")}>자세히 보기</EnterBtn>
        </SwiperSlide>

        <SwiperSlide style={SlideStyle[1]}>
          <p style={{fontSize: "20px"}}>
            네스프레소 클럽 회원으로 가입하고<br/>풍성한 혜택과 다양한 기회를 놓치지 마세요!
          </p>
          <EnterBtn>지금 가입하기</EnterBtn>
        </SwiperSlide>

        <SwiperSlide style={SlideStyle[2]}>
          <p style={{fontSize: "32px", marginBottom: "10px"}}>
              신규 고객 웰컴 기프트 증정
          </p>
          <p style={{marginBottom: "5px"}}>
            나만의 취향대로 커피를 구매하고, 추가 사은품도 받아보세요.
          </p>
          <p>오리지널 커피 150 캡슐 또는 버츄오 커피 100 캡슐 이상 담으시면<br/>최대 41,000원 상당의 웰컴 기프트를 드립니다.</p>
          <EnterBtn onClick={() => navigate("/list/coffee")}>커피 구매하기</EnterBtn>
        </SwiperSlide>
        <span
          style={style}
          className="swiper-button-prev"
          onClick={() => swiper.current.slidePrev()} 
        />
        <span
          style={style}
          className="swiper-button-next"
          onClick={() => swiper.current.slideNext()} 
        />
      </Swiper>
    </div>
  )
}