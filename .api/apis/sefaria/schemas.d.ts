declare const GetAllTopics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly [0, 20];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter limits the number of topics returned. The default is `1000`. If `limit=0` then all topics will be returned.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Root Type for TopicJSON";
                readonly description: "A JSON object containing all of the metadata for a topic object";
                readonly required: readonly ["slug", "titles"];
                readonly type: "object";
                readonly properties: {
                    readonly slug: {
                        readonly description: "The unique slug for a given topic.";
                        readonly type: "string";
                        readonly examples: readonly ["nachman-of-breslov"];
                    };
                    readonly titles: {
                        readonly description: "An array of JSON objects, each representing an alternative title for the object, in various languages. ";
                        readonly type: "array";
                        readonly items: {
                            readonly title: "Root Type for TopicTitlesJSON";
                            readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly text: {
                                    readonly description: "The text of the title";
                                    readonly type: "string";
                                    readonly examples: readonly ["Sukkoth"];
                                };
                                readonly lang: {
                                    readonly description: "The language of the title, either `en` or `he`. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["he"];
                                };
                                readonly Primary: {
                                    readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                            };
                        };
                    };
                    readonly alt_ids: {
                        readonly description: "This is a dictionary containing the keys of naming schemes, and ids of this topic represented in that naming scheme.  It’s used both for canonical names in other naming schemes and temporary storage of names when renaming slugs. All of the data here is for internal use, with the exception of the values `bfo` and `wikidata`. `bfo` refers to [basic formal ontology](https://developers.sefaria.org/docs/topic-ontology), and `wikidata` to the wikidata ontology of topics. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly _temp_id: {
                                readonly type: "string";
                                readonly examples: readonly ["משה"];
                            };
                        };
                    };
                    readonly properties: {
                        readonly title: "Root Type for TopicPropertyJson";
                        readonly description: "The JSON object containing information about a topic's properties";
                        readonly type: "object";
                        readonly properties: {
                            readonly heNliLink: {
                                readonly title: "Root Type for NLILinkJSON";
                                readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly description: "A link to a corresponding NLI page to learn more. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                    };
                                    readonly dataSource: {
                                        readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["`sefaria`"];
                                    };
                                };
                            };
                            readonly enNliLink: {
                                readonly title: "Root Type for NLILinkJSON";
                                readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly value: {
                                        readonly description: "A link to a corresponding NLI page to learn more. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                    };
                                    readonly dataSource: {
                                        readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["`sefaria`"];
                                    };
                                };
                            };
                        };
                    };
                    readonly description: {
                        readonly title: "Root Type for TopicImgCaption";
                        readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly en: {
                                readonly description: "The English field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                            };
                            readonly he: {
                                readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                            };
                        };
                    };
                    readonly categoryDescription: {
                        readonly description: "A description of the category of this topic";
                        readonly oneOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        }];
                    };
                    readonly displayOrder: {
                        readonly format: "int32";
                        readonly description: "The order in which topics are displayed on the Sefaria website, relative to other topics within their same category. ";
                        readonly type: "integer";
                        readonly examples: readonly [1];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly numSources: {
                        readonly format: "int32";
                        readonly description: "The number of text sources associated with a topic. ";
                        readonly type: "integer";
                        readonly examples: readonly [831];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly description_published: {
                        readonly description: "A boolean representing whether or not the description was published. ";
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly data_source: {
                        readonly description: "How the topic was generated, whether by Sefaria, a user on a source sheet, or some other source. ";
                        readonly type: "string";
                        readonly examples: readonly ["`sefaria`"];
                    };
                    readonly image: {
                        readonly title: "Root Type for TopicImgJSON";
                        readonly description: "A JSON object containing the image metadata for topics with images. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly image_uri: {
                                readonly description: "The URL pointing to the image as hosted by Sefaria. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://storage.googleapis.com/img.sefaria.org/topics/sukkot.jpg"];
                            };
                            readonly image_caption: {
                                readonly title: "Root Type for TopicImgCaption";
                                readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly description: "The English field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                    };
                                    readonly he: {
                                        readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                    };
                                };
                            };
                        };
                    };
                    readonly primaryTitle: {
                        readonly title: "Root Type for TopicImgCaption";
                        readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly en: {
                                readonly description: "The English field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                            };
                            readonly he: {
                                readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                            };
                        };
                    };
                    readonly primaryTitleIsTransliteration: {
                        readonly title: "Root Type for TopicImgCaption";
                        readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly en: {
                                readonly description: "The English field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                            };
                            readonly he: {
                                readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCalendars: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly diaspora: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "When this value is set to `diaspora=1`, the text returned is the weekly Torah reading for the diaspora. When this value is set to `diaspora=0`, the text returned is the Torah reading for Israel. ";
                };
                readonly custom: {
                    readonly enum: readonly ["ashkenazi", "sephardi", "edot%20hamizrach"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If available, the weekly _Haftarah_ will be returned for one of the selected customs.";
                };
                readonly year: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default, the API returns learning for the current date. You can override it by using a combination of the `year`, `day`, and `month` params - all three of which must be used, or else the API will fall back to the default.";
                };
                readonly month: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default, the API returns learning for the current date. You can override it by using a combination of the `year`, `day`, and `month` params - all three of which must be used, or else the API will fall back to the default.";
                };
                readonly day: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default, the API returns learning for the current date. You can override it by using a combination of the `year`, `day`, and `month` params - all three of which must be used, or else the API will fall back to the default.";
                };
                readonly timezone: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default, the API attempts to return the calendar for the client's timezone. If you want the timezone for another region, you can override it. Timezone names are in accordance with [IANA Standards](https://www.iana.org/time-zones)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for CalendarAPIResponse";
            readonly description: "A response from the Calendar API";
            readonly type: "object";
            readonly properties: {
                readonly date: {
                    readonly format: "date";
                    readonly description: "The datestring for the calendars shown. It should match the values submitted in `year` `month` `day` or should be the current date.";
                    readonly type: "string";
                    readonly examples: readonly ["2023-11-28"];
                };
                readonly timezone: {
                    readonly description: "An IANA timezone name";
                    readonly type: "string";
                    readonly examples: readonly ["America/Halifax"];
                };
                readonly calendar_items: {
                    readonly type: "array";
                    readonly items: {
                        readonly description: "A single learning schedule for the selected date";
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly description: "The learning schedule title in `he` and `en`";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Parashat Hashavua"];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["פרשת השבוע"];
                                    };
                                };
                            };
                            readonly displayValue: {
                                readonly description: "The name of the reading for the selected date in the learning schedule in `en` and `he`";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Vayishlach"];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["וישלח"];
                                    };
                                };
                            };
                            readonly url: {
                                readonly description: "The url path on Sefaria where this selection can be found";
                                readonly type: "string";
                                readonly examples: readonly ["Genesis.32.4-36.43"];
                            };
                            readonly ref: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly heRef: {
                                readonly description: "The Hebrew equivalent of the `ref`";
                                readonly type: "string";
                                readonly examples: readonly ["בראשית ל״ב:ד׳-ל״ו:מ״ג"];
                            };
                            readonly order: {
                                readonly format: "int32";
                                readonly description: "This is used internally on Sefaria to arrange the learning schedules in the manner we choose.";
                                readonly type: "integer";
                                readonly examples: readonly [1];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly category: {
                                readonly description: "The primary category that this `ref` belongs to";
                                readonly type: "string";
                                readonly examples: readonly ["Tanakh"];
                            };
                            readonly extraDetails: {
                                readonly description: "Additional details about this learning schedule entry";
                                readonly type: "object";
                                readonly properties: {
                                    readonly aliyot: {
                                        readonly description: "The breakdown of aliyot for a parashah";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Genesis 32:4-32:13"];
                                        };
                                    };
                                };
                            };
                            readonly description: {
                                readonly description: "A description of this learning schedule entry if it exists in `he` and `en`";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Vayishlach (“He Sent”) follows Jacob and his family as Jacob wrestles with a man (commonly understood as an angel), is renamed Israel, and reconciles with his brother, Esau. Jacob’s daughter, Dina, is raped by a Hivite prince, and her brothers sack a city in response. Rachel dies as she gives birth to Jacob's youngest child, Benjamin."];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["פרשת וישלח ממשיכה לעקוב אחרי יעקב ומשפחתו. יעקב נאבק עם איש (שלפי הפרשנות המקובלת הוא מלאך אלוהים), ובסיום המאבק האיש מעניק לו את השם ישראל. יעקב מתפייס עם אחיו עשו. דינה, בתו של יעקב, נאנסת ונשבית בידי נסיך חיווי, ואחיה הורגים את כל הזכרים בעיר ומשיבים אליהם את דינה. רחל מתה בשעת לידתו של בנימין, הצעיר בבני יעקב."];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCategory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly category_path: {
                    readonly type: "string";
                    readonly examples: readonly ["Tanakh/Torah/Genesis", "Talmud/Bavli/Acharonim on Talmud/Chidushei Chatam Sofer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sefaria Category path";
                };
            };
            readonly required: readonly ["category_path"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for CatJSON";
            readonly description: "JSON response for a Category GET request";
            readonly type: "object";
            readonly properties: {
                readonly path: {
                    readonly description: "The full path of the category";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Tanakh"];
                    };
                };
                readonly titles: {
                    readonly description: "The titles for the category, in Hebrew and English.";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicTitlesJSON";
                        readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly text: {
                                readonly description: "The text of the title";
                                readonly type: "string";
                                readonly examples: readonly ["Sukkoth"];
                            };
                            readonly lang: {
                                readonly description: "The language of the title, either `en` or `he`. ";
                                readonly type: "string";
                                readonly examples: readonly ["he"];
                            };
                            readonly Primary: {
                                readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                        };
                    };
                };
                readonly lastPath: {
                    readonly description: "The immediate parent of the current category. So for example, with the category `Tanakh/Torah/Genesis`, the `lastPath` is `Torah`. ";
                    readonly type: "string";
                    readonly examples: readonly ["Torah"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetImgGen: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly description: "A valid Sefaria textual `Ref`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["tref"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly lang: {
                    readonly enum: readonly ["he", "en"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The language the social image should return, `en` for English language or `he` for Hebrew. ";
                };
                readonly platform: {
                    readonly enum: readonly ["facebook", "twitter"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This value determines the size of the image, set to the platform's ideal as specified in its own developer documentation.";
                };
                readonly ven: {
                    readonly type: "string";
                    readonly examples: readonly ["The Holy Scriptures: A New Translation (JPS 1917)"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The title of the version of English text desired for the image. ";
                };
                readonly vhe: {
                    readonly type: "string";
                    readonly examples: readonly ["Tanach with Ta'amei Hamikra"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The title of the version of Hebrew text desired for the image. ";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetIndex: {
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for APIIndexResponse";
            readonly description: "";
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly contents: {
                        readonly description: "This level of the object is a category listing.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly contents: {
                                    readonly description: "This level of the object is usually a book level.";
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly categories: {
                                                readonly description: "A list of categories that this book belongs to.";
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly order: {
                                                readonly format: "int32";
                                                readonly description: "This is used to order the texts on the Sefaria website.";
                                                readonly type: "integer";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly primary_category: {
                                                readonly description: "The main category that this work falls under.";
                                                readonly type: "string";
                                            };
                                            readonly enShortDesc: {
                                                readonly description: "A short description of this book in English.";
                                                readonly type: "string";
                                            };
                                            readonly heShortDesc: {
                                                readonly description: "A short description of this book in Hebrew.";
                                                readonly type: "string";
                                            };
                                            readonly corpus: {
                                                readonly description: "The corpus that this work belongs to e.g. `Tanakh` or `Mishnah` etc.";
                                                readonly type: "string";
                                            };
                                            readonly heTitle: {
                                                readonly description: "The Hebrew title of this work.";
                                                readonly type: "string";
                                            };
                                            readonly title: {
                                                readonly description: "The English title of this work.";
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                                readonly order: {
                                    readonly format: "int32";
                                    readonly description: "This is used to order the texts on the Sefaria website.";
                                    readonly type: "integer";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly enComplete: {
                                    readonly description: "Is the entirety of this category available in English";
                                    readonly type: "boolean";
                                };
                                readonly heComplete: {
                                    readonly description: "Is the entirety of this category available in Hebrew";
                                    readonly type: "boolean";
                                };
                                readonly enDesc: {
                                    readonly description: "An English description of the category";
                                    readonly type: "string";
                                };
                                readonly heDesc: {
                                    readonly description: "An Hebrew description of the category";
                                    readonly type: "string";
                                };
                                readonly enShortDesc: {
                                    readonly description: "A short description of this category in English.";
                                    readonly type: "string";
                                };
                                readonly heShortDesc: {
                                    readonly description: "A short description of this category in Hebrew.";
                                    readonly type: "string";
                                };
                                readonly heCategory: {
                                    readonly type: "string";
                                };
                                readonly category: {
                                    readonly description: "The current category that these works are nested in.";
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                    readonly order: {
                        readonly format: "int32";
                        readonly description: "This is used to order the categories on the Sefaria website.";
                        readonly type: "integer";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly enComplete: {
                        readonly description: "Is the entirety of this category available in English";
                        readonly type: "boolean";
                    };
                    readonly heComplete: {
                        readonly description: "Is the entirety of this category available in Hebrew";
                        readonly type: "boolean";
                    };
                    readonly enDesc: {
                        readonly description: "An English description of the category";
                        readonly type: "string";
                    };
                    readonly heDesc: {
                        readonly description: "An Hebrew description of the category";
                        readonly type: "string";
                    };
                    readonly enShortDesc: {
                        readonly description: "A short description of this category in English.";
                        readonly type: "string";
                    };
                    readonly heShortDesc: {
                        readonly description: "A short description of this category in Hebrew.";
                        readonly type: "string";
                    };
                    readonly heCategory: {
                        readonly type: "string";
                    };
                    readonly category: {
                        readonly description: "The current category that these works are nested in.";
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLinks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly description: "A valid Sefaria textual `Ref`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["tref"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly with_text: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "`with_text` is an optional parameter that determines whether or not the API response will include the text of any connected links. Defaults to `1`";
                };
                readonly with_sheet_links: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "`with_sheet_links` is an optional parameter that determines whether or not the API response will include links to user generated source sheets from Sefaria. Defaults `0`";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Root Type for LinkObj";
                readonly description: "A single link returned by the link (and related[?]) APIs";
                readonly type: "object";
                readonly properties: {
                    readonly _id: {
                        readonly type: "string";
                        readonly examples: readonly ["578b4ad1d6e4a90d260c2d9a"];
                    };
                    readonly index_title: {
                        readonly description: "The canonical title of the text in the Sefaria library.";
                        readonly type: "string";
                        readonly examples: readonly ["Tosafot Yom Tov on Mishnah Peah"];
                    };
                    readonly category: {
                        readonly description: "The primary category this ref belongs to on Sefaria.";
                        readonly type: "string";
                        readonly examples: readonly ["Commentary"];
                    };
                    readonly type: {
                        readonly description: "An arbitrary string assigned to the connection to identify it. Most commonly `commentary`, `reference`, or an empty string. ";
                        readonly type: "string";
                        readonly examples: readonly ["commentary"];
                    };
                    readonly ref: {
                        readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah Peah 4:2"];
                    };
                    readonly anchorRef: {
                        readonly description: "The submitted `ref` in the GET request at times may fall within a more encompassing ranged ref that includes multiple text segments. The `anchorRef` is that complete range the that the link is associated with, and will contain within it the specific `ref` that was passed. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"Esther 3:15-4:17\""];
                    };
                    readonly anchorRefExpanded: {
                        readonly description: "An array of strings, where each string is a segment level `ref` of the `ref` passed in as a parameter. If a segment level `ref` is passed in, this array will have a length of 1, and only contain that segment level `ref`. If the `ref` passed in is ranged, this array will contain each of the segment level `ref`s within that range. \n\nFor example, if someone was searching for links for `Esther 4.14-15`, the `anchorRefExpanded` would contain `Esther 4.14` and `Esther 4.15`.";
                        readonly minItems: 1;
                        readonly uniqueItems: true;
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["Mishnah Peah 4:2"];
                        };
                        readonly examples: readonly ["Esther 4:14", "Esther 4:15"];
                    };
                    readonly sourceRef: {
                        readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah Peah 4:2"];
                    };
                    readonly sourceHeRef: {
                        readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah Peah 4:2"];
                    };
                    readonly anchorVerse: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [2];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly sourceHasEn: {
                        readonly type: "boolean";
                    };
                    readonly compDate: {
                        readonly description: "The estimated year of completion of the work according to the Gregorian calendar. If its length is zero the completion date is unknown. If its length is one, then the completion date is that single year. If its length is 2 then the date is a potential range with the first int in the array is the lower end of the range and the latter the higher. ";
                        readonly type: "array";
                        readonly items: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly examples: readonly [1613];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                    readonly commentaryNum: {
                        readonly format: "double";
                        readonly type: "number";
                        readonly examples: readonly [2.0001];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly collectiveTitle: {
                        readonly type: "object";
                        readonly properties: {
                            readonly en: {
                                readonly type: "string";
                                readonly examples: readonly ["Tosafot Yom Tov"];
                            };
                            readonly he: {
                                readonly type: "string";
                                readonly examples: readonly ["<b>[*ואחד אומר לחלק לזה שומעין וכו'</b>. שאפילו הוא זקן ותש כח או חולה שהרי מה שאמר לחלק מפני חלישותו הוא אפילו הכי שומעין לו כך מצאתי בפירוש הנ\"ל]: \n"];
                            };
                        };
                    };
                    readonly he: {
                        readonly description: "The default text written in RTL characters for the query (Usually Hebrew). It is structured as a JaggedArray (nested arrays), with the lowest level being an array of strings with some html text.\n";
                        readonly type: "string";
                        readonly examples: readonly ["<b>[*ואחד אומר לחלק לזה שומעין וכו'</b>. שאפילו הוא זקן ותש כח או חולה שהרי מה שאמר לחלק מפני חלישותו הוא אפילו הכי שומעין לו כך מצאתי בפירוש הנ\"ל]: \n"];
                    };
                    readonly heVersionTitle: {
                        readonly description: "The title of the work in English for where the default `he` text came from.";
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah, ed. Romm, Vilna 1913"];
                    };
                    readonly heLicense: {
                        readonly description: "A string of text documenting the license for the text in Hebrew.";
                        readonly type: "string";
                        readonly examples: readonly ["Public Domain"];
                    };
                    readonly heVersionTitleInHebrew: {
                        readonly description: "The title of the work in Hebrew for where the default `he` text came from.";
                        readonly type: "string";
                        readonly examples: readonly ["משנה, מהדורת בית דפוס ראם, וילנא 1913"];
                    };
                    readonly text: {
                        readonly description: "The default text written in LTR characters for the query (Usually English). It is structured as a JaggedArray (nested arrays), with the lowest level being an array of strings with some html text.";
                        readonly type: "array";
                        readonly items: {};
                    };
                    readonly versionTitle: {
                        readonly description: "A descriptive string which describes what version of a text this is. Is it from a particular printing or edition of a book? An online resource? This string should describe it in English";
                        readonly type: "string";
                    };
                    readonly license: {
                        readonly description: "A string of text documenting the license for the text in English.";
                        readonly type: "string";
                    };
                    readonly versionTitleInHebrew: {
                        readonly description: "A descriptive string which describes what version of a text this is. Is it from a particular printing or edition of a book? An online resource? This string should describe it in Hebrew.";
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetManuscripts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly type: "string";
                    readonly examples: readonly ["Numbers 12.1", "Berakhot 2a.1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The `tref` parameter must a valid Sefaria ref to a text.";
                };
            };
            readonly required: readonly ["tref"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Root Type for ManuscriptJSON";
                readonly description: "Manuscript data and metadata JSON. ";
                readonly required: readonly ["manuscript"];
                readonly type: "object";
                readonly properties: {
                    readonly manuscript_slug: {
                        readonly description: "A unique slug for the given manuscript";
                        readonly type: "string";
                        readonly examples: readonly ["leningrad-codex-(1008-ce)"];
                    };
                    readonly page_id: {
                        readonly description: "The ID for the specific page within the manuscript being referenced. ";
                        readonly type: "string";
                        readonly examples: readonly ["LC_Folio_435r"];
                    };
                    readonly image_url: {
                        readonly description: "The URL to the image of the manuscript, hosted by Sefaria. All URLs will be prefaced by `https://manuscripts.sefaria.org/`";
                        readonly type: "string";
                        readonly examples: readonly ["https://manuscripts.sefaria.org/leningrad-color/BIB_LENCDX_F434B_thumbnail.jpg"];
                    };
                    readonly thumbnail_url: {
                        readonly description: "The url to the thumbnail image of the manuscript. ";
                        readonly type: "string";
                        readonly examples: readonly ["https://manuscripts.sefaria.org/leningrad-color/BIB_LENCDX_F434B_thumbnail.jpg"];
                    };
                    readonly anchorRef: {
                        readonly description: "A manuscript image will in most cases be associated with a range of `refs` (i.e. an image of a page of Tanakh will display multiple verses). The `anchorRef` is that complete range the manuscript is associated with, and will contain within it the specific textual `Ref` passed in as a parameter. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"Esther 3:15-4:17\""];
                    };
                    readonly anchorRefExpanded: {
                        readonly description: "An array of strings, where each string is a segment level `Ref` of the `Ref` passed in as a parameter. If a segment level `Ref` is passed in, this array will have a length of 1, and only contain that segment level `Ref`. If the `Ref` passed in is ranged, this array will contain each of the segment level `Ref`s within that range. \n\nFor example, if someone was searching for manuscript data for `Esther 4.14-15`, the `anchorRefExpanded` would contain `Esther 4.14` and `Esther 4.15`.";
                        readonly minItems: 1;
                        readonly uniqueItems: true;
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["Esther 4:14"];
                        };
                        readonly examples: readonly ["Esther 4:14", "Esther 4:15"];
                    };
                    readonly manuscript: {
                        readonly title: "Root Type for ManuscriptVersionMetaData";
                        readonly description: "The specific metadata for the version of the manuscript. ";
                        readonly required: readonly ["slug", "description", "he_description", "he_title", "source", "title"];
                        readonly type: "object";
                        readonly properties: {
                            readonly slug: {
                                readonly description: "The unique slug for the manuscript. ";
                                readonly type: "string";
                                readonly examples: readonly ["leningrad-codex-(1008-ce)"];
                            };
                            readonly title: {
                                readonly description: "The title of the manuscript. ";
                                readonly type: "string";
                                readonly examples: readonly ["Leningrad Codex (1008 CE)"];
                            };
                            readonly he_title: {
                                readonly description: "The manuscript title in Hebrew. ";
                                readonly type: "string";
                                readonly examples: readonly ["כתב יד לנינגרד (1008)"];
                            };
                            readonly source: {
                                readonly description: "The url for the source of the manuscript images. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://dornsife.usc.edu/wsrp/biblical-manuscripts/"];
                            };
                            readonly description: {
                                readonly description: "A description of the manuscript, oftening containing details about the archivists or where the physical manuscript images can be found, as well as other library details.  ";
                                readonly type: "string";
                                readonly examples: readonly ["Bruce Zuckerman, West Semitic Research, in collaboration with the Ancient Biblical Manuscript Center; courtesy Russian National Library, Saltykov-Schedrin"];
                            };
                            readonly he_description: {
                                readonly description: "A Hebrew description of the manuscript, oftening containing details about the archivists or where the physical manuscript images can be found, as well as other library details.  ";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An arbitrary text string to match against Sefaria's data collections.";
                };
            };
            readonly required: readonly ["name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return (`0` indicates no limit)";
                };
                readonly type: {
                    readonly enum: readonly ["ref", "Collection", "Topic", "TocCategory", "Term", "User"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default the Name API returns `Ref`s, book titles, authors, topics, and collections. If the `type` is set, the response will only contain items of that type. Note: `Topic` includes authors, topics and people without differentiation.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for nameAPIResponse";
            readonly description: "Full response of the Name API";
            readonly type: "object";
            readonly properties: {
                readonly lang: {
                    readonly description: "The language of the completion results.\n\n`en` `he`";
                    readonly enum: readonly ["en", "he"];
                    readonly type: "string";
                    readonly examples: readonly ["en"];
                };
                readonly type: {
                    readonly enum: readonly ["ref", "Topic", "AuthorTopic", "PersonTopic", "User"];
                    readonly type: "string";
                    readonly examples: readonly ["ref"];
                    readonly description: "`ref` `Topic` `AuthorTopic` `PersonTopic` `User`";
                };
                readonly completions: {
                    readonly description: "A list of autocompletion responses for the submitted text.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Job"];
                    };
                };
                readonly completion_objects: {
                    readonly description: "A list of autocompletion response objects for the submitted text along with some information about them.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Job"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["Job"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["ref"];
                            };
                            readonly is_primary: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly order: {
                                readonly format: "int32";
                                readonly type: "integer";
                                readonly examples: readonly [1000000];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                        };
                    };
                };
                readonly is_book: {
                    readonly description: "Returns `true` if the submitted text is a book level reference. e.g. (Genesis)";
                    readonly type: "boolean";
                };
                readonly is_node: {
                    readonly description: "Returns true if the submitted text is a `node` in a complex text. (For example, the query `Abarbanel on Torah, Genesis` is a `node` in the `index` of the complex text `Abarbanel on Torah`). ";
                    readonly type: "boolean";
                };
                readonly is_section: {
                    readonly description: "Returns `true` if the submitted text is a section `Ref` (e.g. Genesis 4, as opposed to a segment `Ref` such as Genesis 4.1).";
                    readonly type: "boolean";
                };
                readonly is_segment: {
                    readonly description: "Returns `true` if the submitted text is a segment level `Ref` (e.g. Genesis 43:3, as opposed to a section `Ref` such as Genesis 43)";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly is_range: {
                    readonly description: "Returns `true` if the submitted text is a a ranged `Ref` (one that spans multiple sections or segments.) e.g. `Genesis 4-5`";
                    readonly type: "boolean";
                };
                readonly ref: {
                    readonly description: "If `type=ref`, this returns the canonical ref for the submitted text.";
                    readonly type: "string";
                    readonly examples: readonly ["Rashi on Job 1:3:3"];
                };
                readonly url: {
                    readonly description: "If `type=ref`, this returns the URL path to link to the submitted text on [Sefaria.org](sefaria.org)";
                    readonly type: "string";
                    readonly examples: readonly ["Rashi_on_Job.1.3.3"];
                };
                readonly index: {
                    readonly description: "If `type=ref`, this returns the canonical name of the `index` of the submitted text.";
                    readonly type: "string";
                    readonly examples: readonly ["Rashi on Job"];
                };
                readonly book: {
                    readonly description: "If the submitted response is a `Ref`, this returns the book it belongs to.";
                    readonly type: "string";
                    readonly examples: readonly ["Rashi on Job"];
                };
                readonly internalSections: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [1];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly internalToSections: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [1];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly sections: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["1"];
                    };
                };
                readonly toSections: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["1"];
                    };
                };
                readonly examples: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly sectionNames: {
                    readonly description: "Given a reference, this returns the names of the sections and segments at each depth of that text.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Chapter"];
                    };
                };
                readonly heSectionNames: {
                    readonly description: "Given a `Ref`, this returns the names of the sections and segments at each depth of that text in Hebrew.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["פרק"];
                    };
                };
                readonly addressExamples: {
                    readonly description: "Given a partial `Ref`, this will return an array of strings of possible ways that it might be completed.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["3"];
                    };
                };
                readonly heAddressExamples: {
                    readonly description: "Given a partial `Ref`, this will return an array of Hebrew strings of possible ways that it might be completed.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["ג׳"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNextRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly parasha: {
                    readonly enum: readonly ["Bereshit", "Noach", "Lech-Lecha", "Vayera", "Chayei Sara", "Toldot", "Vayetzei", "Vayishlach", "Vayeshev", "Miketz", "Vayigash", "Vayechi", "Shemot", "Vaera", "Bo", "Beshalach", "Yitro", "Mishpatim", "Terumah", "Tetzaveh", "Ki Tisa", "Vayakhel", "Pekudei", "Vayikra", "Tzav", "Shmini", "Tazria", "Metzora", "Achrei Mot", "Kedoshim", "Emor", "Behar", "Bechukotai", "Bamidbar", "Nasso", "Beha’alotcha", "Sh’lach", "Korach", "Chukat", "Balak", "Pinchas", "Matot", "Masei", "Devarim", "Vaetchanan", "Eikev", "Re’eh", "Shoftim", "Ki Teitzei", "Ki Tavo", "Nitzavim", "Vayeilech", "Ha’azinu", "Vezot Haberakhah", "Vayakhel-Pekudei", "Tazria-Metzora", "Achrei Mot-Kedoshim", "Behar-Bechukotai", "Chukat-Balak", "Matot-Masei", "Nitzavim-Vayeilech"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "One of the 54 weekly Torah Parasha names in English or one of the 7 double parshiyot.";
                };
            };
            readonly required: readonly ["parasha"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for CalendarNextReadAPI";
            readonly description: "";
            readonly type: "object";
            readonly properties: {
                readonly parasha: {
                    readonly type: "object";
                    readonly properties: {
                        readonly title: {
                            readonly description: "This should always read `Parashat Hashavua`";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Parashat Hashavua"];
                                };
                                readonly he: {
                                    readonly type: "string";
                                    readonly examples: readonly ["פרשת השבוע"];
                                };
                            };
                        };
                        readonly displayValue: {
                            readonly description: "The name of the Parashah";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Vayakhel-Pekudei"];
                                };
                                readonly he: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ויקהל-פקודי"];
                                };
                            };
                        };
                        readonly url: {
                            readonly description: "The url path on Sefaria where this selection can be found";
                            readonly type: "string";
                            readonly examples: readonly ["Exodus.35.1-40.38"];
                        };
                        readonly ref: {
                            readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                            readonly type: "string";
                            readonly examples: readonly ["Mishnah Peah 4:2"];
                        };
                        readonly heRef: {
                            readonly description: "The Hebrew equivalent of the `ref`";
                            readonly type: "string";
                            readonly examples: readonly ["שמות ל״ה:א׳-מ׳:ל״ח"];
                        };
                        readonly order: {
                            readonly format: "int32";
                            readonly description: "This is used internally on Sefaria to arrange the learning schedules in the manner we choose.";
                            readonly type: "integer";
                            readonly examples: readonly [1];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly category: {
                            readonly description: "Should always return `Tanakh`";
                            readonly type: "string";
                            readonly examples: readonly ["Tanakh"];
                        };
                        readonly extraDetails: {
                            readonly description: "Additional details about this learning schedule entry";
                            readonly type: "object";
                            readonly properties: {
                                readonly aliyot: {
                                    readonly description: "The breakdown of aliyot for a parashah";
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Exodus 35:1-35:29"];
                                    };
                                };
                            };
                        };
                        readonly description: {
                            readonly description: "A description of this learning schedule entry if it exists in `he` and `en`";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Vayakhel (“He Assembled”) opens as God commands the Israelites to observe the Sabbath. Moses asks for material donations for the building of the Mishkan (Tabernacle), and the people donate. A group of artisans designated by God begin building the Mishkan and its vessels.\n\nPekudei (“Accountings Of”) is the final Torah reading in the Book of Exodus. It describes the making of priestly garments worn in the Mishkan (Tabernacle) and the completion of its construction. At God’s command, Moses erects the Mishkan and puts its vessels in place, and God's presence fills the Mishkan."];
                                };
                                readonly he: {
                                    readonly type: "string";
                                    readonly examples: readonly ["בפרשת ויקהל בני ישראל מצווים לשמור את השבת. בני ישראל מתבקשים לתרום חומרים לבניית המשכן; הם נענים לבקשה בנדיבות ומתבקשים להפסיק לתרום. בצלאל ואהליאב מתחילים לנהל את בניית מבנה המשכן, כלי המשכן והחצר. כל פרט מבוצע כפי שציווה אלוהים את משה.\n\nפרשת פקודי, האחרונה בספר שמות, מסכמת את תרומות החומרים השונים למשכן, ואת עשיית בגדי הכהונה. בפרשה מתואר אירוע הקמת המשכן והכנסת הכלים לתוכו. משהושלמה בניית המשכן הענן מכסה את אוהל מועד, והשכינה שורה במשכן. ענן שוכן על המשכן ביום, ובלילה נראית בו אש, לעיני בני ישראל."];
                                };
                            };
                        };
                    };
                };
                readonly haftarah: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly description: "This should always read `Haftarah`";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Haftarah"];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["הפטרה"];
                                    };
                                };
                            };
                            readonly displayValue: {
                                readonly description: "The name of the Haftarah";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Ezekiel 45:16-46:18"];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["יחזקאל מ״ה:ט״ז-מ״ו:י״ח"];
                                    };
                                };
                            };
                            readonly url: {
                                readonly description: "The url path on Sefaria where this selection can be found";
                                readonly type: "string";
                                readonly examples: readonly ["Ezekiel.45.16-46.18"];
                            };
                            readonly ref: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly order: {
                                readonly format: "int32";
                                readonly description: "This is used internally on Sefaria to arrange the learning schedules in the manner we choose.";
                                readonly type: "integer";
                                readonly examples: readonly [2];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly category: {
                                readonly description: "Should return `Tanakh`";
                                readonly type: "string";
                                readonly examples: readonly ["Tanakh"];
                            };
                        };
                    };
                };
                readonly date: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2026-03-14T00:00:00"];
                };
                readonly he_date: {
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "string";
                            readonly examples: readonly ["Adar 25, 5786"];
                        };
                        readonly he: {
                            readonly type: "string";
                            readonly examples: readonly ["אדר 25, 5786"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRandomByTopic: {
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for RandomByTopicJSON";
            readonly description: "Response to the random-by-topic API endpoint. ";
            readonly type: "object";
            readonly properties: {
                readonly ref: {
                    readonly description: "The `Ref` of the text randomly selected, which is connected to one of the recently popular topics. ";
                    readonly type: "string";
                    readonly examples: readonly ["Deuteronomy 16:21"];
                };
                readonly topic: {
                    readonly title: "Root Type for RandomByTopicTopicJSON";
                    readonly description: "Topic JSON for the `random-by-topic/` endpoint. ";
                    readonly required: readonly ["slug"];
                    readonly type: "object";
                    readonly properties: {
                        readonly slug: {
                            readonly description: "The unique slug for a given topic.";
                            readonly type: "string";
                            readonly examples: readonly ["mezuzah"];
                        };
                        readonly titles: {
                            readonly type: "array";
                            readonly items: {
                                readonly title: "Root Type for TopicTitlesJSON";
                                readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly text: {
                                        readonly description: "The text of the title";
                                        readonly type: "string";
                                        readonly examples: readonly ["Sukkoth"];
                                    };
                                    readonly lang: {
                                        readonly description: "The language of the title, either `en` or `he`. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["he"];
                                    };
                                    readonly Primary: {
                                        readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                };
                            };
                        };
                        readonly alt_ids: {
                            readonly description: "This is a dictionary containing the keys of naming schemes, and ids of this topic represented in that naming scheme.  It’s used both for canonical names in other naming schemes and temporary storage of names when renaming slugs. All of the data here is for internal use, with the exception of the values `bfo` and `wikidata`. `bfo` refers to [basic formal ontology](https://github.com/BFO-ontology/BFO#implementations), and `wikidata` to the wikidata ontology of topics. ";
                        };
                        readonly categoryDescription: {
                            readonly description: "A description of the category of this topic";
                            readonly type: "string";
                        };
                        readonly numSources: {
                            readonly description: "The number of text sources associated with a topic. ";
                            readonly type: "integer";
                            readonly examples: readonly [613];
                        };
                        readonly description_published: {
                            readonly description: "A boolean representing whether or not the description was published. ";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly data_source: {
                            readonly description: "How the topic was generated, whether by Sefaria, a user on a source sheet, or some other source. ";
                            readonly type: "string";
                            readonly examples: readonly ["sefaria"];
                        };
                        readonly primary_title: {
                            readonly title: "Root Type for TopicImgCaption";
                            readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly description: "The English field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                };
                                readonly he: {
                                    readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                };
                            };
                        };
                        readonly description: {
                            readonly title: "Root Type for TopicImgCaption";
                            readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly description: "The English field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                };
                                readonly he: {
                                    readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                };
                            };
                        };
                    };
                };
                readonly url: {
                    readonly description: "The `Ref` in a format appropriate for a URL, with spaces replaced with `.` etc. ";
                    readonly type: "string";
                    readonly examples: readonly ["Deuteronomy.16.21"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRecommendTopics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly ref_list: {
                    readonly type: "string";
                    readonly examples: readonly ["Genesis 50+Mishnah Peah 3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of strings separated by '+'";
                };
            };
            readonly required: readonly ["ref_list"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Root Type for recommendedTopicResponse";
                readonly description: "";
                readonly type: "object";
                readonly properties: {
                    readonly slug: {
                        readonly description: "The url slug for the topic.";
                        readonly type: "string";
                        readonly examples: readonly ["jacobs-burial"];
                    };
                    readonly titles: {
                        readonly description: "Titles for the topic by language (usually Hebrew & English)";
                        readonly type: "object";
                        readonly properties: {
                            readonly en: {
                                readonly type: "string";
                                readonly examples: readonly ["Jacob's Burial"];
                            };
                            readonly he: {
                                readonly type: "string";
                                readonly examples: readonly ["קבורת יעקב"];
                            };
                        };
                    };
                    readonly count: {
                        readonly format: "int32";
                        readonly description: "Number of times the topic appears in the references";
                        readonly type: "integer";
                        readonly examples: readonly [3];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRefTopicLinks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly description: "A valid Sefaria textual `Ref`";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["tref"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for RefTopicLinksJSON";
            readonly description: "Response from the ref-topic-links endpoint";
            readonly type: "object";
            readonly properties: {
                readonly linkType: {
                    readonly description: "The type of the link, based on the relationship within our ontology. Many links has an `is-a` relationship (such as `Genesis` `is-a` `Book`), but other topic-to-topic links have a variety of other types documented  [here](https://developers.sefaria.org/docs/topic-ontology#overview-of-sefaria-link-types). \n\nSome examples include `child-of`, `parent-of`, `sibling-of` etc. ";
                    readonly type: "string";
                    readonly examples: readonly ["about"];
                };
                readonly class: {
                    readonly description: "A classification of the link as either `refTopic` (i.e. a ref to a topic) or `intraTopic` (topic-to-topic). In this case, it would be expected that all returned topic links would be of type `refTopic`. \n\n`refTopic` `intraTopic`";
                    readonly enum: readonly ["refTopic", "intraTopic"];
                    readonly type: "string";
                    readonly examples: readonly ["refTopic"];
                };
                readonly dataSource: {
                    readonly title: "Root Type for DataSourceJSON";
                    readonly description: "JSON containing the information as to the source of the data for a given ref-to-topic link. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "English title of the data source.";
                            readonly type: "string";
                            readonly examples: readonly ["Aspaklaria"];
                        };
                        readonly he: {
                            readonly description: "Hebrew title of the data source.";
                            readonly type: "string";
                            readonly examples: readonly ["אספקלריא"];
                        };
                        readonly slug: {
                            readonly description: "Unique slug describing the data source. ";
                            readonly type: "string";
                            readonly examples: readonly ["aspaklaria"];
                        };
                    };
                };
                readonly is_sheet: {
                    readonly description: "Is this ref-to-topic link one that was generated by a user-created source sheet?";
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly order: {
                    readonly title: "Root Type for OrderTopicLinkJSON";
                    readonly description: "This JSON includes the various metrics that are relevant for ordering the link on a topics page. We use these metrics at [Sefaria.org](sefaria.org) to change the order on the topics page.";
                    readonly type: "object";
                    readonly properties: {
                        readonly tfidf: {
                            readonly format: "double";
                            readonly description: "Results of the [tfidf algorithm](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) run on the `Ref`s within a given topic, as another metric for evaluating the relevance of a given source on a topic page. ";
                            readonly type: "number";
                            readonly examples: readonly [53.476917039392994];
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly numDatasource: {
                            readonly format: "int32";
                            readonly description: "The number of datasources which connect this `Ref` to the topic. A value of `2` will occur when two sources (i.e. `aspaklaria` and `sefaria sheets` both have connections between this `Ref` and this topic.)";
                            readonly type: "integer";
                            readonly examples: readonly [3];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly availableLangs: {
                            readonly description: "This topic is available in a list of languages represented as strings with their language code.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["en"];
                            };
                            readonly examples: readonly ["en", "he"];
                        };
                        readonly comp_date: {
                            readonly format: "int32";
                            readonly description: "The date when the book referenced in the `Ref` was composed. Negative numbers indicate the work was composed BCE, whereas positive numbers indicate the book was composed CE. ";
                            readonly type: "integer";
                            readonly examples: readonly [-1400];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly order_id: {
                            readonly description: "Unique ID for the `order` JSON.";
                            readonly type: "string";
                            readonly examples: readonly ["A00000000300280026"];
                        };
                        readonly pr: {
                            readonly format: "double";
                            readonly description: "`PageRank`. Sefaria calculates `PageRank` for the sources on a given topic page using the internal Sefaria links to create a link graph and then running the [PageRank algorithm](https://en.wikipedia.org/wiki/PageRank) on that. Sources with higher `PageRank` are considered to be more centrally linked and more relevant.";
                            readonly type: "number";
                            readonly examples: readonly [5.15330629652094];
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly curatedPrimacy: {
                            readonly description: "This field is used for manually ordering a source on a topics page. It has a separate order value for each language.";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly format: "int32";
                                    readonly type: "integer";
                                    readonly examples: readonly [100];
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly he: {
                                    readonly format: "int32";
                                    readonly type: "integer";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                            };
                        };
                    };
                };
                readonly descriptions: {
                    readonly description: "JSON containing descriptions for a given topic in various languages. Each language contains a `title` for the topic description, as well as a `prompt` which previews the source and asks questions to help the user engage with the text. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "object";
                            readonly properties: {
                                readonly title: {
                                    readonly type: "string";
                                    readonly examples: readonly ["A New Grain Offering"];
                                };
                                readonly prompt: {
                                    readonly type: "string";
                                    readonly examples: readonly ["The central ritual of Shavuot as described in the Torah is a special bread offering that was brought to the Temple. This sacrifice marked the beginning of sacrifices that were brought using grain from that year, as opposed to grains from the previous year, as explained in the Book of Numbers."];
                                };
                            };
                        };
                    };
                };
                readonly topic: {
                    readonly description: "The title of the topic. ";
                    readonly type: "string";
                    readonly examples: readonly ["passover"];
                };
                readonly anchorRef: {
                    readonly description: "The `Ref` the topic is connected to, which should overlap with the requested `Ref` passed through the endpoint. For example, if someone queries for `Bamidbar 28:21`, one of the topics returned is `passover` which has an `anchorRef` of `Numbers 28:16-24` - a range overlapping with our desired `Ref`. ";
                    readonly type: "string";
                    readonly examples: readonly ["Numbers 28:16-24"];
                };
                readonly anchorRefExpanded: {
                    readonly description: "If the `anchorRef` is a ranged `Ref` (i.e. containing more than a single segment), then this is a list of strings, with each string being one of single segment level `Ref`s that together comprise the range. So for example, the `anchorRefExpanded` of `Exodus 1:1-2` would be `[\"Exodus 1:1\", \"Exodus 1:2\"]`. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Numbers 28:26"];
                    };
                    readonly examples: readonly ["Numbers 28:16", "Numbers 28:17", "Numbers 28:18", "Numbers 28:19", "Numbers 28:20", "Numbers 28:21", "Numbers 28:22", "Numbers 28:23", "Numbers 28:24"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRelated: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly description: "A valid Sefaria textual `Ref`. ";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["tref"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for RelatedJSON";
            readonly description: "";
            readonly type: "object";
            readonly properties: {
                readonly links: {
                    readonly description: "An array of JSON containing the metadata for links to the reference.";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for RelatedLinkJSON";
                        readonly description: "The link JSON returned as part of results for the related API endpoint. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly _id: {
                                readonly type: "string";
                                readonly examples: readonly ["52245641edbab41a9d003f13"];
                            };
                            readonly index_title: {
                                readonly description: "English title of the linked work. ";
                                readonly type: "string";
                                readonly examples: readonly ["Rashi on Deuteronomy"];
                            };
                            readonly category: {
                                readonly description: "Category of the type of link, for example a link between `Rashi on Exodus` and `Exodus` would have a category of `Commentary`. ";
                                readonly type: "string";
                                readonly examples: readonly ["Commentary"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["commentary"];
                            };
                            readonly ref: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly anchorRef: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly anchorRefExpanded: {
                                readonly description: "An array of strings, where each string is a segment level `Ref` of the `Ref` passed in as a parameter. If a segment level `Ref` is passed in, this array will have a length of 1, and only contain that segment level `Ref`. If the `Ref` passed in is ranged, this array will contain each of the segment level `Ref`s within that range.\n\nFor example, if someone was searching for links for Esther 4.14-15, the `anchorRefExpanded` would contain Esther 4.14 and Esther 4.15.";
                                readonly type: "array";
                                readonly items: {
                                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Peah 4:2"];
                                };
                                readonly examples: readonly ["Deuteronomy 1:11"];
                            };
                            readonly sourceRef: {
                                readonly type: "string";
                                readonly examples: readonly ["Rashi on Deuteronomy 1:11:1"];
                            };
                            readonly sourceHeRef: {
                                readonly description: "Hebrew `Ref` of the linked source. ";
                                readonly type: "string";
                                readonly examples: readonly [" רש\\\"י על דברים א׳:י״א:א׳\n"];
                            };
                            readonly anchorVerse: {
                                readonly format: "int32";
                                readonly type: "integer";
                                readonly examples: readonly [11];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly sourceHasEn: {
                                readonly description: "Does the source have an English translation?";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly compDate: {
                                readonly description: "Date of the two books in the link were composed. Negative values indicate dates BCE. ";
                                readonly type: "array";
                                readonly items: {
                                    readonly format: "int32";
                                    readonly type: "integer";
                                    readonly examples: readonly [1075];
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly examples: readonly [1075, 1105];
                            };
                            readonly commentaryNum: {
                                readonly format: "double";
                                readonly type: "number";
                                readonly examples: readonly [11.0001];
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly collectiveTitle: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Rashi"];
                                    };
                                    readonly he: {
                                        readonly type: "string";
                                        readonly examples: readonly ["רש\"י"];
                                    };
                                };
                            };
                            readonly heTitle: {
                                readonly description: "Hebrew title of the linked work";
                                readonly type: "string";
                                readonly examples: readonly ["רש\\\"י על דברים"];
                            };
                        };
                    };
                };
                readonly sheets: {
                    readonly description: "All public source sheets linked to a given `Ref` or containing that `Ref` on the sheet. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for SheetsJSON";
                        readonly description: "JSON containing metadata relating for a given source sheet on [Sefaria](sefaria.org).";
                        readonly type: "object";
                        readonly properties: {
                            readonly owner: {
                                readonly format: "int32";
                                readonly description: "the Sefaria User ID of the sheet's owner.";
                                readonly type: "integer";
                                readonly examples: readonly [65000];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly _id: {
                                readonly description: "The unique `id` for the source sheet.";
                                readonly type: "string";
                                readonly examples: readonly ["5ec3a6f7c73d4d278311782e"];
                            };
                            readonly id: {
                                readonly description: "The `id` of the sheet. This is used in the URL to retrieve sheets, for example, a sheet with an `id` of 1, would be accessible on [Sefaria](sefaria.org) at [sefaria.org/sheets/1](sefaria.org/sheets/1).";
                                readonly type: "string";
                                readonly examples: readonly ["238181"];
                            };
                            readonly public: {
                                readonly description: "Is this sheet public.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly title: {
                                readonly description: "Title of the Source Sheet.";
                                readonly type: "string";
                                readonly examples: readonly ["Five Chapters, Five Theologies?"];
                            };
                            readonly sheetUrl: {
                                readonly description: "URL to this source sheet.";
                                readonly type: "string";
                                readonly examples: readonly ["/sheets/1"];
                            };
                            readonly anchorRef: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly anchorRefExpanded: {
                                readonly description: "An array containing the individual segments `Ref`s which comprise the `anchorRef`. \n\nExample 1: Ranged `Ref`\nIf the `anchorRef` is `Genesis 2:14-16`, the `anchorRefExpanded` is `[\"Genesis 2:14\", \"Genesis 2:15\", \"Genesis 2:16\"]`. \n\nExample 2: Segment Ref\nIf the `anchorRef` itself is a segment `Ref`, the `anchorRefExpanded` will contain that identical value. For example, `anchorRef` of `Genesis 2:11` will  have an `anchorRefExpanded` of `[\"Genesis 2:11\"]`";
                                readonly type: "array";
                                readonly items: {
                                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Peah 4:2"];
                                };
                            };
                            readonly options: {
                                readonly description: "A JSON object containing document level options related to how this source sheet should be displayed in Sefaria's Source Sheet editor.";
                                readonly type: "object";
                                readonly properties: {
                                    readonly numbered: {
                                        readonly description: "Should the sources be automatically numbered in the Sefaria editor view";
                                        readonly type: "number";
                                    };
                                    readonly boxed: {
                                        readonly description: "Should the sources be boxed on the page in the Sefaria editor view";
                                        readonly oneOf: readonly [{
                                            readonly type: "boolean";
                                        }, {
                                            readonly type: "number";
                                        }];
                                    };
                                    readonly assignable: {
                                        readonly description: "Is this source sheet an assignment for students in the Sefaria editor view";
                                        readonly oneOf: readonly [{
                                            readonly type: "boolean";
                                        }, {
                                            readonly type: "number";
                                        }];
                                    };
                                    readonly bsd: {
                                        readonly description: "Should the source sheet include בס\"ד at the top of the page in the Sefaria editor view";
                                        readonly oneOf: readonly [{
                                            readonly type: "boolean";
                                        }, {
                                            readonly type: "number";
                                        }];
                                    };
                                    readonly language: {
                                        readonly description: "Default display language of the source sheet in the Sefaria editor view\n\n`bilingual` `hebrew` `english`";
                                        readonly enum: readonly ["bilingual", "hebrew", "english"];
                                        readonly type: "string";
                                        readonly examples: readonly ["bilingual"];
                                    };
                                    readonly layout: {
                                        readonly description: "Default display layout of the source sheet in the Sefaria editor view";
                                        readonly type: "string";
                                        readonly examples: readonly ["sideBySide"];
                                    };
                                    readonly langLayout: {
                                        readonly description: "Default display side of the language in a bilingual side-by-side view in the Sefaria editor view";
                                        readonly type: "string";
                                        readonly examples: readonly ["enLeft"];
                                    };
                                    readonly divineNames: {
                                        readonly description: "Should the Tetragrammaton (Shem Hashem) and other variants of the divine name be replaced, and if so in what form?";
                                        readonly type: "string";
                                        readonly examples: readonly ["noSub"];
                                    };
                                    readonly highlightMode: {
                                        readonly deprecated: true;
                                        readonly format: "int32";
                                        readonly type: "integer";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly collaboration: {
                                        readonly type: "string";
                                        readonly examples: readonly ["none"];
                                    };
                                };
                            };
                            readonly collectionTOC: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }];
                            };
                            readonly ownerName: {
                                readonly description: "Name of the owner of the sheet.";
                                readonly type: "string";
                                readonly examples: readonly ["יותם גונן"];
                            };
                            readonly via: {
                                readonly description: "Some source sheets are made by copying another users. If this is one of them, the original owner's user ID will be listed here.";
                                readonly type: "string";
                            };
                            readonly viaOwnerName: {
                                readonly description: "Some source sheets are made by copying another users. If this is one of them, the original owner's display name will be listed here.";
                                readonly type: "string";
                            };
                            readonly assignerName: {
                                readonly description: "Some source sheets are created as assignments by a teacher to be completed by students. If this is one of those sheets the name of the assigner will be found here.";
                                readonly type: "string";
                            };
                            readonly viaOwnerProfileUrl: {
                                readonly description: "Some source sheets are made by copying another users. If this is one of them, the path to the original owner's profile page will be listed here.";
                                readonly type: "string";
                            };
                            readonly assignerProfileUrl: {
                                readonly description: "Some source sheets are created as assignments by a teacher to be completed by students. If this is one of those sheets this will be the URL path to their profile.";
                                readonly type: "string";
                            };
                            readonly ownerProfileUrl: {
                                readonly description: "The URL Path that will link to a user's profile on the Sefaria site.";
                                readonly type: "string";
                                readonly examples: readonly ["/profile/-2977"];
                            };
                            readonly ownerImageUrl: {
                                readonly description: "Sheet owner image.";
                                readonly type: "string";
                                readonly examples: readonly ["https://storage.googleapis.com/sefaria-profile-pictures/-2977-1626800304-small.png"];
                            };
                            readonly status: {
                                readonly description: "a string indicating whether the sheet is `public` or `unlisted`\n\n`public` `unlisted`";
                                readonly enum: readonly ["public", "unlisted"];
                                readonly type: "string";
                                readonly examples: readonly ["public"];
                            };
                            readonly views: {
                                readonly format: "int32";
                                readonly description: "Number of source sheet views.";
                                readonly type: "integer";
                                readonly examples: readonly [8509];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly topics: {
                                readonly description: "Topics linked to the source sheet.";
                                readonly type: "array";
                                readonly items: {
                                    readonly title: "Root Type for SheetTopicJSON";
                                    readonly description: "";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly slug: {
                                            readonly description: "Slug of the topic";
                                            readonly type: "string";
                                            readonly examples: readonly ["parashat-devarim"];
                                        };
                                        readonly asTyped: {
                                            readonly description: "How the user typed the topic";
                                            readonly type: "string";
                                            readonly examples: readonly ["tanach"];
                                        };
                                        readonly he: {
                                            readonly description: "Hebrew topic title";
                                            readonly type: "string";
                                            readonly examples: readonly ["דברים"];
                                        };
                                        readonly en: {
                                            readonly description: "English topic title";
                                            readonly type: "string";
                                            readonly examples: readonly ["Parashat Devarim"];
                                        };
                                    };
                                };
                            };
                            readonly likes: {
                                readonly description: "An array of user IDs who have favorited or liked this source sheet.";
                                readonly type: "array";
                                readonly items: {};
                            };
                            readonly summary: {
                                readonly description: "A user generated description of the source sheet";
                                readonly type: "string";
                            };
                            readonly attribution: {
                                readonly description: "Some source sheets are made by copying another users. If so, an attribution field will be created and displayed here.";
                                readonly type: "string";
                            };
                            readonly is_featured: {
                                readonly deprecated: true;
                                readonly description: "Previously a source sheet flagged with `is_featured` would be promoted throughout the site in various places. This behavior was removed in 2022 but some of the data remains. ";
                                readonly type: "boolean";
                            };
                            readonly category: {
                                readonly description: "This will always return `Sheets`";
                                readonly type: "string";
                                readonly examples: readonly ["Sheets"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["sheet"];
                            };
                        };
                    };
                };
                readonly notes: {
                    readonly description: "Any notes a user has on a given `Ref`. **Note:** This data is only available for logged-in users to view their own notes on a text. This field will always present as an empty array for third party developers. ";
                    readonly type: "array";
                    readonly items: {};
                };
                readonly webpages: {
                    readonly description: "Webpages related to the `Ref`. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for WebPagesJSON";
                        readonly description: "A JSON object containing the metadata for external webpages linked to this Sefaria `Ref`.";
                        readonly type: "object";
                        readonly properties: {
                            readonly url: {
                                readonly description: "URL to the related article on the webpage. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://etzion.org.il/en/mission-spies"];
                            };
                            readonly title: {
                                readonly description: "Title of the webpage";
                                readonly type: "string";
                                readonly examples: readonly ["The Mission of the Spies | vbm haretzion"];
                            };
                            readonly refs: {
                                readonly description: "All textual references found on this webpage which link to various Sefaria `Ref`s.";
                                readonly type: "array";
                                readonly items: {
                                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Peah 4:2"];
                                };
                                readonly examples: readonly ["Joshua 2:2-3", "I Samuel 26:9", "Deuteronomy 32:51", "Numbers 34:16-29", "Numbers 26:52-56", "Joshua 14", "Numbers 13", "Numbers 20:12", "Numbers 32:9", "Deuteronomy 9:1-2", "Numbers 13:20", "Genesis 13:17", "Numbers 13:21", "Numbers 13:22", "Deuteronomy 1:37", "Joshua 2:1", "Deuteronomy 1:22", "Deuteronomy 1", "Numbers 34", "Deuteronomy 1:21", "Numbers 32", "Deuteronomy 1:24", "Joshua 18:3-9"];
                            };
                            readonly description: {
                                readonly description: "Description of the article. ";
                                readonly type: "string";
                                readonly examples: readonly ["Parshat HaShavua Yeshivat Har Etzion PARASHAT SHELACH The Mission of the Spies by Rav Yaakov Medan A  The Problem"];
                            };
                            readonly linkerHits: {
                                readonly format: "int32";
                                readonly description: "Number of hits by the Sefaria linker. ";
                                readonly type: "integer";
                                readonly examples: readonly [283];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly domain: {
                                readonly description: "Domain of the webpage";
                                readonly type: "string";
                                readonly examples: readonly ["etzion.org.il"];
                            };
                            readonly siteName: {
                                readonly description: "Name of the webpage";
                                readonly type: "string";
                                readonly examples: readonly ["Torat Har Etzion"];
                            };
                            readonly favicon: {
                                readonly description: "Favicon of the external webspage";
                                readonly type: "string";
                                readonly examples: readonly ["https://www.google.com/s2/favicons?domain=etzion.org.il"];
                            };
                            readonly authors: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }];
                            };
                            readonly articleSource: {
                                readonly type: "string";
                            };
                            readonly anchorRef: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly anchorRefExpanded: {
                                readonly description: "If the `anchorRef` is a ranged `Ref`, this is an array of `Refs` containing each of the segments contained within that range. So for example, if `anchorRef` is Genesis 1:1-2, then `anchorRefExpanded` will be `[\"Genesis 1:1\", \"Genesis 1:2\"]`.";
                                readonly type: "array";
                                readonly items: {
                                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Peah 4:2"];
                                };
                                readonly examples: readonly ["Genesis 1.1", "Genesis 1.2"];
                            };
                        };
                    };
                };
                readonly topics: {
                    readonly description: "Topics related to a given `Ref`. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for RelatedTopicJSON";
                        readonly description: "Topic JSON returned in the `topic` field of the related API endpoint. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly linkType: {
                                readonly description: "The type of link between the topic and the `Ref`. For more on Sefaria's topic ontology, see [here](https://developers.sefaria.org/docs/topic-ontology). ";
                                readonly type: "string";
                                readonly examples: readonly ["about"];
                            };
                            readonly class: {
                                readonly description: "A classification of the link as either `refTopic` (i.e. a ref to a topic) or `intraTopic` (topic-to-topic). In this case, it would be expected that all returned topic links would be of type `refTopic`.\n\n`refTopic` `intraTopic`";
                                readonly enum: readonly ["refTopic", "intraTopic"];
                                readonly type: "string";
                                readonly examples: readonly ["refTopic"];
                            };
                            readonly dataSource: {
                                readonly title: "Root Type for DataSourceJSON";
                                readonly description: "JSON containing the information as to the source of the data for a given ref-to-topic link. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly description: "English title of the data source.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Aspaklaria"];
                                    };
                                    readonly he: {
                                        readonly description: "Hebrew title of the data source.";
                                        readonly type: "string";
                                        readonly examples: readonly ["אספקלריא"];
                                    };
                                    readonly slug: {
                                        readonly description: "Unique slug describing the data source. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["aspaklaria"];
                                    };
                                };
                            };
                            readonly is_sheet: {
                                readonly description: "Is this ref-to-topic link one that was generated by a user-created source sheet?";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly generatedBy: {
                                readonly description: "How the topic was generated (i.e. by a user, aspaklaria, Sefaria staff)";
                                readonly type: "string";
                                readonly examples: readonly ["sheet-topic-aggregator"];
                            };
                            readonly order: {
                                readonly title: "Root Type for OrderTopicLinkJSON";
                                readonly description: "This JSON includes the various metrics that are relevant for ordering the link on a topics page. We use these metrics at [Sefaria.org](sefaria.org) to change the order on the topics page.";
                                readonly type: "object";
                                readonly properties: {
                                    readonly tfidf: {
                                        readonly format: "double";
                                        readonly description: "Results of the [tfidf algorithm](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) run on the `Ref`s within a given topic, as another metric for evaluating the relevance of a given source on a topic page. ";
                                        readonly type: "number";
                                        readonly examples: readonly [53.476917039392994];
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly numDatasource: {
                                        readonly format: "int32";
                                        readonly description: "The number of datasources which connect this `Ref` to the topic. A value of `2` will occur when two sources (i.e. `aspaklaria` and `sefaria sheets` both have connections between this `Ref` and this topic.)";
                                        readonly type: "integer";
                                        readonly examples: readonly [3];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly availableLangs: {
                                        readonly description: "This topic is available in a list of languages represented as strings with their language code.";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly examples: readonly ["en"];
                                        };
                                        readonly examples: readonly ["en", "he"];
                                    };
                                    readonly comp_date: {
                                        readonly format: "int32";
                                        readonly description: "The date when the book referenced in the `Ref` was composed. Negative numbers indicate the work was composed BCE, whereas positive numbers indicate the book was composed CE. ";
                                        readonly type: "integer";
                                        readonly examples: readonly [-1400];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly order_id: {
                                        readonly description: "Unique ID for the `order` JSON.";
                                        readonly type: "string";
                                        readonly examples: readonly ["A00000000300280026"];
                                    };
                                    readonly pr: {
                                        readonly format: "double";
                                        readonly description: "`PageRank`. Sefaria calculates `PageRank` for the sources on a given topic page using the internal Sefaria links to create a link graph and then running the [PageRank algorithm](https://en.wikipedia.org/wiki/PageRank) on that. Sources with higher `PageRank` are considered to be more centrally linked and more relevant.";
                                        readonly type: "number";
                                        readonly examples: readonly [5.15330629652094];
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly curatedPrimacy: {
                                        readonly description: "This field is used for manually ordering a source on a topics page. It has a separate order value for each language.";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly en: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly examples: readonly [100];
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly he: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                        };
                                    };
                                };
                            };
                            readonly topic: {
                                readonly description: "Topic slug";
                                readonly type: "string";
                                readonly examples: readonly ["parashat-devarim"];
                            };
                            readonly title: {
                                readonly description: "The title of the topic in Hebrew (`he`) and English (`en`).";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly titleIsTransliteration: {
                                readonly description: "A boolean value for the `he` and `en` fields inside the title JSON, indicating whether or not either translation is a transliteration. ";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly description: {
                                readonly description: "JSON containing descriptions for a given topic in various languages. Each language contains a title for the topic description, as well as a prompt which previews the source and asks questions to help the user engage with the text.";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly anchorRef: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly anchorRefExpanded: {
                                readonly description: "The segment `Ref`s within the `anchorRef`. ";
                                readonly type: "array";
                                readonly items: {
                                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Peah 4:2"];
                                };
                            };
                        };
                    };
                };
                readonly manuscripts: {
                    readonly description: "An array of manuscript objects containing data of related manuscripts. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for ManuscriptJSON";
                        readonly description: "Manuscript data and metadata JSON. ";
                        readonly required: readonly ["manuscript"];
                        readonly type: "object";
                        readonly properties: {
                            readonly manuscript_slug: {
                                readonly description: "A unique slug for the given manuscript";
                                readonly type: "string";
                                readonly examples: readonly ["leningrad-codex-(1008-ce)"];
                            };
                            readonly page_id: {
                                readonly description: "The ID for the specific page within the manuscript being referenced. ";
                                readonly type: "string";
                                readonly examples: readonly ["LC_Folio_435r"];
                            };
                            readonly image_url: {
                                readonly description: "The URL to the image of the manuscript, hosted by Sefaria. All URLs will be prefaced by `https://manuscripts.sefaria.org/`";
                                readonly type: "string";
                                readonly examples: readonly ["https://manuscripts.sefaria.org/leningrad-color/BIB_LENCDX_F434B_thumbnail.jpg"];
                            };
                            readonly thumbnail_url: {
                                readonly description: "The url to the thumbnail image of the manuscript. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://manuscripts.sefaria.org/leningrad-color/BIB_LENCDX_F434B_thumbnail.jpg"];
                            };
                            readonly anchorRef: {
                                readonly description: "A manuscript image will in most cases be associated with a range of `refs` (i.e. an image of a page of Tanakh will display multiple verses). The `anchorRef` is that complete range the manuscript is associated with, and will contain within it the specific textual `Ref` passed in as a parameter. ";
                                readonly type: "string";
                                readonly examples: readonly ["\"Esther 3:15-4:17\""];
                            };
                            readonly anchorRefExpanded: {
                                readonly description: "An array of strings, where each string is a segment level `Ref` of the `Ref` passed in as a parameter. If a segment level `Ref` is passed in, this array will have a length of 1, and only contain that segment level `Ref`. If the `Ref` passed in is ranged, this array will contain each of the segment level `Ref`s within that range. \n\nFor example, if someone was searching for manuscript data for `Esther 4.14-15`, the `anchorRefExpanded` would contain `Esther 4.14` and `Esther 4.15`.";
                                readonly minItems: 1;
                                readonly uniqueItems: true;
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Esther 4:14"];
                                };
                                readonly examples: readonly ["Esther 4:14", "Esther 4:15"];
                            };
                            readonly manuscript: {
                                readonly title: "Root Type for ManuscriptVersionMetaData";
                                readonly description: "The specific metadata for the version of the manuscript. ";
                                readonly required: readonly ["slug", "description", "he_description", "he_title", "source", "title"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly slug: {
                                        readonly description: "The unique slug for the manuscript. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["leningrad-codex-(1008-ce)"];
                                    };
                                    readonly title: {
                                        readonly description: "The title of the manuscript. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["Leningrad Codex (1008 CE)"];
                                    };
                                    readonly he_title: {
                                        readonly description: "The manuscript title in Hebrew. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["כתב יד לנינגרד (1008)"];
                                    };
                                    readonly source: {
                                        readonly description: "The url for the source of the manuscript images. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["https://dornsife.usc.edu/wsrp/biblical-manuscripts/"];
                                    };
                                    readonly description: {
                                        readonly description: "A description of the manuscript, oftening containing details about the archivists or where the physical manuscript images can be found, as well as other library details.  ";
                                        readonly type: "string";
                                        readonly examples: readonly ["Bruce Zuckerman, West Semitic Research, in collaboration with the Ancient Biblical Manuscript Center; courtesy Russian National Library, Saltykov-Schedrin"];
                                    };
                                    readonly he_description: {
                                        readonly description: "A Hebrew description of the manuscript, oftening containing details about the archivists or where the physical manuscript images can be found, as well as other library details.  ";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly media: {
                    readonly description: "An array of JSON containing any media related to the `Ref`. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for MediaJSON";
                        readonly description: "JSON containing metadata for media linked to `Ref`s on [Sefaria](sefaria.org)";
                        readonly type: "object";
                        readonly properties: {
                            readonly media_url: {
                                readonly description: "The URL for the media. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://raw.githubusercontent.com/rneiss/PocketTorah/master/data/audio/Devarim-2.mp3"];
                            };
                            readonly source: {
                                readonly description: "Source of the media. ";
                                readonly type: "string";
                                readonly examples: readonly ["PocketTorah"];
                            };
                            readonly source_he: {
                                readonly description: "Hebrew title of the media source. ";
                                readonly type: "string";
                                readonly examples: readonly ["פוקט\\\"-תורה"];
                            };
                            readonly start_time: {
                                readonly description: "Start time of the media associated with this `Ref`.";
                                readonly type: "string";
                                readonly examples: readonly ["0"];
                            };
                            readonly end_time: {
                                readonly description: "End time of the portion of the associated media which correlates to this `Ref`. ";
                                readonly type: "string";
                                readonly examples: readonly ["27.26476"];
                            };
                            readonly anchorRef: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                            readonly license: {
                                readonly description: "The license on the media. ";
                                readonly type: "string";
                                readonly examples: readonly ["CC-BY-SA"];
                            };
                            readonly source_site: {
                                readonly description: "Website of the source.";
                                readonly type: "string";
                                readonly examples: readonly ["http://www.pockettorah.com"];
                            };
                            readonly description: {
                                readonly description: "A description of the associated media in English. ";
                                readonly type: "string";
                                readonly examples: readonly ["Audio recordings of the weekly Torah portions used in PocketTorah. Avery-Binder style."];
                            };
                            readonly description_he: {
                                readonly description: "A description of the associated media in Hebrew. ";
                                readonly type: "string";
                                readonly examples: readonly ["הקלטות שמע של פרשות השבוע באמצעות \\\"פוקט-תורה\\\" בסגנון הקריאה של א. בינדר ול.אוורי."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetShape: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["Jonah", "Pesachim", "Rashi on Exodus", "Tanakh/Modern Commentary on Tanakh/Steinsaltz"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The title of a valid Sefaria `Index`, or the path of a valid Sefaria category. ";
                };
            };
            readonly required: readonly ["title"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly depth: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The `depth` parameter in the query string indicates how many levels in the category tree to descend.\nIf `depth=0` is passed, then the returned JSON descends to end of tree.\nThe default is `depth=2`.";
                };
                readonly dependents: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The dependents parameter, if `true`, includes dependent texts. By default, they are filtered out.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The shape API allows one to retrieve information about the shape of an Index on Sefaria. The shape refers some basic statistics about the Index, mostly the number of chapters, and the number of segments per chapter.";
            readonly required: readonly ["book", "heBook", "chapters"];
            readonly type: "object";
            readonly properties: {
                readonly Section: {
                    readonly description: "The parent section for this `Index`. (So for example, the `section` for `Jonah` is `Prophets`. The `section` for `Pesachim` is `Seder Moed`)";
                    readonly type: "string";
                    readonly examples: readonly ["Prophets"];
                };
                readonly isComplex: {
                    readonly description: "A boolean representing whether or not this is a complex text. ";
                    readonly type: "boolean";
                };
                readonly Length: {
                    readonly description: "The number of chapters or top-level sections in the `Index`. ";
                };
                readonly Book: {
                    readonly description: "Title of the `Index` in English";
                    readonly type: "string";
                };
                readonly heBook: {
                    readonly description: "Title of the `Index` in Hebrew. ";
                    readonly type: "string";
                };
                readonly Chapters: {
                    readonly description: "For simple texts, this is a list of chapter lengths. For complex texts or categories, the Shape API will return a list of dicts for each text within that category or text. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "integer";
                    };
                    readonly examples: readonly [16, 11, 10, 11];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTerms: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Noah", "HaChovel"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The English name of a valid Sefaria term. ";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for TermsJSON";
            readonly description: "Term JSON returned to a query for a Term. ";
            readonly required: readonly ["name"];
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly description: "The name of the `Term`. Since a `Term` is a shared title node that can be referenced and used by many different `Index` nodes, the `name` field is critical as it contains the shared title. ";
                    readonly type: "string";
                    readonly examples: readonly ["Noah"];
                };
                readonly titles: {
                    readonly description: "Alternative titles for the term in Hebrew and English.";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicTitlesJSON";
                        readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly text: {
                                readonly description: "The text of the title";
                                readonly type: "string";
                                readonly examples: readonly ["Sukkoth"];
                            };
                            readonly lang: {
                                readonly description: "The language of the title, either `en` or `he`. ";
                                readonly type: "string";
                                readonly examples: readonly ["he"];
                            };
                            readonly Primary: {
                                readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                        };
                    };
                };
                readonly scheme: {
                    readonly description: "A shared `scheme` for a group of terms. ";
                    readonly type: "string";
                    readonly examples: readonly ["Parasha"];
                };
                readonly order: {
                    readonly format: "int32";
                    readonly description: "Terms that share a `scheme` can be ordered within that `scheme`. So for example, _Parshiyot_ within the `Parasha` scheme can be ordered as per the order of the _Parshiyot_. ";
                    readonly type: "integer";
                    readonly examples: readonly [4];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly ref: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly category: {
                    readonly description: "The category of a specific term. ";
                    readonly type: "string";
                    readonly examples: readonly ["`texts`, `Torah Portions`"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTextsRandom: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly titles: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A string of book titles from the Sefaria library, separated with the character `|`. If it exists, it will limit the random selection to those titles.";
                };
                readonly categories: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A string of categories from the Sefaria library, separated with the character `|`. If it exists, it will limit the random selection to those categories.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for textAPIReponse";
            readonly description: "Expected reponse data from Sefaria's Text API";
            readonly type: "object";
            readonly properties: {
                readonly ref: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly isComplex: {
                    readonly description: "Whether or not the text is a \"complex\" text or not.\n\nIn Sefaria, a complex text is any text which has a more complicated index structure beyond Chapters/Verses, (e.g. the Talmud). There are a variety of structural differences for a complex text, having to do primarily with its `Index`, and the way the data is stored. For more on complex texts, see the documentation here.";
                    readonly type: "boolean";
                };
                readonly text: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                        readonly examples: readonly ["Peah is given from [the crop] while it is still connected with the soil. But in the case of hanging vine-branches and the date-palm, the owner brings down [the fruit] and distributes it among the poor. Rabbi Shimon says: the same applies to smooth nut trees. Even if ninety-nine [of the poor] say [to the owner] to distribute it and one says to leave it in the field, this latter is listened to, since he spoke in accordance with the halakhah."];
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    }, {
                        readonly type: "array";
                        readonly items: {};
                    }];
                    readonly description: "The default, or specified text written in LTR characters for the query (Usually English). It is structured as a `JaggedArray` (nested arrays), with the lowest level being an array of strings with some HTML text.";
                    readonly examples: readonly [readonly ["Peah is given from [the crop] while it is still connected with the soil. But in the case of hanging vine-branches and the date-palm, the owner brings down [the fruit] and distributes it among the poor. Rabbi Shimon says: the same applies to smooth nut trees. Even if ninety-nine [of the poor] say [to the owner] to distribute it and one says to leave it in the field, this latter is listened to, since he spoke in accordance with the halakhah.", "With hanging vine-branches and date-palm trees it is not so; even if ninety-nine [of the poor] say [to the owner] to leave it in the field and one says to distribute it, this latter is listened to, since he spoke in accordance with the halakhah.", "If [a poor man] took some of the peah [already collected] and threw it onto the remainder [not yet collected], he gets none of it. If he fell down upon it, or spread his cloak over it, they take the peah away from him. The same applies to gleanings and the forgotten sheaf.", "[The poor] may not harvest peah with scythes or tear it out [of the ground] with spades, so that they might not strike one another [with these implements].", "There are three times a day [the poor] make a search [in the field for peah]: morning, noon, and sunset. Rabban Gamaliel says: these [times] were only set lest they reduce them. Rabbi Akiva says: these were set lest they add to them. [The men] of Bet Namer used to have the poor harvest [the peah] with the aid of a rope, and they left peah at the end of each furrow.", "A non-Jew who harvested his field and then converted, he is exempt from [leaving] gleanings, the forgotten sheaf and peah. Rabbi Judah makes him liable to leave the forgotten sheaf, since he becomes liable for the forgotten sheaf at the time of their binding.", "One who dedicated standing grain [to the Temple] and then redeemed it while it was still standing grain, he is liable [to give the agricultural gifts to the poor]. [If he dedicated] sheaves and redeemed them while they were still sheaves, he is liable. [If he dedicated] standing grain and redeemed it [when it was already in] sheaves, he is exempt, since at the time when it became liable it was exempt.", "Similarly one who dedicates his produce prior to the stage when they are subject to tithes and then redeemed them, they are liable [to be tithed]. If [he dedicated them] when they had already become subject to tithes and then redeemed them, they are liable [to be tithed]. If he dedicated them before they had ripened, and they became ripe while in the possession of the [Temple] treasurer, and he then redeemed them, they are exempt, since at the time when they would have been liable, they were exempt.", "One who collected peah and said, “This is for so-and-so a poor man:” Rabbi Eliezer says: he has thus acquired it for him. The sages say: he must give it to the first poor man he finds. Gleanings, the forgotten sheaf and the peah of non-Jews are subject to tithes, unless he [the non-Jew] had declared them ownerless.", "What are gleanings? That which falls down at the time of harvesting. If while he was harvesting, he harvested a handful, or plucked a fistful, and then a thorn pricked him, and what he had in his hand fell to the ground, it still belongs to the owner. [That which drops from] inside the hand or the sickle [belongs] to the poor, but [that which falls from] the back of the hand or the sickle [belongs] to the owner. [That which falls from] the top of the hand or sickle: Rabbi Ishmael says: to the poor; But Rabbi Akiva says: to the owner.", "[Grain found in] ant holes where the stalks are still standing, behold it still belongs to the owner. After the harvesters [had passed over them], those found in the top parts [of the ant holes belong] to the poor, but [those found] on the bottom parts [belong] to the owner. Rabbi Meir says: it all belongs to the poor, for gleanings about which there is any doubt are regarded as gleanings."]];
                };
                readonly he: {
                    readonly oneOf: readonly [{
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    }, {
                        readonly type: "string";
                        readonly examples: readonly ["בְּדָלִית וּבְדֶקֶל אֵינוֹ כֵן, אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לָבוֹז וְאֶחָד אוֹמֵר לְחַלֵּק, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n"];
                    }];
                    readonly description: "The default, or specified text written in RTL characters for the query (Usually Hebrew). It is structured as a JaggedArray (nested arrays), with the lowest level being an array of strings with some html text.";
                    readonly examples: readonly [readonly ["הַפֵּאָה נִתֶּנֶת בִּמְחֻבָּר לַקַּרְקָע. בְּדָלִית וּבְדֶקֶל, בַּעַל הַבַּיִת מוֹרִיד וּמְחַלֵּק לָעֲנִיִּים. רַבִּי שִׁמְעוֹן אוֹמֵר, אַף בַּחֲלִיקֵי אֱגוֹזִים. אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לְחַלֵּק וְאֶחָד אוֹמֵר לָבוֹז, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n", "בְּדָלִית וּבְדֶקֶל אֵינוֹ כֵן, אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לָבוֹז וְאֶחָד אוֹמֵר לְחַלֵּק, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n", "נָטַל מִקְצָת פֵּאָה וּזְרָקָהּ עַל הַשְּׁאָר, אֵין לוֹ בָהּ כְּלוּם. נָפַל לוֹ עָלֶיהָ, וּפֵרֵשׂ טַלִּיתוֹ עָלֶיהָ, מַעֲבִירִין אוֹתָהּ הֵימֶנּוּ. וְכֵן בְּלֶקֶט, וְכֵן בְּעֹמֶר הַשִּׁכְחָה: \n", "פֵּאָה אֵין קוֹצְרִין אוֹתָהּ בְּמַגָּלוֹת, וְאֵין עוֹקְרִין אוֹתָהּ בְּקַרְדֻּמּוֹת, כְּדֵי שֶׁלֹּא יַכּוּ אִישׁ אֶת רֵעֵהוּ: \n", "שָׁלשׁ אַבְעָיוֹת בַּיּוֹם, בַּשַּׁחַר וּבַחֲצוֹת וּבַמִּנְחָה. רַבָּן גַּמְלִיאֵל אוֹמֵר, לֹא אָמְרוּ אֶלָּא כְּדֵי שֶׁלֹּא יִפְחֲתוּ. רַבִּי עֲקִיבָא אוֹמֵר, לֹא אָמְרוּ אֶלָּא כְּדֵי שֶׁלֹּא יוֹסִיפוּ. שֶׁל בֵּית נָמֵר הָיוּ מְלַקְּטִין עַל הַחֶבֶל, וְנוֹתְנִים פֵּאָה מִכָּל אֻמָּן וְאֻמָּן: \n", "עוֹבֵד כּוֹכָבִים שֶׁקָּצַר אֶת שָׂדֵהוּ וְאַחַר כָּךְ נִתְגַּיֵּר, פָּטוּר מִן הַלֶּקֶט וּמִן הַשִּׁכְחָה וּמִן הַפֵּאָה. רַבִּי יְהוּדָה מְחַיֵּב בְּשִׁכְחָה, שֶׁאֵין הַשִּׁכְחָה אֶלָּא בִשְׁעַת הָעִמּוּר: \n", "הִקְדִּישׁ קָמָה וּפָדָה קָמָה, חַיָּב. עֳמָרִין וּפָדָה עֳמָרִין, חַיָּב. קָמָה וּפָדָה עֳמָרִין, פְּטוּרָה, שֶׁבִּשְׁעַת חוֹבָתָהּ הָיְתָה פְטוּרָה: \n", "כַּיּוֹצֵא בוֹ, הַמַּקְדִּישׁ פֵּרוֹתָיו עַד שֶׁלֹּא בָאוּ לְעוֹנַת הַמַּעַשְׂרוֹת, וּפְדָאָן, חַיָּבִין. מִשֶּׁבָּאוּ לְעוֹנַת הַמַּעַשְׂרוֹת, וּפְדָאָן, חַיָּבִין. הִקְדִּישָׁן עַד שֶׁלֹּא נִגְמְרוּ וּגְמָרָן הַגִּזְבָּר, וְאַחַר כָּךְ פְּדָאָן, פְּטוּרִים, שֶׁבִּשְׁעַת חוֹבָתָן הָיוּ פְטוּרִים: \n", "מִי שֶׁלָּקַט אֶת הַפֵּאָה וְאָמַר הֲרֵי זוֹ לְאִישׁ פְּלוֹנִי עָנִי, רַבִּי אֱלִיעֶזֶר אוֹמֵר, זָכָה לוֹ. וַחֲכָמִים אוֹמְרִים, יִתְּנֶנָּה לֶעָנִי שֶׁנִּמְצָא רִאשׁוֹן. הַלֶּקֶט וְהַשִּׁכְחָה וְהַפֵּאָה שֶׁל עוֹבֵד כּוֹכָבִים חַיָּב בְּמַעַשְׂרוֹת, אֶלָּא אִם כֵּן הִפְקִיר: \n", "אֵיזֶהוּ לֶקֶט, הַנּוֹשֵׁר בִּשְׁעַת הַקְּצִירָה. הָיָה קוֹצֵר, קָצַר מְלֹא יָדוֹ, תָּלַשׁ מְלֹא קֻמְצוֹ, הִכָּהוּ קוֹץ וְנָפַל מִיָּדוֹ לָאָרֶץ, הֲרֵי הוּא שֶׁל בַּעַל הַבָּיִת. תּוֹךְ הַיָּד וְתוֹךְ הַמַּגָּל, לָעֲנִיִּים. אַחַר הַיָּד וְאַחַר הַמַּגָּל, לְבַעַל הַבָּיִת. רֹאשׁ הַיָּד וְרֹאשׁ הַמַּגָּל, רַבִּי יִשְׁמָעֵאל אוֹמֵר, לָעֲנִיִּים. רַבִּי עֲקִיבָא אוֹמֵר, לְבַעַל הַבָּיִת: \n", "חוֹרֵי הַנְּמָלִים שֶׁבְּתוֹךְ הַקָּמָה, הֲרֵי הֵן שֶׁל בַּעַל הַבָּיִת. שֶׁלְּאַחַר הַקּוֹצְרִים, הָעֶלְיוֹנִים לָעֲנִיִּים, וְהַתַּחְתּוֹנִים שֶׁל בַּעַל הַבָּיִת. רַבִּי מֵאִיר אוֹמֵר, הַכֹּל לָעֲנִיִּים, שֶׁסְּפֵק לֶקֶט, לֶקֶט: \n"]];
                };
                readonly versions: {
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for versionData";
                        readonly description: "Information about a single text version of a title";
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Genesis"];
                            };
                            readonly versionTitle: {
                                readonly type: "string";
                                readonly examples: readonly ["The Contemporary Torah, Jewish Publication Society, 2006"];
                            };
                            readonly versionSource: {
                                readonly type: "string";
                                readonly examples: readonly ["https://www.nli.org.il/he/books/NNL_ALEPH002529489/NLI"];
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly examples: readonly ["en"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["locked"];
                            };
                            readonly license: {
                                readonly type: "string";
                                readonly examples: readonly ["CC-BY-NC"];
                            };
                            readonly versionNotes: {
                                readonly type: "string";
                                readonly examples: readonly ["Dedicated by an anonymous donor in honor of all women and girls who study, teach, and transform Torah.\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/382047\">Read the preface to The Contemporary Torah</a>\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/380713\"> See the Dictionary of Gender in the Torah</a>"];
                            };
                            readonly digitizedBySefaria: {
                                readonly type: "string";
                            };
                            readonly priority: {
                                readonly format: "int32";
                                readonly type: "integer";
                                readonly examples: readonly [7];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly versionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly versionNotesInHebrew: {
                                readonly type: "string";
                                readonly examples: readonly ["תרומה אלמונית לכבוד כל הנשים והבנות שלומדות, מלמדות ונותנות צורה חדשה לתורה"];
                            };
                            readonly extendedNotes: {
                                readonly type: "string";
                            };
                            readonly extendedNotesHebrew: {
                                readonly type: "string";
                            };
                            readonly purchaseInformationImage: {
                                readonly type: "string";
                                readonly examples: readonly ["https://jps.org/wp-content/uploads/2014/10/ContemporaryTorah-300x458.png"];
                            };
                            readonly purchaseInformationURL: {
                                readonly type: "string";
                                readonly examples: readonly ["https://jps.org/books/contemporary-torah/"];
                            };
                            readonly shortVersionTitle: {
                                readonly type: "string";
                                readonly examples: readonly ["The Contemporary Torah, JPS, 2006"];
                            };
                            readonly shortVersionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly firstSectionRef: {
                                readonly type: "string";
                                readonly examples: readonly ["Genesis 1"];
                            };
                        };
                    };
                };
                readonly textDepth: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [2];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly sectionNames: {
                    readonly description: "An array containing the type names of the sections of this text. The length of sectionNames gives the depth of the structure of this text. For example, Kohelet `([\"Chapter\", \"Verse\"])` has depth 2, while Mishneh Torah `([\"Book\", \"Topic\", \"Section\", \"Law\"])` has depth 4. Comparing this depth to the depth of sections will show if the request was for the lowest level, or a higher level, of the text.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Chapter"];
                    };
                };
                readonly addressTypes: {
                    readonly description: "A list which length reflects the depth of the text structure, with string values indicating class names for address types for each level";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Perek"];
                    };
                };
                readonly lengths: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [8];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly length: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [8];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly heTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["משנה פאה"];
                };
                readonly titleVariants: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["M Peah"];
                    };
                };
                readonly heTitleVariants: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["פאה"];
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah"];
                };
                readonly primary_category: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah"];
                };
                readonly book: {
                    readonly description: "The title of the book that the response comes from.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah"];
                };
                readonly categories: {
                    readonly description: "A list of categories that a text belongs to. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah"];
                    };
                };
                readonly order: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [2];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly sections: {
                    readonly description: "An array which corresponds to sectionNames and represents the sections of the text requested. When sectionNames is `[\"Chapter\", \"Verse\"]` a request for chapter 4 looks like `[4]` while a request for chapter 4, verse 7 would look like `[4, 7]`. _Note, for Talmud, Dafs are represented by a string like \"42a\" or \"12b\"_";
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [4];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly toSections: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [4];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly isDependant: {
                    readonly type: "boolean";
                };
                readonly indexTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah"];
                };
                readonly heIndexTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["משנה פאה"];
                };
                readonly sectionRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly firstAvailableSectionRef: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heSectionRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly isSpanning: {
                    readonly type: "boolean";
                };
                readonly versionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["The Contemporary Torah, Jewish Publication Society, 2006"];
                };
                readonly versionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly shortVersionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["The Contemporary Torah, JPS, 2006"];
                };
                readonly shortVersionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly versionSource: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.nli.org.il/he/books/NNL_ALEPH002529489/NLI"];
                };
                readonly versionStatus: {
                    readonly type: "string";
                    readonly examples: readonly ["locked"];
                };
                readonly versionNotes: {
                    readonly type: "string";
                    readonly examples: readonly ["Dedicated by an anonymous donor in honor of all women and girls who study, teach, and transform Torah.\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/382047\">Read the preface to The Contemporary Torah</a>\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/380713\"> See the Dictionary of Gender in the Torah</a>"];
                };
                readonly extendedNotes: {
                    readonly type: "string";
                };
                readonly extendedNotesHebrew: {
                    readonly type: "string";
                };
                readonly versionNotesInHebrew: {
                    readonly type: "string";
                    readonly examples: readonly ["תרומה אלמונית לכבוד כל הנשים והבנות שלומדות, מלמדות ונותנות צורה חדשה לתורה"];
                };
                readonly digitizedBySefaria: {
                    readonly description: "Was the `text` response initially digitized by Sefaria";
                    readonly anyOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly license: {
                    readonly type: "string";
                    readonly examples: readonly ["CC-BY-NC"];
                };
                readonly formatEnAsPoetry: {
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly heVersionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["Torat Emet 357"];
                };
                readonly heVersionTitleInHebrew: {
                    readonly type: "string";
                    readonly examples: readonly ["תורת אמת 357"];
                };
                readonly heShortVersionTitle: {
                    readonly type: "string";
                };
                readonly heShortVersionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly heVersionSource: {
                    readonly type: "string";
                    readonly examples: readonly ["http://www.toratemetfreeware.com/index.html?downloads"];
                };
                readonly heVersionStatus: {
                    readonly type: "string";
                    readonly examples: readonly ["locked"];
                };
                readonly heVersionNotes: {
                    readonly type: "string";
                };
                readonly heExtendedNotes: {
                    readonly type: "string";
                };
                readonly heExtendedNotesHebrew: {
                    readonly type: "string";
                };
                readonly heVersionNotesInHebrew: {
                    readonly type: "string";
                };
                readonly heDigitizedBySefaria: {
                    readonly description: "Was the `he` response initially digitized by Sefaria `1` or was it initially generated by another digital publisher `0`";
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly heLicense: {
                    readonly type: "string";
                    readonly examples: readonly ["Public Domain"];
                };
                readonly formatHeAsPoetry: {
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly alts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly index_offsets_by_depth: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly next: {
                    readonly description: "Next segment reference in sequence, if last ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 5"];
                };
                readonly prev: {
                    readonly description: "Previous segment reference in sequence, if first ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 3"];
                };
                readonly commentary: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly sheets: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly layer: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTopicSlug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly topic_slug: {
                    readonly type: "string";
                    readonly examples: readonly ["rosh-hashanah", "the-four-species", "יחיד-וחברה", "nachman-of-breslov"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The slug of a topic in the Sefaria system. (To find all of the slugs, you can run `api/topics` without a path parameter to see the data for each topic in our database).";
                };
            };
            readonly required: readonly ["topic_slug"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly with_links: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input is `1` or `0`. If `1`, includes intra-topic links in the `result` field, under `links`.";
                };
                readonly annotate_links: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input is `1` or `0`. If `1`, adds the following fields to each intra-topic link: `title`, `titleIsTransliteration`, `shouldDisplay`, and `order`.";
                };
                readonly group_related: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input is `1` or `0`. If `1`, groups link types with the `groupRelated` key set to true. This will simulate how the sidebar looks on the Sefaria site.";
                };
                readonly with_refs: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input is `1` or `0`. If `1`, adds a list of `Ref`s tagged with this topic under the `refs` key.";
                };
                readonly annotate_time_period: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input is `1` or `0`. If `1`, the response includes time period data under the `timePeriod` key.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for TopicJSON";
            readonly description: "A JSON object containing all of the metadata for a topic object";
            readonly required: readonly ["slug", "titles"];
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly description: "The unique slug for a given topic.";
                    readonly type: "string";
                    readonly examples: readonly ["nachman-of-breslov"];
                };
                readonly titles: {
                    readonly description: "An array of JSON objects, each representing an alternative title for the object, in various languages. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicTitlesJSON";
                        readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly text: {
                                readonly description: "The text of the title";
                                readonly type: "string";
                                readonly examples: readonly ["Sukkoth"];
                            };
                            readonly lang: {
                                readonly description: "The language of the title, either `en` or `he`. ";
                                readonly type: "string";
                                readonly examples: readonly ["he"];
                            };
                            readonly Primary: {
                                readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                        };
                    };
                };
                readonly alt_ids: {
                    readonly description: "This is a dictionary containing the keys of naming schemes, and ids of this topic represented in that naming scheme.  It’s used both for canonical names in other naming schemes and temporary storage of names when renaming slugs. All of the data here is for internal use, with the exception of the values `bfo` and `wikidata`. `bfo` refers to [basic formal ontology](https://developers.sefaria.org/docs/topic-ontology), and `wikidata` to the wikidata ontology of topics. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly _temp_id: {
                            readonly type: "string";
                            readonly examples: readonly ["משה"];
                        };
                    };
                };
                readonly properties: {
                    readonly title: "Root Type for TopicPropertyJson";
                    readonly description: "The JSON object containing information about a topic's properties";
                    readonly type: "object";
                    readonly properties: {
                        readonly heNliLink: {
                            readonly title: "Root Type for NLILinkJSON";
                            readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly description: "A link to a corresponding NLI page to learn more. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                };
                                readonly dataSource: {
                                    readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["`sefaria`"];
                                };
                            };
                        };
                        readonly enNliLink: {
                            readonly title: "Root Type for NLILinkJSON";
                            readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly description: "A link to a corresponding NLI page to learn more. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                };
                                readonly dataSource: {
                                    readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["`sefaria`"];
                                };
                            };
                        };
                    };
                };
                readonly description: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
                readonly categoryDescription: {
                    readonly description: "A description of the category of this topic";
                    readonly oneOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }];
                };
                readonly displayOrder: {
                    readonly format: "int32";
                    readonly description: "The order in which topics are displayed on the Sefaria website, relative to other topics within their same category. ";
                    readonly type: "integer";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly numSources: {
                    readonly format: "int32";
                    readonly description: "The number of text sources associated with a topic. ";
                    readonly type: "integer";
                    readonly examples: readonly [831];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly description_published: {
                    readonly description: "A boolean representing whether or not the description was published. ";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly data_source: {
                    readonly description: "How the topic was generated, whether by Sefaria, a user on a source sheet, or some other source. ";
                    readonly type: "string";
                    readonly examples: readonly ["`sefaria`"];
                };
                readonly image: {
                    readonly title: "Root Type for TopicImgJSON";
                    readonly description: "A JSON object containing the image metadata for topics with images. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly image_uri: {
                            readonly description: "The URL pointing to the image as hosted by Sefaria. ";
                            readonly type: "string";
                            readonly examples: readonly ["https://storage.googleapis.com/img.sefaria.org/topics/sukkot.jpg"];
                        };
                        readonly image_caption: {
                            readonly title: "Root Type for TopicImgCaption";
                            readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly description: "The English field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                };
                                readonly he: {
                                    readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                };
                            };
                        };
                    };
                };
                readonly primaryTitle: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
                readonly primaryTitleIsTransliteration: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTopicsGraph: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly topic_slug: {
                    readonly type: "string";
                    readonly examples: readonly ["moses", "the-four-species"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sefaria slug for a topic in the database. ";
                };
            };
            readonly required: readonly ["topic_slug"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly link_type: {
                    readonly type: "string";
                    readonly examples: readonly ["is-a", "child-of"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The type of the link, based on the relationship within our ontology. Many links has an `is-a` relationship (such as `Genesis` `is-a` `Book`), but other topic-to-topic links have a variety of other types documented [here](https://developers.sefaria.org/docs/topic-ontology#overview-of-sefaria-link-types). \nSome examples include `child-of`, `parent-of`, `sibling-of` etc.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for TopicGraphJSON";
            readonly description: "";
            readonly type: "object";
            readonly properties: {
                readonly topics: {
                    readonly description: "Array of topics";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicJSON";
                        readonly description: "A JSON object containing all of the metadata for a topic object";
                        readonly required: readonly ["slug", "titles"];
                        readonly type: "object";
                        readonly properties: {
                            readonly slug: {
                                readonly description: "The unique slug for a given topic.";
                                readonly type: "string";
                                readonly examples: readonly ["nachman-of-breslov"];
                            };
                            readonly titles: {
                                readonly description: "An array of JSON objects, each representing an alternative title for the object, in various languages. ";
                                readonly type: "array";
                                readonly items: {
                                    readonly title: "Root Type for TopicTitlesJSON";
                                    readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly text: {
                                            readonly description: "The text of the title";
                                            readonly type: "string";
                                            readonly examples: readonly ["Sukkoth"];
                                        };
                                        readonly lang: {
                                            readonly description: "The language of the title, either `en` or `he`. ";
                                            readonly type: "string";
                                            readonly examples: readonly ["he"];
                                        };
                                        readonly Primary: {
                                            readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                            readonly type: "boolean";
                                            readonly examples: readonly [false];
                                        };
                                    };
                                };
                            };
                            readonly alt_ids: {
                                readonly description: "This is a dictionary containing the keys of naming schemes, and ids of this topic represented in that naming scheme.  It’s used both for canonical names in other naming schemes and temporary storage of names when renaming slugs. All of the data here is for internal use, with the exception of the values `bfo` and `wikidata`. `bfo` refers to [basic formal ontology](https://developers.sefaria.org/docs/topic-ontology), and `wikidata` to the wikidata ontology of topics. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly _temp_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["משה"];
                                    };
                                };
                            };
                            readonly properties: {
                                readonly title: "Root Type for TopicPropertyJson";
                                readonly description: "The JSON object containing information about a topic's properties";
                                readonly type: "object";
                                readonly properties: {
                                    readonly heNliLink: {
                                        readonly title: "Root Type for NLILinkJSON";
                                        readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly description: "A link to a corresponding NLI page to learn more. ";
                                                readonly type: "string";
                                                readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                            };
                                            readonly dataSource: {
                                                readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                                readonly type: "string";
                                                readonly examples: readonly ["`sefaria`"];
                                            };
                                        };
                                    };
                                    readonly enNliLink: {
                                        readonly title: "Root Type for NLILinkJSON";
                                        readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly value: {
                                                readonly description: "A link to a corresponding NLI page to learn more. ";
                                                readonly type: "string";
                                                readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                            };
                                            readonly dataSource: {
                                                readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                                readonly type: "string";
                                                readonly examples: readonly ["`sefaria`"];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly description: {
                                readonly title: "Root Type for TopicImgCaption";
                                readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly description: "The English field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                    };
                                    readonly he: {
                                        readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                    };
                                };
                            };
                            readonly categoryDescription: {
                                readonly description: "A description of the category of this topic";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                }];
                            };
                            readonly displayOrder: {
                                readonly format: "int32";
                                readonly description: "The order in which topics are displayed on the Sefaria website, relative to other topics within their same category. ";
                                readonly type: "integer";
                                readonly examples: readonly [1];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly numSources: {
                                readonly format: "int32";
                                readonly description: "The number of text sources associated with a topic. ";
                                readonly type: "integer";
                                readonly examples: readonly [831];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly description_published: {
                                readonly description: "A boolean representing whether or not the description was published. ";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly data_source: {
                                readonly description: "How the topic was generated, whether by Sefaria, a user on a source sheet, or some other source. ";
                                readonly type: "string";
                                readonly examples: readonly ["`sefaria`"];
                            };
                            readonly image: {
                                readonly title: "Root Type for TopicImgJSON";
                                readonly description: "A JSON object containing the image metadata for topics with images. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly image_uri: {
                                        readonly description: "The URL pointing to the image as hosted by Sefaria. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["https://storage.googleapis.com/img.sefaria.org/topics/sukkot.jpg"];
                                    };
                                    readonly image_caption: {
                                        readonly title: "Root Type for TopicImgCaption";
                                        readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly en: {
                                                readonly description: "The English field for a JSON object representing billingual text. ";
                                                readonly oneOf: readonly [{
                                                    readonly type: "string";
                                                }, {
                                                    readonly type: "boolean";
                                                }];
                                                readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                            };
                                            readonly he: {
                                                readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                                readonly oneOf: readonly [{
                                                    readonly type: "string";
                                                }, {
                                                    readonly type: "boolean";
                                                }];
                                                readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly primaryTitle: {
                                readonly title: "Root Type for TopicImgCaption";
                                readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly description: "The English field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                    };
                                    readonly he: {
                                        readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                    };
                                };
                            };
                            readonly primaryTitleIsTransliteration: {
                                readonly title: "Root Type for TopicImgCaption";
                                readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly description: "The English field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                    };
                                    readonly he: {
                                        readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "boolean";
                                        }];
                                        readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly links: {
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicGraphLinkJSON";
                        readonly description: "";
                        readonly type: "object";
                        readonly properties: {
                            readonly toTopic: {
                                readonly description: "Slug of the `toTopic` (i.e. the topic to which the link connects to, usually the slug passed as `topic_slug` to the `api/topic-graph` endpoint).";
                                readonly type: "string";
                                readonly examples: readonly ["shabbat"];
                            };
                            readonly linkType: {
                                readonly description: "The type of the link, based on the relationship within our ontology. Many links has an `is-a` relationship (such as `Genesis` `is-a` `Book`), but other topic-to-topic links have a variety of other types documented [here](https://developers.sefaria.org/docs/topic-ontology#overview-of-sefaria-link-types). \n\nSome examples include `child-of`, `parent-of`, `sibling-of` etc. ";
                                readonly type: "string";
                                readonly examples: readonly ["is-a"];
                            };
                            readonly class: {
                                readonly description: "Class of the link `intraTopic` (a link from topic-to-topic) or `refTopic` (a link from a topic-to-ref). \n\n`refTopic` `intraTopic`";
                                readonly enum: readonly ["refTopic", "intraTopic"];
                                readonly type: "string";
                                readonly examples: readonly ["intraTopic"];
                            };
                            readonly dataSource: {
                                readonly description: "Source where the topic link originated from. ";
                                readonly type: "string";
                                readonly examples: readonly ["aspaklaria-edited-by-sefaria"];
                            };
                            readonly fromTopic: {
                                readonly description: "Slug of the `fromTopic` (i.e. the topic from which the link originates). ";
                                readonly type: "string";
                                readonly examples: readonly ["shabbat-shuvah"];
                            };
                            readonly order: {
                                readonly title: "Root Type for OrderJSON";
                                readonly description: "";
                                readonly type: "object";
                                readonly properties: {
                                    readonly linksInCommon: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly toTfidf: {
                                        readonly format: "float";
                                        readonly type: "number";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly fromTfidf: {
                                        readonly format: "float";
                                        readonly type: "number";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTranslations: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTranslationsLang: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly lang: {
                    readonly type: "string";
                    readonly examples: readonly ["en", "he", "yi\n", "fr", "de", "ar"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An ISO 639-1 language code.";
                };
            };
            readonly required: readonly ["lang"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly description: "Title of the book on Sefaria";
                    readonly type: "string";
                };
                readonly url: {
                    readonly description: "Base URL of the book on Sefaria";
                    readonly type: "string";
                };
                readonly versionTitle: {
                    readonly description: "Title of this specific translation of the title";
                    readonly type: "string";
                };
                readonly rtlLanguage: {
                    readonly description: "Is this version a RTL text (i.e. `he`) or LTR text (i.e. `en`)\n\n`he` `en`";
                    readonly enum: readonly ["he", "en"];
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1Texts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly description: "A valid textual `Ref` to a Sefaria text.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["tref"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly callback: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly context: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The `context` param defaults to `1`, which allows for the API to return the entire context for the desired segment. When you explicitly set `context=0`, only the desired segment is returned, without any of the accompanying context.";
                };
                readonly commentary: {
                    readonly maximum: 1;
                    readonly minimum: 0;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The `commentary` param defaults to `0`, which turns off commentary being returned in the response. When you explicitly set `commentary=1`, all commentary to that specific connection is returned in a list of JSON objects containing the text of the commentaries";
                };
                readonly pad: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "By default pad is set to `1`, which ensures that any references at the title level will return only the first section of a book instead of its entirety. If you want the API to return the entire content of the book, set pad to `0`";
                };
                readonly ven: {
                    readonly type: "string";
                    readonly examples: readonly ["The_Contemporary_Torah,_Jewish_Publication_Society,_2006"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unless explicitly specified, the Texts API returns a default version of a text with Roman characters as the content in the `text` response. Passing a specific `versionTitle` here will load that text version if it exists instead of the default.\n";
                };
                readonly firstAvailableRef: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If a given text reference doesn't return any content, setting this to `1` will return the first reference that does. \n\nSometimes this occurs when a text reference may pass our ref checking logic, but doesn't exist; for example `https://www.sefaria.org/api/texts/Berakhot 1a?firstAvailableRef=1`, and sometimes this occurs when a translation is incomplete. Defaults to `0`.";
                };
                readonly vhe: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unless explicitly specified, the Texts API returns a default version of a text with Hebrew characters as the content in the `he` response. Passing a specific `versionTitle` here will load that text version if it exists instead of the default.\n";
                };
                readonly layer: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly alts: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns the `alt structures` for the target text in the JSON response object.";
                };
                readonly wrapLinks: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly wrapNamedEntities: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly stripItags: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sefaria texts include footnotes and other `iTags` in the response. This param defaults to `0` which leaves them in. Changing it to `1` will remove them.";
                };
                readonly multiple: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If the absolute value of this param is greater than `1`, the API will return`|n|` text responses which include `|n|-1` additional consecutive sections of the targeted text if they exist. If the integer is positive, it will return the next consecutive chapter[s], and if negative it will return the previous consecutive chapter[s].";
                };
                readonly transLangPref: {
                    readonly type: "string";
                    readonly examples: readonly ["DE", "AR"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unless explicitly specified, the Texts API returns a default version for the `he` and `text` responses (usually in Hebrew & English respectfully). Passing an ISO 639-1 language code here will prioritize text versions in that target language if available.";
                };
                readonly fallbackOnDefaultVersion: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sheets: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The `sheets` param defaults to `0`, which turns off user-generated Sefaria Sheet data from being returned in the response. When you explicitly set `sheets=1`, all of the user-generated sheet content to that specific connection is returned in list of JSON objects.\n\n_This usage is deprecated. Instead of this, you should use the `Related API`._";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for textAPIReponse";
            readonly description: "Expected reponse data from Sefaria's Text API";
            readonly type: "object";
            readonly properties: {
                readonly ref: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly isComplex: {
                    readonly description: "Whether or not the text is a \"complex\" text or not.\n\nIn Sefaria, a complex text is any text which has a more complicated index structure beyond Chapters/Verses, (e.g. the Talmud). There are a variety of structural differences for a complex text, having to do primarily with its `Index`, and the way the data is stored. For more on complex texts, see the documentation here.";
                    readonly type: "boolean";
                };
                readonly text: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                        readonly examples: readonly ["Peah is given from [the crop] while it is still connected with the soil. But in the case of hanging vine-branches and the date-palm, the owner brings down [the fruit] and distributes it among the poor. Rabbi Shimon says: the same applies to smooth nut trees. Even if ninety-nine [of the poor] say [to the owner] to distribute it and one says to leave it in the field, this latter is listened to, since he spoke in accordance with the halakhah."];
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    }, {
                        readonly type: "array";
                        readonly items: {};
                    }];
                    readonly description: "The default, or specified text written in LTR characters for the query (Usually English). It is structured as a `JaggedArray` (nested arrays), with the lowest level being an array of strings with some HTML text.";
                    readonly examples: readonly [readonly ["Peah is given from [the crop] while it is still connected with the soil. But in the case of hanging vine-branches and the date-palm, the owner brings down [the fruit] and distributes it among the poor. Rabbi Shimon says: the same applies to smooth nut trees. Even if ninety-nine [of the poor] say [to the owner] to distribute it and one says to leave it in the field, this latter is listened to, since he spoke in accordance with the halakhah.", "With hanging vine-branches and date-palm trees it is not so; even if ninety-nine [of the poor] say [to the owner] to leave it in the field and one says to distribute it, this latter is listened to, since he spoke in accordance with the halakhah.", "If [a poor man] took some of the peah [already collected] and threw it onto the remainder [not yet collected], he gets none of it. If he fell down upon it, or spread his cloak over it, they take the peah away from him. The same applies to gleanings and the forgotten sheaf.", "[The poor] may not harvest peah with scythes or tear it out [of the ground] with spades, so that they might not strike one another [with these implements].", "There are three times a day [the poor] make a search [in the field for peah]: morning, noon, and sunset. Rabban Gamaliel says: these [times] were only set lest they reduce them. Rabbi Akiva says: these were set lest they add to them. [The men] of Bet Namer used to have the poor harvest [the peah] with the aid of a rope, and they left peah at the end of each furrow.", "A non-Jew who harvested his field and then converted, he is exempt from [leaving] gleanings, the forgotten sheaf and peah. Rabbi Judah makes him liable to leave the forgotten sheaf, since he becomes liable for the forgotten sheaf at the time of their binding.", "One who dedicated standing grain [to the Temple] and then redeemed it while it was still standing grain, he is liable [to give the agricultural gifts to the poor]. [If he dedicated] sheaves and redeemed them while they were still sheaves, he is liable. [If he dedicated] standing grain and redeemed it [when it was already in] sheaves, he is exempt, since at the time when it became liable it was exempt.", "Similarly one who dedicates his produce prior to the stage when they are subject to tithes and then redeemed them, they are liable [to be tithed]. If [he dedicated them] when they had already become subject to tithes and then redeemed them, they are liable [to be tithed]. If he dedicated them before they had ripened, and they became ripe while in the possession of the [Temple] treasurer, and he then redeemed them, they are exempt, since at the time when they would have been liable, they were exempt.", "One who collected peah and said, “This is for so-and-so a poor man:” Rabbi Eliezer says: he has thus acquired it for him. The sages say: he must give it to the first poor man he finds. Gleanings, the forgotten sheaf and the peah of non-Jews are subject to tithes, unless he [the non-Jew] had declared them ownerless.", "What are gleanings? That which falls down at the time of harvesting. If while he was harvesting, he harvested a handful, or plucked a fistful, and then a thorn pricked him, and what he had in his hand fell to the ground, it still belongs to the owner. [That which drops from] inside the hand or the sickle [belongs] to the poor, but [that which falls from] the back of the hand or the sickle [belongs] to the owner. [That which falls from] the top of the hand or sickle: Rabbi Ishmael says: to the poor; But Rabbi Akiva says: to the owner.", "[Grain found in] ant holes where the stalks are still standing, behold it still belongs to the owner. After the harvesters [had passed over them], those found in the top parts [of the ant holes belong] to the poor, but [those found] on the bottom parts [belong] to the owner. Rabbi Meir says: it all belongs to the poor, for gleanings about which there is any doubt are regarded as gleanings."]];
                };
                readonly he: {
                    readonly oneOf: readonly [{
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    }, {
                        readonly type: "string";
                        readonly examples: readonly ["בְּדָלִית וּבְדֶקֶל אֵינוֹ כֵן, אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לָבוֹז וְאֶחָד אוֹמֵר לְחַלֵּק, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n"];
                    }];
                    readonly description: "The default, or specified text written in RTL characters for the query (Usually Hebrew). It is structured as a JaggedArray (nested arrays), with the lowest level being an array of strings with some html text.";
                    readonly examples: readonly [readonly ["הַפֵּאָה נִתֶּנֶת בִּמְחֻבָּר לַקַּרְקָע. בְּדָלִית וּבְדֶקֶל, בַּעַל הַבַּיִת מוֹרִיד וּמְחַלֵּק לָעֲנִיִּים. רַבִּי שִׁמְעוֹן אוֹמֵר, אַף בַּחֲלִיקֵי אֱגוֹזִים. אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לְחַלֵּק וְאֶחָד אוֹמֵר לָבוֹז, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n", "בְּדָלִית וּבְדֶקֶל אֵינוֹ כֵן, אֲפִלּוּ תִשְׁעִים וְתִשְׁעָה אוֹמְרִים לָבוֹז וְאֶחָד אוֹמֵר לְחַלֵּק, לָזֶה שׁוֹמְעִין, שֶׁאָמַר כַּהֲלָכָה: \n", "נָטַל מִקְצָת פֵּאָה וּזְרָקָהּ עַל הַשְּׁאָר, אֵין לוֹ בָהּ כְּלוּם. נָפַל לוֹ עָלֶיהָ, וּפֵרֵשׂ טַלִּיתוֹ עָלֶיהָ, מַעֲבִירִין אוֹתָהּ הֵימֶנּוּ. וְכֵן בְּלֶקֶט, וְכֵן בְּעֹמֶר הַשִּׁכְחָה: \n", "פֵּאָה אֵין קוֹצְרִין אוֹתָהּ בְּמַגָּלוֹת, וְאֵין עוֹקְרִין אוֹתָהּ בְּקַרְדֻּמּוֹת, כְּדֵי שֶׁלֹּא יַכּוּ אִישׁ אֶת רֵעֵהוּ: \n", "שָׁלשׁ אַבְעָיוֹת בַּיּוֹם, בַּשַּׁחַר וּבַחֲצוֹת וּבַמִּנְחָה. רַבָּן גַּמְלִיאֵל אוֹמֵר, לֹא אָמְרוּ אֶלָּא כְּדֵי שֶׁלֹּא יִפְחֲתוּ. רַבִּי עֲקִיבָא אוֹמֵר, לֹא אָמְרוּ אֶלָּא כְּדֵי שֶׁלֹּא יוֹסִיפוּ. שֶׁל בֵּית נָמֵר הָיוּ מְלַקְּטִין עַל הַחֶבֶל, וְנוֹתְנִים פֵּאָה מִכָּל אֻמָּן וְאֻמָּן: \n", "עוֹבֵד כּוֹכָבִים שֶׁקָּצַר אֶת שָׂדֵהוּ וְאַחַר כָּךְ נִתְגַּיֵּר, פָּטוּר מִן הַלֶּקֶט וּמִן הַשִּׁכְחָה וּמִן הַפֵּאָה. רַבִּי יְהוּדָה מְחַיֵּב בְּשִׁכְחָה, שֶׁאֵין הַשִּׁכְחָה אֶלָּא בִשְׁעַת הָעִמּוּר: \n", "הִקְדִּישׁ קָמָה וּפָדָה קָמָה, חַיָּב. עֳמָרִין וּפָדָה עֳמָרִין, חַיָּב. קָמָה וּפָדָה עֳמָרִין, פְּטוּרָה, שֶׁבִּשְׁעַת חוֹבָתָהּ הָיְתָה פְטוּרָה: \n", "כַּיּוֹצֵא בוֹ, הַמַּקְדִּישׁ פֵּרוֹתָיו עַד שֶׁלֹּא בָאוּ לְעוֹנַת הַמַּעַשְׂרוֹת, וּפְדָאָן, חַיָּבִין. מִשֶּׁבָּאוּ לְעוֹנַת הַמַּעַשְׂרוֹת, וּפְדָאָן, חַיָּבִין. הִקְדִּישָׁן עַד שֶׁלֹּא נִגְמְרוּ וּגְמָרָן הַגִּזְבָּר, וְאַחַר כָּךְ פְּדָאָן, פְּטוּרִים, שֶׁבִּשְׁעַת חוֹבָתָן הָיוּ פְטוּרִים: \n", "מִי שֶׁלָּקַט אֶת הַפֵּאָה וְאָמַר הֲרֵי זוֹ לְאִישׁ פְּלוֹנִי עָנִי, רַבִּי אֱלִיעֶזֶר אוֹמֵר, זָכָה לוֹ. וַחֲכָמִים אוֹמְרִים, יִתְּנֶנָּה לֶעָנִי שֶׁנִּמְצָא רִאשׁוֹן. הַלֶּקֶט וְהַשִּׁכְחָה וְהַפֵּאָה שֶׁל עוֹבֵד כּוֹכָבִים חַיָּב בְּמַעַשְׂרוֹת, אֶלָּא אִם כֵּן הִפְקִיר: \n", "אֵיזֶהוּ לֶקֶט, הַנּוֹשֵׁר בִּשְׁעַת הַקְּצִירָה. הָיָה קוֹצֵר, קָצַר מְלֹא יָדוֹ, תָּלַשׁ מְלֹא קֻמְצוֹ, הִכָּהוּ קוֹץ וְנָפַל מִיָּדוֹ לָאָרֶץ, הֲרֵי הוּא שֶׁל בַּעַל הַבָּיִת. תּוֹךְ הַיָּד וְתוֹךְ הַמַּגָּל, לָעֲנִיִּים. אַחַר הַיָּד וְאַחַר הַמַּגָּל, לְבַעַל הַבָּיִת. רֹאשׁ הַיָּד וְרֹאשׁ הַמַּגָּל, רַבִּי יִשְׁמָעֵאל אוֹמֵר, לָעֲנִיִּים. רַבִּי עֲקִיבָא אוֹמֵר, לְבַעַל הַבָּיִת: \n", "חוֹרֵי הַנְּמָלִים שֶׁבְּתוֹךְ הַקָּמָה, הֲרֵי הֵן שֶׁל בַּעַל הַבָּיִת. שֶׁלְּאַחַר הַקּוֹצְרִים, הָעֶלְיוֹנִים לָעֲנִיִּים, וְהַתַּחְתּוֹנִים שֶׁל בַּעַל הַבָּיִת. רַבִּי מֵאִיר אוֹמֵר, הַכֹּל לָעֲנִיִּים, שֶׁסְּפֵק לֶקֶט, לֶקֶט: \n"]];
                };
                readonly versions: {
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for versionData";
                        readonly description: "Information about a single text version of a title";
                        readonly type: "object";
                        readonly properties: {
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Genesis"];
                            };
                            readonly versionTitle: {
                                readonly type: "string";
                                readonly examples: readonly ["The Contemporary Torah, Jewish Publication Society, 2006"];
                            };
                            readonly versionSource: {
                                readonly type: "string";
                                readonly examples: readonly ["https://www.nli.org.il/he/books/NNL_ALEPH002529489/NLI"];
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly examples: readonly ["en"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["locked"];
                            };
                            readonly license: {
                                readonly type: "string";
                                readonly examples: readonly ["CC-BY-NC"];
                            };
                            readonly versionNotes: {
                                readonly type: "string";
                                readonly examples: readonly ["Dedicated by an anonymous donor in honor of all women and girls who study, teach, and transform Torah.\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/382047\">Read the preface to The Contemporary Torah</a>\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/380713\"> See the Dictionary of Gender in the Torah</a>"];
                            };
                            readonly digitizedBySefaria: {
                                readonly type: "string";
                            };
                            readonly priority: {
                                readonly format: "int32";
                                readonly type: "integer";
                                readonly examples: readonly [7];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly versionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly versionNotesInHebrew: {
                                readonly type: "string";
                                readonly examples: readonly ["תרומה אלמונית לכבוד כל הנשים והבנות שלומדות, מלמדות ונותנות צורה חדשה לתורה"];
                            };
                            readonly extendedNotes: {
                                readonly type: "string";
                            };
                            readonly extendedNotesHebrew: {
                                readonly type: "string";
                            };
                            readonly purchaseInformationImage: {
                                readonly type: "string";
                                readonly examples: readonly ["https://jps.org/wp-content/uploads/2014/10/ContemporaryTorah-300x458.png"];
                            };
                            readonly purchaseInformationURL: {
                                readonly type: "string";
                                readonly examples: readonly ["https://jps.org/books/contemporary-torah/"];
                            };
                            readonly shortVersionTitle: {
                                readonly type: "string";
                                readonly examples: readonly ["The Contemporary Torah, JPS, 2006"];
                            };
                            readonly shortVersionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly firstSectionRef: {
                                readonly type: "string";
                                readonly examples: readonly ["Genesis 1"];
                            };
                        };
                    };
                };
                readonly textDepth: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [2];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly sectionNames: {
                    readonly description: "An array containing the type names of the sections of this text. The length of sectionNames gives the depth of the structure of this text. For example, Kohelet `([\"Chapter\", \"Verse\"])` has depth 2, while Mishneh Torah `([\"Book\", \"Topic\", \"Section\", \"Law\"])` has depth 4. Comparing this depth to the depth of sections will show if the request was for the lowest level, or a higher level, of the text.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Chapter"];
                    };
                };
                readonly addressTypes: {
                    readonly description: "A list which length reflects the depth of the text structure, with string values indicating class names for address types for each level";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Perek"];
                    };
                };
                readonly lengths: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [8];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly length: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [8];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly heTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["משנה פאה"];
                };
                readonly titleVariants: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["M Peah"];
                    };
                };
                readonly heTitleVariants: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["פאה"];
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah"];
                };
                readonly primary_category: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah"];
                };
                readonly book: {
                    readonly description: "The title of the book that the response comes from.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah"];
                };
                readonly categories: {
                    readonly description: "A list of categories that a text belongs to. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Mishnah"];
                    };
                };
                readonly order: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [2];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly sections: {
                    readonly description: "An array which corresponds to sectionNames and represents the sections of the text requested. When sectionNames is `[\"Chapter\", \"Verse\"]` a request for chapter 4 looks like `[4]` while a request for chapter 4, verse 7 would look like `[4, 7]`. _Note, for Talmud, Dafs are represented by a string like \"42a\" or \"12b\"_";
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [4];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly toSections: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [4];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly isDependant: {
                    readonly type: "boolean";
                };
                readonly indexTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah"];
                };
                readonly heIndexTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["משנה פאה"];
                };
                readonly sectionRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly firstAvailableSectionRef: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heSectionRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly isSpanning: {
                    readonly type: "boolean";
                };
                readonly versionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["The Contemporary Torah, Jewish Publication Society, 2006"];
                };
                readonly versionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly shortVersionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["The Contemporary Torah, JPS, 2006"];
                };
                readonly shortVersionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly versionSource: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.nli.org.il/he/books/NNL_ALEPH002529489/NLI"];
                };
                readonly versionStatus: {
                    readonly type: "string";
                    readonly examples: readonly ["locked"];
                };
                readonly versionNotes: {
                    readonly type: "string";
                    readonly examples: readonly ["Dedicated by an anonymous donor in honor of all women and girls who study, teach, and transform Torah.\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/382047\">Read the preface to The Contemporary Torah</a>\n<br><br>\n<a href=\"https://www.sefaria.org/sheets/380713\"> See the Dictionary of Gender in the Torah</a>"];
                };
                readonly extendedNotes: {
                    readonly type: "string";
                };
                readonly extendedNotesHebrew: {
                    readonly type: "string";
                };
                readonly versionNotesInHebrew: {
                    readonly type: "string";
                    readonly examples: readonly ["תרומה אלמונית לכבוד כל הנשים והבנות שלומדות, מלמדות ונותנות צורה חדשה לתורה"];
                };
                readonly digitizedBySefaria: {
                    readonly description: "Was the `text` response initially digitized by Sefaria";
                    readonly anyOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly license: {
                    readonly type: "string";
                    readonly examples: readonly ["CC-BY-NC"];
                };
                readonly formatEnAsPoetry: {
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly heVersionTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["Torat Emet 357"];
                };
                readonly heVersionTitleInHebrew: {
                    readonly type: "string";
                    readonly examples: readonly ["תורת אמת 357"];
                };
                readonly heShortVersionTitle: {
                    readonly type: "string";
                };
                readonly heShortVersionTitleInHebrew: {
                    readonly type: "string";
                };
                readonly heVersionSource: {
                    readonly type: "string";
                    readonly examples: readonly ["http://www.toratemetfreeware.com/index.html?downloads"];
                };
                readonly heVersionStatus: {
                    readonly type: "string";
                    readonly examples: readonly ["locked"];
                };
                readonly heVersionNotes: {
                    readonly type: "string";
                };
                readonly heExtendedNotes: {
                    readonly type: "string";
                };
                readonly heExtendedNotesHebrew: {
                    readonly type: "string";
                };
                readonly heVersionNotesInHebrew: {
                    readonly type: "string";
                };
                readonly heDigitizedBySefaria: {
                    readonly description: "Was the `he` response initially digitized by Sefaria `1` or was it initially generated by another digital publisher `0`";
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly heLicense: {
                    readonly type: "string";
                    readonly examples: readonly ["Public Domain"];
                };
                readonly formatHeAsPoetry: {
                    readonly oneOf: readonly [{
                        readonly type: "boolean";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly alts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly index_offsets_by_depth: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly next: {
                    readonly description: "Next segment reference in sequence, if last ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 5"];
                };
                readonly prev: {
                    readonly description: "Previous segment reference in sequence, if first ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 3"];
                };
                readonly commentary: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly sheets: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly layer: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Index: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly index_title: {
                    readonly type: "string";
                    readonly examples: readonly ["Genesis", "Pesachim"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A title of a valid Sefaria `Index`. For a complete list of works in the [Sefaria](sefaria.org) library, as well as their index titles, query the [api/index](https://www.sefaria.org/api/index/) endpoint. ";
                };
            };
            readonly required: readonly ["index_title"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for RawIndexJSON";
            readonly description: "The full mongo record JSON from the database for a given Sefaria `Index`. ";
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly description: "Title of the work.";
                    readonly type: "string";
                    readonly examples: readonly ["Pesachim"];
                };
                readonly categories: {
                    readonly description: "The categories within which this text falls. *Note:* The order of the strings in the array is significant. The categories should go from most general at position `0`, to most specific. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Talmud"];
                    };
                    readonly examples: readonly ["Talmud", "Bavli", "Seder Moed"];
                };
                readonly schema: {
                    readonly title: "Root Type for RawIndexSchemaJSON";
                    readonly description: "Schema JSON for an Index. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly nodeType: {
                            readonly description: "The type of node. Nodes can either be `SchemaNodes` or `JaggedArray` nodes. A `JaggedArray` is a nested array (2D or 3D), whereas a `SchemaNode` is a node with children of either type. All tree leaves in the Sefaria text tree must be `JaggedArray` nodes.\n\n`JaggedArrayNode` `SchemaNode`";
                            readonly enum: readonly ["JaggedArrayNode", "SchemaNode"];
                            readonly type: "string";
                            readonly examples: readonly ["JaggedArrayNode"];
                        };
                        readonly depth: {
                            readonly format: "int32";
                            readonly description: "The depth of a text. For example, a book of Tanakh with chapters and verses has a depth 2, whereas a commentary on that book of Tanakh, with multiple comments on each verse (so a chapter-verse-comment structure) would have a depth of 3. ";
                            readonly type: "integer";
                            readonly examples: readonly [2];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly addressTypes: {
                            readonly description: "A list which length reflects the depth of the text structure, with string values indicating class names for address types for each level.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Talmud"];
                            };
                            readonly examples: readonly ["Talmud", "Integer"];
                        };
                        readonly sectionNames: {
                            readonly description: "An array containing the type names of the sections of this text. The length of `sectionNames` gives the depth of the structure of this text. For example, Kohelet (`[\"Chapter\", \"Verse\"]`) has depth 2, while Mishneh Torah (`[\"Book\", \"Topic\", \"Section\", \"Law\"]`) has depth 4. Comparing this depth to the depth of sections will show if the request was for the lowest level, or a higher level, of the text.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Daf"];
                            };
                            readonly examples: readonly ["Book", "Topic", "Section", "Law"];
                        };
                        readonly match_templates: {
                            readonly description: "This data is used for the linker.";
                            readonly type: "array";
                            readonly items: {};
                        };
                        readonly lengths: {
                            readonly description: "The lengths of the text at each level of depth. For example, a text of depth 2 will have an array with two values, the first representing the number of sections, and the second value representing the number of verses. So, if Genesis has lengths, it's array will look like this `[50, 1533]`. This is interpreted to mean the Genesis Index has 50 chapters (sections) and 1533 verses (segments).\n\nA depth-3 text (a commentary, for example) will have three values, representing the number of super sections, sections, and segments. ";
                            readonly type: "array";
                            readonly items: {
                                readonly format: "int32";
                                readonly type: "integer";
                                readonly examples: readonly [242];
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly examples: readonly [50, 1533];
                        };
                        readonly referenceableSections: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                        };
                        readonly titles: {
                            readonly description: "Titles for the index.";
                            readonly type: "array";
                            readonly items: {
                                readonly title: "Root Type for TopicTitlesJSON";
                                readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                                readonly type: "object";
                                readonly properties: {
                                    readonly text: {
                                        readonly description: "The text of the title";
                                        readonly type: "string";
                                        readonly examples: readonly ["Sukkoth"];
                                    };
                                    readonly lang: {
                                        readonly description: "The language of the title, either `en` or `he`. ";
                                        readonly type: "string";
                                        readonly examples: readonly ["he"];
                                    };
                                    readonly Primary: {
                                        readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                };
                            };
                        };
                        readonly key: {
                            readonly description: "Unique key for the text, usually matches the `Index` title. ";
                            readonly type: "string";
                            readonly examples: readonly ["Pesachim"];
                        };
                        readonly checkFirst: {
                            readonly type: "object";
                            readonly properties: {
                                readonly he: {
                                    readonly type: "string";
                                    readonly examples: readonly ["משנה פסחים"];
                                };
                                readonly en: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Mishnah Pesachim"];
                                };
                            };
                        };
                    };
                };
                readonly alt_structs: {
                    readonly title: "Root Type for RawIndexAltStructsJSON";
                    readonly description: "The JSON returned for the alt structs of an Index. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly Chapters: {
                            readonly title: "Root Type for RawIndexNodesJSON";
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly nodes: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly title: "Root Type for RawIndexAltStructNodeJSON";
                                        readonly description: "";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly nodeType: {
                                                readonly description: "The type of node";
                                                readonly type: "string";
                                                readonly examples: readonly ["ArrayMapNode"];
                                            };
                                            readonly depth: {
                                                readonly format: "int32";
                                                readonly description: "The depth of the Node.";
                                                readonly type: "integer";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly wholeRef: {
                                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                                readonly type: "string";
                                                readonly examples: readonly ["Mishnah Peah 4:2"];
                                            };
                                            readonly includeSections: {
                                                readonly type: "boolean";
                                                readonly examples: readonly [true];
                                            };
                                            readonly match_templates: {
                                                readonly description: "Data used for linker purposes.";
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly term_slugs: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                                readonly examples: readonly ["perek"];
                                                            };
                                                        };
                                                        readonly scope: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["any"];
                                                        };
                                                    };
                                                };
                                            };
                                            readonly numeric_equivalent: {
                                                readonly format: "int32";
                                                readonly description: "The numeric equivalent of the section. So for example, if chapter two of Masechet Pesachim is referred to as `כל שעה`, the `numeric_equivalent` is 2.";
                                                readonly type: "integer";
                                                readonly examples: readonly [3];
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly titles: {
                                                readonly description: "Titles for this section of text.";
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly title: "Root Type for TopicTitlesJSON";
                                                    readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly text: {
                                                            readonly description: "The text of the title";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["Sukkoth"];
                                                        };
                                                        readonly lang: {
                                                            readonly description: "The language of the title, either `en` or `he`. ";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["he"];
                                                        };
                                                        readonly Primary: {
                                                            readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                                            readonly type: "boolean";
                                                            readonly examples: readonly [false];
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly default_struct: {
                    readonly description: "Which structure of the available structures is default. ";
                    readonly type: "string";
                    readonly examples: readonly ["\"chapters\""];
                };
                readonly exclude_structs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["schema"];
                    };
                };
                readonly order: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [4];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly authors: {
                    readonly description: "Author(s) of the text.";
                    readonly type: "array";
                    readonly items: {};
                };
                readonly enDesc: {
                    readonly description: "A longer English description of the index. ";
                    readonly type: "string";
                    readonly examples: readonly ["\"Pesachim (“Passover Festivals”) is the third tractate in Seder Moed (“Festivals”). Its ten chapters discuss laws relating to Passover: the consumption of matzah (unleavened bread) and maror (bitter herbs), the prohibitions against owning or consuming chametz (leavened bread) on the festival, the paschal lamb that used to be offered at the Temple in Jerusalem, and the order of the seder (ritual feast) held on the first evening of the holiday.\\n.\"\n"];
                };
                readonly enShortDesc: {
                    readonly description: "A short English description of the index. ";
                    readonly type: "string";
                    readonly examples: readonly ["Passover: ridding of chametz, the Paschal lamb offering, matzah, maror, and the Seder."];
                };
                readonly heShortDesc: {
                    readonly description: "A short description of the text in Hebrew. ";
                    readonly type: "string";
                    readonly examples: readonly ["דינים הקשורים לחג הפסח: איסור חמץ, קורבן הפסח, מצה, מרור וליל הסדר."];
                };
                readonly pubDate: {
                    readonly description: "Date(s) of publication. *Note:* A negative value indicates the work was published BCE. ";
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [1523];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly hasErrorMargin: {
                    readonly description: "This field tells you if `compDate` is list of 2 integers (i.e. is a range) because much of the time `compDate` will be a range only when there's an error margin in our knowledge of the completion date.  ";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly compDate: {
                    readonly description: "Date(s) of text composition. \n\n**Notes:** \n- A negative value indicates BCE. \n- The integers are Gregorian years.\n- If it has 2 values, that is the range of years it was composed.\n- If has 1 value, that is the year it was composed.\n- If it has 0, we don’t know the year it was composed.";
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [450];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly compPlace: {
                    readonly description: "Location of composition";
                    readonly type: "string";
                    readonly examples: readonly ["Talmudic Babylon"];
                };
                readonly pubPlace: {
                    readonly description: "Location of publication";
                    readonly type: "string";
                    readonly examples: readonly ["Venice"];
                };
                readonly era: {
                    readonly description: "Era of the text. The value will be represented by one of the following codes. \n\n```\n    \"Gaonim\": \"GN\",\n    \"Rishonim\": \"RI\",\n    \"Achronim\": \"AH\",\n    \"Tannaim\": \"T\",\n    \"Amoraim\": \"A\",\n    \"Contemporary\": \"CO\"\n```";
                    readonly type: "string";
                    readonly examples: readonly ["A"];
                };
                readonly is_cited: {
                    readonly description: "Indicator of whether ot not this text is cited by others in our library. Functionally, this means we will pick up links to this text when cited in other texts.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly corpora: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Bavli"];
                    };
                    readonly examples: readonly ["Bavli"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Topics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly topic_slug: {
                    readonly type: "string";
                    readonly examples: readonly ["moses", "torah", "the-four-species"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The slug of the desired topic";
                };
            };
            readonly required: readonly ["topic_slug"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly annotate_links: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Values can be `1` or `0`. \n\nIf `1`, adds the following fields to each intra-topic link: `title`, `titleIsTransliteration`, `shouldDisplay`, and `order`.";
                };
                readonly with_links: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Values can be `1` or `0`. \n\nIf `1`, includes intra-topic links in the `result` field, under `links`.";
                };
                readonly annotate_time_period: {
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Values can be `1` or `0`. \n\nIf `1`, the response includes time period data under the `timePeriod` key.";
                };
                readonly group_related: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Values can be `1` or `0`. \n\nIf `1`, groups link types with the `groupRelated` key set to true. This will simulate how the sidebar looks on the Sefaria site.";
                };
                readonly with_refs: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Values can be `1` or `0`. \n\nIf `1`, adds a list of `Ref`s tagged with this topic under the `refs` key.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for TopicJSON";
            readonly description: "A JSON object containing all of the metadata for a topic object";
            readonly required: readonly ["slug", "titles"];
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly description: "The unique slug for a given topic.";
                    readonly type: "string";
                    readonly examples: readonly ["nachman-of-breslov"];
                };
                readonly titles: {
                    readonly description: "An array of JSON objects, each representing an alternative title for the object, in various languages. ";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for TopicTitlesJSON";
                        readonly description: "Alternative title for a topic, along with the language code representing the language of the given title. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly text: {
                                readonly description: "The text of the title";
                                readonly type: "string";
                                readonly examples: readonly ["Sukkoth"];
                            };
                            readonly lang: {
                                readonly description: "The language of the title, either `en` or `he`. ";
                                readonly type: "string";
                                readonly examples: readonly ["he"];
                            };
                            readonly Primary: {
                                readonly description: "A field depicting whether or not the title is the primary title. Note: For any given topics, one should expect two titles with this field present and set to `true`, an English and a Hebrew primary title. The English value with `primary` set to `true` will match the string value of the `primaryTitle` field on topic. ";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                        };
                    };
                };
                readonly alt_ids: {
                    readonly description: "This is a dictionary containing the keys of naming schemes, and ids of this topic represented in that naming scheme.  It’s used both for canonical names in other naming schemes and temporary storage of names when renaming slugs. All of the data here is for internal use, with the exception of the values `bfo` and `wikidata`. `bfo` refers to [basic formal ontology](https://developers.sefaria.org/docs/topic-ontology), and `wikidata` to the wikidata ontology of topics. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly _temp_id: {
                            readonly type: "string";
                            readonly examples: readonly ["משה"];
                        };
                    };
                };
                readonly properties: {
                    readonly title: "Root Type for TopicPropertyJson";
                    readonly description: "The JSON object containing information about a topic's properties";
                    readonly type: "object";
                    readonly properties: {
                        readonly heNliLink: {
                            readonly title: "Root Type for NLILinkJSON";
                            readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly description: "A link to a corresponding NLI page to learn more. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                };
                                readonly dataSource: {
                                    readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["`sefaria`"];
                                };
                            };
                        };
                        readonly enNliLink: {
                            readonly title: "Root Type for NLILinkJSON";
                            readonly description: "JSON for storing NLI links related to data in the Sefaria database. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly description: "A link to a corresponding NLI page to learn more. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.nli.org.il/en/discover/judaism/holidays/sukkot"];
                                };
                                readonly dataSource: {
                                    readonly description: "The source of the topic data, whether user-created or Sefaria-created. ";
                                    readonly type: "string";
                                    readonly examples: readonly ["`sefaria`"];
                                };
                            };
                        };
                    };
                };
                readonly description: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
                readonly categoryDescription: {
                    readonly description: "A description of the category of this topic";
                    readonly oneOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    }];
                };
                readonly displayOrder: {
                    readonly format: "int32";
                    readonly description: "The order in which topics are displayed on the Sefaria website, relative to other topics within their same category. ";
                    readonly type: "integer";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly numSources: {
                    readonly format: "int32";
                    readonly description: "The number of text sources associated with a topic. ";
                    readonly type: "integer";
                    readonly examples: readonly [831];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly description_published: {
                    readonly description: "A boolean representing whether or not the description was published. ";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly data_source: {
                    readonly description: "How the topic was generated, whether by Sefaria, a user on a source sheet, or some other source. ";
                    readonly type: "string";
                    readonly examples: readonly ["`sefaria`"];
                };
                readonly image: {
                    readonly title: "Root Type for TopicImgJSON";
                    readonly description: "A JSON object containing the image metadata for topics with images. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly image_uri: {
                            readonly description: "The URL pointing to the image as hosted by Sefaria. ";
                            readonly type: "string";
                            readonly examples: readonly ["https://storage.googleapis.com/img.sefaria.org/topics/sukkot.jpg"];
                        };
                        readonly image_caption: {
                            readonly title: "Root Type for TopicImgCaption";
                            readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                            readonly type: "object";
                            readonly properties: {
                                readonly en: {
                                    readonly description: "The English field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                                };
                                readonly he: {
                                    readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                                    readonly oneOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "boolean";
                                    }];
                                    readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                                };
                            };
                        };
                    };
                };
                readonly primaryTitle: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
                readonly primaryTitleIsTransliteration: {
                    readonly title: "Root Type for TopicImgCaption";
                    readonly description: "A JSON object containing billingual text, both `he` and `en` parallel texts. ";
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly description: "The English field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["Detail of a painting of a sukkah. Image taken from f. 316v of Forli Siddur. 1383, Italian rite. The British Library"];
                        };
                        readonly he: {
                            readonly description: "The Hebrew field for a JSON object representing billingual text. ";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "boolean";
                            }];
                            readonly examples: readonly ["פרט ציור של סוכה עם שולחן פרוש ושלוש דמויות. דימוי מתוך סידור פורלי, 1383 איטליה"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV3Texts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tref: {
                    readonly type: "string";
                    readonly examples: readonly ["Esther 1.1", "Esther 4", "Berakhot 14b.2", "Berakhot 14b", "Rashi on Genesis 1:1:1", "Rashi on Genesis 1:1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A Sefaria-specific reference, `Ref`. This should be a segment `Ref` (the most specific reference possible), or bottom level section `Ref` (i.e.  a section of text one level up. A section is an array of segments). If a `Ref` which is not a segment or bottom level section is passed, the response will be to the first bottom level section `Ref` (e.g. `Genesis` will resolve to the bottom level section `Ref` of `Genesis 1`)";
                };
            };
            readonly required: readonly ["tref"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly version: {
                    readonly type: "string";
                    readonly examples: readonly ["hebrew", "hebrew|Miqra according to the Masorah"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "There are two possible forms for the string passed as the `version`:\n1. `language`\n2. `language|versionTitle`\n\nWhen in the form of `language`, the primary version of that language is returned in the `versions` field of the response object. When in the form of `language|versionTitle`, only that specific version is returned in the `versions` field. \n\n\n**Notes**: \n- `language` is the full English name of the language. In cases of dialectics with varying sub-specifities, please pass the ‘mother’ language (so for example, `arabic` rather than `judeo-arabic`). This field is NOT case sensitive.\n- `versionTitle` is the exact English `versionTitle` of the given `version` in the Sefaria database. \n- When only `language` is passed, the response will return a single version of the text in that language, the one that is highest priority in the Sefaria database.\n- Requests can have more than one `version` param. If no `version` was passed, the API defaults to `version=primary`.\n\n-----\n\n**Special Values**\nThe following values can be passed in as special values to the `version` parameter. \n- `source`: When `version=source` is passed, it retrieves the text in its \"source\" language (i.e. the original language the text was written in, versus a translation).\n- `translation`: When `version=translation`is passed, it retrieves a translation of the text. \n- `primary`: When `version=primary` is passed, it retrieves the primary text as per the Sefaria database (i.e. the `isPrimary` field on the `version` in the database is set to `True`). Usually the text returned is identical to what is returned with the special value of `source`, but it can also include other languages (e.g. Hebrew for the _Kuzari_, which was originally written in Judeo-Arabic)\n- `all`: get all texts in the required language.\n\n\nIf a required version is missing that information will be under the field warnings of the response.\n";
                };
                readonly fill_in_missing_segments: {
                    readonly enum: readonly ["0", "1"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter is only relevant for cases where the requested text is incomplete (i.e. not all of the segments in the requested version exist in the database for that text, such as a partial translation).\n\nWhen `fill_in_missing_segments=1`, the segments of text that are missing in the requested version will be filled by other versions of the same language.\n\nThis value defaults to `0`. \n";
                };
                readonly return_format: {
                    readonly enum: readonly ["default", "wrap_all_entities", "strip_only_footnotes", "text_only"];
                    readonly type: "string";
                    readonly default: "default";
                    readonly examples: readonly ["text_only", "wrap_all_entities"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter formats the text that will be returned from the `v3` `texts/` API. It can have one of four values:\n1. `text_only` - This strips footnotes, inline references, and all HTML tags from the returned text.\n2. `strip_only_footnotes` - This strips only the footnotes and commentator tags without stripping the other HTML tags.This is useful for the native app, where we do not display footnotes.\n3. `wrap_all_entities` - This wraps the HTML for links and topic links.\n4. `default` - This returns the basic text as it is saved in Sefaria’s DB.\n";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for v3TextsJson";
            readonly description: "The JSON returned from the `v3` `texts/` endpoint. ";
            readonly type: "object";
            readonly properties: {
                readonly versions: {
                    readonly description: "The list of requested `version` objects. It includes all the data that is unique to the requested `versions`. \n";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for v3TextVersionsJSON";
                        readonly description: "";
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly description: "Whether or not the text is `\"locked\"` for further edits from the community. ";
                                readonly type: "string";
                                readonly examples: readonly ["locked"];
                            };
                            readonly priority: {
                                readonly description: "The priority assigned to a version of the text. A higher number will have the text appear higher within the listing of available versions for a specific text on the Sefaria website. (i.e. `Esther A` with a priority of `2`, will appear before `Esther B`, with a priority of `1`)";
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                    readonly format: "float";
                                    readonly minimum: -3.402823669209385e+38;
                                    readonly maximum: 3.402823669209385e+38;
                                }];
                                readonly examples: readonly [2];
                            };
                            readonly license: {
                                readonly description: "The license for the text, in terms of copyright, and distribution. ";
                                readonly type: "string";
                                readonly examples: readonly ["Public Domain"];
                            };
                            readonly versionNotes: {
                                readonly description: "Notes on the version";
                                readonly type: "string";
                                readonly examples: readonly ["© Kehot Publication Society"];
                            };
                            readonly formatAsPoetry: {
                                readonly description: "A boolean indicating whether or not the text (or portions of it) are formatted as poetry.";
                                readonly oneOf: readonly [{
                                    readonly type: "boolean";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly digitizedBySefaria: {
                                readonly description: "An indicator of whether or not Sefaria digitized the text, versus acquiring an already digital copy of a text. ";
                                readonly oneOf: readonly [{
                                    readonly type: "boolean";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly method: {
                                readonly type: "string";
                            };
                            readonly heversionSource: {
                                readonly type: "string";
                            };
                            readonly versionUrl: {
                                readonly description: "URl for the version";
                                readonly type: "string";
                            };
                            readonly versionTitleInHebrew: {
                                readonly type: "string";
                                readonly examples: readonly ["מקרא על פי המסורה"];
                            };
                            readonly versionNotesInHebrew: {
                                readonly type: "string";
                            };
                            readonly shortVersionTitle: {
                                readonly type: "string";
                            };
                            readonly shortVersionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly extendedNotes: {
                                readonly type: "string";
                            };
                            readonly extendedNotesHebrew: {
                                readonly type: "string";
                            };
                            readonly purchaseInformationImage: {
                                readonly description: "A URL pointing to an image of the hardcopy text available for purchase.";
                                readonly type: "string";
                                readonly examples: readonly ["https://storage.googleapis.com/sefaria-physical-editions/touger-mishneh-torah-hilkhot-teshuvah-purchase-img.png"];
                            };
                            readonly purchaseInformationURL: {
                                readonly description: "A URL pointing to where one can purchase a hardcopy of this text. ";
                                readonly type: "string";
                                readonly examples: readonly ["https://moznaim.com/products/mishneh-torah-rambam"];
                            };
                            readonly hasManuallyWrappedRefs: {
                                readonly type: "string";
                            };
                            readonly actualLanguage: {
                                readonly description: "The [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code for the language of the text. We default to 2 letter codes when available, and 3 letter codes when they are not.";
                                readonly type: "string";
                                readonly examples: readonly ["de"];
                            };
                            readonly languageFamilyName: {
                                readonly description: "The overarching family for the specific language detailed in `actualLanguage`. For example, `Arabic` would be the overarching family for `judeo-arabic`. ";
                                readonly type: "string";
                                readonly examples: readonly ["hebrew"];
                            };
                            readonly isSource: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly isPrimary: {
                                readonly description: "Indicates whether or not this version of the text is determined as the primary version in the Sefaria database.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly direction: {
                                readonly description: "The direction of the text, either `ltr` (left-to-right) or `rtl` (right-to-left). Examples of `ltr` languages include English, French and German. Examples of `rtl` languages are Hebrew and Arabic. ";
                                readonly type: "string";
                                readonly examples: readonly ["ltr"];
                            };
                            readonly language: {
                                readonly description: "A holdover from the `v2` API which will eventually be deprecated. This used to indicate the direction of the text, with `en` indicating texts written from left-to-right, and `he` indicating texting written from right-to-left. ";
                                readonly type: "string";
                                readonly examples: readonly ["`he`\n`en`"];
                            };
                            readonly versionSource: {
                                readonly description: "The original source of the digital text. ";
                                readonly type: "string";
                                readonly examples: readonly ["http://kehot.com/"];
                            };
                            readonly versionTitle: {
                                readonly description: "The English title of the Version of text. ";
                                readonly type: "string";
                                readonly examples: readonly ["Mischnajot mit deutscher Übersetzung und Erklärung. Berlin 1887-1933 [de]"];
                            };
                            readonly text: {
                                readonly description: "An array of strings containing the text of the specific version. \n\nIf a segment `Ref` was passed, the array returned will be one-dimensional and contain a string with the specific segment level text. \n\nIf a bottom level section `Ref` was passed, the array returned will be a two-dimensional array, a list of lists of strings. The outer layer of the array represents the section, and the inner arrays represent the segments. ";
                                readonly oneOf: readonly [{
                                    readonly type: "array";
                                    readonly items: {
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        }];
                                    };
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly firstSectionRef: {
                                readonly description: "The first available `Ref` to the section of text passed in the API. ";
                                readonly type: "string";
                                readonly examples: readonly ["Obadiah 1"];
                            };
                        };
                    };
                };
                readonly available_versions: {
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Root Type for v3AvailableVersionsTextJson";
                        readonly description: "Data returned in the `available_versions` field of the `v3` `texts` API. This contains all of the available versions for a given text, not just the required versions. ";
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Whether or not the text is `\"locked\"` for further edits from the community. ";
                                readonly examples: readonly ["locked"];
                            };
                            readonly priority: {
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }];
                                readonly description: "The priority assigned to a version of the text. A higher number will have the text appear higher within the listing of available versions for a specific text on the Sefaria website. (i.e. `Esther A` with a priority of `2`, will appear before `Esther B`, with a priority of `1`)";
                                readonly examples: readonly [3];
                            };
                            readonly license: {
                                readonly type: "string";
                                readonly description: "The license for the text, in terms of copyright, and distribution. ";
                                readonly examples: readonly ["Public Domain"];
                            };
                            readonly versionNotes: {
                                readonly type: "string";
                                readonly description: "Notes on the version";
                                readonly examples: readonly ["© Kehot Publication Society"];
                            };
                            readonly formatAsPoetry: {
                                readonly type: "string";
                                readonly description: "A boolean indicating whether or not the text (or portions of it) are formatted as poetry.";
                                readonly oneOf: readonly [{
                                    readonly type: "boolean";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly digitizedBySefaria: {
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "boolean";
                                }];
                                readonly description: "An indicator of whether or not Sefaria digitized the text, versus acquiring an already digital copy of a text. ";
                            };
                            readonly method: {
                                readonly type: "string";
                            };
                            readonly heversionSource: {
                                readonly type: "string";
                            };
                            readonly versionUrl: {
                                readonly type: "string";
                                readonly description: "URl for the version";
                            };
                            readonly versionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly versionNotesInHebrew: {
                                readonly type: "string";
                            };
                            readonly shortVersionTitle: {
                                readonly type: "string";
                                readonly examples: readonly ["Revised JPS, 2023"];
                            };
                            readonly shortVersionTitleInHebrew: {
                                readonly type: "string";
                            };
                            readonly extendedNotes: {
                                readonly type: "string";
                            };
                            readonly extendedNotesHebrew: {
                                readonly type: "string";
                            };
                            readonly purchaseInformationImage: {
                                readonly type: "string";
                                readonly description: "A URL pointing to an image of the hardcopy text available for purchase.";
                                readonly examples: readonly ["https://storage.googleapis.com/sefaria-physical-editions/touger-mishneh-torah-hilkhot-teshuvah-purchase-img.png"];
                            };
                            readonly purchaseInformationURL: {
                                readonly type: "string";
                                readonly description: "A URL pointing to where one can purchase a hardcopy of this text. ";
                                readonly examples: readonly ["https://moznaim.com/products/mishneh-torah-rambam"];
                            };
                            readonly hasManuallyWrappedRefs: {
                                readonly type: "string";
                            };
                            readonly actualLanguage: {
                                readonly type: "string";
                                readonly description: "The [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code for the language of the text. We default to 2 letter codes when available, and 3 letter codes when they are not.";
                                readonly examples: readonly ["de"];
                            };
                            readonly languageFamilyName: {
                                readonly description: "The overarching family for the specific language detailed in `actualLanguage`. For example, `Arabic` would be the overarching `languageFamily` for `judeo-arabic`.";
                                readonly type: "string";
                                readonly examples: readonly ["english"];
                            };
                            readonly isSource: {
                                readonly type: "boolean";
                            };
                            readonly isPrimary: {
                                readonly type: "boolean";
                                readonly description: "Indicates whether or not this version of the text is determined as the primary version in the Sefaria database.";
                            };
                            readonly direction: {
                                readonly type: "string";
                                readonly description: "The direction of the text, either `ltr` (left-to-right) or `rtl` (right-to-left). Examples of `ltr` languages include English, French and German. Examples of `rtl` languages are Hebrew and Arabic. ";
                                readonly examples: readonly ["ltr"];
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "A holdover from the `v2` API which will eventually be deprecated. This used to indicate the direction of the text, with `en` indicating texts written from left-to-right, and `he` indicating texting written from right-to-left. ";
                                readonly examples: readonly ["`he`\n`en`"];
                            };
                            readonly title: {
                                readonly description: "The title of the book.";
                                readonly type: "string";
                                readonly examples: readonly ["Esther"];
                            };
                            readonly versionSource: {
                                readonly type: "string";
                                readonly description: "The original source of the digital text. ";
                                readonly examples: readonly ["http://kehot.com/"];
                            };
                            readonly versionTitle: {
                                readonly type: "string";
                                readonly description: "The English title of the Version of text. ";
                                readonly examples: readonly ["Mischnajot mit deutscher Übersetzung und Erklärung. Berlin 1887-1933 [de]"];
                            };
                            readonly text: {
                                readonly description: "An array of strings containing the text of the specific version. \n\nIf a segment `Ref` was passed, the array returned will be one-dimensional and contain a string with the specific segment level text. \n\nIf a bottom level section `Ref` was passed, the array returned will be a two-dimensional array, a list of lists of strings. The outer layer of the array represents the section, and the inner arrays represent the segments. ";
                                readonly oneOf: readonly [{
                                    readonly type: "array";
                                    readonly items: {
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        }];
                                    };
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly firstSectionRef: {
                                readonly description: "The first available `Ref` to the section of text passed in the API. ";
                                readonly type: "string";
                                readonly examples: readonly ["Obadiah 1"];
                            };
                        };
                    };
                };
                readonly ref: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heRef: {
                    readonly description: "Hebrew `Ref` for the segment. ";
                    readonly type: "string";
                    readonly examples: readonly ["עובדיה"];
                };
                readonly sections: {
                    readonly description: "An array which corresponds to sectionNames and represents the sections of the text requested. When sectionNames is `[\"Chapter\", \"Verse\"]` a request for chapter 4 looks like `[4]` while a request for chapter 4, verse 7 would look like `[4, 7]`. _Note, for Talmud, Dafs are represented by a string like \"42a\" or \"12b\"_";
                    readonly type: "array";
                    readonly items: {};
                };
                readonly toSections: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly sectionRef: {
                    readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Peah 4:2"];
                };
                readonly heSectionRef: {
                    readonly type: "string";
                    readonly examples: readonly ["עובדיה"];
                };
                readonly firstAvailableSectionRef: {
                    readonly type: "string";
                    readonly examples: readonly ["Obadiah 1"];
                };
                readonly isSpanning: {
                    readonly type: "boolean";
                };
                readonly spanningRefs: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly next: {
                    readonly description: "Next segment reference in sequence, if last ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Obadiah 1"];
                };
                readonly prev: {
                    readonly description: "Previous segment reference in sequence, if first ref, field will be `null`.";
                    readonly type: "string";
                    readonly examples: readonly ["Obadiah 1"];
                };
                readonly title: {
                    readonly description: "The title of the book these versions correspond to. ";
                    readonly type: "string";
                    readonly examples: readonly ["Obadiah"];
                };
                readonly book: {
                    readonly description: "The title of the book that the response comes from.";
                    readonly type: "string";
                    readonly examples: readonly ["Esther"];
                };
                readonly heTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["עובדיה"];
                };
                readonly primary_category: {
                    readonly type: "string";
                    readonly examples: readonly ["Tanakh"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["Tanakh"];
                };
                readonly indexTitle: {
                    readonly description: "The book title";
                    readonly type: "string";
                    readonly examples: readonly ["Obadiah"];
                };
                readonly categories: {
                    readonly description: "A list of categories that a text belongs to. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Tanakh"];
                    };
                    readonly examples: readonly ["Tanakh", "Writings"];
                };
                readonly heIndexTitle: {
                    readonly type: "string";
                    readonly examples: readonly ["עובדיה"];
                };
                readonly isComplex: {
                    readonly description: "Whether or not the text is a \"complex\" text or not.\n\nIn Sefaria, a complex text is any text which has a more complicated index structure beyond Chapters/Verses, (e.g. the Talmud). There are a variety of structural differences for a complex text, having to do primarily with its Index, and the way the data is stored. For more on complex texts, see the documentation here.";
                    readonly type: "boolean";
                };
                readonly isDependant: {
                    readonly type: "boolean";
                };
                readonly order: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [18];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly collectiveTitle: {
                    readonly description: "A shortened name of the Index for display in the connection panel (i.e. `Rashi on Genesis` will have a collective title of `Rashi`)";
                    readonly type: "string";
                };
                readonly heCollectiveTitle: {
                    readonly description: "A Hebrew shortened name of the Index for display in the connection panel (i.e. `רש״י על בראשית` will have a collective title of `רש״י`)";
                    readonly type: "string";
                };
                readonly alts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly lengths: {
                    readonly type: "array";
                    readonly items: {
                        readonly format: "int32";
                        readonly type: "integer";
                        readonly examples: readonly [1];
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly length: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly textDepth: {
                    readonly format: "int32";
                    readonly description: "The depth of the text. For example, Genesis will have depth of `2`, since it is comprised of two layers, chapters and verses. Whereas a commentary on Genesis will have a depth of `3`, since it is organized by chapter, verse, and then specific comment on a verse. ";
                    readonly type: "integer";
                    readonly examples: readonly [2];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly sectionNames: {
                    readonly description: "An array containing the type names of the sections of this text. The length of sectionNames gives the depth of the structure of this text. For example, Kohelet `([\"Chapter\", \"Verse\"])` has depth 2, while Mishneh Torah `([\"Book\", \"Topic\", \"Section\", \"Law\"])` has depth 4. Comparing this depth to the depth of sections will show if the request was for the lowest level, or a higher level, of the text.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Chapter"];
                    };
                };
                readonly addressTypes: {
                    readonly description: "A list which length reflects the depth of the text structure, with string values indicating class names for address types for each level";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Perek"];
                    };
                    readonly examples: readonly ["Perek", "Pasuk"];
                };
                readonly titleVariants: {
                    readonly description: "Various alternative titles used for the text. ";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Ovadiah"];
                    };
                    readonly examples: readonly ["Est.", "Est", "Ester", "Esth.", "Esth", "Esther"];
                };
                readonly heTitleVariants: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["עובדיה"];
                    };
                };
                readonly index_offsets_by_depth: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly warnings: {
                    readonly description: "A list of objects - for any version parameter that has no result there is a readable message and warning code. \n\nCodes:\n`APINoVersion = 101`\n`APINoLanguageVersion = 102`\n`APINoSourceText = 103`\n`APINoTranslationText = 104`\n";
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetVersions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly index: {
                    readonly type: "string";
                    readonly examples: readonly ["Mishnah Berakhot", "Kohelet", "Rashi on Exodus", "Shulchan Aruch Orach Chaim"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sefaria Index";
                };
            };
            readonly required: readonly ["index"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Root Type for VersionJSON";
                readonly description: "The metadata for a given version. ";
                readonly type: "object";
                readonly properties: {
                    readonly title: {
                        readonly description: "The title of the Index. ";
                        readonly type: "string";
                        readonly examples: readonly ["Talmud Berakhot"];
                    };
                    readonly versionTitle: {
                        readonly description: "The title of the version";
                        readonly type: "string";
                        readonly examples: readonly ["\"William Davidson Edition - Vocalized Aramaic\""];
                    };
                    readonly versionSource: {
                        readonly description: "A URL pointing to the hardcopy of the text as it can be found in libraries, most usually in our case the NLI (National Library of Israel), but not exclusively. ";
                        readonly type: "string";
                        readonly examples: readonly ["https://www.nli.org.il/he/books/NNL_ALEPH990025294890205171/NLI"];
                    };
                    readonly language: {
                        readonly description: "The texts on Sefaria are grouped into two language buckets, `en` for languages which read left-to-right (i.e. English, Spanish, German) and `he` for languages which read right-to-left (i.e. Hebrew, Arabic). This field is only ever populated by a string containing the value of either `en` or `he`. ";
                        readonly type: "string";
                        readonly examples: readonly ["'en'\n'he'"];
                    };
                    readonly status: {
                        readonly description: "The status field contains either the string `\"locked\"` or an empty string. If `\"locked\"` is the value of the field, it indicates that the text is locked from future updatees, edits and translations from community members. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"locked\""];
                    };
                    readonly license: {
                        readonly description: "The copyright license for using, and reproducing the text. ";
                        readonly type: "string";
                        readonly examples: readonly ["CC-BY"];
                    };
                    readonly versionNotes: {
                        readonly description: "English notes relating to the version, often containing details of authorship, place of printing, and sometimes donor dedications. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"English from The William Davidson digital edition of the <a href='https://korenpub.com/collections/the-noe-edition-koren-talmud-bavli-1'>Koren Noé Talmud</a>, with commentary by <a href='/adin-even-israel-steinsaltz'>Rabbi Adin Even-Israel Steinsaltz</a>\","];
                    };
                    readonly digitizedBySefaria: {
                        readonly description: "Whether or not the text was digitized by Sefaria. We have some texts we've been able to add to our database from digital sources, and other texts that we've transfered from print to a digital medium ourselves. This field indicates if Sefaria did the digitization. ";
                        readonly oneOf: readonly [{
                            readonly type: "boolean";
                        }, {
                            readonly type: "string";
                        }];
                    };
                    readonly priority: {
                        readonly description: "The priority field is a number which indicates the priority of a version relative to all other existing versions of the same text. A value of `1` indicates the lowest priority, while the highest value among all versions of the text indicate the highest priority. \n\nPriority values can also be floating point numbers. The priority field determines how the various available versions of a text will be displayed on the Sefaria website. The texts are displayed to the user in a highest-to-lowest priority order, in many cases offering more complete or higher quality versions of the text before ones of inferior quality. ";
                        readonly oneOf: readonly [{
                            readonly type: "number";
                            readonly examples: readonly [7];
                        }, {
                            readonly type: "string";
                        }];
                    };
                    readonly versionTitleInHebrew: {
                        readonly description: "The title of the version in Hebrew";
                        readonly type: "string";
                        readonly examples: readonly ["מהדורת וויליאם דייוידסון - ארמית המנוקד"];
                    };
                    readonly versionNotesInHebrew: {
                        readonly description: "Hebrew notes relating to the version, often containing details of authorship, place of printing, and sometimes donor dedications. ";
                        readonly type: "string";
                    };
                    readonly extendedNotes: {
                        readonly description: "English extended notes on a version that go beyond the time and place of printing. ";
                        readonly type: "string";
                    };
                    readonly extendedNotesHebrew: {
                        readonly description: "Hebrew extended notes on a version that go beyond the time and place of printing. ";
                        readonly type: "string";
                    };
                    readonly purchaseInformationImage: {
                        readonly description: "A URL pointing to an image of the hard copy of the version associated with the digital copy, for those who would like to purchase a hard copy. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"https://storage.googleapis.com/sefaria-physical-editions/4fc4b6d5b144eb3915d250d743eaf2e8.png\""];
                    };
                    readonly purchaseInformationURL: {
                        readonly description: "The URL pointing to a website where on can buy a physical copy of the given text version. ";
                        readonly type: "string";
                        readonly examples: readonly ["\"https://korenpub.com/collections/the-noe-edition-koren-talmud-bavli-1/products/copy-of-vol-1-berakhot-1\""];
                    };
                    readonly shortVersionTitle: {
                        readonly description: "An English short title for the version";
                        readonly type: "string";
                        readonly examples: readonly ["\"Koren - Steinsaltz\""];
                    };
                    readonly shortVersionTitleInHebrew: {
                        readonly description: "A Hebrew short title for the version";
                        readonly type: "string";
                    };
                    readonly firstSectionRef: {
                        readonly description: "The first `ref` for this title on a section level (as opposed to the more granular segment level). For example, `Genesis 1` would be the first section level ref of Genesis (as opposed to the segment, `Genesis 1:1`), and `Rashi on Kohelet 1:1` is the first section level ref of `Rashi on Kohelet` (as opposed to the segment level of `Rashi on Kohelet 1:1:1`)";
                        readonly type: "string";
                        readonly examples: readonly ["Rashi on Kohelet 1.1"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWords: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly word: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The word or phrase to search for in the lexicons.";
                };
            };
            readonly required: readonly ["word"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly lookup_ref: {
                    readonly type: "string";
                    readonly examples: readonly ["Leviticus 19.3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter refines the search based on the `lookup_ref`.";
                };
                readonly never_split: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter refines the search to limit lookup to the actual input string.";
                };
                readonly always_split: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This parameter refines the search to look for substring matches regardless of results for original input. One can pass the values `0` (to indicate false) or `1` (to indicate true). ";
                };
                readonly always_consonants: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If this is `1`, the given word will be searched for with and without its vowels. If `0`, then the word will be searched for exactly as written in the request";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly anyOf: readonly [{
                    readonly title: "JastrowDictionaryEntry";
                    readonly description: "An entry from Jastrow’s Dictionary,";
                    readonly type: "object";
                    readonly properties: {
                        readonly rid: {
                            readonly description: "Returns a unique id for this reference that establishes an ordering of references across the whole catalog. This id will change as the ordering of the categories changes, and may begin to overlap with other numbers because of those changes. However, at any point in time these ids will be unique across the catalog. Used to sort results from ElasticSearch queries";
                        };
                        readonly quotes: {
                            readonly description: "";
                        };
                        readonly refs: {
                            readonly description: "Cross references to selections in the Sefaria library.";
                            readonly type: "array";
                            readonly items: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                        };
                        readonly prev_hw: {
                            readonly description: "The previous headword entry from the book.";
                        };
                        readonly next_hw: {
                            readonly description: "The next headword entry from the book.";
                        };
                        readonly plural_form: {
                            readonly description: "The plural form of the headword.";
                        };
                        readonly language_reference: {
                            readonly description: "";
                        };
                        readonly language_code: {
                            readonly description: "A string containing the following characters `h.` (Hebrew), `b. h.` (Biblical Hebrew) `ch.` or `Ch.` (Chaldean) indicating the source language of the entry.";
                        };
                        readonly alt_headwords: {
                            readonly description: "An array of alternate headwords for the entry. Symbolized in print as those headwords separated by commas after the initial entry.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly content: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly senses: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly description: "Each meaning of the word is tagged as a `sense` within `senses`\nEach sense may be preceded by a bolded number which will be tagged as a `number`\nEach Binyan will also be broken down into `senses`";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly definition: {
                                                readonly description: "A definition of the word";
                                                readonly type: "string";
                                            };
                                            readonly grammar: {
                                                readonly description: "";
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly verbal_stem: {
                                                        readonly type: "string";
                                                    };
                                                    readonly language_code: {
                                                        readonly type: "string";
                                                    };
                                                    readonly binyan_form: {
                                                        readonly description: "Found in verbs, a binyan is a linguistic alternate use of the word. It will be one of the following: Hiph., Hish., Hith., Hithpalp., Hithpol., Hoph., Hoth., Niph, , Nith., Pa., Pi., Pil., Pilp., Pir., Po., Pol., Polp., Pu., Pul., Pulp., Qal., Shaph., Shiph., Shuph., Tiph., Tuph., Hif., Nif., Hithpa., Af., Ithpa., Ithpe., Nithpa";
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                            readonly number: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                                readonly morphology: {
                                    readonly description: "A description of the morphological form of the word, one of `m., m. pl., f., f. pl., pr. n., pr. n. pl., pr. n. f., pr. n. m., pron., pers. pron.`";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly headword: {
                            readonly description: "The main word in the lexicon entry. The one you would look up in the book version.";
                            readonly type: "string";
                        };
                        readonly parent_lexicon: {
                            readonly description: "Name of the lexicon from which the entry comes from.";
                            readonly type: "string";
                        };
                        readonly parent_lexicon_details: {
                            readonly description: "";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                }, {
                    readonly title: "StrongsDictionaryEntry";
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly strong_number: {
                            readonly type: "string";
                            readonly examples: readonly ["7200"];
                        };
                        readonly transliteration: {
                            readonly description: "";
                        };
                        readonly pronunciation: {
                            readonly description: "";
                        };
                        readonly language_code: {
                            readonly description: "";
                        };
                        readonly content: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly morphology: {
                                    readonly type: "string";
                                    readonly examples: readonly ["v"];
                                };
                                readonly senses: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly description: "";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly definition: {
                                                readonly description: "A definition of the word";
                                            };
                                            readonly grammar: {
                                                readonly description: "";
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly verbal_stem: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly headword: {
                            readonly description: "The main word in the lexicon entry. The one you would look up in the book version.";
                            readonly type: "string";
                            readonly examples: readonly ["רָאָה"];
                        };
                        readonly parent_lexicon: {
                            readonly description: "Name of the lexicon from which the entry comes from.";
                            readonly type: "string";
                            readonly examples: readonly ["BDB Augmented Strong"];
                        };
                        readonly parent_lexicon_details: {
                            readonly description: "";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                }, {
                    readonly title: "BDBDictionaryEntry";
                    readonly type: "object";
                    readonly description: "A single dictionary entry on Sefaria.";
                    readonly properties: {
                        readonly rid: {
                            readonly description: "Returns a unique id for this reference that establishes an ordering of references across the whole catalog. The `rid` will change as the ordering of the categories changes, and may begin to overlap with other numbers because of those changes. However, at any point in time the `rid`s will be unique across the catalog. The `rid` is used to sort results from ElasticSearch queries.";
                            readonly type: "string";
                        };
                        readonly TWOT: {
                            readonly description: "The corresponding Theological Wordbook of the Old Testament number for this word.";
                            readonly type: "string";
                        };
                        readonly strong_numbers: {
                            readonly description: "An array of corresponsing Strong Numbers for this word.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly root: {
                            readonly description: "Indicates if the headword is the Biblical root. (Indicated in print, by a larger printed headword).";
                            readonly type: "boolean";
                        };
                        readonly peculiar: {
                            readonly description: "A bool indicating the presence of the `‡` symbol in print, demonstrating that the word is peculiar to Biblical Aramaic.";
                            readonly type: "boolean";
                        };
                        readonly ordinal: {
                            readonly description: "When the same headword has more than one entry with a differen meaning they are offset by the Roman numerals here.";
                            readonly type: "string";
                        };
                        readonly occurrences: {
                            readonly description: "A count of the number of times the headword appears in the Bible";
                            readonly type: "number";
                        };
                        readonly headword_suffix: {
                            readonly description: "In some cases the headword has some additional content in print beyond it. That data is included here.";
                            readonly type: "string";
                        };
                        readonly GK: {
                            readonly description: "The corresponding Goodrick/Kohlenberger Lexicon number for this headword.";
                            readonly type: "string";
                        };
                        readonly all_cited: {
                            readonly description: "A bool indicating the presense of the `†` symbol in print, indicating that all of the occurences of the word are listed as part of this entry";
                            readonly type: "boolean";
                        };
                        readonly brackets: {
                            readonly description: "Headword has brackets in print.";
                            readonly type: "boolean";
                        };
                        readonly alt_headwords: {
                            readonly description: "An array of alternative headwords for the entry";
                            readonly type: "array";
                            readonly properties: {
                                readonly word: {
                                    readonly description: "The alternative headword";
                                    readonly type: "string";
                                };
                                readonly occurences: {
                                    readonly description: "The number of times the alternative headword exists in the Bible";
                                };
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly prev_hw: {
                            readonly description: "The previous entry in print.";
                            readonly type: "string";
                        };
                        readonly next_hw: {
                            readonly description: "The next entry in print.";
                            readonly type: "string";
                        };
                        readonly content: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly senses: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly definition: {
                                                readonly description: "a definition of this sense of the word";
                                                readonly type: "string";
                                                readonly examples: readonly ["to see,  look at,  inspect,  perceive,  consider"];
                                            };
                                            readonly all_cited: {
                                                readonly description: "A bool indicating the presense of the `†` symbol in print, indicating that all of the occurences of this sense of the word are listed as part of this entry";
                                                readonly type: "string";
                                            };
                                            readonly form: {
                                                readonly description: "the grammatical verb form (binyan) of the word";
                                                readonly type: "string";
                                            };
                                            readonly note: {
                                                readonly description: "an additional note for the entry";
                                                readonly type: "string";
                                            };
                                            readonly num: {
                                                readonly description: "the string of the numbering of this sense in print (it can be a number, English letter, Roman digits, with period, in parentheses, etc.)";
                                                readonly type: "string";
                                            };
                                            readonly occurences: {
                                                readonly description: "number of occurrences of this sense in bible";
                                                readonly type: "string";
                                            };
                                            readonly pre_num: {
                                                readonly description: "In some cases the sense has some additional characters before the entry  (e.g. the word Especially). That data is included here";
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly headword: {
                            readonly description: "The main word in the lexicon entry. The one you would look up in the book version.";
                            readonly type: "string";
                            readonly examples: readonly ["רָאָה"];
                        };
                        readonly parent_lexicon: {
                            readonly description: "Name of the lexicon from which the entry comes from.";
                            readonly type: "string";
                            readonly examples: readonly ["BDB Augmented Strong"];
                        };
                        readonly parent_lexicon_details: {
                            readonly description: "";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                }, {
                    readonly title: "KleinDictionaryEntry";
                    readonly type: "object";
                    readonly description: "A single dictionary entry on Sefaria.";
                    readonly properties: {
                        readonly rid: {
                            readonly description: "Returns a unique id for this reference that establishes an ordering of references across the whole catalog. This id will change as the ordering of the categories changes, and may begin to overlap with other numbers because of those changes. However, at any point in time these ids will be unique across the catalog. Used to sort results from ElasticSearch queries";
                        };
                        readonly quotes: {
                            readonly description: "";
                        };
                        readonly refs: {
                            readonly description: "Internal references to the Klein dictionary for other entries.";
                            readonly type: "array";
                            readonly items: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                        };
                        readonly prev_hw: {
                            readonly description: "The previous headword entry from the book.";
                        };
                        readonly next_hw: {
                            readonly description: "The next headword entry from the book.";
                        };
                        readonly plural_form: {
                            readonly description: "The plural form of the headword";
                        };
                        readonly language_reference: {
                            readonly description: "";
                        };
                        readonly language_code: {
                            readonly description: "If not present, it’s Biblical.  Otherwise values could be [PBH, MH, NH, FW] - Post Biblical Hebrew, Middle Hebrew, New Hebrew, Foreign Word.";
                        };
                        readonly morphology: {
                            readonly description: "One of [n., adj., adv., m.n., abs., art. , attrib., auxil., comp., copul., c st., def., f., f. n., imper.., Imperf., Indef art., Inf, Interj., Interr., Intr., Neut., Part., Pass., Perf., Possess., p. part., prep., pres part., pres t., p.t.., sing., Subj., Tr.]";
                        };
                        readonly alt_headwords: {
                            readonly description: "Alternative spellings of headword";
                        };
                        readonly notes: {
                            readonly description: "The trailing end of the dictionary entry, after the formal definition - may have comparisons to cognates or similar notes";
                        };
                        readonly derivatives: {
                            readonly description: "HTML - list of derivate words - <a> tag wrapped with links to Sefaria entries";
                        };
                        readonly content: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly senses: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly description: "";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly definition: {
                                                readonly description: "A definition of the word";
                                                readonly type: "string";
                                                readonly examples: readonly ["to see,  look at,  inspect,  perceive,  consider"];
                                            };
                                            readonly grammar: {
                                                readonly description: "";
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly verbal_stem: {
                                                        readonly type: "string";
                                                    };
                                                    readonly language_code: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["heb"];
                                                    };
                                                    readonly binyan_form: {
                                                        readonly description: "what form the root takes in this binyan";
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly morphology: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                            readonly number: {
                                                readonly description: "a number indicating which numbered sense this is";
                                                readonly type: "string";
                                            };
                                            readonly plural_form: {
                                                readonly description: "the plural form of the sense";
                                                readonly type: "string";
                                            };
                                            readonly notes: {
                                                readonly description: "The trailing end of the dictionary entry, after the formal definition - may have comparisons to cognates or similar notes";
                                                readonly type: "string";
                                            };
                                            readonly morphology: {
                                                readonly description: " One of [n., adj., adv., m.n., abs., art. , attrib., auxil., comp., copul., c st., def., f., f. n., imper.., Imperf., Indef art., Inf, Interj., Interr., Intr., Neut., Part., Pass., Perf., Possess., p. part., prep., pres part., pres t., p.t.., sing., Subj., Tr.]";
                                                readonly type: "string";
                                            };
                                            readonly language_code: {
                                                readonly description: "If not present, it’s Biblical.  Otherwise values could be [PBH, MH, NH, FW] - Post Biblical Hebrew, Middle Hebrew, New Hebrew, Foreign Word.";
                                                readonly type: "string";
                                                readonly examples: readonly ["heb"];
                                            };
                                            readonly alternative: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                };
                                readonly morphology: {
                                    readonly description: "One of [n., adj., adv., m.n., abs., art. , attrib., auxil., comp., copul., c st., def., f., f. n., imper.., Imperf., Indef art., Inf, Interj., Interr., Intr., Neut., Part., Pass., Perf., Possess., p. part., prep., pres part., pres t., p.t.., sing., Subj., Tr.]";
                                    readonly type: "string";
                                    readonly examples: readonly ["v"];
                                };
                            };
                        };
                        readonly headword: {
                            readonly description: "The main word in the lexicon entry. The one you would look up in the book version.";
                            readonly type: "string";
                            readonly examples: readonly ["רָאָה"];
                        };
                        readonly parent_lexicon: {
                            readonly description: "Name of the lexicon from which the entry comes from.";
                            readonly type: "string";
                            readonly examples: readonly ["BDB Augmented Strong"];
                        };
                        readonly parent_lexicon_details: {
                            readonly description: "";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                }, {
                    readonly title: "HebrewDictionaryEntry";
                    readonly type: "object";
                    readonly description: "A single dictionary entry on Sefaria.";
                    readonly properties: {
                        readonly rid: {
                            readonly description: "Returns a unique id for this reference that establishes an ordering of references across the whole catalog. This id will change as the ordering of the categories changes, and may begin to overlap with other numbers because of those changes. However, at any point in time these ids will be unique across the catalog. Used to sort results from ElasticSearch queries";
                            readonly type: "string";
                        };
                        readonly refs: {
                            readonly description: "Cross references to selections in the Sefaria library.";
                            readonly type: "array";
                            readonly items: {
                                readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                readonly type: "string";
                                readonly examples: readonly ["Mishnah Peah 4:2"];
                            };
                        };
                        readonly prev_hw: {
                            readonly description: "The previous headword entry from the book.";
                            readonly type: "string";
                        };
                        readonly next_hw: {
                            readonly description: "The next headword entry from the book.";
                            readonly type: "string";
                        };
                        readonly content: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly senses: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly definition: {
                                                readonly description: "A definition of this sense of the word";
                                                readonly type: "string";
                                                readonly examples: readonly ["to see,  look at,  inspect,  perceive,  consider"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly headword: {
                            readonly description: "The main word in the lexicon entry. The one you would look up in the book version.";
                            readonly type: "string";
                            readonly examples: readonly ["רָאָה"];
                        };
                        readonly parent_lexicon: {
                            readonly description: "Name of the lexicon from which the entry comes from.";
                            readonly type: "string";
                            readonly examples: readonly ["BDB Augmented Strong"];
                        };
                        readonly parent_lexicon_details: {
                            readonly description: "";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                }];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWordsCompletion: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly lexicon: {
                    readonly type: "string";
                    readonly examples: readonly ["Klein Dictionary", "Jastrow Dictionary", "Sefer HaShorashim", "Animadversions by Elias Levita on Sefer HaShorashim", "BDB Dictionary", "BDB Aramaic Dictionary"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An optional text string matching the name of one of Sefaria's lexicons to limit the search.";
                };
                readonly word: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "An arbitrary text string to match against Sefaria's lexicon collections.";
                };
            };
            readonly required: readonly ["lexicon", "word"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return (0 is the default; indicates no limit)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly description: "An array of arrays, each containing two strings. The first is a completion entry in Hebrew without vowels and the second includes vowels.";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly examples: readonly ["אב", "אַב"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostFindRefs: {
    readonly body: {
        readonly title: "Root Type for FindRefsPOSTRequest";
        readonly description: "A properly formatted POST request for the Find Refs API";
        readonly required: readonly ["lang", "text"];
        readonly type: "object";
        readonly properties: {
            readonly text: {
                readonly description: "Initially designed for websites, this API expects the `text` field to contain both a `body` and a `title`. When parsing arbitrary text feel free to just use `body` and pass an empty string `''` to `title`";
                readonly type: "object";
                readonly properties: {
                    readonly body: {
                        readonly type: "string";
                        readonly examples: readonly ["Genesis 1:1 is a citation and also Mishnah Peah 3-4. So is שמות ב"];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly examples: readonly ["Some thoughts on Sefer Bereishit 1"];
                    };
                };
            };
            readonly lang: {
                readonly description: "Either `he` or `en`. If not included, it will default to one based on the number of Hebrew or Latin characters in the `body` of the `text`.";
                readonly enum: readonly ["he", "en"];
                readonly type: "string";
                readonly examples: readonly ["en"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for FindRefsAPIResponse";
            readonly description: "A response to the Find Refs API";
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly description: "Information about any references found in the `title` field of the POST request";
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly description: "A single matched reference";
                                readonly type: "object";
                                readonly properties: {
                                    readonly startChar: {
                                        readonly format: "int32";
                                        readonly description: "The index of the starting character of the match";
                                        readonly type: "integer";
                                        readonly examples: readonly [23];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly endChar: {
                                        readonly format: "int32";
                                        readonly description: "The index of the ending character of the match";
                                        readonly type: "integer";
                                        readonly examples: readonly [34];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly text: {
                                        readonly description: "The matched reference";
                                        readonly type: "string";
                                        readonly examples: readonly ["Bereishit 1"];
                                    };
                                    readonly linkFailed: {
                                        readonly type: "boolean";
                                    };
                                    readonly refs: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Mishnah Peah 4:2"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly refData: {
                            readonly type: "object";
                            readonly properties: {
                                readonly RefTitle: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly heRef: {
                                            readonly description: "The Hebrew equivalent of the canonical ref";
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly description: "The URL this ref can be found at on Sefaria";
                                            readonly type: "string";
                                        };
                                        readonly primaryCategory: {
                                            readonly description: "The primary category this ref belongs to on Sefaria";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly body: {
                    readonly description: "Information about any references found in the `body` field of the POST request";
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly description: "A single matched reference";
                                readonly type: "object";
                                readonly properties: {
                                    readonly startChar: {
                                        readonly format: "int32";
                                        readonly description: "The index of the starting character of the match";
                                        readonly type: "integer";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly endChar: {
                                        readonly format: "int32";
                                        readonly description: "The index of the ending character of the match";
                                        readonly type: "integer";
                                        readonly examples: readonly [11];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly text: {
                                        readonly description: "The matched reference";
                                        readonly type: "string";
                                        readonly examples: readonly ["Genesis 1:1"];
                                    };
                                    readonly linkFailed: {
                                        readonly type: "boolean";
                                    };
                                    readonly refs: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly description: "A string representing a citation to a Jewish text. \n\nA valid `Ref` consists of a title string followed optionally by a section string or a segment string. \n\nA title string is any one of the known text titles or title variants in the Sefaria Database.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Mishnah Peah 4:2"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly refData: {
                            readonly type: "object";
                            readonly properties: {
                                readonly RefTitle: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly heRef: {
                                            readonly description: "The Hebrew equivalent of the canonical ref";
                                            readonly type: "string";
                                        };
                                        readonly url: {
                                            readonly description: "The URL this ref can be found at on Sefaria";
                                            readonly type: "string";
                                        };
                                        readonly primaryCategory: {
                                            readonly description: "The primary category this ref belongs to on Sefaria";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSearchWrapper: {
    readonly body: {
        readonly title: "Root Type for SearchPOSTData";
        readonly description: "";
        readonly type: "object";
        readonly properties: {
            readonly aggs: {
                readonly description: "List of fields to aggregate on. Common fields are `path` for the `text` type and `group` or `topics` for the `sheet` type";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["path"];
                };
            };
            readonly field: {
                readonly description: "The field you want to query. Common fields to query are `exact` or `naive_lemmatizer` for the `text` and `merged` indices. For querying the `sheet` index, commonly you'll query the `content` field";
                readonly type: "string";
                readonly examples: readonly ["naive_lemmatizer"];
            };
            readonly filter_fields: {
                readonly description: "Must be the same length as `filters`. Each entry specifies the field to apply the corresponding filter in `filters`. For queries of type `text` this has no effect since there's only one field to filter text queries on (`path`. this field is explained in `filters`). For `sheet` queries, the following fields can appear in `filter_fields`: `collections` (corresponds to the collections that the sheet is in), `topics_en` (corresponds to the topics for this sheet, translated into English), `topics_he` (corresponds to the topics for this sheet, translated into Hebrew).";
                readonly type: "array";
                readonly items: {};
            };
            readonly filters: {
                readonly description: "A list of filters to filter results. These filters cannot include RegEx. Any RegEx characters will be escaped. Each filter is applied to the corresponding field in the `filter_fields` list. E.g. if filters is `[\"Passover\", \"Torah Talks\"]` and `filter_fields` is `[\"topics_en\", \"collections\"]` then the `\"Passover\"` filter will be applied to the `\"topics_en\"` field and the `\"Torah Talks\"` filter will be applied to the `\"collections\"` field. For `text` queries, filters always applies to the `path` field of documents. This essentially corresponds to the category path of the book in Sefaria's table of contents (there are some differences with regards to commentary paths). For `sheet` queries, filters can be applied to `collections`, `topics_en` or `topics_he`. These fields are explained in `filter_fields` param.";
                readonly type: "array";
                readonly items: {};
            };
            readonly query: {
                readonly description: "Your search query.";
                readonly type: "string";
                readonly examples: readonly ["banana"];
            };
            readonly size: {
                readonly format: "int32";
                readonly description: "For paginating results. The total number of results to return, starting from `start`";
                readonly type: "integer";
                readonly examples: readonly [50];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly slop: {
                readonly format: "int32";
                readonly description: "The maximum distance between each query word in the resulting document. `0` means an exact match must be found";
                readonly type: "integer";
                readonly examples: readonly [10];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly sort_fields: {
                readonly description: "List of fields to sort on. If `sort_method = 'score'` this list should have exactly one item. Common fields to sort on are `comp_date` (which list results from titles published chronologically), `order` (which list results based on Sefaria's table of contents structure), `pagesheetrank` (most relevant results based on the Sheet Rank algorithm), `dateCreated` (for sheet results returned chronologically), `views` (for sheet results based on popularity).";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["pagesheetrank"];
                };
            };
            readonly sort_method: {
                readonly description: "How to sort results. If sort, the values are sorted according to `sort_fields`. If `score`, the value in `sort_fields` is multiplied with the default ElasticSearch score.";
                readonly enum: readonly ["sort", "score"];
                readonly type: "string";
                readonly examples: readonly ["score"];
            };
            readonly sort_reverse: {
                readonly description: "Whether or not to reverse the sort applied on `sort_fields`";
                readonly type: "boolean";
            };
            readonly sort_score_missing: {
                readonly format: "double";
                readonly description: "The number used in case there is a value missing in your `sort_field`";
                readonly type: "number";
                readonly examples: readonly [0.04];
                readonly minimum: -1.7976931348623157e+308;
                readonly maximum: 1.7976931348623157e+308;
            };
            readonly source_proj: {
                readonly description: "By default, the ElasticSearch document is not returned. Specifying `true` will return the entire document. Specifying a `str` or `list(str)` will perform a projection on the document for the specified fields";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly type: {
                readonly description: "The ElasticSearch index you want to query, and the results you expect to get back. `sheet` returns results from Sefaria's user generated source sheets, while `text` returns results from the library.";
                readonly enum: readonly ["text", "sheet"];
                readonly type: "string";
                readonly examples: readonly ["text"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly title: "Root Type for searchResponse";
            readonly description: "";
            readonly type: "object";
            readonly properties: {
                readonly took: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [11];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly timed_out: {
                    readonly type: "boolean";
                };
                readonly _shards: {
                    readonly type: "object";
                    readonly properties: {
                        readonly total: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly examples: readonly [5];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly successful: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly examples: readonly [5];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly skipped: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly failed: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                    };
                };
                readonly hits: {
                    readonly type: "object";
                    readonly properties: {
                        readonly total: {
                            readonly format: "int32";
                            readonly type: "integer";
                            readonly examples: readonly [7];
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly max_score: {
                            readonly format: "double";
                            readonly type: "number";
                            readonly examples: readonly [16692.562];
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly hits: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly _index: {
                                        readonly type: "string";
                                        readonly examples: readonly ["text-b"];
                                    };
                                    readonly _type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["text"];
                                    };
                                    readonly _id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Shabbat 73b:7 (Sefaria Community Translation [en])"];
                                    };
                                    readonly _score: {
                                        readonly format: "double";
                                        readonly type: "number";
                                        readonly examples: readonly [16692.562];
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly _source: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly ref: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Shabbat 73b:7"];
                                            };
                                            readonly heRef: {
                                                readonly type: "string";
                                                readonly examples: readonly ["שבת ע״ג ב:ז׳"];
                                            };
                                            readonly version: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Sefaria Community Translation"];
                                            };
                                            readonly lang: {
                                                readonly type: "string";
                                                readonly examples: readonly ["en"];
                                            };
                                            readonly version_priority: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly examples: readonly [1];
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly titleVariants: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Masekhet Shabbat"];
                                                };
                                            };
                                            readonly categories: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Talmud"];
                                                };
                                            };
                                            readonly order: {
                                                readonly type: "string";
                                                readonly examples: readonly ["A00200000100001460007"];
                                            };
                                            readonly path: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Talmud/Bavli/Seder Moed/Shabbat"];
                                            };
                                            readonly pagesheetrank: {
                                                readonly format: "double";
                                                readonly type: "number";
                                                readonly examples: readonly [769.444762983379];
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly comp_date: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly examples: readonly [450];
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly exact: {
                                                readonly type: "string";
                                                readonly examples: readonly ["קוצר: harvest Rashi : Is דש = when the kernel falls from natural covering. This means that we can't peel banana... But we can if it's לאלתר - for immediate consumption. Tosphot : Is דש = when your removing something from natural connection "];
                                            };
                                            readonly naive_lemmatizer: {
                                                readonly type: "string";
                                                readonly examples: readonly ["קוצר: harvest Rashi : Is דש = when the kernel falls from natural covering. This means that we can't peel banana... But we can if it's לאלתר - for immediate consumption. Tosphot : Is דש = when your removing something from natural connection "];
                                            };
                                            readonly hebrew_version_title: {
                                                readonly type: "string";
                                                readonly examples: readonly ["תרגום קהילת ספריא"];
                                            };
                                        };
                                    };
                                    readonly highlight: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly naive_lemmatizer: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["This means that we can't peel <b>banana</b>... But we can if it's לאלתר - for immediate consumption. Tosphot : Is דש = when your removing something from natural connection"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly aggregations: {
                    readonly type: "object";
                    readonly properties: {
                        readonly path: {
                            readonly type: "object";
                            readonly properties: {
                                readonly doc_count_error_upper_bound: {
                                    readonly format: "int32";
                                    readonly type: "integer";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly sum_other_doc_count: {
                                    readonly format: "int32";
                                    readonly type: "integer";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly buckets: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly key: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Reference/Dictionary/Klein Dictionary"];
                                            };
                                            readonly doc_count: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly examples: readonly [2];
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetAllTopics, GetCalendars, GetCategory, GetImgGen, GetIndex, GetLinks, GetManuscripts, GetName, GetNextRead, GetRandomByTopic, GetRecommendTopics, GetRefTopicLinks, GetRelated, GetShape, GetTerms, GetTextsRandom, GetTopicSlug, GetTopicsGraph, GetTranslations, GetTranslationsLang, GetV1Texts, GetV2Index, GetV2Topics, GetV3Texts, GetVersions, GetWords, GetWordsCompletion, PostFindRefs, PostSearchWrapper };
