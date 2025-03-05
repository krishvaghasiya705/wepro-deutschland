import Weprologo from "@/assets/icons/weprologo";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <div className={styles.headerlogo}>
          <Weprologo />
        </div>
      </Link>
    </header>
  );
}
