import { Helmet } from "react-helmet-async";
import Header from "./components/Header/Header";
import Thanks from "./assets/img/thanks.jpeg";
import Devider from "./components/Devider/Devider";
import Button from "./components/Button/Button";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
      <div className="main-section">
        <img src={Thanks} alt="배경" className="image" />

        <h1 className="main-title font-title-large">장주원</h1>
        <h1 className="main-title font-title-large">프론트엔드 개발자</h1>
        <Devider style={{ margin: "20px 0px 20px 0px", width: "200px" }} />
        <h2 className="main-description font-title-medium">asdf</h2>
        <Button type="more" label="더 알아보기" onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
