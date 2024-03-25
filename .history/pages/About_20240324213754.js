import Card from "@/components/Card";
export default function About() {
	return (
		<div>
			<div className={styles.card}>
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
