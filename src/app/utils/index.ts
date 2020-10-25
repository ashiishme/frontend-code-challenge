/**
 * Strip HTML tags to prevent XSS & ignore allowed list
 *
 * @param input { string } - User input / input text to strip tags
 * @param allowed { string | string[] } - List of allowed tags to ignore
 *
 * Original Source: https://locutus.io/php/strings/strip_tags/
 */
export const stripTags = (input: string, allowed: string | string[]) => {
    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (
        ((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join('');

    let tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
    // Remove php tag from the regex
    let comments = /<!--[\s\S]*?-->/gi;

    let after = input.toString();
    // removes tha '<' char at the end of the string to replicate PHP's behaviour
    after =
        after.substring(after.length - 1) === '<'
            ? after.substring(0, after.length - 1)
            : after;

    // recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
    while (true) {
        let before = after;
        after = before.replace(comments, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });

        // return once no more tags are removed
        if (before === after) {
            return after;
        }
    }
};
