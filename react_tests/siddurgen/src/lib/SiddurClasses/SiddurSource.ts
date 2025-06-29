export default class SiddurSource {
    
    title: string;
    language: string;
    source: string;
    sourceUrl: string;
    text: string;

    constructor(title: string, text: string, language: string, source: string = "", sourceUrl: string = "") {
        this.title = title;
        this.language = language;
        this.source = source;
        this.sourceUrl = sourceUrl;
        this.text = text;
    }
}
