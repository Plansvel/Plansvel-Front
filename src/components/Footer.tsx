import clsx from "clsx";
import { Odor_Mean_Chey } from "next/font/google";

const ordo = Odor_Mean_Chey({ weight: ["400"], subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-primary text-white px-14 py-10 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <span className="inline-block h-4 w-4 rounded-full bg-gray14" />
        <h1 className={clsx(ordo.className, "text-xl")}>Plansvel</h1>
      </div>
      <p className="w-96">
        Não demore, é hora de você viajar pelo mundo e descobrir outras coisas
        novas e interessantes.
      </p>
      <div className="bg-gray14 text-white py-5 px-10 rounded-md">
        Plansvel <b>@2024</b>
      </div>
    </footer>
  );
}
