import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <p>Hello</p>
      </footer>
    </div>
  );
};

export default Home;
