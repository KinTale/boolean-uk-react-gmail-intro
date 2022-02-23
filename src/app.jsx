import "./styles/app.css";
import Main from "./Main/main-body.jsx";
import Header from "./header/header.jsx";
import LeftMenu from "./left-menu/left-menu.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
