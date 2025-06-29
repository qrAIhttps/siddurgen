import SiddurPrayer from "./SiddurPrayer";

export default class Siddur {
    Components: SiddurPrayer[];
    title: string;
    subtitle: string;
    description: string;

    constructor(title: string, Components: SiddurPrayer[], subtitle: string="", description: string="") {
        this.Components = Components;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
    }
}