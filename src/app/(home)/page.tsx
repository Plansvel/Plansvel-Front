"use client";

import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
import { IoSearchCircle, IoBed, IoPerson, IoCalendar } from "react-icons/io5";

import {
  Button,
  DatePicker,
  PopularDestinationListing,
  Input,
} from "@/components";

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
          <DatePicker icon={IoCalendar} iconPosition="left" />
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

        <PopularDestinationListing />

        <section className="flex justify-between mb-16 mt-14">
          <div className="flex-grow flex items-center px-10 pb-10">
            <div className="grid grid-cols-12 grid-rows-1">
              <Image
                src="/rj-beach.jpg"
                alt="vagabunda"
                width={500}
                height={500}
                className="row-[1] col-[1/span_8] z-10"
              />
              <Image
                src="/rj-beach.jpg"
                alt="vagabunda"
                width={500}
                height={600}
                className="border-8 border-white row-[1] col-[4/-1] transform translate-y-10 z-20 self-end"
              />
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold tracking-wide">
              Coisas Que Você Precisa <br /> Prepare-se{"  "}
              <span className="text-primary">Antes De Viajar</span>
            </h2>
            <ol className="flex flex-col gap-4 mt-7" type="1">
              <li>
                <h3 className="text-xl">
                  01. <span className="font-semibold">Melhor Comida</span>
                </h3>
                <p className="capitalize ml-[30px]">
                  Nós fornecemos os alimentos da melhor qualidade aos nossos
                  clientes.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  02.{" "}
                  <span className="font-semibold">Melhor Plano de Viagem</span>
                </h3>
                <p className="capitalize ml-[33px]">
                  Oferecemos os melhores pacotes de viagens para você.
                </p>
              </li>
              <li>
                <h3 className="text-xl">
                  03. <span className="font-semibold">Melhores Voos</span>
                </h3>
                <p className="capitalize ml-[34px]">
                  Nós oferecemos o melhor voo e experiência de nossa companhia
                  aérea confiável
                </p>
              </li>
            </ol>
          </div>
        </section>
      </section>
    </>
  );
}
