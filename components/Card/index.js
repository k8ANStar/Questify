import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ name, description }) {
	return (
		<div>
			<section className={styles.cardContainer}>
				<Image
					className={styles.image}
					src="/pig.png"
					width={250}
					height={120}
				/>
				<div className={styles.cardContents}>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</section>
		</div>
	);
}
