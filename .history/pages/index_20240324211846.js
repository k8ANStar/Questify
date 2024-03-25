import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
     
							<ul className={styles.nav}>
							<li>
								<Link
									ref={homeRef}
									href={"/"}
									className={addMobileStyle("home")}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									ref={aboutRef}
									href={"/About"}
									className={addMobileStyle("about")}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									ref={contactRef}
									href={"/Contact"}
									className={addMobileStyle("contact")}
								>
									Contact Us
								</Link>
							</li>
						</ul>
      </main>
    </>
  );
}
