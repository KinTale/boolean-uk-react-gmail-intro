import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";
import MainHeader from "./main-header.jsx";
import MainFooter from "./main-footer.jsx";
import '../styles/main-body.css'

const Main = () => {
  return (
    <main className="email-view">
      <MainHeader />
      <article className="email-content">
        <section className="email-body">
          <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
          </div>
        </section>
        <MainFooter />
      </article>
    </main>
  );
};

export default Main;
