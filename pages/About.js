import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/About.module.css/";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <Header />
      <div className={styles.cardList}>
        <ul className={styles.list}>
          <li className={styles.cardOne}>
            <Card name="Katelyn Starchuk" />
          </li>
          <li className={styles.cardTwo}>
            <Card name="Leslie Chan" />
          </li>
          <li className={styles.cardThree}>
            <Card
              name="Parnell Tse"
              description={
                <>
                  Let's introduce Parnell, coming from the lovely city of Vancouver. 
				  <br />
				  As a UX/UI Designer, Parnell brings a creative touch and a lot of heart to his work.
                  <br />
                  With a keen eye for detail, he enjoys exploring new ideas and crafting designs that resonate with people.
                  <br />
                  His approach blends technical skills with creativity, allowing him to create work that speaks for itself.
                </>
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
