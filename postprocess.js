/**
 * Clean up and format the recognized text for better readability.
 * @param {string} text - The recognized text.
 * @returns {string} - The cleaned-up text.
 */
function cleanText(text) {
    // Remove extra whitespace and normalize new lines
    return text.replace(/\s+/g, ' ').trim().replace(/\s*\n\s*/g, '\n');
}

module.exports = cleanText;
