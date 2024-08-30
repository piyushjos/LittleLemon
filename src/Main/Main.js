import styles from "./Main.module.css";
import myImage from "../../src/assets/restauranfood.jpg";
import greekSalad from '../../src/assets/greek salad.jpg'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <h1 className={styles.h1}>Little Lemon</h1>
          <h3 className={styles.h3}>Chicago</h3>
          <p className={styles.p}>
            Lorem ipsu jashbd jashdbmas njkasbdmans djaksd{" "}
          </p>
          <p className={styles.p}>asmndbasjd xasjkbx</p>
          <p className={styles.p}>asnmx ajnsx amncxb</p>
          <button className={styles.button}>Reserave a table</button>
        </div>
        <div>
          <img
            src={myImage}
            alt="Description of the image"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              marginTop: 60,
            }}
          />
        </div>
      </div>
      <div className={styles.section2}>
        <div></div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={styles.h2}>This Week Specials</h1>
        </div>

        <div style={{ marginTop: "30px", marginLeft: "80px" }}>
          <button className={styles.button}>Online Menu</button>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.card}>
          <img src={greekSalad} alt="Delicious Dish" class="card-image" style={{
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              marginTop: 60,
            }}/> 
          <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
              <h2>Greek Salad</h2>
              <span class={styles.price}>$15.99</span>
            </div>
            <p class={styles.carddescription}>
              This is a delicious dish made with fresh ingredients, cooked to
              perfection, and served with a side of your choice. It's the
              perfect meal for any occasion!
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={greekSalad} alt="Delicious Dish" class="card-image" style={{
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              marginTop: 60,
            }}/> 
          <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
              <h2>Greek Salad</h2>
              <span class={styles.price}>$15.99</span>
            </div>
            <p class={styles.carddescription}>
              This is a delicious dish made with fresh ingredients, cooked to
              perfection, and served with a side of your choice. It's the
              perfect meal for any occasion!
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={greekSalad} alt="Delicious Dish" class="card-image" style={{
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              marginTop: 60,
            }}/> 
          <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
              <h2>Greek Salad</h2>
              <span class={styles.price}>$15.99</span>
            </div>
            <p class={styles.carddescription}>
              This is a delicious dish made with fresh ingredients, cooked to
              perfection, and served with a side of your choice. It's the
              perfect meal for any occasion!
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={greekSalad} alt="Delicious Dish" class="card-image" style={{
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              marginTop: 60,
            }}/> 
          <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
              <h2>Greek Salad</h2>
              <span class={styles.price}>$15.99</span>
            </div>
            <p class={styles.carddescription}>
              This is a delicious dish made with fresh ingredients, cooked to
              perfection, and served with a side of your choice. It's the
              perfect meal for any occasion!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Main;
