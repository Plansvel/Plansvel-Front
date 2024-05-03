import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";

import { Button, Icon } from "./ui";

export type DestinataryCardProps = {
  image?: string;
  location?: string;
  price?: number;
  rating?: number;
  title?: string;
};

export function DestinataryCard({
  image,
  location,
  price,
  rating,
  title,
}: DestinataryCardProps) {
  return (
    <div className="flex flex-col items-center antialiased">
      <div className="relative h-96 w-80 overflow-hidden rounded-md z-0">
        <Image src="/greek-city.jpg" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className="bg-white -mt-16 px-3 pt-5 pb-8 w-5/6 rounded-lg shadow-2xl z-10">
        <div className="flex items-center gap-1">
          <span>
            <Icon icon={HiLocationMarker} color="primary" size="xs" />
          </span>
          <p className="text-sm font-medium">Localização</p>
          <div className="flex items-center gap-1 ml-auto">
            <Icon icon={GoStarFill} size="xs" className="text-amber-400" />
            <span className="text-sm">4.5</span>
          </div>
        </div>

        <h4 className="text-lg font-semibold leading-tight truncate tracking-wide mt-3">
          Nome do Lugar
        </h4>

        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-500">R$ 000.000</span>
          <Button className="h-9 w-9" leftIcon={FaArrowRight} circular />
        </div>
      </div>
    </div>
  );
}
