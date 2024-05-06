import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoSearchCircle, IoBed, IoPerson, IoCalendar } from "react-icons/io5";

import { Button, DatePicker, DestinataryCard, Input } from "@/components";

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

      <section className="w-full px-14">
        <div className="flex items-center gap-2 bg-primary rounded-sm p-1 mt-10 mb-5">
          <Input
            icon={IoBed}
            iconPosition="left"
            placeholder="Para onde você vai?"
          />
          <DatePicker showIcon icon={<IoCalendar />} />
          <Input
            icon={IoPerson}
            iconPosition="left"
            placeholder="Quantidade de pessoas"
            type="number"
            min={1}
          />
          <Button
            leftIcon={IoSearchCircle}
            variant="secondary"
            content="Pesquisar"
            className="flex-shrink-0"
          />
        </div>

        <div className="my-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              <span className="text-primary">Destinos</span> <br /> Populares
            </h2>
            <div className="flex items-center gap-1">
              <Button size="icon" leftIcon={FaArrowLeft} circular />
              <Button size="icon" leftIcon={FaArrowRight} circular />
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-1 gap-4 mt-5">
            <DestinataryCard />
            <DestinataryCard />
            <DestinataryCard />
            <DestinataryCard />
          </div>
        </div>
      </section>
    </>
  );
}
