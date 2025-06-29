import SiddurPrayer from "../SiddurClasses/SiddurPrayer";
import sefaria from '@api/sefaria';
import SiddurSource from "../SiddurClasses/SiddurSource";

export async function getSiddurPrayerFromSefaria(textSlug: string, prayerTitle: string, hebrewTitle: string, englishTitle: string): Promise<SiddurPrayer> {
 const englishText = await sefaria.getV3Texts({
  version: 'english',
return_format: 'text_only',
  tref: textSlug
})

 const hebrewText = await sefaria.getV3Texts({
  version: 'hebrew',
  return_format: 'text_only',
  tref: textSlug
})



    const englishSiddurSource = new SiddurSource(englishTitle, englishText.data.versions[0].text.toString(),"English",englishText.data.versions[0].versionSource,englishText.data.versions[0].versionUrl);
    const hebrewSiddurSource = new SiddurSource(hebrewTitle, hebrewText.data.versions[0].text.toString(),"Hebrew",hebrewText.data.versions[0].versionSource,hebrewText.data.versions[0].versionUrl);
    const siddurPrayer = new SiddurPrayer([englishSiddurSource, hebrewSiddurSource], prayerTitle);
   return (siddurPrayer);

}