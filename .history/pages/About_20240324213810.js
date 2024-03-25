import Card from "@/components/Card";
export default function About() {
	return (
        <Header/>
		<div>
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
