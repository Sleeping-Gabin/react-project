## 소개
네스프레소 사이트의 일부를 리엑트를 사용하여 리뉴얼한 사이트
커피 캡슐을 판매하고, 커피를 활용한 레시피와 커피 레터를 소개  
<br>

### 원본 사이트
[네스프레소](https://www.nespresso.com/kr/ko)  
모든 이미지와 콘텐츠 내용에 대한 저작권은 네스프레소에 있습니다.  
포트폴리오 용도로만 사용되었습니다.  
<br>

### 기획서
[기획서]()  
<br>

### 사용 기술
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![bootstrap](  https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)  

- redux toolkit
  - 찜하기 / 장바구니 구현
- bootstrap
  - Modal: 장바구니 추가 시 모달창 (MyModal.js)
- module.css
  - Coffee, Recipe 컴포넌트에 활용  
<br>

### 프로젝트 진행 과정
- 2025.07.28 ~ 2025.08.01 : 기획
- 2025.08.01 ~ 2025.08.08 : 개발  

<br><br>

## 라우팅 구조
``` jsx
<Routes>
  <Route index element={<Home />} />
  <Route path="list/coffee" element={<ListCoffee />} />
  <Route path="list/recipe" element={<ListRecipe />} />
  <Route path="coffee/:pid" element={<DetailCoffee />} />
  <Route path="recipe/:pid" element={<DetailRecipe />} />
  <Route path="letter" element={<Letter />} />
  <Route path="cart" element={<Cart />} />
  <Route path="like" element={<Like />} />
</Routes>
```

<br>

## 기능
- 커피/레시피 목록 및 상세 정보 보기
- 커피 레터 보기
- 커피/레시피 필터링
- 커피/레시피 찜 목록에 추가/해제
- 커피 장바구니에 추가
- 장바구니 상품 수량 변경
- 장바구니 상품 삭제
- 장바구니 상품 전체 삭제

<br>

## 구현 내용
### 커피/레시피 필터링
![필터링](https://github.com/user-attachments/assets/3c7a0721-a170-4b04-ad5d-a33a985d8605)
<details>
<summary>코드 보기</summary>

```jsx
// src/components/ListCoffee.js

export default function ListCoffee() {
  const [coffees, setCoffees] = useState(data);

  return (
    <div>
      <ListTitle sid="coffee" data={data} setItems={setCoffees} />
      <div className="list">
        {coffees.map((coffee) => <Coffee key={coffee.pid} coffee={coffee} />)}
      </div>
    </div>
  )
}
```

```jsx
// src/components/ListTitle.js

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
```
</details>

태그 칩을 선택하면 해당 태그가 포함된 상품만 필터링하여 보여준다.  
선택된 칩을 한번 더 클릭하면 필터링이 해제된다.  
<br>

### redux toolkit을 사용한 찜목록/장바구니
![찜](https://github.com/user-attachments/assets/413ead5f-2b92-441d-9f43-4cb25c507564)

<details>
<summary>코드 보기</summary>

```js
// src/components/store.js

const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    toggleLikeItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload.pid);

      if (idx < 0) {
        state.push(action.payload);
      }
      else {
        state.splice(idx, 1);
      }
    }
  }
});
export const { toggleLikeItem } = likeSlice.actions;

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
    modal: modalSlice.reducer
  }
});
```

```jsx
// src/components/Like.js

function LikeItem(props) {
  const {pid, sid, info} = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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
```
</details>

하트 아이콘을 클릭하여 찜 목록에 커피/레시피를 추가하고 해제할 수 있다.  
찜 목록에서 하트 클릭 시 해제된다.  
<br>

![장바구니](https://github.com/user-attachments/assets/6d891dca-6b73-4c5a-86a3-156d7740db42)

<details>
<summary>코드 보기</summary>

```js
// src/components/store.js

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload.pid);

      if (idx < 0) {
        state.push(action.payload);
      }
      else {
        state[idx].count++;
      }
    },
    deleteCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state.splice(idx, 1);
    },
    deleteAllCart: (state) => {
      state.splice(0, state.length);
    },
    increaseCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state[idx].count++;
    },
    decreaseCartItem: (state, action) => {
      let idx = state.findIndex(item => item.pid === action.payload);
      state[idx].count--;

      if (state[idx].count <= 0) {
        state.splice(idx, 1);
      }
    }
  }
});
export const { addCartItem, deleteCartItem, deleteAllCart, increaseCartItem, decreaseCartItem } = cartSlice.actions;
```

```jsx
// src/components/Cart.js

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
        <p>{count}</p>
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
```
</details>

장바구니 버튼으로 장바구니에 상품을 추가한다.  
장바구니 페이지에서 상품의 수량을 변경하거나 삭제할 수 있다.  
헤더에 상품 수량이 표시되고, 장바구니 페이지에서 합계 금액을 볼 수 있다.  

<br><br>
