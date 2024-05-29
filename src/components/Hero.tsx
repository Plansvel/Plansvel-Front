import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";

import { Button } from "./ui";

const odor = Odor_Mean_Chey({ weight: ["400"], subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative w-full bg-black lg:h-[80vh] text-white overflow-hidden md:h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute z-10 w-full h-full object-cover opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="container relative z-20 flex flex-col justify-center items-center h-full text-center py-16 md:py-0">
        <h1
          className={clsx(
            odor.className,
            "text-4xl font-medium leading-tight tracking-wide mb-4 md:text-6xl",
          )}
        >
          Plansvel
        </h1>
        <p className="text-sm text-gray-300 mb-8 md:text-lg">
          Discover amazing features and services that await you.
        </p>
        <Button content="Sobre Nós" size="lg" />
      </div>
    </section>
  );
}
