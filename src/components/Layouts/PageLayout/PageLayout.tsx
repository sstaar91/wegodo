import { useNavigate } from "react-router-dom";
import css from "./PageLayout.module.scss";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <main>
      <header className={css.header}>
        <div className={css.logo}>{"> we"}</div>
        <nav className={css.nav}>
          <ul className={css.navBox}>
            <li className={css.navItem} onClick={() => navigate("/")}>
              HOME
            </li>
            <li className={css.navItem} onClick={() => navigate("/project")}>
              PROJECTS
            </li>
            <li className={css.navItem} onClick={() => navigate("/contact")}>
              CONTACT
            </li>
          </ul>
        </nav>
      </header>
      <section className={css.content}>{children}</section>
    </main>
  );
};

export default PageLayout;
