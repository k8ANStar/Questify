import styles from './Card.module.css'
import Image from 'next/image';

export default function Card() {
	return (
		<div>
			<sectionclassName={styles.cardContainer}>
				<div><Image/></div>
				<h2>Name of Creator</h2>
				<p>Description</p>
			</sectionclassName=>
		</div>
	);
}
