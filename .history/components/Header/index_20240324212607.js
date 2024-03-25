export default function Header() {
	return (
		<>
			<ul className={styles.nav}>
				<li>
					<Link ref={homeRef} href={"/"} className={styles.home}>
						Home
					</Link>
				</li>
				<li>
					<Link ref={aboutRef} href={"/About"} className={styles.about}>
						About
					</Link>
				</li>
				<li>
					<Link
						ref={contactRef}
						href={"/Setting"}
						className={styles.contact}
					>
						Contact Us
					</Link>
				</li>
			</ul>
		</>
	);
}
