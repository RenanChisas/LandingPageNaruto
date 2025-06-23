import { Autoplay } from "swiper/modules";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
export function Galeria() {
  const data = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/736x/07/1b/73/071b73fae93eadb7763bd87a415aa362.jpg",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/736x/fc/f0/4f/fcf04fab39807d23a4a35726474c3231.jpg",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/736x/ca/29/39/ca2939bbb8f43d43534c73c598fe11d1.jpg",
    },
    {
      id: "4",
      image:
        "https://i.pinimg.com/736x/e0/68/24/e0682410c3dcacf99a553f073b1bd6da.jpg",
    },
    {
      id: "5",
      image:
        "https://i.pinimg.com/736x/85/af/f6/85aff6cd689653627da6a1a22f2b4dd4.jpg",
    },
    {
      id: "6",
      image:
        "https://i.pinimg.com/736x/33/b2/2b/33b22b320c3cd3737eaa7d12d9d6926b.jpg",
    },
    {
      id: "7",
      image:
        "https://i.pinimg.com/736x/28/14/d3/2814d3f4b243a87d2150363729f3d732.jpg",
    },
    {
      id: "8",
      image:
        "https://i.pinimg.com/736x/70/2c/ce/702cce2c1d2595a948c43ae6a3eb4cfa.jpg",
    },
    {
      id: "9",
      image:
        "https://i.pinimg.com/736x/e1/84/fd/e184fd255e1abd212a6332f3793f30c4.jpg",
    },
    {
      id: "10",
      image:
        "https://i.pinimg.com/736x/04/16/af/0416af7f9ad676704340e317a39cb059.jpg",
    },
    {
      id: "11",
      image:
        "https://i.pinimg.com/736x/87/1f/f5/871ff5cb652fdd3192a948b8c25c6ba1.jpg",
    },
    {
      id: "12",
      image:
        "https://i.pinimg.com/736x/fb/c3/0a/fbc30af8546232082d7c18660edb171a.jpg",
    },
  ];

  return (
    <div className={styles.head}>
      <div>
        <p>Momentos do Time 7</p>
      </div>
      <div>
        <Swiper
          slidesPerView={7}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay]}
        >
          {data.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={img.image} alt="" className={styles.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
