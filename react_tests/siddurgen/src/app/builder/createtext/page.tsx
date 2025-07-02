"use client";

import SiddurPrayer from "@/lib/SiddurClasses/SiddurPrayer";
import {
  getSiddurPrayerFromSefaria,
  SourceInfo,
} from "@/lib/SefariaIntegration/SefariaTextSiddurComponent";
import { useState } from "react";
import SiddurComponent from "@/lib/SiddurClasses/SiddurComponent";
import SefariaInputForm from "./SefariaInputForm";
import ManualAutoInputSlider from "./ManualAutoInputSlider"

export default function Page() {
  const [isManualInput, setIsManualInput] = useState(false);
  const [prayer, setPrayer] = useState<SiddurPrayer>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100">
      <div className="bg-white p-8 rounded shadow-md items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Text</h1>
        <ManualAutoInputSlider onDataSend={setIsManualInput} />
        {!isManualInput && (
          <div>
            <SefariaInputForm setPrayer={setPrayer} />
          </div>
        )}
      </div>

      {prayer && (
        <div className="">
          <SiddurComponent SiddurComponent={JSON.stringify(prayer)} />
        </div>
      )}
    </div>
  );
}
