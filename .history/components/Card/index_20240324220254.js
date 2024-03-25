import styles from './Card.module.css'
import Image from 'next/image';

export default function Card() {
	return (
		<div>
			<section className={styles.cardContainer}>
				<div><Image/></div>
				<h2>Name of Creator</h2>
				<p>Description</p>
			</section>
		</div>
	);
}
