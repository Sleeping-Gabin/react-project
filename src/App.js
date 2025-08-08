import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/style.css";

import { Route, Routes } from "react-router";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ListCoffee from "./components/ListCoffee";
import ListRecipe from "./components/ListRecipe";
import DetailCoffee from "./components/DetailCoffee";
import DetailRecipe from "./components/DetailRecipe";
import MyModal from "./components/MyModal";
import Cart from "./components/Cart";
import Like from "./components/Like";
import Letter from "./components/Letter";

function App() {
  const Wrap = styled.div`
    width: 1240px;
    min-height: 100vh;
    margin: 0 auto;
  `

  return (
    <div className="App">
      <Header />
      <Wrap>
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
      </Wrap>
      <Footer />
      <MyModal/>
    </div>
  );
}

export default App;
