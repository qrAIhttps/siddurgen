import SiddurPrayer from "../SiddurClasses/SiddurPrayer";
import sefaria from '@api/sefaria';
import SiddurSource from "../SiddurClasses/SiddurSource";

export async function getSiddurPrayerFromSefaria(textSlug: string, prayerTitle: string, hebrewTitle: string, englishTitle: string): Promise<SiddurPrayer> {
//  const englishText = await sefaria.getV3Texts({
//   version: 'english',
// return_format: 'text_only',
//   tref: textSlug
// })
const englishReq = await fetch(`https://www.sefaria.org/api/v3/texts/${textSlug}?version=english&return_format=text_only`);
const englishText = await englishReq.json();
console.log(englishText);
//  const hebrewText = await sefaria.getV3Texts({
//   version: 'hebrew',
//   return_format: 'text_only',
//   tref: textSlug
// })
const hebrewReq = await fetch(`https://www.sefaria.org/api/v3/texts/${textSlug}?version=hebrew&return_format=text_only`);
const hebrewText = await hebrewReq.json();

    const englishSiddurSource = new SiddurSource(englishTitle, englishText.versions[0].text,"English",englishText.versionSource,englishText.versionUrl);
    const hebrewSiddurSource = new SiddurSource(hebrewTitle, hebrewText.versions[0].text,"Hebrew",hebrewText.versionSource,hebrewText.versionUrl);
    const siddurPrayer = new SiddurPrayer([englishSiddurSource, hebrewSiddurSource], prayerTitle);
   return (siddurPrayer);

}