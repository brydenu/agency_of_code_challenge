/**
 * Shortens texts so only a preview is shown on product reviews.
 */
export default function previewText(s) {
    let preview = s;

    // Should only create a preview if the review is longer
    if (preview.length > 110) {
        let i = 105;
        while (true) {
            // If pointer becomes greater than length before a space is found,
            // this is an edge case where we can allow a slightly larger length.
            if (i > preview.length) {
                break;
            }
            // Trim everything after a space, and replace a space with ellipses
            if (preview[i] === " ") {
                preview = preview.substring(0, i) + "...";
                break;
            }
            i++;
        }
    }

    // We still need the info for the original review, so return both.
    return { preview, full: s };
}
