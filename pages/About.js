import Card from "@/components/Card";
import Header from "@/components/Header";
import styles from "@/styles/About.module.css/";
import Footer from "@/components/Footer";

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
            <Card 
            name="Leslie Chan" 
            description={
              <>
              Leslie a designer from Hong Kong speacialing in infusing modern creations with tradition.
              In her spare time she enjoys playing and lisenting to music and getting lost in art. Exploring
              unique ideas and bringing them to life.
              </>
            }
            />
          </li>
          <li className={styles.cardThree}>
            <Card
              name="Parnell Tse"
              description={
                <>
                  Let's introduce Parnell, coming from the lovely city of Vancouver. 
                  <br />
                  As a Designer, Parnell brings a creative touch and a lot of heart to his work.
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
      <Footer />
    </div>
  );
}
