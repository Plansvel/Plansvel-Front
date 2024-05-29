/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { Button, Input } from "./ui";

const ordo = Odor_Mean_Chey({ weight: ["400"], subsets: ["latin"] });

const footerLinkStyle = clsx(
  "relative w-fit",
  "before:absolute before:bottom-[-4px] before:left-0 before:z-1 before:w-0 before:h-5 before:border-b-[#F3F3F3] before:border-b",
  "before:transition-all before:duration-500 before:ease-in-out",
  "hover:before:w-full",
);

function SubHeader({ title, inView }: { title: string; inView: boolean }) {
  return (
    <h6
      className={clsx(
        "text-lg relative uppercase mb-5 pb-2 text-center",
        "before:absolute before:bottom-[-4px] before:left-0 before:z-1 before:w-0 before:h-5 before:border-b-[#F3F3F3] before:border-b-2",
        "before:transition-all before:duration-1000 before:ease-out-expo before:delay-300",
        "md:text-left md:text-xl",
        inView && "before:w-full",
      )}
    >
      {title}
    </h6>
  );
}

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="relative bg-gray14">
      <Image
        src="/footer.jpg"
        alt="footer"
        objectFit="cover"
        layout="fill"
        priority
        className="absolute opacity-15 grayscale z-10 pointer-events-none"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-4 auto-rows-auto md:grid-rows-5 gap-y-16 md:pt-20 px-10 text-white z-20">
        <div className="md:col-span-2 row-span-4 flex flex-col gap-12">
          <h4
            className={clsx(
              ordo.className,
              "uppercase text-4xl tracking-wider text-center md:text-left",
            )}
          >
            Assine nossa newsletter
          </h4>
          <p className="font-medium opacity-55 text-center md:text-left">
            Receba sugestões de viagens
          </p>
          <Input
            placeholder="Endereço de email"
            size="md"
            className="max-w-96"
          />
          <div className="flex justify-center gap-4 md:justify-normal">
            <Button leftIcon={AiFillFacebook} size="icon" circular />
            <Button leftIcon={AiFillInstagram} size="icon" circular />
            <Button leftIcon={AiFillTwitterSquare} size="icon" circular />
            <Button leftIcon={AiFillYoutube} size="icon" circular />
          </div>
        </div>

        <div
          className="row-start-2 md:row-start-auto md:col-span-2 row-span-4"
          ref={ref}
        >
          <div className="mb-10 text-center">
            <p className="text-primary text-xl">Pronto para viajar?</p>
            <h4 className="text-4xl font-bold tracking-wide">Plansvel</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-y-7 gap-x-6">
            <div>
              <SubHeader title="Atendimento" inView={isInView} />
              <ul className="flex flex-col gap-2">
                <a href="/sobre-nos" className={footerLinkStyle}>
                  Sobre Nós
                </a>
                <a href="/carreiras" className={footerLinkStyle}>
                  Carreiras
                </a>
                <a href="/contato" className={footerLinkStyle}>
                  Contato
                </a>
                <a href="/faq" className={footerLinkStyle}>
                  FAQ
                </a>
                <a href="/politica-de-privacidade" className={footerLinkStyle}>
                  Política de Privacidade
                </a>
                <a href="/termos-de-servico" className={footerLinkStyle}>
                  Termos de Serviço
                </a>
              </ul>
            </div>
            <div>
              <SubHeader title="Destinos" inView={isInView} />
              <ul className="flex flex-col gap-2">
                <a href="/destinos-populares" className={footerLinkStyle}>
                  Destinos Populares
                </a>
                <a href="/destinos-internacionais" className={footerLinkStyle}>
                  Destinos Internacionais
                </a>
                <a href="/destinos-nacionais" className={footerLinkStyle}>
                  Destinos Nacionais
                </a>
                <a href="/destinos-de-praia" className={footerLinkStyle}>
                  Destinos de Praia
                </a>
                <a href="/destinos-de-montanha" className={footerLinkStyle}>
                  Destinos de Montanha
                </a>
                <a href="/destinos-culturais" className={footerLinkStyle}>
                  Destinos Culturais
                </a>
              </ul>
            </div>
            <div>
              <SubHeader title="Ofertas" inView={isInView} />
              <ul className="flex flex-col gap-2">
                <a href="/promocoes" className={footerLinkStyle}>
                  Promoções
                </a>
                <a href="/pacotes-de-viagem" className={footerLinkStyle}>
                  Pacotes de Viagem
                </a>
                <a href="/descontos-de-ultima-hora" className={footerLinkStyle}>
                  Descontos de Última Hora
                </a>
                <a href="/viagens-em-grupo" className={footerLinkStyle}>
                  Viagens em Grupo
                </a>
                <a href="/viagens-personalizadas" className={footerLinkStyle}>
                  Viagens Personalizadas
                </a>
                <a href="/ofertas-especiais" className={footerLinkStyle}>
                  Ofertas Especiais
                </a>
              </ul>
            </div>
            <div>
              <SubHeader title="Suporte ao Cliente" inView={isInView} />
              <ul className="flex flex-col gap-2">
                <a href="/promocoes" className={footerLinkStyle}>
                  Central de Ajuda
                </a>
                <a href="/pacotes-de-viagem" className={footerLinkStyle}>
                  Suportes ao Cliente 24/7
                </a>
                <a href="/descontos-de-ultima-hora" className={footerLinkStyle}>
                  Como Fazer uma Reserva
                </a>
                <a href="/viagens-em-grupo" className={footerLinkStyle}>
                  Cancelamentos e Reembolsos
                </a>
                <a href="/viagens-personalizadas" className={footerLinkStyle}>
                  Informações sobre Vistos
                </a>
                <a href="/ofertas-especiais" className={footerLinkStyle}>
                  Seguro de Viagem
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 row-span-1 flex items-center justify-center pb-10 md:pb-0">
          <p className="text-center text-sm md:text-lg font-medium opacity-55">
            &#169; 2024 Plansvel, Inc. Feito com amor por Kawan, Samantha,
            Lucas, Victor, João, Suelen e Rato.
          </p>
        </div>
      </div>
    </footer>
  );
}
