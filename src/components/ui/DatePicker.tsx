/* eslint-disable react/jsx-props-no-spreading */

"use client";

import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import { cn } from "@/lib/utils";

import type { ReactDatePickerProps } from "react-datepicker";

export function DatePicker({
  className,
  ...props
}: Partial<ReactDatePickerProps>) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <ReactDatePicker
      className={cn(
        "group relative inline-flex w-full rounded-sm overflow-hidden border border-input outline-0 text-sm py-2 px-3",
        className,
      )}
      selected={(selectedDate && new Date(selectedDate)) || null}
      onChange={(date) => setSelectedDate(date!)}
      {...props}
    />
  );
}
