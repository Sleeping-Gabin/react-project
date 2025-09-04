## 소개
네스프레소 사이트의 일부를 리엑트를 사용하여 리뉴얼한 사이트  
커피 캡슐을 판매하고, 커피를 활용한 레시피와 커피 레터를 소개  
<br>

### 원본 사이트
[네스프레소](https://www.nespresso.com/kr/ko)  
모든 이미지와 콘텐츠 내용에 대한 저작권은 네스프레소에 있습니다.  
포트폴리오 용도로만 사용되었습니다.  
<br>

### 배포 주소
[배포 주소](https://sleeping-gabin.github.io/react-project/)  
<br>

### 기획서
[기획서](https://github.com/Sleeping-Gabin/react-project/raw/main/plan_react.pdf)  
<br>

### 사용 기술
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![react bootstrap](https://img.shields.io/badge/react_bootstrap-41E0FD?style=for-the-badge&logo=reactbootstrap&logoColor=white)
![css modules](https://img.shields.io/badge/css_modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)  

- redux toolkit
  - 찜하기 / 장바구니 구현
- bootstrap
  - Modal: 장바구니 추가 시 모달창
- module.css
  - Coffee, Recipe 컴포넌트에 활용  
<br>

### 프로젝트 진행 과정
- 2025.07.28 ~ 2025.08.01 : 기획
- 2025.08.01 ~ 2025.08.08 : 개발  

<br><br>

## 페이지
|메인 페이지   |커피 목록   |레시피 목록   |커피 레터   |
|:----------:|:---------:|:----------:|:---------:|
|![메인](https://github.com/user-attachments/assets/feaef465-6a7b-49ae-ab26-178dd173acc6)|![커피 목록](https://github.com/user-attachments/assets/bd9cf816-abc2-412a-bdd1-1a657fe25dbe)|![레시피 목록](https://github.com/user-attachments/assets/67ab5f7c-d668-43f0-9ff5-a721032c6eba)|![커피 레터](https://github.com/user-attachments/assets/518d1250-4858-4853-b36e-da0ec085fb56)|
|커피 상세   |레시피 상세   |찜 목록   |장바구니   |
|![커피](https://github.com/user-attachments/assets/1731a31b-b28f-4eee-9341-e356933c753b)|![레시피](https://github.com/user-attachments/assets/d915b6b8-5dda-441f-a032-426d705ba2e5)|![찜 목록](https://github.com/user-attachments/assets/d87af352-c281-4a64-a349-109e3c62535c)|![장바구니](https://github.com/user-attachments/assets/b5fb9ef4-5c43-4da9-8327-39e9ad678e92)|

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
// src/components/ListTitle.js

export default function ListTitle(props) {
  const {sid, data, setItems} = props;
  const [selectTag, setSelectTag] = useState();

  ...

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
      ...
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
      ...
      <HeartIcon className="heart-icon" onClick={handleClickLike}/>
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
    deleteCartItem: (state, action) => { /*...*/ },
    deleteAllCart: (state) => { /*...*/ },
    increaseCartItem: (state, action) => { /*...*/ },
    decreaseCartItem: (state, action) => { /*...*/ }
  }
});
```
</details>

장바구니 버튼으로 장바구니에 상품을 추가한다.  
장바구니 페이지에서 상품의 수량을 변경하거나 삭제할 수 있다.  
헤더에 상품 수량이 표시되고, 장바구니 페이지에서 합계 금액을 볼 수 있다.  

<br><br>
