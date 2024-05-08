import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const ordo = Odor_Mean_Chey({ weight: ["400"], subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 rounded-full bg-gray14" />
          <h1 className={clsx(ordo.className, "text-xl")}>Plansvel</h1>
        </div>
        <p className="max-w-96">
          Não demore, é hora de você viajar pelo mundo e descobrir outras coisas
          novas e interessantes.
        </p>
        <div className="flex items-center justify-between bg-gray14 text-white py-5 px-10 rounded-md">
          <div>
            Plansvel <b>@2024</b>
          </div>
          <div className="flex items-center gap-2">
            <AiFillFacebook size="1.2rem" />
            <AiFillTwitterSquare size="1.2rem" />
            <AiFillInstagram size="1.2rem" />
            <AiFillYoutube size="1.2rem" />
          </div>
        </div>
      </div>
    </footer>
  );
}
