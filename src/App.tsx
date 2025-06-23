import { Galeria } from "./components/Galeria";
import { Head } from "./components/Head";

import { register } from "swiper/element/bundle";
register();

import "./styles/global.css";
import "swiper/css";
import { Personagem } from "./components/Personagem";
import { personagensDB } from "./types/db";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Head />
      <Galeria />
      {personagensDB.map((data) => (
        <Personagem {...data} />
      ))}
      <Footer />
    </>
  );
}
