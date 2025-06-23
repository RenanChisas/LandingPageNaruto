import styles from "./styles.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
type PersonagemProps = {
  name: string;
  describe: string;
  image: string;
  bg: boolean;
};

export function Personagem(data: PersonagemProps) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 900px",
        end: "bottom 300px",
        scrub: true,
      },
    });
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef2.current, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 900px",
        end: "bottom 300px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={data.bg ? styles.head1 : styles.head2} ref={containerRef}>
      {data.bg ? (
        <div className={styles.container}>
          <div className={styles.title} ref={titleRef}>
            <h2>{data.name}</h2>
            <p>{data.describe}</p>
          </div>
          <div className={styles.img}>
            <img src={data.image} alt="" />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.title} ref={titleRef2}>
            <h2>{data.name}</h2>
            <p>{data.describe}</p>
          </div>
        </div>
      )}
    </div>
  );
}
