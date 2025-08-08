import React from "react"
import styled from "styled-components"

import coffees from "./data/coffees";
import recipes from "./data/recipes";

import Coffee from "./Coffee";
import Recipe from "./Recipe";

export default function Letter() {
  const data = {
    month: 7,
    recipe: [
      {
        recipe: "cafe-la-shower-v",
        coffee: "ice-leggero-v",
      },
      {
        recipe: "lychee-slush-coffee",
        coffee: "freddo-intenso",
      }
    ],
    interview: {
      interviewee: {
        img: "profile.avif",
        text: "이번 달 커피 레터 인터뷰는 스트릿 브랜드와의 룩북 작업으로 데뷔해 다양한 분야의 광고, 뮤직비디오 모델로 활동하고 있는 이현영님이 함께해 주셨습니다.\n현재 그녀는 트렌디한 메이크업을 자신만의 분위기로 소화하고, 건강한 라이프스타일을 소개하는 콘텐츠 크리에이터 리리영(@riri___young)으로 SNS에서 많은 팬을 보유하고 있죠.\n이달의 커피에 대한 그녀의 특별한 시선을 담은 인터뷰를 만나보세요.",
      },
      text: [
        {
          q: "Q1. 리리영님, 간단한 본인 소개 부탁드립니다.",
          a: "안녕하세요! 저는 크리에이터이자 인플루언서로 활동하고 있는 리리영이라고 합니다."
        },
        {
          q: "Q2. 사람들은 자신이 좋아하는 맛을 즐기기 위해 혹은 누군가와 함께 보내는 시간을 위해, 다양한 이유로 커피를 찾습니다. 리리영님에게 커피는 어떤 의미인가요?",
          a: "아이스 커피로 즐기기 좋은 커피라서 그런지 몰라도 정말 시원하고 맛있더라고요! 청량감이 특히 뛰어나서 점점 더워지고 있는 요즘 날씨에 딱이었어요. 부드러운 맛과 과일향이 누구에게든 호불호가 갈리지 않고 언제든지 확실하게, 시원하게 기분 좋아지는 맛이라고 생각합니다."
        },
        {
          q: "Q3. 이달의 커피 아이스 레제로는 향긋한 과일향과 산뜻한 청량감이 매력인 커피인데요, 리리영님이 모델로서 작업하신 콘텐츠들을 보면 톡톡 튀는 이미지 이면에서 본인만의 개성과 향이 또렷하게 느껴집니다. 이달의 커피와 닮은 구석이 있다고 생각되었는데, 리리영님은 이번 커피 어떠셨나요?",
          a: "아이스 커피로 즐기기 좋은 커피라서 그런지 몰라도 정말 시원하고 맛있더라고요! 청량감이 특히 뛰어나서 점점 더워지고 있는 요즘 날씨에 딱이었어요. 부드러운 맛과 과일향이 누구에게든 호불호가 갈리지 않고 언제든지 확실하게, 시원하게 기분 좋아지는 맛이라고 생각합니다."
        },
        {
          q: "Q4. 올 여름, 아이스 레제로 커피를 즐기며 함께 휴가를 보내고 싶은 장소나 사람이 있으신가요?",
          a: "저에게는 일상 속에서 혼자 커피를 마시는 순간도 휴가처럼 소중한 시간인데요, 아이스 레제로만큼은 사랑하는 친구들과 야외에서 즐기고 싶어요. 여름을 온전히 느끼면서 같이 시원하게 아이스 레제로 한 잔씩 마시며 시간을 보낸다면 그 자체가 휴가이자 힐링일 것 같아요."
        },
        {
          q: "Q5. 이 커피는 어떤 순간에 즐기기에 좋을까요? 또, 이 커피를 맛있게 즐기는 리리영님만의 팁이 있다면 알려주세요.",
          a: "아이스 레제로는 이른 아침보다는 점심 먹고 나른해지는 오후 시간에 마시니 좋더라고요. 특히 저는 나갈 준비를 하거나 일, 촬영할 때 마시면 집중도 잘되고 하루를 더 또렷하게 즐기면서 보내는 기분이 들어서 좋았어요. 비율은 적당한 크기의 컵에 얼음을 가득 넣고 아이스 레제로 1캡슐과 차가운 물 조금을 넣어주니 딱 좋았어요. 이건 정말 언제 먹어도 맛있는 아이스 비율! 조금 더 든든하게 마시고 싶을 때는 물 대신 오트 밀크를 넣어 보세요."
        }
      ],
    },
    book: {
      img: "book.avif",
      text: [
        "안녕하세요?\n저는 매달 네스프레소 고객 여러분께 ‘이달의 커피와 책’을 골라 소개하는 최인아책방 대표, 최인아입니다.\n저희가 추천하는 좋은 커피, 좋은 책과 함께하시면서 충만한 시간을 보내시면 좋겠습니다.",
        "제가 추천할 7월의 커피는 오리지널 프레도 인텐소입니다. 여름의 휴양지에서 아이스 커피가 당길 때, 그럴 때 최적의 커피가 바로 프레도 인텐소인데요, 더운 날 아이스 커피로 즐기시기 좋도록 분쇄도를 딱 맞춰 그라인딩 했고 다크 로스팅을 해 향도 진하고 강해요.",
        "프레도 인텐소를 마실 땐 어떤 책을 읽으면 좋을까요? 저의 픽은 바로 이 책입니다. 황선우 김하나, 두 작가가 함께 쓴『퀸즐랜드 자매로드』. 두 저자는 잡지사 에디터와 광고회사 카피라이터 출신으로 책을 쓰고 칼럼을 쓰며 방송을 진행하고 강연을 하는 등 전방위적으로 활동하고 있는 여성 작가들입니다. 두 작가는 ‘따로 또 같이’ 책을 쓰고 방송을 하며 여행도 하는데 『퀸즐랜드 자매로드』는 함께 호주를 여행하고 쓴 책입니다. 낯선 곳으로 떠나면 자신과는 다르게 사는 사람들을 만나 마치 거울에 자신의 모습을 비춰 보듯 그들의 모습에 자신의 삶을 견줘 보면서 자신을 새로 알아차리는 계기를 갖게 되는데, 이런 시간을 갖기에 제일 좋은 때가 바로 넉넉한 오프타임이 생기는 휴가 때인 것 같아요.\n황선우, 김하나 두 작가도 누구 못지않게 바쁘게 다양한 일을 하며 살다가 호주의 대자연에 안겨 평소 못해본 액티비티도 하고, 그저 바닷가에 누워 지나간 시간들을 반추하면서 이전에는 미처 하지 않았던 생각을 합니다. 물론 호주 사람들의 삶을 보면서 새로이 자극도 받고 영감도 받죠. 그들의 그런 느낌과 생각을 적은 문장 몇 개를 볼까요?", "〈낙원에서의 서핑〉 中\n\"반쯤 벗고 반쯤 걸친 웻수트에서 물을 뚝뚝 흘리면서 길을 걸어 다니는 사람들의 머리칼은 젖은 채로 헝클어져 있고, 살갗이 저마다의 그라데이션으로 그을려 웃는 입에서 빛이 난다. 많이 움직여 탄탄한 몸이고, 집요한 시선에서 자유로운 비키니 차림이다. 칼로리에 전전긍긍하며 관리한 몸보다는 바닷바람에 깎여나간 것처럼 터프하게 조각된 몸이다.\"", "〈아주 작은 마을이 품은 아주 큰 다양성〉 中\n\"어설프고 귀여워서 웃다가, 하도 웃어서 눈물이 났다. 눈물을 흘리다 보니 진짜로 우는 것 같기도 했다. 젊고 아름답고 균질한 존재들만이 무대에 오르고 매순간 엄격하게 평가받는 한국에서, 내가 가장 멀리 와 있다고 느낀 순간이었다. 꽃을 보러 왔다가 사람들을 봤다.\"", "두 작가는 호주 퀸즐랜드에서 열흘간의 보석 같은 시간을 보내고 각자의 느낌과 생각을 번갈아 가며 썼습니다. 같은 시간을 보냈어도 각자의 느낌과 생각은 사뭇 다르고 또 같은 생각이라도 개성껏 다른 문장으로 써냈습니다. 같은 듯 다른 취향 저격의 문장을 읽는 재미도 적지 않네요.", "퀸즐랜드의 강렬한 햇살과 시원한 바다, 자유롭고 생생한 감각이 가득 담긴 이 책을 읽다 보니 저도 아이스 커피가 당기는데요. 뜨거운 햇빛 아래 느긋하게 책장을 넘기며 마시는 커피는 깊고 진한 향을 가진 아이스커피가 제격이지요. 바로 그럴 때 프레도 인텐소가 가장 잘 어울립니다.\n다크 로스팅을 해 짙은 커피향을 머금은 프레도 인텐소를 에스프레소로 내려, 얼음을 가득 채운 잔에 담아 한 모금 들이켜면… 휴양지의 햇살과 바람까지도 함께 느껴지는 듯한 기분이 들 거예요. 상상만으로도 즐거운데요, 맛있는 커피도, 인사이트 많은 이번 책도 여러분의 휴가에 함께하면 좋겠습니다. 저는 다음 달에도 좋은 커피와 책으로 돌아오겠습니다."
      ]
    }
  }

  const DivideLine = styled.div`
    margin: 30px 0;
    border-top: 1px solid var(--sub-color);
  `

  return (
    <div className="letter">
      <div className="letter-title" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/letter/title.avif)`}}>
        <p>{data.month}월의 커피레터</p>
      </div>
      
      <p className="section-title">이달의 레시피</p>
      <MonthlyRecipe recipe={data.recipe} />
      <DivideLine />
      
      <p className="section-title">커피 인터뷰</p>
      <Interview interview={data.interview}/>
      <DivideLine />

      <p className="section-title">커피와 책</p>
      <Book book={data.book} />
    </div>
  )
}

function MonthlyRecipe({recipe}) {
  return (
    <section className="monthly-recipe">
      <Coffee coffee={coffees.find((c) => c.pid === recipe[0].coffee)}/>
      <Recipe recipe={recipes.find((r) => r.pid === recipe[0].recipe)} />
      <Recipe recipe={recipes.find((r) => r.pid === recipe[1].recipe)} />
      <Coffee coffee={coffees.find((c) => c.pid === recipe[1].coffee)}/>
    </section>
  )
}

function Interview({interview}) {
  return (
    <section className="interview">
      <div className="interview-profile">
        <div className="profile-img">
          <img src={process.env.PUBLIC_URL+"/img/letter/"+interview.interviewee.img} alt="인터뷰 프로필" />
        </div>
        <p>
          {interview.interviewee.text.split("\n").reduce((prev, cur) => <>{prev}<br/>{cur}</>)}
        </p>
      </div>
      {
        interview.text.map((qna) => 
          <div style={{marginBottom: "20px"}}>
            <p>{qna.q}</p>
            <p>{qna.a}</p>
          </div>
        )
      }
    </section>
  )
}

function Book({book}) {
  return (
    <section className="book">
      <div className="book-img">
        <img src={process.env.PUBLIC_URL+"/img/letter/"+book.img} alt="책 일러스트" />
      </div>
      {
        book.text.map((paragraph) => 
          <div style={{marginBottom: "20px"}}>
            {paragraph.split("\n").reduce((prev, cur) => <>{prev}<br/>{cur}</>)}
          </div>
        )
      }
    </section>
  )
}