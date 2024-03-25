import Card from "@/components/Card";
import Header from "@/components/Header";
export default function About() {
	return (
		<div>
			<Header />
			<div className={styles.cardList}>
				<ul>
					<li>
						<Card />
					</li>
					<li>
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