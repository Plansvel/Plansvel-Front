"use client";

import Image from "next/image";
import { IoSearchCircle, IoBed, IoPerson, IoCalendar } from "react-icons/io5";

import {
  Button,
  DatePicker,
  PopularDestinationListing,
  Input,
  Hero,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="w-full mb-5 md:container md:mt-10">
        <div className="flex flex-col items-center gap-4 bg-primary rounded-sm pb-4 pt-5 px-10 md:gap-2 md:p-1 md:flex-row">
          <Input
            icon={IoBed}
            iconPosition="left"
            placeholder="Para onde você vai?"
            className="w-full"
          />
          <DatePicker icon={IoCalendar} iconPosition="left" />
          <Input
            icon={IoPerson}
            iconPosition="left"
            placeholder="Quantidade de pessoas"
            type="number"
            min={1}
            className="w-full"
          />
          <Button
            leftIcon={IoSearchCircle}
            variant="secondary"
            content="Pesquisar"
            className="flex-shrink-0 mt-3 md:mt-0"
          />
        </div>
      </section>

      <PopularDestinationListing />

      <section className="container flex flex-col justify-between mb-16 mt-14 md:flex-row">
        <div className="flex-grow flex items-center pb-10 md:px-10">
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
          <h2 className="text-xl font-bold tracking-wide md:text-2xl mt-5 md:mt-0">
            Coisas Que Você Precisa <br /> Prepare-se{"  "}
            <span className="text-primary">Antes De Viajar</span>
          </h2>
          <ol className="flex flex-col gap-4 mt-7" type="1">
            <li>
              <h3 className="text-lg md:text-xl">
                01. <span className="font-semibold">Melhor Comida</span>
              </h3>
              <p className="capitalize ml-[30px]">
                Nós fornecemos os alimentos da melhor qualidade aos nossos
                clientes.
              </p>
            </li>
            <li>
              <h3 className="text-lg md:text-xl">
                02.{" "}
                <span className="font-semibold">Melhor Plano de Viagem</span>
              </h3>
              <p className="capitalize ml-[33px]">
                Oferecemos os melhores pacotes de viagens para você.
              </p>
            </li>
            <li>
              <h3 className="text-lg md:text-xl">
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
    </>
  );
}
