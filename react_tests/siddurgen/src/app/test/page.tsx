import React from "react";
import SiddurComponent from "../../lib/SiddurClasses/SiddurComponent";
import SiddurPrayer from "../../lib/SiddurClasses/SiddurPrayer";
import SiddurSource from "../../lib/SiddurClasses/SiddurSource";
import {getSiddurPrayerFromSefaria} from "../../lib/SefariaIntegration/SefariaTextSiddurComponent";
import { get } from "http";

export default async function Page() {
  const testSiddurTexts = [new SiddurSource(
    "Modeh Ani", "I give thanks to You living and everlasting King for You have restored my soul with mercy. Great is Your faithfulness.", "english"),
  new SiddurSource( "מודה אני", "מודה אני לפניך מלך חי וקיים שהחזרת בי נשמתי בחמלה רבה אמונתך.", "hebrew")];

  const textSiddurComponent = new SiddurPrayer(testSiddurTexts,"Modeh Ani", "A blessing recited in the morning.");

      return (
    <div>
      {/* <SefariaTextLoader sefariaRef="Genesis 1:2"/> */}
       <SiddurComponent 
         SiddurComponent={JSON.stringify(await getSiddurPrayerFromSefaria("Siddur_Ashkenaz,_Weekday,_Shacharit,_Preparatory_Prayers,_Modeh_Ani","Modeh Ani", "מודה אני", "Modeh Ani"))}
       />
    </div>
  );
}

