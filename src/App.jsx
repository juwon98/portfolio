import { Helmet } from "react-helmet-async";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
    </div>
  );
}

export default App;
