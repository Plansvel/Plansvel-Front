/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */

"use client";

import { Menu, Transition } from "@headlessui/react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Fragment, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "./Button";
import { Input } from "./Input";

import type { IconType } from "react-icons";

export type DatePickerProps = {
  icon?: IconType;
  iconPosition?: "left" | "right";
};

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export function DatePicker({ icon, iconPosition }: DatePickerProps) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <Menu as="div" className="relative w-full">
      <Menu.Button
        as={Input}
        value={format(selectedDay, "EEEE, d/M", { locale: ptBR })}
        icon={icon}
        iconPosition={iconPosition}
      />
      <Transition
        as={Fragment}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-full origin-top-left rounded-sm p-4 z-50 border border-input bg-white">
          <div className="flex items-center">
            <Button
              leftIcon={FaChevronLeft}
              variant="ghost"
              className="h-9 w-9"
              circular
              onClick={() => previousMonth()}
            />
            <h3 className="flex-auto text-center text-gray-900">
              {format(firstDayCurrentMonth, "MMMM 'de' yyyy", { locale: ptBR })}
            </h3>
            <Button
              leftIcon={FaChevronRight}
              variant="ghost"
              className="h-9 w-9"
              circular
              onClick={() => nextMonth()}
            />
          </div>
          <div className="grid grid-cols-7 text-xs mt-4 leading-6 text-center text-gray-500">
            <div>Seg.</div>
            <div>Ter.</div>
            <div>Qua.</div>
            <div>Qui.</div>
            <div>Sex.</div>
            <div>Sáb.</div>
            <div>Dom.</div>
          </div>
          <div className="grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <Menu.Item
                as="button"
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "py-2 flex items-center justify-center rounded-full h-10 w-10 hover:border hover:border-gray-600",
                  isEqual(day, selectedDay) && "bg-gray14 text-white",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",
                  dayIdx === 0 && colStartClasses[getDay(day)],
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
