import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";

import { Button, Input } from "@/components";

const odor = Odor_Mean_Chey({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-section1.jpeg"
            alt="Background Image"
            objectFit="cover"
            layout="fill"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1
            className={clsx(
              odor.className,
              "text-5xl font-bold leading-tight mb-4",
            )}
          >
            Plansvel
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <Button content="Sobre Nós" />
        </div>
      </section>

      <div className="flex items-center gap-2 bg-primary rounded-sm p-1 my-5 w-11/12">
        <Input />
        <Input />
        <Input />
        <Button
          leftIcon={IoSearchCircle}
          variant="secondary"
          content="Pesquisar"
        />
      </div>
    </>
  );
}
