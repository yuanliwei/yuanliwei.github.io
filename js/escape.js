var Escape = {};

/*
 * URL编码
*/
Escape.encodeURIComponent = function(text) {
    return encodeURIComponent(text);
};

/*
 * URL解码
 */
Escape.decodeURIComponent = function(text) {
    return decodeURIComponent(text);
};

/*
 * Base64编码
*/
Escape.encodeBase64 = function(text) {
    return Base64.encode(text);
};

/*
 * Base64解码
 */
Escape.decodeBase64 = function(text) {
    return Base64.decode(text);
};

