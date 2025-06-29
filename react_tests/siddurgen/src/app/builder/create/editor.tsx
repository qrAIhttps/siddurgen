"use client"
import React, { useState, useEffect, use, Suspense } from "react";
import SiddurPrayer from "@/lib/SiddurClasses/SiddurPrayer";
import SiddurSource from "@/lib/SiddurClasses/SiddurSource";
import SiddurComponent from "@/lib/SiddurClasses/SiddurComponent";
import { getSiddurPrayerFromSefaria } from "@/lib/SefariaIntegration/SefariaTextSiddurComponent";
import { examplePrayer } from "@/lib/SiddurClasses/examples";

export default function Editor(props) {
  const [source, setSource] = useState<string>("Genesis 1:1");
  const comp = use(props.SiddurComponent);

  useEffect(() => {
    const getSiddurPrayerWrapper = async() => {
      const result = await getSiddurPrayerFromSefaria(source, "Modeh Ani", "מודה אני", "Modeh Ani");
      setPrayer(result);
    };

    getSiddurPrayerWrapper();
  }, [source]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-blue-50">
       <SiddurComponent SiddurComponent={JSON.stringify(comp)} />

       
      </div>
    </div>
  );
}
