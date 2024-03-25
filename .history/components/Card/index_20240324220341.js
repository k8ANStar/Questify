import styles from './Card.module.css'
import Image from 'next/image';

export default function Card() {
	return (
		<div>
			<section className={styles.cardContainer}>
				<Image />
				<div></div>
				
			</section>
		</div>
	);
}
