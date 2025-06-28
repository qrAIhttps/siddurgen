import SiddurSource from "./SiddurSource";
export default class SiddurPrayer {
    sources: SiddurSource[];
    title: string;
    subtitle: string;
    description: string;
    leader: string;

    constructor(sources: SiddurSource[], title: string, subtitle: string = "", description: string="", leader: string="") {
        this.sources = sources;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.leader = leader;
    }
}