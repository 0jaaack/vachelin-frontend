import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page__container">
      <div className="main-page__title">
        <div className="main-page__title__logo-container">
          <img
            className="main-page__title__logo-img"
            src="../../favicon.ico"
            alt="ken-width-cook-image"
          />
        </div>
        <p className="main-page__title__text-main">
          귀찮은 메뉴 고민<br />
          바슐랭으로 해결하세요
        </p>
        <p className="main-page__title__text-sub">
          바로 앞 불고기 맛집부터 미슐랭 맛집들까지,<br />
          삼성역 근처 구석구석 맛집을 선택해줄게요.<br />
          메뉴 걱정은 바슐랭에게 맡기고<br />
          코딩에만 집중하세요
        </p>
      </div>
      <ul className="main-page__menu-list">
        <li className="main-page__menu-item">
          <a href="/">랜덤 메뉴 추천</a>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
