
import styles from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
