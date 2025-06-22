"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'sefaria/1.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * The most up-to-date way to retrieve texts from Sefaria via the API, with enhanced
     * control over language, language direction, and other parameters.
     *
     * @summary Texts (v3)
     */
    SDK.prototype.getV3Texts = function (metadata) {
        return this.core.fetch('/api/v3/texts/{tref}', 'get', metadata);
    };
    /**
     * Retrieve the text and some additional metadata for a specific Sefaria textual `Ref`
     *
     * @summary Texts (v1)
     */
    SDK.prototype.getV1Texts = function (metadata) {
        return this.core.fetch('/api/texts/{tref}', 'get', metadata);
    };
    /**
     * The versions API takes a title of a valid Sefaria `index` as a parameter, and will
     * return all available versions of the text in the Sefaria database, alongside metadata
     * for each version. A version can be a translation of the text, an alternative language,
     * or any other text associated with that index.
     *
     * *Note:* In order to see the expected results, you need to make sure you are passing a
     * recognized `index`. For example, `Rashi on Genesis` is a valid `index` but `Rashi` is
     * not. To see the entire list of valid Sefaria indices, click
     * [here](https://www.sefaria.org/api/index/)
     *
     * @summary Versions
     */
    SDK.prototype.getVersions = function (metadata) {
        return this.core.fetch('/api/texts/versions/{index}', 'get', metadata);
    };
    /**
     * Returns a list of distinct languages for which translations exist in the database.
     *
     * @summary Languages
     */
    SDK.prototype.getTranslations = function () {
        return this.core.fetch('/api/texts/translations', 'get');
    };
    /**
     * Returns a dictionary of texts translated into `lang`, organized by the Sefaria category
     * & secondary category of each title.
     *
     * @summary Translations
     */
    SDK.prototype.getTranslationsLang = function (metadata) {
        return this.core.fetch('/api/texts/translations/{lang}', 'get', metadata);
    };
    /**
     * This call retrieves all associated manuscript data and metadata for a given Sefaria
     * `tref`.
     *
     * @summary Manuscripts
     */
    SDK.prototype.getManuscripts = function (metadata) {
        return this.core.fetch('/api/manuscripts/{tref}', 'get', metadata);
    };
    /**
     * Returns a random text reference from the Sefaria library. Results can be limited to a
     * specific category or from a selection of titles given the correct query params.
     *
     * @summary Random Text
     */
    SDK.prototype.getTextsRandom = function (metadata) {
        return this.core.fetch('/api/texts/random', 'get', metadata);
    };
    /**
     * This API endpoint will retrieve the full mongo record of the given `Index` as it appears
     * in the database.
     *
     * @summary Index (v2)
     */
    SDK.prototype.getV2Index = function (metadata) {
        return this.core.fetch('/api/v2/raw/index/{index_title}', 'get', metadata);
    };
    /**
     * This API endpoint returns the titles of all the books in the Sefaria Library arranged by
     * their category along with some additional metadata. This is a large and rarely changing
     * request and should be cached locally if you utilize it.
     *
     * @summary Table of Contents
     */
    SDK.prototype.getIndex = function () {
        return this.core.fetch('/api/index', 'get');
    };
    /**
     * Retrieve basic statistics and information about the "shape" of an `Index` on Sefaria.
     *
     * @summary Shape
     */
    SDK.prototype.getShape = function (metadata) {
        return this.core.fetch('/api/shape/{title}', 'get', metadata);
    };
    /**
     * A single API endpoint to return all of the content (links, sheets, notes, media,
     * manuscripts, webpages and topics) related to the given `Ref` in the query.
     *
     * @summary Related
     */
    SDK.prototype.getRelated = function (metadata) {
        return this.core.fetch('/api/related/{tref}', 'get', metadata);
    };
    /**
     * Returns a list of known connections for the submitted text `ref` along with some
     * additional metadata.
     *
     * @summary Links
     */
    SDK.prototype.getLinks = function (metadata) {
        return this.core.fetch('/api/links/{tref}', 'get', metadata);
    };
    /**
     * An API endpoint where, given a `Ref`, all of the topics linked to that `Ref` are
     * retrieved along with the respective metadata.
     *
     * @summary Ref-Topic-Links
     */
    SDK.prototype.getRefTopicLinks = function (metadata) {
        return this.core.fetch('/api/ref-topic-links/{tref}', 'get', metadata);
    };
    /**
     * Returns the daily or weekly learning schedule for a given date.
     *
     * @summary Calendars
     */
    SDK.prototype.getCalendars = function (metadata) {
        return this.core.fetch('/api/calendars', 'get', metadata);
    };
    /**
     * Given a Parasha name in English, this API returns the next Hebrew and English dates that
     * it is read, along with details about the Torah and Haftarah readings for that date.
     *
     * @summary Next Read
     */
    SDK.prototype.getNextRead = function (metadata) {
        return this.core.fetch('/api/calendars/next-read/{parasha}', 'get', metadata);
    };
    /**
     * Searches Sefaria lexicon entries (i.e. dictionaries) for the query string passed as
     * `word` to the endpoint.
     *
     * @summary Lexicon
     */
    SDK.prototype.getWords = function (metadata) {
        return this.core.fetch('/api/words/{word}', 'get', metadata);
    };
    /**
     * Serves primarily as an autocompleter, returning potential lexicon entries for a given
     * input.
     *
     * Returns an array of arrays, each containing two strings. The first is a completion entry
     * in Hebrew without vowels, and the second is an entry with vowels.
     *
     * @summary Word Completion
     */
    SDK.prototype.getWordsCompletion = function (metadata) {
        return this.core.fetch('/api/words/completion/{word}/{lexicon}', 'get', metadata);
    };
    /**
     * Retrieve a specific topic from the `v2` version of the topics API.
     *
     * @summary Topic (v2)
     */
    SDK.prototype.getV2Topics = function (metadata) {
        return this.core.fetch('/api/v2/topics/{topic_slug}', 'get', metadata);
    };
    /**
     * When this endpoint is called with a specific `topic_slug`, it returns a JSON object
     * containing the metadata for the topic.
     *
     * @summary Topic (v1)
     */
    SDK.prototype.getTopicSlug = function (metadata) {
        return this.core.fetch('/api/topics/{topic_slug}', 'get', metadata);
    };
    /**
     * The topics API returns a list of JSON objects, with each object containing all of the
     * metadata for each topic in the Sefaria database.
     *
     * @summary All Topics
     */
    SDK.prototype.getAllTopics = function (metadata) {
        return this.core.fetch('/api/topics', 'get', metadata);
    };
    /**
     * Endpoint to retrieve topics and their links between other topics. As opposed to topic
     * links to refs, this endpoint retrieve connections between one topic to another topic.
     *
     * @summary Topic Graph
     */
    SDK.prototype.getTopicsGraph = function (metadata) {
        return this.core.fetch('/api/topics-graph/{topic_slug}', 'get', metadata);
    };
    /**
     * Given a list of `Ref`s this API returns the most used topics associated with them. This
     * is a fast way of identifying potential shared topics amongst disparate `Ref`s.
     *
     * @summary Recommended Topics
     */
    SDK.prototype.getRecommendTopics = function (metadata) {
        return this.core.fetch('/api/recommend/topics/{ref_list}', 'get', metadata);
    };
    /**
     * Returns Texts API data for a random text taken from popular topic tags.
     *
     * @summary Random By Topic
     */
    SDK.prototype.getRandomByTopic = function () {
        return this.core.fetch('/api/texts/random-by-topic', 'get');
    };
    /**
     * A Term is a shared title node.  It can be referenced and used by many different `Index`
     * nodes. Terms that use the same `TermScheme` can be ordered within that scheme. So for
     * example, _Parsha_ terms who all share the `TermScheme` of `parsha`, can be ordered
     * within that scheme.
     *
     * Examples of valid terms:  `Noah`, `HaChovel`
     *
     * @summary Terms
     */
    SDK.prototype.getTerms = function (metadata) {
        return this.core.fetch('/api/terms/{name}', 'get', metadata);
    };
    /**
     * Serves primarily as an autocompleter, returning potential keyword matches for `Ref`s,
     * book titles, authors, topics, and collections available on Sefaria.
     *
     * @summary Name
     */
    SDK.prototype.getName = function (metadata) {
        return this.core.fetch('/api/name/{name}', 'get', metadata);
    };
    /**
     * Initially designed to find links on websites using [Sefaria's
     * Linker](https://www.sefaria.org/linker), the Find Refs API can identify textual
     * refernces in any arbitrary text that gets sent to it via a structured POST request and
     * returns a response object identifying each located reference including its start and end
     * position within the submitted text.
     *
     * @summary Find Refs
     */
    SDK.prototype.postFindRefs = function (body) {
        return this.core.fetch('/api/find-refs', 'post', body);
    };
    /**
     * An [elastic search](https://www.elastic.co/guide/en/elasticsearch/reference/current/)
     * endpoint for Sefaria's data. Given a properly formated POST request this endpoint will
     * return search results for appropriate Sefaria records.
     *
     * @summary Search
     */
    SDK.prototype.postSearchWrapper = function (body) {
        return this.core.fetch('/api/search-wrapper', 'post', body);
    };
    /**
     * Given a Sefaria text `Ref` and some other optional parameters, this endpoint returns a
     * .png image ready to share on social media. At Sefaria.org we use it primarily to
     * auto-generate social media images for any page.
     *
     * @summary Social Media Image
     */
    SDK.prototype.getImgGen = function (metadata) {
        return this.core.fetch('/api/img-gen/{tref}', 'get', metadata);
    };
    /**
     * GET requests take a full category path in the request, e.g.
     * `/api/category/Tanakh/Torah/Genesis`, and return the full category object found.
     *
     * If the category is not found, the returned object will have an error attribute. If any
     * element of the path is found, the API will return the closest parent in an attribute
     * called `closest_parent`. This is useful for proactively looking up a category before
     * posting an `Index` to it.
     *
     * @summary Category
     */
    SDK.prototype.getCategory = function (metadata) {
        return this.core.fetch('/api/category/{category_path}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
