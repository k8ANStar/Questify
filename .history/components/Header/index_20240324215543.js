import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {
	return (
		<>
			<ul className={styles.nav}>
				<li>
					<Link href={"/"} className={styles.home}>
						Home
					</Link>
				</li>
				<li>
					<Link href={"/About"} className={styles.about}>
						About
					</Link>
				</li>
				<li>
					<Link href={"/Settings"} className={styles.settings}>
						Settings
					</Link>
				</li>
			</ul>
		</>
	);
}
