import Image from "next/image";
import Example from "./components/encrypt-text/EncryptedText";
import { GridHoverHero } from "./components/hero/Hero";
import { Navbar } from "./components/nav/Navbar";
import { CountUpStats } from "./components/stats/Stats";
import DoubleScrollingLogos from "./components/trusted/trusted";
import Card from "./components/card/card";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <GridHoverHero />
      <Navbar />
    </div>

  );
}
