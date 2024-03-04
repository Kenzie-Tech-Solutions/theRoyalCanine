import styles from "./NewsLetterBox.module.css";

export const NewsLetterBox = () => {
  return (
    <div className={styles.newsLetterBoxWrapper}>
      <div>
        <h2>Newsletter</h2>
      </div>
      <div>
        <p>Subscribe to our newsletter and stay connected!</p>
      </div>
      <div>
        <form
          className={styles.newsLetterForm}
          action="https://getform.io/f/zazomrpb"
          method="POST"
        >
          <input
            name="email"
            className={styles.emailInput}
            type="text"
            placeholder=" Email Address"
          />
          <input
            name="submit"
            className={styles.emailSubmit}
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};
