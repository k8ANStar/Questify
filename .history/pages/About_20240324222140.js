import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/About.module.css/";

export default function About() {
	return (
		<div className={styles.aboutPage}>
			<Header />
			<div className={styles.cardList}>
				<ul className={styles.list}>
					<li className={styles.cardOne}>
						<Card />
					</li>
					<li className={styles.cardOne}>
						<Card />
					</li>
					<li>
						<Card />
					</li>
				</ul>
			</div>
		</div>
	);
}
