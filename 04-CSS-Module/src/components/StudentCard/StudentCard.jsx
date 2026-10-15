import styles from "./StudentCard.module.css";

function StudentCard() {
  return (
    <div className={styles.card} id="profile">
      <div className={styles.avatar}>JH</div>

      <h2>Jay Hingu</h2>
      <p className={styles.role}>React Developer</p>

      <div className={styles.skills}>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
      </div>

      <button className={styles.button}>
        View Profile
      </button>
    </div>
  );
}

export default StudentCard;