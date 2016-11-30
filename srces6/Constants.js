var Constants;
(function (Constants) {
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(Constants.AVAILABLE_LANGUAGES || (Constants.AVAILABLE_LANGUAGES = {}));
    var AVAILABLE_LANGUAGES = Constants.AVAILABLE_LANGUAGES;
    Constants.VERSION = "2.0.0";
    Constants.DEFAULT_BASE_URL = "https://api.api.ai/v1/";
    Constants.DEFAULT_STREAM_CLIENT_BASE_URL = "api-ws.api.ai:4435/v1/";
    Constants.DEFAULT_API_VERSION = "20150910";
    Constants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
    // @todo: make configurable, ideally fix non-working v1
    Constants.DEFAULT_TTS_HOST = "https://api.api.ai/api/tts";
    Constants.STREAM_CLIENT_SERVER_PROTO = "wss";
    Constants.STREAM_CLIENT_SERVER_PATH = "/ws/query";
})(Constants || (Constants = {}));
export default Constants;
