import Siddur from "./Siddur";
import SiddurPrayer from "./SiddurPrayer";
import SiddurSource from "./SiddurSource";

export const exampleSources: SiddurSource[] = [
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

export const examplePrayer: SiddurPrayer = {
  sources: exampleSources,
  title: "Modeh Ani",
  subtitle: "Modeh Ani",
  description: "A blessing recited in the morning.",
  leader: "Leader Name",
};

export const exampleSiddur: Siddur = {
  Components: [examplePrayer, examplePrayer],
  title: "Example Siddur",
  subtitle: "A Sample Siddur",
  description: "This is an example siddur for testing purposes.",
};