"use client";

import { useState, useEffect, use } from "react";

export default function GreetingHeader() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) return;

  const hours = now.getHours();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //@ts-ignore
  const date = now.toLocaleDateString("en-US", options);

  const greeting =
    hours >= 6 && hours <= 11
      ? "Good Morning"
      : hours >= 12 && hours <= 17
        ? "Good Afternoon"
        : hours >= 17 && hours <= 22
          ? "Good Evening"
          : "Good Night";

  return (
    <div id="greeting-header">
      <h3 className="font-bold text-2xl font-cabinet-grotesk text-white">
        {greeting}!
      </h3>
      <p className="text-white/70 text-sm font-satoshi">{date}</p>
    </div>
  );
}

/**  const {hours, day, date} = {now.getHours(), now.getDay(), now.getDate() } */
