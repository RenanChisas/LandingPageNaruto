import styles from "./styles.module.css";

export function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.text}>
        <h2>Time 7: Clássico dos Clássicos</h2>
        <p>
          O Time 7 é uma equipe de ninjas da Vila da Folha formada por Naruto
          Uzumaki, Sasuke Uchiha e Sakura Haruno, sob liderança do sensei
          Kakashi Hatake.
        </p>

        <a href="" className={styles.button}>
          {" "}
          Ver Sobre
        </a>
      </div>
      <div className={styles.img}>
        <img src="/public/content/team7BG.png" />
      </div>
    </div>
  );
}
