const recipes = [
  
  {
    pid: "ruby-orange-bianco-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "ruby_orange_bianco.avif",
      title: "루비 오렌지 비앙코",
      tags: ["마스터 오리진"],
    },
    detail:  {
      img: "ruby_orange_bianco_detail.avif",
      intro: "달콤한 리프레시가 필요한 순간, 레드 허니 가공으로 달콤한 엘살바도르 커피에매혹적인 루비 빛깔을 더해 즐겨보세요.",
      coffee: {
        pid: "el-salvador-v",
        img: "el_salvador.avif",
        title: "엘살바도르",
      },
      ingredients: ["엘살바도르 캡슐 1개", "오렌지청 40g", "히비스커스 농축액 1ml", "우유 50ml", "얼음 2조각(60g)"],
      order: ["오렌지청 40g과 히비스커스 농축액 1ml를 넣고 잘 섞은 뒤 커다란 얼음 2조각(60g)을 넣어주세요.", "그 위로 에어로치노로 만든 밀크폼 50ml를 부은 뒤 엘살바도르를 아이스&라테 모드*로 80ml 추출해 40ml만 한 컵에 담아주세요.", "밀크 폼 위에 크랜베리 파우더를 뿌리고 오렌지 칩을 올려 완성해 주세요!"]
    }
  }, 
  {
    pid: "lychee-slush-coffee",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "lychee_coffee_slush.JPG",
      title: "리치 슬러시 커피",
      tags: ["아이스"],
    },
    detail:  {
      img: "lychee_coffee_slush_detail.avif",
      intro: "아라비카 블렌드의 고소한 곡물향과 우디향을 품고 있는 다크 로스팅 커피입니다. 얼음을 슬러시 형태로 갈고, 리치 시럽을 더해 햇볕 아래서 마시기 좋은 최고의 커피를 만나 보세요.",
      coffee: {
        pid: "freddo-intenso",
        img: "freddo_intenso.avif",
        title: "프레도 인텐소"
      },
      ingredients: ["프레도 인텐소", "얼음 200g", "리치 시럽 70g"],
      order: ["블렌더에 얼음 200g과 리치 시럽 70g을 갈아줍니다.", "프레도 인텐소를 2캡슐 추출합니다.", "버츄오 머그 스몰에 미리 갈아 놓은 얼음의 절반을 넣어줍니다.", "그 위로 추출한 커피의 절반을 넣고 얼음을 다시 추가합니다.", "마지막으로 남은 커피를 추가하여 완성하세요."]
    }
  },
  {
    pid: "salted-caramel-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "salted_caramel_latte.avif",
      title: "솔티드 캐러멜 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "salted_caramel_latte_detail.avif",
      intro: "색다르게 즐기는 아이스 밀크 레시피",
      coffee: {
        pid: "bianco-piccolo-v",
        img: "bianco_piccolo.avif",
        title: "비앙코 피콜로 포 밀크",
      },
      ingredients: ["비앙코 피콜로 포 밀크 캡슐 1개", "캐러멜 시럽", "우유 40ml", "얼음 4조각 (조각 당 30g)"," 굵은 소금"],
      order: ["버츄오 그랑 룽고 컵 가장자리를 따라 캐러멜 시럽을 드리즐 한 뒤 컵의 2/3 이상 얼음으로 채워주세요.", "에어로치노를 활용해 만든 콜드 밀크 폼(40ml)와 에스프레소로 추출한 커피를 차례대로 부어주세요.", "캐러멜 시럽을 한 번 더 드리즐 하고 굵은 소금을 뿌려주세요."]
    }
  },
  {
    pid: "tangerine-espresso-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "tangerine_espresso.avif",
      title: "감귤 에스프레소",
      tags: ["에스프레소"],
    },
    detail:  {
      img: "tangerine_espresso_detail.avif",
      intro: "여름휴가, 집에서도 색다르게 즐기는 아이스 레시피로 기분전환 어떠세요?",
      coffee: {
        pid: "voltesso-v",
        img: "voltesso.avif",
        title: "볼테소"
      },
      ingredients: ["볼테소 캡슐 1개", "감귤주스 40ml", "얼음 4조각 (조각 당 30g)"],
      order: ["버츄오 그랑 룽고 컵에 2/3 이상 얼음으로 채우세요.", "감귤주스(40ml)와 에스프레소로 추출한 커피를 차례대로 더해 청량감 넘치는 ‘감귤 에스프레소’를 완성하세요."]
    }
  },
  {
    pid: "floating-affogato-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "floating_affogato.avif",
      title: "플로팅 아포가토",
      tags: ["더블 에스프레소"],
    },
    detail:  {
      img: "floating_affogato_detail.avif",
      intro: "아이스크림에 진한 더블 에스프레소와 약간의 우유를 더해 달콤 쌉싸름한 코코아와섬세한 바닐라향이 풍부하게 피어올라 조화롭게 즐길 수 있는 아포가토 레시피",
      coffee: {
        pid: "double-espresso-scuro-v",
        img: "double_espresso_scuro.avif",
        title: "더블 에스프레소 스쿠로"
      },
      ingredients: ["버츄오 더블 에스프레소 스쿠로 캡슐 1개", "바닐라 아이스크림 1 스쿱", "우유 30~40 ml", "(기호에 따라 코코아 파우더, 초코 시럽 추가 가능)", "버츄오 더블 에스프레소 컵"],
      order: ["버츄오 더블 에스프레소 컵에 바닐라 아이스크림 1 스쿱을 넣고 그 위로 우유 30~40ml(아이스크림의 1/3정도) 를 부어 아이스크림이 우유 위로 살짝 떠오르게 해주세요.", "다른 컵에 버츄오 더블 에스프레소 스쿠로 커피(80 ml)를 추출한 뒤 아이스크림이 담긴 컵 위에 부어 주세요."]
    }
  },
  {
    pid: "honey-oat-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "honey_oat_latte.avif",
      title: "허니 오트 라테",
      tags: ["더블 에스프레소"],
    },
    detail:  {
      img: "honey_oat_latte_detail.avif",
      intro: "달콤한 풍미의 더블 에스프레소 커피에 고소한 귀리 음료를 더해 더 달콤하게, 더 고소하게 즐기는 라테 레시피",
      coffee: {
        pid: "double-espresso-dolce-v",
        img: "double_espresso_dolce.avif",
        title: "더블 에스프레소 돌체"
      },
      ingredients: ["버츄오 더블 에스프레소 돌체 캡슐 1개", "귀리 음료 120 ml", "꿀 10 g", "(기호에 따라 시나몬 파우더 추가 가능)", "바리스타 카푸치노 컵 미디엄", "에어로치노4"],
      order: ["에어로치노에 귀리 음료 120 ml를 붓고 데워주세요.", "바리스타 카푸치노 컵에 꿀 10 g을 담고 그 위로 더블 에스프레소 돌체 커피(80 ml)를 추출한 뒤 잘 저어서 섞어주세요.", "꿀과 잘 섞인 커피 위에 1.에 준비한 귀리 음료를 부어서 완성해 주세요."]
    }
  },
  {
    pid: "honey-black",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "honey_black.avif",
      title: "허니 블랙",
      tags: ["마스터 오리진"],
    },
    detail:  {
      img: "honey_black_detail.jfif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "nicaragua",
        img: "nicaragua.avif",
        title: "니카라과"
      },
      ingredients: ["니카라과 캡슐 1개", "꿀 20ml"],
      order: ["노마드 트래블 머그 터치에 꿀(20ml)를 부어주세요.", "그 위에 룽고(110ml)로 1개의 캡슐을 추출합니다."]
    }
  },
  {
    pid: "grapefruit-espresso-icetea",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "grapefruit_espresso_icetea.avif",
      title: "자몽 에스프레소 아이스티",
      tags: ["마스터 오리진"],
    },
    detail:  {
      img: "grapefruit_espresso_icetea_detail.avif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "colombia",
        img: "colombia.avif",
        title: "콜롬비아"
      },
      ingredients: ["콜롬비아 캡슐 1개", "얼음 6조각 (조각 당 30g)", "자몽맛 아이스티 파우더 2봉", "자몽 조각"],
      order: ["뷰 레시피 글래스에 2/3을 얼음으로 채워줍니다.", "자몽맛 아이스티 파우더 2봉으로 만든 자몽 아이스티 (150ml)를 부어줍니다.", "그 위에 에스프레소 (40ml)로 추출합니다.", "자몽 등으로 상큼하게 가니쉬 해보세요."]
    }
  },
  {
    pid: "coffee-sour",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "coffee_sour.avif",
      title: "커피 사워",
      tags: ["오리지널 콜렉션"],
    },
    detail:  {
      img: "coffee_sour_detail.avif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "cosi",
        img: "cosi.avif",
        title: "코지"
      },
      ingredients: ["코지 캡슐 1개", "레몬 4분의 1", "탄산수 20ml", "얼음 6조각 (조각 당 30g)"],
      order: ["뷰 레시피 글라스에 얼음으로 가득 채웁니다.", "에스프레소(40ml)로 추출합니다.", "레몬 웨지(4분의 1 사이즈)로 레몬즙을 내어주고, 그 위에 탄산수(20ml)를 부어줍니다."]
    }
  },
  {
    pid: "dolce-americano-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "dolce_americano.JPG",
      title: "돌체 아메리카노",
      tags: ["더블 에스프레소"],
    },
    detail:  {
      img: "dolce_americano_detail.avif",
      intro: "부드럽고 감미로운 블랙커피로 또는 밀크 폼을 더해 달콤한 카푸치노로, 어떤 레시피로도 만족스럽게 즐길 수 있습니다.",
      coffee: {
        pid: "double-espresso-dolce-v",
        img: "double_espresso_dolce.avif",
        title: "더블 에스프레소 돌체"
      },
      ingredients: ["버츄오 더블 에스프레소 돌체 캡슐 1개", "따뜻한 물 120ml"],
      order: ["글라스 위에 더블 에스프레소 돌체를 80ml로 추출합니다.", "그 위에 따듯한 물을 110~120ml 부어주세요.", "호두 정과 등과 페어링하여 즐겨보세요."]
    }
  },
  {
    pid: "ice-dolce-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "ice_dolce_latte.avif",
      title: "아이스 돌체 라테",
      tags: ["더블 에스프레소"],
    },
    detail:  {
      img: "ice_dolce_latte_detail.avif",
      intro: "달콤한 풍미의 더블 에스프레소 커피에 연유와 우유, 얼음 등을 더해 더 달콤하게 그리고 시원하게 즐기는 아이스 라테 레시피",
      coffee: {
        pid: "double-espresso-dolce-v",
        img: "double_espresso_dolce.avif",
        title: "더블 에스프레소 돌체"
      },
      ingredients: ["버츄오 더블 에스프레소 돌체 캡슐 1개", "우유 50 ml", "연유 20 g", "휘핑 크림 10 g", "바닐라 시럽 5 g", "얼음", "뷰 머그 컵"],
      order: ["뷰 머그 컵에 연유 20 g, 휘핑 크림 10 g, 바닐라 시럽 5 g, 우유 50 ml를 넣고 스푼으로 잘 섞어주세요.", "그 위로 더블 에스프레소 돌체 커피(80 ml)를 추출해 주세요.", "기호에 맞게 얼음을 적당량 더해주세요."]
    }
  },
  {
    pid: "ice-piccolo-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "ice_piccolo_latte.avif",
      title: "아이스 피콜로 라테",
      tags: ["에스프레소"],
    },
    detail:  {
      img: "ice_piccolo_latte_detail.avif",
      intro: "나른한 오후, 나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "altissio-decaffeinato-v",
        img: "altissio_decaffeinato.avif",
        title: "알티시오 디카페나토",
      },
      ingredients: ["알티시오 디카페나토 1캡슐", "우유 60ml"],
      order: ["버츄오 룽고 컵에 큰 얼음 2-3조각을 넣어주세요.", "우유 60ml을 넣고, 위에 '알티시오'를 40ml 로 추출하여 완성합니다.", "달콤한 디저트와 함께 즐겨보세요"]
    }
  },
  {
    pid: "sweet-caramel-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "sweet_caramel_latte.avif",
      title: "연유 캐러멜 라테",
      tags: ["그랑 룽고"],
    },
    detail:  {
      img: "sweet_caramel_latte_detail.avif",
      intro: "달콤함을 더하는 라테를 아웃도어에서도 즐겨보세요.",
      coffee: {
        pid: "arondio-v",
        img: "arondio.avif",
        title: "아론디오"
      },
      ingredients: ["아론디오 캡슐 1개 (150 ml)", "연유 20ml", "캐러멜 큐브 1개"],
      order: ["'노마드 트래블 머그 스몰'에 연유(20ml)와 캐러멜 큐브 1개를 넣으세요.", "그랑룽고(150ml)로 추출하여 '연유 캐러멜 라테'를 완성하세요."]
    }
  },
  {
    pid: "peppermint-americano-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "peppermint_americano.avif",
      title: "페퍼민트 아메리카노",
      tags: ["그랑 룽고"],
    },
    detail:  {
      img: "peppermint_americano_detail.avif",
      intro: "쌀쌀한 아침을 깨우는 따듯한 룽고 커피",
      coffee: {
        pid: "inizio-v",
        img: "inizio.avif",
        title: "이니지오",
      },
      ingredients: ["이니지오 캡슐 1개 (150 ml)", "페퍼민트 티백", "페퍼민트 잎"],
      order: ["버츄오 그랑 룽고 잔에 페퍼민트 티백을 넣으세요.", "그랑룽고(150ml)로 추출하고 페퍼민트 잎 등으로 가니쉬 하세요."]
    }
  },
  {
    pid: "simple-mazagran-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "simple_mazagran.avif",
      title: "심플 마자그랑",
      tags: ["아이스"],
    },
    detail:  {
      img: "simple_mazagran_detail.avif",
      intro: "나른한 주말 오후를 산뜻하게",
      coffee: {
        pid: "inizio-v",
        img: "inizio.avif",
        title: "이니지오",
      },
      ingredients: ["이니지오 1캡슐", "얼음 120g", "케인슈가 시럽 30g", "레몬즙 30g", "탄산수 60g"],
      order: ["바리스타 레시피 글라스 라지에 레몬즙 30g, 케인슈가 시럽 30g, 탄산수 60g을 넣은뒤 잘 저어주세요.", "글라스에 얼음 120g을 넣어주세요.", "커피를 추출한 뒤 80ml의 양만큼 글라스에 붓고, 기호에 따라 건레몬칩으로 상큼하게 가니쉬하여 완성합니다."]
    }
  },
  {
    pid: "choco-banana-frappe-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "choco_banana_frappe.avif",
      title: "초코바나나 프라페",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "choco_banana_frappe_detail.avif",
      intro: "초콜릿향 커피로 풍요로운 오후를 즐겨보세요",
      coffee: {
        pid: "rich-chocolate-v",
        img: "rich_chocolate.avif",
        title: "리치 초콜릿향 커피",
      },
      ingredients: ["리치 초콜릿 캡슐 1개", "으깬 바나나 1/2개", "얼음 9조각 (조각 당 30g)", "우유 80ml", "초콜릿 소스 20g", "바나나 슬라이스"],
      order: ["바리스타 레시피 메이커에 아이스 &라테 모드로 추출한 더블에스프레소(80ml) 커피를 부어주세요.", "으깬 바나나 반개, 얼음조각 9개, 우유(80ml), 초콜릿 소스(20g)를 넣어주세요.", "'아이스 프라페 모드'를 작동해 바리스타 레시피 스몰 잔에 완성된 커피를 붓고 바나나 슬라이스로 완성합니다."]
    }
  },
  {
    pid: "pistachio-frappe-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "pistachio_frappe.avif",
      title: "프라페와 여름 안에서",
      tags: ["아이스"],
    },
    detail:  {
      img: "pistachio_frappe_detail.avif",
      intro: "고소한 피스타치오와 바닐라 프라페의 달콤한 만남",
      coffee: {
        pid: "ice-pistachio-vanilla-v",
        img: "ice_pistachio_vanilla.avif",
        title: "아이스 피스타치오 바닐라향 커피",
      },
      ingredients: ["피스타치오 바닐라향 커피", "바닐라향 프라페 1팩", "피스타치오 스프레드 10g", "피스타치오 분태 한 줌", "다크초코 소스 10g"],
      order: ["다크초코 소스와 피스타치오 분태를 활용해 잔을 리밍해 줍니다.", "잔 안쪽에 피스타치오 스프레드를 펴 발라줍니다.", "얼린 프라페 한 팩을 잔에 넣어주세요.", "그 위에 커피를 추출한 뒤, 잘 저어 드세요."]
    }
  },
  {
    pid: "pistachio-world-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "pistachio_world.avif",
      title: "바다의 피스타치오 왕자",
      tags: ["아이스"],
    },
    detail:  {
      img: "pistachio_world_detail.avif",
      intro: "이색적으로 즐기는 피스타치오 바닐라 아이스크림",
      coffee: {
        pid: "ice-pistachio-vanilla-v",
        img: "ice_pistachio_vanilla.avif",
        title: "아이스 피스타치오 바닐라향 커피",
      },
      ingredients: ["피스타치오 바닐라향 커피", "바닐라향 프라페 1팩", "피스타치오 스프레드 10g", "피스타치오 분태 한 줌", "피스마니에 피스타치오 한 줌"],
      order: ["커피를 추출 후 상온의 프라페와 섞어주세요.", "아이스 트레이에 담아 8시간 이상 얼려주세요.", "디저트 보울에 완성된 아이스크림을 넣고, 피스타치오 스프레드 5g를 올려주세요.", "피스마니에를 풍성하게 찢어 올려주고, 피스타치오 분태를 뿌려 완성합니다."]
    }
  },
  {
    pid: "maple-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "maple_latte.avif",
      title: "메이플 라테",
      tags: ["에스프레소"],
    },
    detail:  {
      img: "maple_latte_detail.avif",
      intro: "스파이시향 커피를 다양한 밀크 레시피로 즐기는 법!",
      coffee: {
        pid: "diavolitto-v",
        img: "diavolitto.avif",
        title: "디아볼리토",
      },
      ingredients: ["디아볼리토 캡슐 1개", "우유 120ml", "메이플 시럽 20g"],
      order: ["우유(120ml)와 메이플 시럽(20g)을 에어로치노에 넣고 라테 폼 모드로 밀크 폼을 만듭니다.", "버츄오 그랑룽고 컵에 에스프레소(40ml)로 추출한 뒤, 그 위에 완성된 밀크 폼을 추가하여 ‘메이플 라테’를 완성하세요."]
    }
  },
  {
    pid: "cafe-salentino",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "cafe_salentino.avif",
      title: "카페 살렌티노",
      tags: ["월드 익스플로레이션"],
    },
    detail:  {
      img: "cafe_salentino_detail.avif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "istanbul",
        img: "istanbul.avif",
        title: "이스탄불"
      },
      ingredients: ["이스탄불 캡슐 1개", "아몬드 밀크 80ml", "얼음 6조각 (조각 당 30g)"],
      order: ["뷰 레시피 글래스에 2/3을 얼음으로 채워주세요.", "아몬드 밀크 (80ml)를 부어주세요.", "그 위에 에스프레소 (40ml)로 추출하여 완성합니다."]
    }
  },
  {
    pid: "fortado-decaffeinato-grand-lungo-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "fortado_decaffeinato_grand_lungo.avif",
      title: "포르타도 디카페나토 그랑룽고",
      tags: ["그랑 룽고"],
    },
    detail:  {
      img: "fortado_decaffeinato_grand_lungo_detail.avif",
      intro: "강한 로스팅향의 디카페인 커피로 식사 후 모두가 잊지 못할 네스프레소 커피 모먼트를 즐겨보세요.",
      coffee: {
        pid: "fortado-decaffeinato-v",
        img: "fortado_decaffeinato.avif",
        title: "포르타도 디카페나토",
      },
      ingredients: ["포르타도 디카페나토 캡슐 1개 (150 ml)", "밀크 초콜릿 솔티드 캐러멜"],
      order: ["버츄오 그랑 룽고 컵에 따뜻한 그랑룽고(150ml)로 추출하세요.", "밀크 초콜릿 솔티드 케러멜과 함께 즐기세요."]
    }
  },
  {
    pid: "cranberry-espresso-tonic-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "cranberry_espresso_tonic.avif",
      title: "크렌베리 에스프레소 토닉",
      tags: ["머그"],
    },
    detail:  {
      img: "cranberry_espresso_tonic_detail.jfif",
      intro: "열대야를 이겨내는 방법, 디카페인 커피로 부담없이 저녁에도 아아를 즐기는 색다른 방법을 소개합니다.",
      coffee: {
        pid: "melozio-decaffeinato-v",
        img: "melozio_decaffeinato.avif",
        title: "멜로지오 디카페나토",
      },
      ingredients: ["멜로지오 디카페나토 캡슐 1개 (230 ml)", "얼음 4조각(조각 당 30g)", "크랜베리 주스 40ml", "토닉워터 40ml"],
      order: ["버츄오 그랑 룽고 컵에 크랜베리 주스 40ml를 붓고 얼음을 더해 컵의 2/3 높이까지 채워주세요.", "그 위로 토닉워터 40ml 와 아이스 & 라테 모드*로 추출한 멜로지오 디카페나토 80ml를 차례대로 부어주세요.", "완성된 커피를 잘 저어서 오후 시간에도 부담없는 크렌베리 에스프레소 토닉을 즐겨보세요."]
    }
  },
  {
    pid: "coffe-sour-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "solelio_coffee_sour.avif",
      title: "솔레리오 커피 사워",
      tags: ["머그"],
    },
    detail:  {
      img: "solelio_coffee_sour_detail.jfif",
      intro: "시트러스향의 상큼함과 기분좋은 산미를 담아 산뜻하고 청량한 무드를 닮은 커피를 만나보세요",
      coffee: {
        pid: "solelio-v",
        img: "solelio.avif",
        title: "솔레리오",
      },
      ingredients: ["솔레리오 캡슐 1개 (230 ml)", "얼음 6조각 (조각 당 30g)", "레몬 1/4 조각", "쉬크르 루(황설탕) 1 스틱"],
      order: ["리빌 콜드 커피 글라스에 가득 얼음을 채워주세요.", "얼음이 가득 담긴 컵에 솔레리오 커피를 아이스 & 라테 모드*로 80ml 추출해주세요.", "그 위로 레몬 1/4 조각의 즙을 내어 담고 쉬크르 루(황설탕) 1 스틱을 더해주세요.", "완성된 커피를 잘 저어서 새콤달콤한 사워 커피(Sour coffee)로 색다른 커피 모먼트를 즐겨보세요!"]
    }
  },
  {
    pid: "sweet-salty-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "sweet_salty_latte.avif",
      title: "단짠라테",
      tags: ["마스터 오리진"],
    },
    detail:  {
      img: "sweet_salty_latte_detail.avif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "costarica-v",
        img: "costarica.avif",
        title: "코스타리카",
      },
      ingredients: ["코스타리카 캡슐 1개", "우유 120ml", "연유 15g", "핑크솔트"],
      order: ["연유 15g 위에 커피 아이스&라테 모드*로 40ml 추출해주세요.", "우유 120ml 로 우유 폼 만들어서 올려주세요.", "핑크 솔트를 한 꼬집 솔솔 뿌려주세요."]
    }
  },
  {
    pid: "mixed-grain-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "mixed_grain_latte.avif",
      title: "미숫가루 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "mixed_grain_latte_detail.avif",
      intro: "우유와 함께 즐기기 좋은 밀크 레시피",
      coffee: {
        pid: "bianco-doppio-v",
        img: "bianco_doppio.avif",
        title: "비앙코 도피오 포 밀크",
      },
      ingredients: ["비앙코 도피오 포 밀크 캡슐 1개", "미숫가루 15g", "케인 슈가 시럽 30g", "귀리 음료 120ml", "현미 시리얼 토핑"],
      order: ["더블 에스프레소(80ml)로 추출한 커피에 미숫가루(15g)과 케인 슈가 시럽(30g)을 더해 잘 섞어주세요.", "귀리 음료(120ml)를 에어로치노4로 카푸치노 폼을 만들어 준 뒤 버츄오 머그 컵에 부어 주세요.", "커피를 부어주고 기호에 따라 현미 시리얼 토핑을 얹어주세요."]
    }
  },
  {
    pid: "pink-pepper-mocka-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "pink_pepper_mocka.avif",
      title: "핑크 페퍼 모카",
      tags: ["에스프레소"],
    },
    detail:  {
      img: "pink_pepper_mocka_detail.jfif",
      intro: "홀리데이 시즌 사랑하는 사람들과 함께하는 커피 타임",
      coffee: {
        pid: "il-caffe-v",
        img: "il_caffe.avif",
        title: "일카페",
      },
      ingredients: ["일카페 캡슐 1개", "베르가모트&핑크페퍼 다크 초콜릿 4개", "우유 120ml", "생크림", "코코아 파우더 or 초콜릿"],
      order: ["바리스타 레시피 메이커에 베르가모트 &핑크 페퍼 다크초콜릿 4개를 4등분 하여 넣어주고, 그 위에 에스프레소(40ml)를 추출해 주세요.", "커피 위에 우유(120ml)를 부어 주고 '모카' 모드를 작동하세요.", "버츄오 그랑룽고 컵에 붓고 생크림을 더해 ‘핑크 페퍼 모카’를 완성합니다."]
    }
  },
  {
    pid: "matcha-latte",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "matcha_latte.avif",
      title: "말차 라테",
      tags: ["마스터 오리진"],
    },
    detail:  {
      img: "matcha_latte_detail.avif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "indonesia",
        img: "indonesia.avif",
        title: "인도네시아"
      },
      ingredients: ["인도네시아 캡슐 1개", "말차 가루 30g", "우유 50ml", "얼음 4조각 (조각 당 30g)"],
      order: ["뷰 카푸치노 컵에 말차가루(30g)을 되직하게 녹여 줍니다.", "우유 (50ml)와 얼음을 넣습니다.", "그 위에 에스프레소(40ml)로 추출하여 완성합니다."]
    }
  },{
    pid: "iced-oat-caramel-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "iced_oat_caramel_latte.avif",
      title: "아이스 오트 캐러멜 라떼",
      tags: ["아이스",],
    },
    detail:  {
      img: "iced_oat_caramel_latte_detail.avif",
      intro: "캐러멜 시럽과 귀리 음료가 조화로운 달콤한 레시피",
      coffee: {
        pid: "ice-forte",
        img: "ice_forte.avif",
        title: "아이스 포르테"
      },
      ingredients: ["버츄오 아이스 포르테 캡슐 1개 (230 ml)", "얼음 7조각 (조각 당 30 g)", "귀리 음료 80 ml", "캐러멜 시럽 20 ml", "신선한 무화과 조각 (생략 가능)"],
      order: ["버츄오 알토 컵에 얼음 7조각, 캐러멜 시럽 20 ml, 귀리 음료 80 ml를 넣고 잘 섞어줍니다.", "그 위에 커피를 머그 사이즈로 추출합니다.", "신선한 무화과 조각으로 장식하여 완성합니다."]
    }
  },  
  {
    pid: "cafe-la-shower-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "cafe_la_shower.JPG",
      title: "카페 라 샤워",
      tags: ["아이스"],
    },
    detail:  {
      img: "cafe_la_shower_detail.avif",
      intro: "라이트 로스팅한 에티오피아산 아라비카의 섬세한 청량감과 인도네시아산 아라비카의 균형 잡힌 맛이 조화를 이루며 과일향과 기분 좋은 산미가 돋보이는 아이스 커피입니다. 레몬즙과 사이다를 더해 상큼하게 즐겨 보세요.",
      coffee: {
        pid: "ice-leggero-v",
        img: "ice_leggero.avif",
        title: "아이스 레제로"
      },
      ingredients: ["아이스 레제로", "얼음 200g", "레몬즙 20g", "사이다 80g", "레몬칩 1개"],
      order: ["바리스타 레시피 글라스 스몰에 레몬즙 20g, 사이다 80g을 넣어주세요.", "글라스에 얼음 200g을 넣고 아이스 레제로 1캡슐을 추출합니다.", "그 위에 레몬칩을 올려 가니쉬합니다."]
    }
  }, 
  {
    pid: "coconut-frappe-colada",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "coconut_frappe_colada.JPG",
      title: "해변의 코코넛 여인",
      tags: ["아이스"],
    },
    detail:  {
      img: "coconut_frappe_colada_detail.avif",
      intro: "피나콜라다 스타일의 부드럽고 상큼한 커피 목테일",
      coffee: {
        pid: "ice-coconut-vanilla",
        img: "ice_coconut_vanilla.avif",
        title: "아이스 코코넛 바닐라향 커피",
      },
      ingredients: ["아이스 코코넛 바닐라향 커피 1캡슐", "바닐라향 프라페 1팩", "파인애플 프룻 믹스 15g", "코코넛 밀크 50g", "코코넛 가루 한 줌", "파인애플 슬라이스 1개"],
      order: ["잔에 파인애플 프룻믹스 15g을 넣어줍니다.", "얼린 프라페 한 팩을 잔에 넣어줍니다.", "코코넛 밀크 50g을 잔에 부어주세요.", "그 위에 에스프레소 40ml로 2캡슐 추출해 주세요.", "코코넛 가루와 파인애플 한조각을 가니쉬하여 완성합니다."]
    }
  },
  {
    pid: "tiramisu-latte",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "tiramisu_latte.avif",
      title: "티라미수 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "tiramisu_latte_detail.avif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "vanilla",
        img: "vanilla.avif",
        title: "바닐라향 커피",
      },
      ingredients: ["바닐라향 캡슐 1개", "마스카포네 치즈", "휘핑크림", "레이디핑거 쿠키", "코코아 파우더"],
      order: ["버츄오 에스프레소 잔에 에스프레소(40ml)로 추출합니다.", "그 위에 마스카포네 치즈와 휘핑크림(1:1 비율)의 조합으로 만든 치즈크림을 50~60ml 부어줍니다.", "레이디핑거 쿠키를 올리고 코코아 파우더를 뿌려 마무리합니다."]
    }
  },
  {
    pid: "americano-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "americano.avif",
      title: "아메리카노",
      tags: ["머그"],
    },
    detail:  {
      img: "americano_detail.avif",
      intro: "진한 로스팅 향의 아메리카노 러버를 위해 향기로운 오후를 즐기는 방법을 제안합니다",
      coffee: {
        pid: "intenso-v",
        img: "intenso.avif",
        title: "인텐소",
      },
      ingredients: ["인텐소 캡슐 1개", "애플파이", "생크림"],
      order: ["버츄오 머그 잔에 머그 230ml로 추출하세요.", "애플파이& 생크림과 함께 페어링 해서 즐겨보세요. 강렬한 로스팅 향과 캐러멜 향의 커피가 달콤한 애플파이와 완벽한 조화를 이룹니다."]
    }
  },
  {
    pid: "black-sugar-iced-latte",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "black_sugar_iced_latte.avif",
      title: "아이스 흑당 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "black_sugar_iced_latte_detail.jfif",
      intro: "",
      coffee: {
        pid: "scuro",
        img: "scuro.avif",
        title: "스쿠로"
      },
      ingredients: ["스쿠로 캡슐 1개", "흑당시럽 15g", "우유 40ml", "얼음 4조각(조각 당 30g)"],
      order: ["리빌 에스프레소 마일드 잔에 흑당 시럽 드리즐을 둘러줍니다.", "잔의 반을 얼음으로 채워줍니다.", "우유(40ml)를 추가합니다.", "그 위에 에스프레소(40ml)를 추출하여 완성합니다."]
    }
  },
  {
    pid: "butterscotch-americano",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "butterscotch_americano.avif",
      title: "버터 스카치 아메리카노",
      tags: ["월드 익스플로레이션"],
    },
    detail:  {
      img: "butterscotch_americano_detail.jfif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "buenos-aires-lungo",
        img: "buenos_aires_lungo.avif",
        title: "부에노스 아이레스 룽고"
      },
      ingredients: ["부에노스 아이레스 룽고 캡슐 1개", "버터 스카치 시럽"],
      order: ["뷰 룽고 컵에 버터 스카치 시럽 1펌프(10ml)를 부어주세요.", "그 위에 룽고(110ml)로 추출하여 완성합니다."]
    }
  },
  {
    pid: "lemon-cream-latte",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "lemon_cream_latte.avif",
      title: "레몬크림 라테",
      tags: ["월드 익스플로레이션"],
    },
    detail:  {
      img: "lemon_cream_latte_detail.jfif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "shanghai-lungo",
        img: "shanghai_lungo.avif",
        title: "상하이 룽고"
      },
      ingredients: ["상하이 룽고 캡슐 1개", "쉬크르 루 1스틱", "휘핑 크림 20g", "레몬 시럽 20g"],
      order: ["슈거림을 돌린 뷰 카푸치노 잔에 쉬크르 루 1 스틱을 넣습니다.", "그 위에 룽고(110ml)를 추출합니다.", "휘핑 크림(20g), 쉬크르 루(황설탕) 1 스틱, 레몬시럽(20g)을 섞어 만든 레몬크림을 커피 위에 올려 ‘레몬크림 라테’를 완성합니다."]
    }
  },
  {
    pid: "mazagran",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "mazagran.avif",
      title: "마자그랑",
      tags: ["오리지널 콜렉션"],
    },
    detail:  {
      img: "mazagran_detail.avif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "volluto-decaffeinato",
        img: "volluto_decaffeinato.avif",
        title: "볼루토 디카페나토"
      },
      ingredients: ["볼루토 디카페나토 캡슐 1개"," 얼음 6조각 (조각 당 30g)", "레몬청 40g", "탄산수 70ml"],
      order: ["바리스타 레시피 글라스 스몰에 레몬청 (40g)을 깔아줍니다.", "얼음을 가득 채운 뒤 탄산수 (70ml)를 부어줍니다.", "그 위에 에스프레소(40ml)로 추출하여 디카페인 마자그랑을 늦은 오후에도 청량하게 즐겨보세요."]
    }
  },
  {
    pid: "paris-cappuccino",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "paris_cappuccino.avif",
      title: "파리 카푸치노",
      tags: ["월드 익스플로레이션"],
    },
    detail:  {
      img: "paris_cappuccino_detail.avif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "paris",
        img: "paris.avif",
        title: "파리",
      },
      ingredients: ["파리 캡슐 1개", "우유 120ml", "마카롱"],
      order: ["뷰 카푸치노 컵에 에스프레소(40ml)로 추출합니다.", "우유 (120ml)를 에어로치노 카푸치노 모드로 만든 밀크 폼을 올려줍니다.", "마카롱과 함께 달콤한 시간을 가져 보세요."]
    }
  },
  {
    pid: "thai-coco",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "thai_coco.avif",
      title: "이 여름 타이코코",
      tags: ["아이스"],
    },
    detail:  {
      img: "thai_coco_detail.avif",
      intro: "부드러움 속에 고소함을 속삭이는 아이스 라테",
      coffee: {
        pid: "ice-coconut-vanilla",
        img: "ice_coconut_vanilla.avif",
        title: "아이스 코코넛 바닐라향 커피",
      },
      ingredients: ["아이스 코코넛 바닐라향 커피 1캡슐", "얼음 100g", "코코넛 워터 30g", "레몬향 탄산수 30g", "바닐라 시럽 20g", "라임 주스 2g", "레몬그라스 1스틱"],
      order: ["잔에 얼음 100g을 넣어줍니다.", "코코넛 워터 30g, 레몬향 탄산수 30g을 넣어줍니다.", "바닐라 시럽 20g과 라임주스 2g을 넣어줍니다.", "그 위에 커피를 추출해 주세요.", "레몬그라스 스틱을 방망이로 두드린 후 가니쉬하여 완성합니다."]
    }
  },
  {
    pid: "chai-cinnamon-latte",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "chai_cinnamon_latte.avif",
      title: "차이티 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "chai_cinnamon_latte_detail.jfif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "chiaro",
        img: "chiaro.avif",
        title: "키아로"
      },
      ingredients: ["키아로 캡슐 1개", "차이티 시럽 20g", "우유 120ml", "시나몬 파우더/스틱"],
      order: ["버츄오 그랑 룽고 컵에 에스프레소 (40ml)로 추출 후, 차이티 시럽 (20g)을 잘 섞어줍니다.", "그 위에 에어로치노 카푸치노 모드로 만든 밀크 폼(120ml)을 부어 '차이티 라테'를 완성합니다.", "시나몬 파우더 및 스틱으로 데코 하여 스파이시함을 더해보세요."]
    }
  },
  {
    pid: "ginger-espresso-tonic",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "ginger_espresso_tonic.avif",
      title: "진저 에스프레소 토닉",
      tags: ["월드 익스플로레이션"],
    },
    detail:  {
      img: "ginger_espresso_tonic_detail.jfif",
      intro: "색다르게 즐기는 아이스 레시피",
      coffee: {
        pid: "rio-de-janeiro",
        img: "rio_de_janeiro.avif",
        title: "리우데자네이루"
      },
      ingredients: ["리우데자네이루 캡슐 1개", "진저레몬 시럽 15ml", "진저 에일 70ml", "로즈마리", "얼음 6조각 (조각 당 30g)"],
      order: ["뷰 머그 컵에 진저 레몬 시럽(15ml), 진저에일 (70ml)을 넣고 잘 섞어줍니다.", "얼음으로 컵의 2/3을 채웁니다.", "그 위에 에스프레소(40ml)를 추출합니다.", "로즈마리 가니쉬로 마무리합니다."]
    }
  },
  {
    pid: "cherry-con-panna",
    sid: "recipe",
    info: {
      cid: "오리지널",
      img: "cherry_con_panna.avif",
      title: "체리 콘파냐",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "cherry_con_panna_detail.avif",
      intro: "나에게 주는 선물 같은 휴식 시간",
      coffee: {
        pid: "chocolate",
        img: "chocolate.avif",
        title: "초콜릿향 커피"
      },
      ingredients: ["초콜릿향 캡슐 1개", "생크림", "체리 절임"],
      order: ["뷰 에스프레소 잔에 에스프레소 (40ml)로 추출합니다.", "생크림을 2~3바퀴 올려줍니다.", "체리 절임 1알을 올려 '체리 콘파냐'를 완성합니다."]
    }
  },
  {
    pid: "iced-dalgona-latte-v",
    sid: "recipe",
    info: {
      cid: "버츄오",
      img: "iced_dalgona_latte.avif",
      title: "아이스 달고나 라테",
      tags: ["바리스타 크리에이션"],
    },
    detail:  {
      img: "iced_dalgona_latte_detail.avif",
      intro: "우유와 어울리는 풀바디 로스팅 향으로 아이스 라테 한 잔으로도 돋보이는 진한 매력을 더해 보세요",
      coffee: {
        pid: "bianco-forte-v",
        img: "bianco_forte.avif",
        title: "비앙코 포르테 포 밀크"
      },
      ingredients: ["비앙코 포르테 포 밀크 캡슐 1개", "쉬크르 루 6스틱", "우유 100ml", "얼음 6조각 (조각 당 30g)"],
      order: ["머그로 추출 후 1/3(약 80ml) 정도 바리스타 레시피 메이커에 쉬크르 루(황설탕) 6스틱과 함께 넣으세요.", "바리스타 레시피 메이커를 '아이스 프라페(Iced Frappe)'로 선택 후 2회 작동합니다.", "버츄오 그랑 룽고 컵에 얼음을 가득 채우고 우유(100ml)를 부은 뒤, 완성된 커피를 더하세요."]
    }
  },
]

export default recipes;