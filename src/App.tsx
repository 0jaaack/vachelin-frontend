import Suggest from "./components/Suggest";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header__logo-container">
          <img
            className="app__header__logo-img"
            src="../../logo.png"
            alt="vanilla-coding-logo"
          />
        </div>
      </div>
      <div className="app__content">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
