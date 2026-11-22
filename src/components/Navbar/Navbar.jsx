import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import ukFlag from "../../assets/images/uk-flag.png";
import jpFlag from "../../assets/images/jp-flag.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.items}>
        <div className={styles.app__title}>
          <Link to="/">@Tisho</Link>
        </div>
        <div className={styles.left__items}>
          <div className={styles.content__links}>
            <Link to="/about">About me</Link>
            <Link to="/projects">My projects</Link>
            <Link to="/thoughts">My thoughts</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles.flag__wrapper}>
            <button aria-label="English">
              <img src={ukFlag} alt="English" />
            </button>

            <button aria-label="Japanese">
              <img src={jpFlag} alt="Japanese" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
