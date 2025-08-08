import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";

export default function Footer() {
  return (
    <div className="footer-outer">
      <footer className="footer">
        <nav className="footer-nav" style={{overflow: "hidden"}}>
          <ul style={{float: "left"}}>
            <li>판매이용약관</li>
            <li>개인정보처리방침</li>
            <li>쿠키</li>
            <li>고객지원</li>
          </ul>
          <ul className="sns" style={{float: "right"}}>
            <li><img src={process.env.PUBLIC_URL+"/img/icons/instagram.png"} alt="인스타" /></li>
            <li><img src={process.env.PUBLIC_URL+"/img/icons/youtube.png"} alt="유튜브" /></li>
            <li><img src={process.env.PUBLIC_URL+"/img/icons/x.png"} alt="x" /></li>
            <li><img src={process.env.PUBLIC_URL+"/img/icons/facebook.png"} alt="페이스북" /></li>
            <li><img src={process.env.PUBLIC_URL+"/img/icons/pinterest.png"} alt="핀터레스트" /></li>
          </ul>
        </nav>

        <p className="company">
          <span>상호 : 네슬레코리아 유한책임회사</span>
          <span>대표자 : 토마스제프리카소</span>
          <span>사업자등록번호 : 110-86-10100</span>
          <span>통신판매업신고 : 2014-서울서대문-0247</span>
          <span>채무지급보증안내</span>
          <span>정보보호관기체계</span>
          <span>대표번호 : 080-734-1111</span>
          <span>이메일 : club.korea@nespresso.com</span>
          <span>주소 : 서울시 서대문구 충정로70 웨스트게이트타워 10, 12, 16층</span>
        </p>

        <div className="copyright">
          <a href="https://www.nespresso.com/kr/ko">
            <Logo className="logo"/>
          </a>
          <p>Nestlé Nespresso S.A. 2025</p>
        </div>
      </footer>
    </div>
  )
} 
