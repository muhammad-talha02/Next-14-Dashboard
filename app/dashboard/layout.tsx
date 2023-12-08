import { Footer, Navbar, Sidebar } from "../ui/dashboard";
import styles from "./dashboard.module.css";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          <div className="mx-3">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default layout;
