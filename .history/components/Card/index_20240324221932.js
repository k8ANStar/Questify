import styles from "./Card.module.css";
import Image from "next/image";

export default function Card() {
	return (
		<div>
			<section className={styles.cardContainer}>
				<Image
					className={styles.image}
					src="/images/image1.jpeg"
					width={230}
					height={120}
				/>
				<div className={styles.cardContents}>
					<h2>Name of Creator</h2>
					<p>Description</p>
				</div>
			</section>
		</div>
	);
}
