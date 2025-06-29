import React from "react";
import SiddurPrayer from "@/lib/SiddurClasses/SiddurPrayer";
import SiddurSource from "@/lib/SiddurClasses/SiddurSource";
import SiddurComponent from "@/lib/SiddurClasses/SiddurComponent";

export default function Editor() {
  const testSiddurTexts = [
    new SiddurSource(
      "Modeh Ani",
      "I give thanks to You living and everlasting King for You have restored my soul with mercy. Great is Your faithfulness.",
      "english"
    ),
    new SiddurSource(
      "מודה אני",
      "מודה אני לפניך מלך חי וקיים שהחזרת בי נשמתי בחמלה רבה אמונתך.",
      "hebrew"
    ),
  ];

  const testSiddurComponent = new SiddurPrayer(
    testSiddurTexts,
    "Modeh Ani",
    "Modeh Ani",
    "A blessing recited in the morning."
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-blue-50">
       <SiddurComponent SiddurComponent={JSON.stringify(testSiddurComponent)} />
      </div>
    </div>
  );
}
