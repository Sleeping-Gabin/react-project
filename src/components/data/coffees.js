const coffees = [
  {
    pid: "ice-forte-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "ice_forte.avif",
      title: "아이스 포르테",
      price: 10000,
      capsule: 10,
      tags: ["머그 230ml", "아이스"],
      sizes: ["머그(230ml)", "버츄오 아이스 레시피"]
    },
    detail: {
      img: "ice_forte_detail.jpg",
      intro: "아이스로 좋은 곡물향",
      text: {
        description: "남미산 아라비카 원두가 인도네시아 및 에티오피아산 아라비카를 만나 인상 깊은 아로마 경험을 선사하는 강렬한 미디엄-다크 로스팅 블렌드의 상쾌한 아이스 커피입니다.",
        aromas: ["로스팅향", "우디향", "곡물향"],
        taste: null
      },
      reviews: ["아이스로 마실 땐 얼음이 녹아도 맛이 유지되어야 하는데, 포르테는 진해서 아주 좋아요. 양도 230ml로 많아서 대용량 텀블러에 담아놓고 들이키기 딱입니다. 다가오는 여름, 매일 포르테 마실 생각에 설렙니다♡", "시원한 색상 때문에 호기심으로 맛보았다가 인생 아이스 커피가 되었어요. 버추오의 회전 추출로 풍성한 크레마 폼이 완성되고, 포르테는 곡물향과 우디향이  풍부해 아이스로 즐기기 최적화되어 있어요."],
      recipes: ["iced-oat-caramel-latte-v"]
    }
  },
  {
    pid: "active-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "active.avif",
      title: "액티브",
      price: 11000,
      capsule: 10,
      tags: ["더블 에스프레소 80ml", "아이스"],
      sizes: ["버츄오 아이스 레시피", "더블 에스프레소(80ml)"]
    },
    detail: {
      img: "active_detail.jpg",
      intro: "아이스로 즐기기 좋은 비타민 B6 함유 커피",
      text: {
        description: "산뜻한 아몬드향과 바닐라향이 어우러진 액티브는 에티오피아와 인도네시아의 아라비카 원두를 블렌드하여 부드럽고 달콤한 비스킷향이 돋보이는 커피입니다.\n아이스로 즐기기 좋은 비타민 B6를 함유 커피로 일상의 청량함과 산뜻함을 더해보세요.\n컵에 얼음을 가득 담고 그 위로 액티브 커피를 80ml 그대로 추출한 뒤 시원한 우유를 더해 아이스 라테로 즐겨보세요.",
        aromas: ["바닐라와 아몬드 향"],
        taste: null
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "caffe-florian",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "caffe_florian.avif",
      title: "카페 플로리안 커피",
      price: 8500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 9", "에스프레소(40ml)"]
    },
    detail: {
      img: "caffe_florian_detail.jpg",
      intro: "시대를 초월한 전설적인 카페 경험",
      text: {
        description: "풀 바디감의 풍성한 다크 로스팅 커피로 우디향, 견과류향 그리고 브라운 스파이스향이 감돕니다. 쌉쌀한 쓴맛과 섬세한 산미로 마무리됩니다.",
        aromas: ["스파이시향", "우디향", "견과류향", "코코아향"],
        taste: {
          body: 4,
          bitter: 4,
          acidity: 3,
          roasting: 4
        }
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "bianco-piccolo-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "bianco_piccolo.avif",
      title: "비앙코 피콜로 포 밀크",
      price: 7700,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["에스프레소(40ml)"]
    },
    detail: {
      img: "bianco_piccolo_detail.jpg",
      intro: "우유와 어울리는 달콤함",
      text: {
        description: "풍부한 로스팅향과 부드러운 풍미를 선사하는 커피로 우유와 완벽한 조화를 이룹니다.\n 콜롬비아, 브라질, 에티오피아 등 다양한 원산지의 아라비카 원두를 최적의 비율로 블렌딩한 후, 우유의 크리미하고 달콤한 풍미와 잘 어울리도록 로스팅하여 우유를 더해 즐길 때에도 커피의 풍부한 로스팅향이 돋보이는 커피입니다.\n 강렬하면서도 우유와의 부드러운 조화를 이루는 비앙코 피콜로 포 밀크 커피로 카푸치노, 라테 마키아토, 플랫 화이트를 즐겨보세요.",
        aromas: ["부드러움"],
        taste: {
          body: 0,
          bitter: 2,
          acidity: 1,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["salted-caramel-latte-v"]
    }
  },
  {
    pid: "chocolate",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "chocolate.avif",
      title: "초콜릿향 커피",
      price: 8600,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["룽고(110ml)", "카푸치노&라테 마키아토"]
    },
    detail: {
      img: "chocolate_detail.JPG",
      intro: "나를 채우는 풍성한 만족감을 주는 커피",
      text: {
        description: "남미 아라비카 커피의 곡물향과 어우러진 다크 초콜릿향의 리치함으로 나를 채우는 풍성한 만족감을 느껴보세요. 달콤한 비스킷향과 곡물향에 우아한 다크 초콜릿향이 만나 기쁨을 더합니다. 카푸치노로 즐겨 우유와 조화로운 우아한 고소함과 초콜릿향의 강렬한 끝맛을 만끽해 보세요.",
        aromas: ["Flavoured"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 3,
          roasting: 2
        }
      },
      reviews: null,
      recipes: ["cherry-con-panna"]
    }
  },
  {
    pid: "el-salvador-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "el_salvador.avif",
      title: "엘살바도르",
      price: 11000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["강도 5", "머그(230ml)"]
    },
    detail: {
      img: "el_salvador_detail.jpg",
      intro: "레드 허니 가공의 과일잼향",
      text: {
        description: "마스터 오리진 엘살바도르는 커피 산지로 최고의 떼루아로 꼽히는 엘살바도르 화산토의 나무 그늘 아래에서 자란 보석 같은 커피로 달콤한 과일잼향과 비스킷향이 어우러져 부드러운 커피 입니다.\n잘 익은 커피 체리의 과육을 완전히 제거하지 않고 건조한 레드 허니 가공의 아라비카 커피가 전하는 달콤한 과일잼의 풍미를 즐겨보세요.",
        aromas: ["비스킷향", "잘 익은 과일향"],
        taste: {
          body: 2,
          bitter: 1,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: ["향과 맛, 풍미가 독특해서 쉽게 질리지 않아요. 라테나 아이스커피로 마셔도 또 다른 풍미와 살짝 달콤한 맛, 부드럽고 기분 좋은 산미가 느껴집니다.", "엘살바도르를 구입해서 마셔보고는 최애가 되었어요. 약간의 산미와 꽃 향, 매일 아침 커피를 내려 마시는 나만의 사치를 몹시 애정 합니다."],
      recipes: ["ruby-orange-bianco-v"]
    }
  },
  {
    pid: "il-caffe-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "il_caffe.avif",
      title: "일카페",
      price: 7700,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 11", "에스프레소(40ml)"]
    },
    detail: {
      img: "il_caffe_detail.jpg",
      intro: "강렬함과 부드러움의 조화",
      text: {
        description: "다크 로스팅 한 베트남과 인도산 원두 블렌드가 진한 곡물향과 벨벳같이 부드러운 질감을 선사하고 다크 로스팅 한 콜롬비아 원두의 고소함이 더해진 에스프레소 커피입니다.\n일 카페는 강렬하고 클래식한 에스프레소 커피로 즐기기에 가장 좋은 커피입니다. 일 카페의 강렬함에 부드러움을 더하고 싶을 때는 따뜻한 밀크 폼을 얹어 고소한 카푸치노를 즐겨 보세요.",
        aromas: ["코코아향", "강한 로스팅향", "구운 곡물향"],
        taste: {
          body: 4,
          bitter: 4,
          acidity: 1,
          roasting: 5
        }
      },
      reviews: null,
      recipes: ["pink-pepper-mocka-v"]
    }
  },
  {
    pid: "ice-coconut-vanilla",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "ice_coconut_vanilla.avif",
      title: "아이스 코코넛 바닐라향 커피",
      price: 8900,
      capsule: 10,
      tags: ["에스프레소 40ml", "아이스"],
      sizes: ["에스프레소(40ml)", "아이스 레시피"]
    },
    detail: {
      img: "ice_coconut_vanilla_detail.jpg",
      intro: "산뜻한 코코넛향과 크리미한 바닐라향의 이국적인 바이브",
      text: {
        description: "코코넛 바닐라향 커피 한잔이 열대섬으로 휴가를 초대합니다 . 남미 아라비카 블렌딩에 더해진 달콤한 코코넛 바닐라향 커피가 잊지 못할 쿨한 아이스 커피 경험을 선사합니다.",
        aromas: ["바닐라향", "코코넛향"],
        taste: null
      },
      reviews: null,
      recipes: ["thai-coco", "coconut-frappe-colada"]
    }
  },
  {
    pid: "freddo-delicato",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "freddo_delicato.avif",
      title: "프레도 델리카토",
      price: 7900,
      capsule: 10,
      tags: ["에스프레소 40ml", "아이스"],
      sizes: ["아이스 레시피", "에스프레소(40ml)"]
    },
    detail: {
      img: "freddo_delicato_detail.JPG",
      intro: "향긋한 과일향의 산뜻한 아이스 커피",
      text: {
        description: "프레도 델리카토는 부드럽고 섬세한 풍미의 마일드한 아이스커피로 즐기기에 최적화 된 분쇄도로 원두를 그라인딩하고 라이트 로스팅한 커피입니다. 라이트하고 균형 잡힌 베이스에 상쾌하고 밝은 과일향이 퍼지면서 갈증을 해소하는 산뜻함을 선사합니다.\n얼음으로 가득 찬 컵 위에 에스프레소로 추출한 뒤, 시원한 물이나 우유를 더해 아이스 아메리카노 혹은 아이스 라테로 즐겨보세요.",
        aromas: ["과일향"],
        taste: null
      },
      reviews: ["아이스 커피에 특화된 부드러움과 산미... 인텐소의 강한 맛과는 차별되는 부드러움~ 아이스 커피에는 프레도 델리카토가 최고!! 커피 맛 잘 모르는 와이프도 확실히 맛있다면서 다른 캡슐로 만들어주면 금방 브레도 델리카토가 아닌 걸 귀신같이 알아냅니다~", "산미있는 커피를 좋아하는데, 너무 상큼하고 향도 좋아요! 유치원 생 딸아이도 커피를 내릴때면 \"음~ 향기 좋다!\"합니다. 출시한 직후부터 지금까지 항상 쟁이고 있어요."],
      recipes: null
    }
  },
  {
    pid: "vienna-lungo-decaf",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "vienna_lungo_decaf.avif",
      title: "비엔나 룽고 디카페나토",
      price: 7800,
      capsule: 10,
      tags: ["룽고 110ml", "디카페인"],
      sizes: ["강도 7", "룽고(110ml)"]
    },
    detail: {
      img: "vienna_lungo_decaf_detail.JPG",
      intro: "우아한 밸런스의 맥아향 디카페인 커피",
      text: {
        description: "비엔나 커피하우스에서 커피 애호가들은 부드러운 바디감을 가진 곡물향의 커피를 즐겨 왔습니다. 부드럽고 균형감이 좋은 커피가 선사하는 오스트리아의 우아한 커피 문화를 느껴 보세요.\n월드 익스플로레이션 라인 중에 가장 사랑 받는 비엔나 룽고 커피가 디카페인으로 탄생했습니다. 늦은 시간에도 부담 없이 우아한 룽고 한잔과 함께 하루를 정리해 보세요.",
        aromas: ["맥아향"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 2,
          roasting: 3
        }
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "altissio-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "altissio.avif",
      title: "알티시오",
      price: 7700,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 9", "에스프레소(40ml)"]
    },
    detail: {
      img: "altissio_detail.jpg",
      intro: "풍부한 바디감의 코코아향",
      text: {
        description: "부드럽고 고소한 곡물향을 선사하는 코스타리카 아라비카와 브라질 아라비카에 소량의 로부스타 원두를 블렌드 하여 풍부하고 진한 바디감을 더해 완성한 에스프레소 커피입니다.\n마치 부드럽고 촉감이 좋은 왕실 벨벳 가운처럼 진하면서도 부드러운 크레마 안에 우아한 로스팅향과 고소한 곡물향이 돋보이는 크리미한 커피입니다.",
        aromas: ["강한 로스팅향"],
        taste: {
          body: 4,
          bitter: 3,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: ["커피를 내릴 때부터 퍼지는 알티시오 향이 정말 감동입니다. 산미나 쓴맛 없이 정말 고소하고 깊은 맛! 아이스 아메리카노로도, 물 반 우유 반 넣는 연한 라테로도, 우유 가득 라테로도 정말 맛있는 맛 자체예요.", "아메리카노로 즐겨도 좋지만 특히 우유와 만났을 때 부드럽고 풍부한 커피의 맛을 더욱 극대화합니다. 아이스로 제조해도 커피의 크레마까지 살아있어 처음부터 끝까지 커피를 온전하게 즐길 수 있죠. 디카페인 알티시오도 있어 늦은 밤에도 맛있는 커피를 마실 수 있어 가장 선호하는 캡슐입니다."],
      recipes: null
    }
  },
  {
    pid: "bianco-forte-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "bianco_forte.avif",
      title: "비앙코 포르테 포 밀크",
      price: 10000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["머그(230ml)"]
    },
    detail: {
      img: "bianco_forte_detail.JPG",
      intro: "우유와 어울리는 강렬함",
      text: {
        description: "우유를 더하여 마실 때에도 커피의 진한 로스팅향을 함께 즐길 수 있는 커피입니다. 엄선한 콜롬비아와 케냐산 아라비카를 다크 로스팅하여 커피의 풍부한 로스팅향과 곡물향이 돋보이는 커피로, 우유를 더했을 때 커피의 진한 향과 우유의 달콤함이 다이나믹한 균형을 이룹니다. 강렬하면서도 우유와 만났을 때 균형 잡힌 풍미를 선사하는 비앙코 포르테 포 밀크는 약간의 우유에 커피를 더하여 마시는 리버소 레시피로 즐겨보세요.",
        aromas: ["균형감", "강한 로스팅향"],
        taste: null
      },
      reviews: null,
      recipes: ["iced-dalgona-latte-v"]
    }
  },
  {
    pid: "voltesso-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "voltesso.avif",
      title: "볼테소",
      price: 7700,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 4", "에스프레소(40ml)"]
    },
    detail: {
      img: "voltesso_detail.JPG",
      intro: "가볍고 달콤한 풍미",
      text: {
        description: "라이트 로스팅 한 브라질과 콜롬비아의 아라비카 원두를 블렌드하여 특유의 달콤한 풍미를 선사하는 에스프레소 커피입니다. 달콤한 비스킷향과 감미로운 와인향에 부드럽게 균형잡힌 볼테소를 즐겨보세요.\n볼테소에 물을 더해 마일드하고 스위트한 풍미의 블랙커피로 즐겨 보세요. 때때로 물 대신 우유를 더해주면 보다 부드럽고 고소한 라테로도 즐길 수 있습니다.",
        aromas: ["마일드"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: ["볼테소 투 샷에 얼음, 물 조금 넣고 아이스 커피로 마시면 캬>< 여름에 얼마나 많은 볼테소를 샀는지... 따뜻하게 마셔도 맛있지만 아이스로 마실 때 단맛과 조화로움이 뛰어나요. 그렇다고 아예 산미없는 구수한 커피가 아니라 밸런스가 잘 잡혀 있습니다.", "볼테소는 호불호가 강하지 않고 가볍게 즐길 수 있어 편하게 찾게 돼요. 한 번에 2-3개씩 내려 먹곤 합니다. 임신 기간에도 엄청 마시고 싶었어서 출산 후 제 첫 커피는 프렌차이즈 커피가 아니라 바로 볼테소 커피였어요. 흐뭇:)"],
      recipes: ["tangerine-espresso-v"]
    }
  },
  {
    pid: "nicaragua",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "nicaragua.avif",
      title: "니카라과",
      price: 8600,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 5", "에스프레소(40ml)", "룽고(110ml)"]
    },
    detail: {
      img: "nicaragua_detail.JPG",
      intro: "꿀처럼 달콤한 풍미의 곡물향 커피",
      text: {
        description: "한 입 머금고 음미하면 느껴지는 달콤한 꿀향과 고소하고 부드러운 곡물향이 감미로운 아라비카 커피입니다. 각별한 노력이 필요한 보기 드문 블랙허니 가공법을 통해 독특한 달콤함이 완성됩니다.",
        aromas: null,
        taste: {
          body: 2,
          bitter: 2,
          acidity: 2,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["honey-black"]
    }
  },
  {
    pid: "chiaro",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "chiaro.avif",
      title: "키아로",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["에스프레소(40ml)"]
    },
    detail: {
      img: "chiaro_detail.JPG",
      intro: "우유와 어울리는 비스킷향 커피",
      text: {
        description: "브루클린 바리스타들에게 영감을 받아 케냐와 인도네시아산 아라비카를 라이트로스팅하여 커피 천연의 단맛이 잘 느껴지는 커피입니다. 키아로 커피에 우유를 첨가하면 크리미한 캐러멜향과 달콤한 비스킷향을 제대로 느낄 수 있습니다.",
        aromas: ["균형감", "비스킷향"],
        taste: null
      },
      reviews: null,
      recipes: ["chai-cinnamon-latte"]
    }
  },
  {
    pid: "cosi",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "cosi.avif",
      title: "코지",
      price: 7200,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 4", "에스프레소(40ml)"]
    },
    detail: {
      img: "cosi_detail.JPG",
      intro: "시트러스향과 곡물향의 조화를 이루는 커피",
      text: {
        description: "코지는 살짝 구운 곡물향에 섬세하고 균형잡힌 과일향을 선사합니다. 은은한 과일향 덕분에 부드러운 곡물향과 살짝 구운 토스트향의 아로마가 더욱 품격있는 조화를 이룹니다.",
        aromas: ["과일향", "곡물향"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: ["이름처럼 일상에 편안한 느낌을 주는 커피예요. 코지는 마치 명품 조연과도 같은 캐릭터입니다! 우유와 함께 라테로 즐겨도 좋고 아이스크림에 뿌려 아포가토로 먹어도 너무 좋아요.", "코지의 향은 복잡한 일상에 잠시나마 평화와 휴식을 느끼게 해주는 시간을 선물합니다. 코지 캡슐 2개를 텀블러에 부어서 시원한 얼음과 함께 마시면 오늘도 파이팅! 이라고 저를 다독여주는 것 같아 좋아합니다."],
      recipes: ["coffee-sour"]
    }
  },
  {
    pid: "altissio-decaffeinato-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "altissio_decaffeinato.avif",
      title: "알티시오 디카페나토",
      price: 8000,
      capsule: 10,
      tags: ["에스프레소 40ml", "디카페인"],
      sizes: ["강도 9", "에스프레소(40ml)"]
    },
    detail: {
      img: "altissio_decaffeinato_detail.JPG",
      intro: "풍부한 바디감의 디카페인",
      text: {
        description: "카페인을 제거한 인디아, 브라질, 코스타리카 원두를 블렌드하여 풍부하고 진한 바디감에 부드럽고 고소한 곡물향을 선사하는 디카페인 에스프레소 커피입니다.\n 마치 부드럽고 촉감이 좋은 왕실 벨벳 가운처럼 진하면서도 부드러운 크레마 안에 우아한 로스팅향과 고소한 곡물향이 돋보이는 크리미한 커피입니다.",
        aromas: ["코코아향"],
        taste: {
          body: 4,
          bitter: 3,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: ["버츄오 구매 후 커피를 하나하나 먹어보던 중, 남편과 동시에 \"앗, 이거다!\"했던 것이 바로 알티시오였어요! 부드럽고 고소한 곡물향과 자극적이지 않은 풍미가 너무 좋았어요. 게다가 디카페인은 하루에 몇 잔씩 마셔도 부담이 없어 매번 꼭 주문하고 있어요. 저희 부부의 인생 커피랍니다~^^", "수면 부족으로 커피 마시는 횟수를 줄이다 보니 오후에는 커피 생각이 간절해지는데, 안심하고 늦은 저녁에도 마실 수 있는 알티시오 디카페나토가 있어서 좋아요. 디카페인이라 커피 본연의 맛과는 다를 거라 생각했었는데, 로스팅 향이 정말 좋아요. 따뜻한 커피도 좋지만, 무더운 요즘은 시원한 아이스커피로 오후의 피로를 풀어요!"],
      recipes: ["ice-piccolo-latte-v"]
    }
  },
  {
    pid: "colombia",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "colombia.avif",
      title: "콜롬비아",
      price: 8600,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 6", "에스프레소(40ml)", "룽고(110ml)"]
    },
    detail: {
      img: "colombia_detail.JPG",
      intro: "과즙향의 산뜻한 산미와 와인향을 품은 커피",
      text: {
        description: "마스터 오리진 콜롬비아는 고지대에서 재배된 콜롬비아산 아라비카를 콜롬비아의 숙련된 농부들만이 완성할 수 있는 늦수확 가공법으로 더 오래 무르익은 커피 체리의 향이 배어든 산뜻한 산미가 와인향과 잘 어우러지는 커피입니다.",
        aromas: ["와인향"],
        taste: {
          body: 0,
          bitter: 2,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: ["인생 짝꿍과 바다 낚시를 같이 하면서, 남편에게 에스프레소 4잔으로 내린 콜롬비아 아이스커피를 한 잔 줬더니 엄지 척을 해주던데...! 나도 한 잔 시원하게 마셔보니 콜롬비아의 향이 황홀했어요.", "매일 아침 모닝 커피로 즐겨마셔요~ 달콤하면서도 가볍지 않은 기분 좋은 산미 덕분에 활기찬 일상을 보내고 있습니다!", "커피를 좋아하지 않던 남편이 콜롬비아 캡슐을 마셔본 후 커피 맛에 눈을 떴어요. 맛이 부드럽고 산미도 적당해서 매일 끌리는 맛이라고 하네요! 이제는 함께 커피를 즐길 수 있게 되어 너무 좋아요."],
      recipes: ["grapefruit-espresso-icetea"]
    }
  },
  {
    pid: "solelio-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "solelio.avif",
      title: "솔레리오",
      price: 10000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["강도 2", "머그(230ml)"]
    },
    detail: {
      img: "solelio_detail.jpg",
      intro: "가벼운 바디감의 과일향",
      text: {
        description: "라이트 로스팅한 케냐와 콜롬비아산 아라비카 블렌드로 싱그러운 과일향과 과즙의 산미가 돋보여 보다 부드럽게 보다 편안하게 하루의 시작을 함께하기 좋은 커피 입니다.\n 시원한 우유 50ml 위에 솔레리오를 추출하여 섬세한 과일향 아래 펼쳐지는 부드러운 캐러멜향의 리버소 라테를 즐겨보세요.",
        aromas: ["시트러스향"],
        taste: {
          body: 1,
          bitter: 1,
          acidity: 3,
          roasting: 1
        }
      },
      reviews: ["더운 여름 업무로 인해 열받아 날아다니는 앞머리를, 솔레리오 아이스 커피 한 잔으로 가라앉히며 기분 전환해요^^ 이보다 더 완벽한 인생 커피가 있을까요? 환상적이고 매력 넘치는 솔레리오의 계절이 다가오네요!", "아이스 커피는 산미 있는 걸 선호하는 편인데, 솔레리오는 일반 커피와는 다르게 상큼한 시트러스 향이 더해져 더운 여름, 아이스 커피로 즐기기에 딱입니다^^", "제가 너무 좋아하는 캡슐이에요. 이달의 캡슐 할인으로 처음 맛보았고, 그대로 사랑에 빠져 매일 이 커피를 몇십 개씩 주문할 궁리만 하고 있어요. 진정 커피의 산미를 즐길 수 있는 사람이라면 마시면 그저 행복할 맛. 아 생각하니까 또 마시고 싶네요!"],
      recipes: ["coffe-sour-v"]
    }
  },
  {
    pid: "fortado-decaffeinato-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "fortado_decaffeinato.avif",
      title: "포르타도 디카페나토",
      price: 9700,
      capsule: 10,
      tags: ["그랑 룽고 150ml", "디카페인"],
      sizes: ["강도 8", "그랑 룽고(150ml)"]
    },
    detail: {
      img: "fortado_decaffeinato_detail.jpg",
      intro: "강렬한 풍미한 디카페인",
      text: {
        description: "포르타도와 같이 강렬한 풍미가 매력적인 포르타도 디카페나토는 카페인을 제거한 인도산 로부스타와 라틴 아메리카 원두를 블렌드 하여 카페인을 함유하지 않아 언제든 부담 없이 즐기기에 좋고, 포르타도의 진한 코코아와 오크 향을 그대로 전하는 진한 커피의 풍미를 선사하는 디카페인 커피입니다.\n따뜻한 우유를 더해 진한 커피 풍미를 지닌 디카페인 라테로 즐기며 더욱 풍성하게 피어나는 쌉싸름한 코코아향을 느껴보세요.",
        aromas: ["우디향"],
        taste: {
          body: 4,
          bitter: 2,
          acidity: 5,
          roasting: 5
        }
      },
      reviews: null,
      recipes: ["fortado-decaffeinato-grand-lungo-v"]
    }
  },
  {
    pid: "intenso-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "intenso.avif",
      title: "인텐소",
      price: 10000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["머그(230ml)"]
    },
    detail: {
      img: "intenso_detail.jpg",
      intro: "깊고 진한 풍미",
      text: {
        description: "다크 로스팅하여 캐러멜라이즈된 달콤한 풍미의 라틴 아메리카 원두와 진하고 쌉싸름한 커피 고유의 풍미가 특징적인 니카라과산 로부스타 원두를 블렌딩하여 깊고 진한 풍미와 입안 가득 퍼지는 캐러멜향과 로스팅향의 긴 여운을 선사하는 커피입니다.\n진하고 강도 높은 블랙 커피 그대로 즐기며 긴 여운을 남기는 캐러멜향과 로스팅향을 느껴보세요.",
        aromas: ["캐러멜향", "강한 로스팅향"],
        taste: {
          body: 5,
          bitter: 4,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: ["친구네 방문해서 마셔보고, 맛을 잊을 수가 없어서 구매했어요~ 남편도 저도 인텐소에 푹 빠졌어요~ 매일 텀블러에 인텐소 가득 들고 출근합니다^^ 남편은 항상 맛있는 커피를 내려줘서 고맙다고 해줘요~ 덕분에 사랑받는 아내가 되었답니다!", "처음 맛본 순간, 인텐소가 아이스 커피로 잘 어울리는 것을 느꼈어요. 얼음이 녹아도, 진한 풍미와 향이 살아있지요. 카페에서 주문한 것과 비교해도 전혀 손색이 없어요. 이렇게 훌륭한 커피를 집에서 즐길 수 있다는 점이 하루하루 특별한 행복이에요."],
      recipes: ["americano-v"]
    }
  },
  {
    pid: "venezia",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "venezia.avif",
      title: "베네치아",
      price: 7200,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["에스프레소(40ml)"]
    },
    detail: {
      img: "venezia_detail.jpg",
      intro: "오랜 시간 미디엄 다크로스팅한 로스팅향 커피",
      text: {
        description: "오랜 시간 로스팅한 이 커피는 하루 아침에 완성된 것이 아닙니다. 대를 이어 내려오는 이탈리아 베네치아의 가장 오래된 로스팅 전통을 바탕으로 완성한 커피 입니다.",
        aromas: null,
        taste: {
          body: 4,
          bitter: 3,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "vanilla",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "vanilla.avif",
      title: "바닐라향 커피",
      price: 8600,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["카푸치노&라테 마키아토", "룽고(110ml)"]
    },
    detail: {
      img: "vanilla_detail.jpg",
      intro: "부드러운 위안",
      text: {
        description: "남미 아라비카 커피의 실키한 부드러움과 따듯한 커스터드 바닐라향이 돋보이는 커피로 마음의 위안이 되는 시간을 가져보세요. 달콤한 비스킷향과 곡물향에 클래식한 바닐라향이 만나 기쁨을 더합니다. 카푸치노로 즐겨 당신이 가장 좋아하는 바닐라 케이크의 뉘앙스를 느껴보세요.",
        aromas: ["바닐라향", "Flavoured"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 3,
          roasting: 2
        }
      },
      reviews: null,
      recipes: ["tiramisu-latte"]
    }
  },
  {
    pid: "freddo-intenso",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "freddo_intenso.avif",
      title: "프레도 인텐소",
      price: 7900,
      capsule: 10,
      tags: ["에스프레소 40ml", "아이스"],
      sizes: ["아이스 레시피", "에스프레소(40ml)"]
    },
    detail: {
      img: "freddo_intenso_detail.jpg",
      intro: "진한 아이스커피에 최적인 고소한 곡물향의 커피",
      text: {
        description: "프레도 인텐소는 진한 로스팅향과 함께 아이스커피로 즐기기에 최적화된 분쇄도로 원두를 그라인딩하고 다크 로스팅한 커피입니다. 아라비카 블렌드의 고소한 곡물향과 우디향의 아름다운 균형을 이루며 다크 로스팅의 클래식한 쓴맛을 선사합니다.",
        aromas: ["로스팅향", "곡물향"],
        taste: null
      },
    reviews: ["추출 시 코로 느껴지는 진한 로스팅향이 고소한 맛과 함께 입안 가득 느껴집니다. 세 아이 육아로 지치고 힘들 때, 무더운 여름의 갈증을 느낄 때 부족함 없이 채워줍니다. 프레도 인텐소만이 여름이 왔음을 느끼게 해주네요.", "진하고 깊은 맛의 아이스커피를 원한다면 최고의 선택, 프레도 인텐소:) 색상부터 시원~한 블루! 다크 로스팅으로 마지막 한 방울까지 진한 맛으로 즐길 수 있어요! 우디향과 고소한 곡물향으로 누구에게나 호불호 없을 캡슐입니다!"],
      recipes: ["lychee-slush-coffee"]
    }
  },
  {
    pid: "tokyo-lungo",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "tokyo_lungo.avif",
      title: "도쿄 룽고",
      price: 7500,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["강도 6", "룽고(110ml)"]
    },
    detail: {
      img: "tokyo_lungo_detail.jpg",
      intro: "섬세한 꽃향에 로스팅향의 부드러운 조화",
      text: {
        description: "세련된 미각의 도시, 도쿄를 연상케하는 도쿄 비발토 룽고는 섬세한 꽃향과 조화로운 로스팅향에 과일향이 은은하게 느껴지는 커피 입니다.",
        aromas: ["로스팅향", "꽃향"],
        taste: {
          body: 3,
          bitter: 1,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: ["도쿄를 아이스로 처음 마셨을 때의 감동을 잊지 못해요. 적당한 산미와 은은한 꽃향기가 너무 좋아서 바로 제 최애 커피 등극! 도쿄는 뜨겁게 마셔도, 차갑게 마셔도 늘 만족스러워요.", "맛이 마일드하고 마치 봄바람에 날려 온 벚꽃향이 코를 간지럽히듯 부드러운 향이 납니다. 네스프레소 커피를 처음 마시는 사람한테 권해도 실패한 적이 없는 커피입니다.", "패키지부터 예쁜 벚꽃인 도쿄는 저희 집 최애 커피에요! 많이 다크 하지 않으면서도 풍미가 정말 좋아요! 엄마는 라테로! 저는 아메리카노로 마시고 있어요! 바디감이 좋아서 어떻게 먹어도 맛있답니다!"],
      recipes: null
    }
  },
  {
    pid: "ice-pistachio-vanilla-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "ice_pistachio_vanilla.avif",
      title: "아이스 피스타치오 바닐라향 커피",
      price: 9500,
      capsule: 10,
      tags: ["더블 에스프레소 80ml", "아이스"],
      sizes: ["더블 에스프레소(80ml)", "버츄오 아이스 레시피"]
    },
    detail: {
      img: "ice_pistachio_vanilla_detail.jpg",
      intro: "아이스 피스타치오 바닐라향 커피",
      text: {
        description: "피스타치오, 아마레티의 애프터 테이스트와 같은 쌉쌀한 아몬드, 버터리한 페이스트리와 비스킷, 풍성한 캐러멜향과 크리미한 버번 바닐라향까지…\n 복합적이며 만족스러운 맛의 경험으로 입가에 절로 미소가 번지게 될 것이에요.",
        aromas: ["바닐라향", "캐러멜향", "비스킷향", "아몬드향", "피스타치오향"],
        taste: null
      },
      reviews: null,
      recipes: ["pistachio-frappe-v", "pistachio-world-v"]
    }
  },
  {
    pid: "melozio-decaffeinato-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "melozio_decaffeinato.avif",
      title: "멜로지오 디카페나토",
      price: 10500,
      capsule: 10,
      tags: ["머그 230ml", "디카페인"],
      sizes: ["머그(230ml)"]
    },
    detail: {
      img: "melozio_decaffeinato_detail.jpg",
      intro: "부드러운 디카페인",
      text: {
        description: "멜로지오와 같이 달콤함과 특유의 고소한 곡물향의 멜로지오 디카페나토는 카페인을 제거한 브라질산 아라비카 버번종과 라이트 로스팅한 중앙 아메리카산 아라비카 블렌드로 카페인을 함유하지 않아 언제든 부담없이 즐기기에 좋고, 부드러운 곡물향과 달콤한 꿀맛이 어우러져 한모금 만으로 누구나 반할만 한 디카페인 커피입니다.\n 시원한 우유 50ml 위에 멜로지오 디카페나토를 추출하여 부드러운 비스킷향의 리버소 라테를 즐겨보세요.",
        aromas: ["비스킷향", "고운 곡물향"],
        taste: {
          body: 3,
          bitter: 2,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["cranberry-espresso-tonic-v"]
    }
  },
  {
    pid: "scuro",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "scuro.avif",
      title: "스쿠로",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["카푸치노 & 라테 마키아토"]
    },
    detail: {
      img: "scuro_detail.jpg",
      intro: "우유와 어울리는 로스팅향 커피",
      text: {
        description: "멜버른 바리스타들에게 영감을 받아 콜롬비아와 에티오피아산 아라비카를 개별로스팅하여 진하고 풍부한 로스팅향을 가진 커피입니다. 커피의 고유한 아로마가 우유와 오묘한 조화를 이루면서 커피의 진한 풍미를 즐기실 수 있습니다.",
        aromas: ["균형감", "로스팅향"],
        taste: null
      },
      reviews: null,
      recipes: ["black-sugar-iced-latte"]
    }
  },
  {
    pid: "stockholm-lungo",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "stockholm_lungo.avif",
      title: "스톡홀름 룽고",
      price: 7500,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["강도 8", "룽고(110ml)"]
    },
    detail: {
      img: "stockholm_lungo_detail.jpg",
      intro: "깊은 풍미의 맥아향과 로스팅향의 조화",
      text: {
        description: "스웨덴에서는 북유럽의 긴 겨울을 지내면서 이웃과 함께 다크 로스팅된 맥아향의 커피를 즐기는 커피타임인 피카를 가졌습니다. 시나몬롤과 잘 어울리는 깊은 풍미의 진한 맥아향 커피로 피카를 즐겨 보세요.",
        aromas: ["로스팅향"],
        taste: {
          body: 3,
          bitter: 3,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "indonesia",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "indonesia.avif",
      title: "인도네시아",
      price: 8600,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 8", "에스프레소(40ml)"]
    },
    detail: {
      img: "indonesia_detail.jpg",
      intro: "싱그러운 열대우림의 우디향 커피",
      text: {
        description: "인도네시아 기후에 맞춘 습식 탈곡 가공법으로 탄생된 커피로 부드러운 질감과 풍성한 바디감에 진한 우디향과 타바코 잎의 향이 스며들어 마치 싱그러운 열대 우림에 초대받은 느낌을 선사합니다.",
        aromas: ["강한 로스팅향", "우디향", "곡물향"],
        taste: {
          body: 3,
          bitter: 2,
          acidity: 4,
          roasting: 3
        }
      },
      reviews: ["전 라테를 좋아해서 좀 진한 커피를 선호하는데 인도네시아는 라테 만들어 먹을 때 좋습니다. 산미보다는 고소하고 진한 맛을 선호하는 저한테 딱입니다.", "적당한 로스팅 정도와 산미, 그리고 핫이나 아이스로 먹어도 모두 풍미가 좋습니다. 거의 모든 캡슐을 먹어봤는데 꾸준히 구매 중인 몇 안되는 캡슐 중 하나입니다.", "진하고 풍미가 깊은 커피를 좋아하는데, 인도네시아가 딱! 제 최애 커피예요. 아침에 일어나 따뜻하게 한 잔 마시면 그날 하루를 기분좋게 시작할 수 있답니다."],
      recipes: ["matcha-latte"]
    }
  },
  {
    pid: "ethiopia-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "ethiopia.avif",
      title: "에티오피아",
      price: 10000,
      capsule: 10,
      tags: ["그랑 룽고 150ml"],
      sizes: ["강도 4", "그랑 룽고(150ml)"]
    },
    detail: {
      img: "ethiopia_detail.jpg",
      intro: "건식 가공의 섬세한 꽃향",
      text: {
        description: "에티오피아의 뜨거운 태양 아래서 건식 가공하여 섬세하고 강렬한 꽃향에 새콤달콤항 과일향이 더해진 마스터 오리진 에티오피아 커피를 만나보세요.",
        aromas: ["꽃향"],
        taste: {
          body: 3,
          bitter: 1,
          acidity: 3,
          roasting: 2
        }
      },
      reviews: ["입안에서 조금 고소하면서 은은한 들꽃향이 감미로운 커피입니다. 휴식을 취하거나 마음의 여유를 찾을 때 필요한 나의 동반자로서의 역할을 묵묵히 수행하고 있는 나의 최애 커피예여. 앞으로도 에티오피아 커피와 함께하는 나의 일상이 늘 풍요롭고 향긋하기를 기대합니다.", "텁텁하지 않고 산뜻하며 깔끔해서 꿀떡꿀떡 잘 넘어가는 맛이고요. 따뜻한 아메리카노로도 맛나고, 얼죽아인 저는 아이스 아메리카노로 마시면 더 깔끔하고 맛난 거 같아요.", "추출되어 나오는 순간부터 무슨 마법을 부린 양 그 공간을 향긋한 향으로 채워버린다. 향으로 한번 마시면서, 한 모금 입에 넣으면 다크 하지 않지만 결코 가볍지 않은 중후한 산뜻함으로 깔끔하게 즐길 수 있는 맛입니다."],
      recipes: null
    }
  },
  {
    pid: "bianco-doppio-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "bianco_doppio.avif",
      title: "비앙코 도피오 포 밀크",
      price: 8700,
      capsule: 10,
      tags: ["더블 에스프레소 80ml"],
      sizes: ["더블 에스프레소(80ml)"]
    },
    detail: {
      img: "bianco_doppio_detail.jpg",
      intro: "우유와 어울리는 부드러움",
      text: {
        description: "달콤한 캐러멜향과 크리미한 질감이 돋보이는 커피로 우유와 부드러운 조화를 이룹니다. 케냐, 콜롬비아, 니카라과산 아라비카 원두를 라이트 로스팅하여 각 원두의 다양한 아로마 특징을 살리고, 개별 로스팅을 통해 달콤한 캐러멜향과 부드러운 질감을 더했습니다. 우유와 함께 즐길 때 부드럽고 크리미한 질감이 더욱 돋보이는 비앙코 도피오 포 밀크 커피로 만든 카푸치노, 라테 마키아토, 플랫 화이트로 우유와 완벽한 케미를 여유롭게 즐겨보세요.",
        aromas: null,
        taste: null
      },
      reviews: null,
      recipes: ["mixed-grain-latte-v"]
    }
  },
  {
    pid: "double-espresso-scuro-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "double_espresso_scuro.avif",
      title: "더블 에스프레소 스쿠로",
      price: 8700,
      capsule: 10,
      tags: ["더블 에스프레소 80ml"],
      sizes: ["강도 11", "더블 에스프레소(80ml)"]
    },
    detail: {
      img: "double_espresso_scuro_detail.JPG",
      intro: "진하고 강렬한 풍미",
      text: {
        description: "강하게 다크 로스팅 한 코스타리카산 아라비카와 과테말라산 로부스타를 블렌드하여 진한 다크 코코아와 섬세한 바닐라 향과 함께 스모키 한 풍미가 돋보이는 커피입니다. 새로운 영감과 함께 시작하는 하루의 첫 커피로 더블 에스프레소 스쿠로를 즐겨보세요.\n더블 에스프레소 스쿠로에 우유를 더해 더블 샷 카푸치노 또는 더블 에스프레소 라테로 즐겨보세요. 달콤한 코코아와 바닐라 향이 더 풍부하게 피어올라 커피의 단맛과 고소한 우유의 완벽한 조화를 느낄 수 있습니다.",
        aromas: ["코코아향"],
        taste: {
          body: 4,
          bitter: 4,
          acidity: 1,
          roasting: 4
        }
      },
      reviews: ["진하고 고소해서 우유를 타서 먹어도 정말 맛있어요. 커피를 내릴 때 향이 정말 좋아서 진짜 좋은 커피구나 하는 생각이 듭니다. 커피는 향으로도 마시잖아요. 파이팅해야 할 때에는 진한 아메리카노로 즐기고 여름에는 얼음 가득 넣어 아이스로 즐기곤 해요.", "라테파에게 없어서는 안되는 캡슐! 다크 로스팅으로 진해서 우유와 완벽한 조화를 이루고, 은은하게 즐길 수 있는 바닐라향과 풍부한 크레마가 일품입니다. 더블 에스프레소라서 추출 양이 80ml인 점도 라테에 안성맞춤이라고 생각해요.", "10년간 고등부 학원을 운영하고 있습니다. 업무를 위해 12시간씩 갇혀 있으면 벚꽃이 피는지, 매미가 우는지, 눈이 오는지도 모릅니다. 여기서 유일한 낙이 있다면 아침 일찍 출근해 혼자서 진한 아이스 라테 한 잔을 마시며 잠시 향과 맛에 집중하는 그 15분입니다. 이 시간이 저에겐 너무 소중하게 느껴집니다."],
      recipes: ["floating-affogato-v"]
    }
  },
  {
    pid: "rich-chocolate-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "rich_chocolate.avif",
      title: "리치 초콜릿향 커피",
      price: 11000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["머그(230ml)"]
    },
    detail: {
      img: "rich_chocolate_detail.jpg",
      intro: "풍요로운 만족감",
      text: {
        description: "라이트 로스팅 아라비카 블렌드에 다크 초콜릿향의 리치함이 감싸 나를 채우는 풍성한 만족감을 선물합니다. 달콤한 비스킷향과 곡물향의 섬세한 아라비카 베이스에 우아한 다크 초콜릿향이 만나 기쁨을 더합니다.",
        aromas: ["Flavoured"],
        taste: {
          body: 2,
          bitter: 1,
          acidity: 1,
          roasting: 2
        }
      },
      reviews: null,
      recipes: ["choco-banana-frappe-v"]
    }
  },
  {
    pid: "buenos-aires-lungo",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "buenos_aires_lungo.avif",
      title: "부에노스 아이레스 룽고",
      price: 7500,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["강도 4", "룽고(110ml)"]
    },
    detail: {
      img: "buenos_aires_lungo_detail.jpg",
      intro: "단맛이 감도는 캐러멜향의 마일드한 커피",
      text: {
        description: "이탈리아 이민자들의 지중해 식단과 남미 전통의 식재료가 어우러진 미식가의 나라, 아르헨티나에서는 단맛이 감도는 캐러멜향의 마일드한 커피가 사랑받고 있습니다.\n가장 마일드하고 고소한 룽고 커피와 함께 부에노스 아이레스로 떠나 보세요",
        aromas: ["곡물향", "캐러멜향"],
        taste: {
          body: 1,
          bitter: 2,
          acidity: 2,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["butterscotch-americano"]
    }
  },
  {
    pid: "shanghai-lungo",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "shanghai_lungo.avif",
      title: "상하이 룽고",
      price: 7500,
      capsule: 10,
      tags: ["룽고 110ml"],
      sizes: ["강도 5", "룽고(110ml)"]
    },
    detail: {
      img: "shanghai_lungo_detail.jpg",
      intro: "부드러운 시트러스향의 산미와 베리향이 조화",
      text: {
        description: "부드럽고 크리미한 바디감을 가진 중국 윈난성의 아라비카가 케냐 원두의 달콤한 베리향과 우아한 베르가못, 청량한 시트러스향과 어우러져 섬세한 풍미를 자랑합니다. 빠르고 가벼운 개별 로스팅을 통해 원두 개별 특징을 그대로 살렸습니다.",
        aromas: ["시트러스향", "베리향"],
        taste: {
          body: 2,
          bitter: 1,
          acidity: 4,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["lemon-cream-latte"]
    }
  },
  {
    pid: "volluto-decaffeinato",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "volluto_decaffeinato.avif",
      title: "볼루토 디카페나토",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml", "디카페인"],
      sizes: ["강도 4", "에스프레소(40ml)"]
    },
    detail: {
      img: "volluto_decaffeinato_detail.jpg",
      intro: "마일드하고 스윗한 풍미의 곡물향 디카페인 커피",
      text: {
        description: "오븐에서 갓 구운 브리오슈의 향처럼 볼루토는 저항할 수 없는 향과 마음을 편하게 하는 부드러운 달콤한 비스킷향이 특징입니다. 콜롬비아산 커피는 습식가공과 자연 건조 과정을 통해 신선한 붉은 과일의 향을 더해 화창한 날의 생동감을 선사합니다.",
        aromas: ["균형감", "과일향", "곡물향"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 4,
          roasting: 3
        }
      },
      reviews: null,
      recipes: ["mazagran"]
    }
  },
  {
    pid: "costarica-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "costarica.avif",
      title: "코스타리카",
      price: 10000,
      capsule: 10,
      tags: ["그랑 룽고 150ml"],
      sizes: ["강도 7", "그랑 룽고(150ml)"]
    },
    detail: {
      img: "costarica_detail.jpg",
      intro: "온천수 가공의 맥아향",
      text: {
        description: "마스터 오리진 커피는 커피가 태어난 원산지에서 영감을 받아 고유의 가공법으로 장인이 완성한 싱글 오리진 커피입니다.\n 마스터 오리진 코스타리카는 코스타리카의 아라비카 원두를 화산 지대의 천연 온천수에 담가 습식 가공한 커피로 온천수의 미네랄 성분이 생두를 깨끗하게 씻어내어 깔끔하고 밸런스가 좋으며, 스윗한 맥아향의 고급스러운 풍미와 풍부한 바디감을 선사합니다.\n 따뜻한 물을 더해 깔끔한 롱블랙으로 즐겨 보세요.",
        aromas: null,
        taste: {
          body: 4,
          bitter: 4,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: null,
      recipes: ["sweet-salty-latte-v"]
    }
  },
  {
    pid: "nola-blend-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "nola_blend.avif",
      title: "놀라 스타일 블렌드",
      price: 18000,
      capsule: 10,
      tags: ["더블 에스프레소 80ml"],
      sizes: ["더블 에스프레소(80ml)"]
    },
    detail: {
      img: "nola_blend_detail.jpg",
      intro: "치커리 향의 뉴올리언스 스타일 아이스 커피",
      text: {
        description: "이번 여름, 네스프레소와 블루보틀이 함께 특별한 캡슐을 선보입니다.\n블루보틀의 아이코닉한 미국 뉴올리언스 스타일 아이스 커피 '놀라 스타일 블렌드'가 처음으로 네스프레소 버츄오 캡슐로 재탄생했습니다.\n아라비카와 로부스타 블렌드에 치커리 향을 더해, 우유나 귀리 음료와 함께 즐기기에 완벽한 아이스 커피. 버튼 한 번이면, 놀라 스타일 블렌드가 올여름 레트로 무드를 완성해 줄 것입니다.",
        aromas: ["캐러멜향", "곡물향", "치커리향"],
        taste: null
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "capriccio",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "capriccio.avif",
      title: "카프리치오",
      price: 7200,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 5", "에스프레소(40ml)"]
    },
    detail: {
      img: "capriccio_detail.jpg",
      intro: "깊고 조화로운 풍미와 섬세한 산미의 조화",
      text: {
        description: "라이트 로스팅한 고지대에서 자란 남미산 아라비카를 블렌딩하고 로부스타의 향을 더해 산뜻한 산미와 강렬함, 특유의 곡물향이 돋보이는 커피입니다.",
        aromas: ["균형감", "곡물향"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: ["커피를 마시기 위해 10분 일찍 일어나는 습관을 기르기 시작했어요. 출근하고 카프리치오 아이스와 함께하는 하루 루틴은 어느덧 1년이 넘었습니다. 상쾌한 하루와 지친 몸을 깨워주는 카프리치오 아이스커피, 정말 최고입니다!", "카프리치오는 제가 네스프레소를 10년 동안 즐기면서 가장 맛있고 오래 즐긴 아이스 아메리카노 원픽입니다. 너무 진하지도 연하지도 않은 적당한 강도와 곡무ㅜㄹ향이 일품이며, 특히 아이스 아메리카노로 내렸을 때 깔끔해서 여름에 자주 즐겨 마십니다.", "잔을 들고 처음 음미했을 때 코끝에 전해지는 향긋한 풍미와 구수한 끝 맛이 마치 한정식을 먹은 뒤 고소한 숭늉을 마시는듯한 착각을 일으키게 합니다. 아아는 카프리치오~!"],
      recipes: null
    }
  },
  {
    pid: "paris",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "paris.avif",
      title: "파리",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 6", "에스프레소(40ml)"]
    },
    detail: {
      img: "paris_detail.jpg",
      intro: "곡물향과 비스킷향이 균형을 이루는 파리지앵 커피",
      text: {
        description: "파리는 커피와 함께 이야기와 생각을 나누는 카페 문화가 발달하여 왔습니다. 라이트 로스팅 한 베트남산 원두와 섬세한 라틴 아메리카 원두의 블렌드로 기분 좋은 쓴맛과 부드러운 곡물 향이 균형을 이루는 월드 익스플로레이션 파리는 파리의 노천카페테라스로 당신을 데려다줍니다.",
        aromas: ["곡물향", "비스킷향", "시트러스향"],
        taste: {
          body: 3,
          bitter: 3,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: ["라테로 마실 때 우유에 커피가 묻히거나, 반대로 커피가 너무 강해서 쓰다고 느낄 때가 많은데, 파리는 딱 적당하게 어우러져요. 손님이 오셨을 때 대접하기에도 호불호 없어 좋아요. 라테와 아메리카노 모두 맛있습니다!", "파리의 화려한 캡슐 디자인을 보면 벌써 마술쇼에 온 것 같은 기분이 들어요. 향긋한 향을 즐긴 후 얼음 가득 시원하게 마시면 하루의 고단함이 싹 씻겨 나가는 느낌입니다!! 이번 여름도 잘 부탁해^^"],
      recipes: ["paris-cappuccino"]
    }
  },
  {
    pid: "istanbul",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "istanbul.avif",
      title: "이스탄불",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 8", "에스프레소(40ml)"]
    },
    detail: {
      img: "istanbul_detail.JPG",
      intro: "아몬드향의 여운이 남는 로스팅향과 과일향의 조화",
      text: {
        description: "벨벳처럼 부드럽고 풍성한 블렌드로 강도 높은 로스팅향과 과일향이 대조적인 조화를 이루며 달콤한 아몬드향의 여운이 남는 커피입니다. 에스프레소와 물 한 잔, 거기에 터키쉬 딜라이트 디저트를 함께하여 이스탄불 스타일로 즐겨 보세요.",
        aromas: ["로스팅향", "과일향"],
        taste: {
          body: 3,
          bitter: 3,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: [],
      recipes: ["cafe-salentino"]
    }
  },
  {
    pid: "inizio-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "inizio.avif",
      title: "이니지오",
      price: 9300,
      capsule: 10,
      tags: ["그랑 룽고 150ml"],
      sizes: ["강도 4", "그랑 룽고(150ml)"]
    },
    detail: {
      img: "inizio_detail.jpg",
      intro: "꽃향과 곡물향의 조화",
      text: {
        description: "당신의 하루를 부드럽게 감싸 줄 이니지오는 케냐와 에티오피아산 아라비카 블렌드로 벨벳처럼 부드러운 바디감이 따뜻하고 진한 구운 곡물향을 선사합니다. 야생의 꽃향은 느긋한 일요일 오후의 정취를 더해 줍니다. 풍부한 아로마를 잘 느낄 수 있도록 부드러운 블랙 커피로 즐겨보세요.",
        aromas: ["꽃 향"],
        taste: {
          body: 2,
          bitter: 2,
          acidity: 4,
          roasting: 2
        }
      },
      reviews: null,
      recipes: ["simple-mazagran-v", "peppermint-americano-v"]
    }
  },
  {
    pid: "arondio-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "arondio.avif",
      title: "아론디오",
      price: 9300,
      capsule: 10,
      tags: ["그랑 룽고 150ml"],
      sizes: ["강도 6", "그랑 룽고(150ml)"]
    },
    detail: {
      img: "arondio_detail.JPG",
      intro: "부드럽고 마일드한 곡물향",
      text: {
        description: "은은한 산미와 부드러운 곡물향의 습식 가공한 콜롬비아산 아라비카 원두와 긴 시간 다크 로스팅하여 보다 강렬한 곡물향을 전하는 과테말라산 로부스타 원두 블렌드로 깊고 깔끔한 풍미에 균형잡힌 맛까지 선사하는 그랑 룽고 커피 입니다.",
        aromas: ["곡물향", "캐러멜향"],
        taste: {
          body: 3,
          bitter: 3,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: ["고소한 맛과 달콤한 맛이 어우러진 아론디오! 진한 맛과 약간의 산미가 더해져 고급스러운 커피를 즐기는 느낌이 들어요. 커피를 다 즐길 때까지 따뜻하게 유지해주는 그랑 룽고 사이즈를 선호하기도 해요. 나에게 행복하고 여유있는 순간을 선사해 줍니다.", "은은하고, 깔끔한 마무리의 맛이고, 호불호가 없이 누구나 편안하게 즐길 수 있는 커피에요. 특히 어른들이 드실 때 산미없이 구수한 맛을 즐기기에 좋네요. 편안한 시간 아론디오와 함께하기 좋아요.", "곡물향과 캐러멜향으로 적당히 묵직하고 산미를 조금 느낄 수 있었습니다. 직장인에게 딱 좋고 전반적으로 맛과 향의 밸런스가 훌륭한 커피입니다."],
      recipes: ["sweet-caramel-latte-v"]
    }
  },
  {
    pid: "ice-leggero-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "ice_leggero.avif",
      title: "아이스 레제로",
      price: 8700,
      capsule: 10,
      tags: ["더블 에스프레소 80ml", "아이스"],
      sizes: ["더블 에스프레소(80ml)", "버츄오 아이스 레시피"]
    },
    detail: {
      img: "ice_leggero_detail.jpg",
      intro: "향긋한 과일향과 산뜻한 아이스 커피",
      text: {
        description: "라이트 로스팅한 에티오피아산 아라비카의 섬세한 청량감과 미디엄 로스팅한 인도네시아산 아라비카의 균형 잡힌 맛이 조화를 이루며 산뜻하고 마일드한 아이스 커피입니다.\n얼음으로 가득 찬 컵 위에 더블 에스프레소로 추출한 뒤, 시원한 물이나 우유를 더해 즐겨보세요.",
        aromas: ["과일향"],
        taste: null
      },
      reviews: ["푸른빛 캡슐에서 시원함과 청량감이 느껴져요. '나는 아이스 커피를 위해 태어났어'라고 말하는 듯합니다. 얼음 가득한 잔에 더블 에스프레소를 내릴 때 고소한 향이 은은하게 퍼져요. '아아'가 땡길 때면 레제로가 생각납니다.", "아이스 레제로는 여름마다 즐겨 마셔요. 적당한 산미와 더블 에스프레소 용량이 아이스 아메리카노에 딱이라서 남긴 적이 없어요! 강도도 적당하고, 산뜻해서 브런치나 디저트와 함께하기 좋네요!"],
      recipes: ["cafe-la-shower-v"]
    }
  },
  {
    pid: "rio-de-janeiro",
    sid: "coffee",
    info: {
      cid: "오리지널",
      img: "rio_de_janeiro.avif",
      title: "리우데자네이루",
      price: 7500,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 9", "에스프레소(40ml)"]
    },
    detail: {
      img: "rio_de_janeiro_detail.JPG",
      intro: "리우데자네이루를 닮은 허브향",
      text: {
        description: "기분 좋은 쓴맛과 벨벳처럼 부드러운 질감을 지닌 브라질산 아라비카를 다크 로스팅 하여 묵직한 바디감에 이국적인 허브 향과 월넛, 샌들우드의 조화가 돋보이는 커피입니다. 에스프레소에 같은 양의 따뜻한 물을 추가하여 리우 스타일의 부드러운 커피, 카리오카를 즐겨보세요.",
        aromas: ["스파이시향"],
        taste: {
          body: 4,
          bitter: 4,
          acidity: 2,
          roasting: 4
        }
      },
      reviews: null,
      recipes: ["ginger-espresso-tonic"]
    }
  },
  {
    pid: "roasted-hazelnut-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "roasted_hazelnut.avif",
      title: "로스티드 헤이즐넛향 커피",
      price: 11000,
      capsule: 10,
      tags: ["머그 230ml"],
      sizes: ["머그(230ml)"]
    },
    detail: {
      img: "roasted_hazelnut_detail.JPG",
      intro: "달콤한 휴식",
      text: {
        description: "라이트 로스팅 아라비카 블렌드에 캐러멜라이즈 견과류향이 감싸 거부할 수 없는 달콤한 휴식을 제공합니다. 달콤한 비스킷향과 곡물향의 섬세한 아라비카 베이스에 로스티드 향이 만나 기쁨을 더합니다.",
        aromas: ["헤이즐넛향", "Flavoured"],
        taste: {
          body: 2,
          bitter: 1,
          acidity: 1,
          roasting: 2
        }
      },
      reviews: null,
      recipes: null
    }
  },
  {
    pid: "double-espresso-dolce-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "double_espresso_dolce.avif",
      title: "더블 에스프레소 돌체",
      price: 8700,
      capsule: 10,
      tags: ["더블 에스프레소 80ml"],
      sizes: ["강도 5", "더블 에스프레소(80ml)"]
    },
    detail: {
      img: "double_espresso_dolce_detail.JPG",
      intro: "부드럽고 달콤한 곡물향",
      text: {
        description: "브라질과 멕시코 원두의 맥아향과 우간다 원두의 고소한 곡물향을 블렌드 하여 달콤함과 부드러움을 전하는 균형 잡힌 커피입니다.",
        aromas: ["곡물향", "캐러멜향", "맥아향"],
        taste: {
          body: 3,
          bitter: 2,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: ["라테를 좋아하시는 분이라면 더블 에스프레소 돌체를 추천드립니다. 우유 고유의 고소한 맛을 해치지 않으면서 묵직한 에스프레소의 맛이 어우러져 어느 카페에서도 맛볼 수 없는 라테를 마실 수 있습니다. 바로 우리 집에서요!", "더블 에스프레소 돌체는 투샷이라 그런지 진한 커피 풍미가 확실히 느껴진달까. 달달한 돌체 시럽과 우유를 곁들이면, 부드럽고 크리미해서 정말 꿀맛입니다^^ 에너지 충전할 때 필요한 커피에요! 아이스로 즐기면 완벽하죠~ 만족도 200%!! 또 사러 가야겠네요."],
      recipes: ["honey-oat-latte-v", "dolce-americano-v", "ice-dolce-latte-v"]
    }
  },
  {
    pid: "diavolitto-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "diavolitto.avif",
      title: "디아볼리토",
      price: 7700,
      capsule: 10,
      tags: ["에스프레소 40ml"],
      sizes: ["강도 11", "에스프레소(40ml)"]
    },
    detail: {
      img: "diavolitto_detail.jpg",
      intro: "매우 진하고 강렬한 풍미",
      text: {
        description: "커피 마니아를 위한 강도 높은 에스프레소로, 과테말라와 니카라과의 원두 블렌드를 강하게 로스팅하여 진하고 강렬한 풍미와 크리미한 질감이 균형을 이루는 커피입니다.\n 깊은 바디감을 가진 디아볼리토에 우유를 더해 라테로 즐겨보세요. 강렬한 커피 풍미가 우유의 고소함과 만나 더욱 진하고 풍부한 바디감의 라테를 즐길 수 있습니다.",
        aromas: ["강한 로스팅향", "스파이시향", "우디향"],
        taste: {
          body: 5,
          bitter: 4,
          acidity: 2,
          roasting: 5
        }
      },
      reviews: null,
      recipes: ["maple-latte-v"]
    }
  },
  {
    pid: "ginseng-delight-v",
    sid: "coffee",
    info: {
      cid: "버츄오",
      img: "ginseng_delight.avif",
      title: "진생 딜라이트",
      price: 11000,
      capsule: 10,
      tags: ["더블 에스프레소 80ml", "아이스"],
      sizes: ["더블 에스프레소(80ml)"]
    },
    detail: {
      img: "ginseng_delight_detail.jpg",
      intro: "인삼 추출물을 함유한 달콤한 캐러멜향 더블 에스프레소",
      text: {
        description: "브라질 산 아라비카 원두에 습식 가공한 멕시코 아라비카 원두와 우간다 로부스타를 블렌드한 커피에 달콤한 캐러멜향과 인삼 추출물이 함유되어 있습니다.\n 은은한 인삼향에 캐러멜과 고소한 비스킷 케이크의 향이 어우러져, 마치 홍삼 캔디를 머금은 듯 부드럽고 부담 없이 즐길 수 있는 커피입니다.\n 달콤한 향미가 특징으로, 얼음 2 : 우유 1 : 커피 1의 비율로 아이스 라테로 즐기면 더욱 풍성한 맛을 경험할 수 있습니다.",
        aromas: ["캐러멜향"],
        taste: {
          body: 3,
          bitter: 2,
          acidity: 3,
          roasting: 3
        }
      },
      reviews: null,
      recipes: null
    }
  },
]

export default coffees;