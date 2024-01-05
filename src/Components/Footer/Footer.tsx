import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div>
        <ul>
          <li>The Royal Canine</li>
          <li>business hours</li>
          <li>location</li>
        </ul>
      </div> */}
      <div className={styles.brandName}>
        <p>
          © 2024 The Royal Canine. Website created by{" "}
          <a href="https://www.kenzietechsolutions.com/">
            Kenzie Tech Solutions LLC
          </a>
        </p>
      </div>
    </div>
  );
};
