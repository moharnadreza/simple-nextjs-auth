import { type ReactNode } from "react";
import styles from "./PageWrapper.module.scss";

type Props = {
  title?: string;
  children: ReactNode;
};

const PageWrapper = ({ title, children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
