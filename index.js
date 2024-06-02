const fs = require('fs').promises;
const preprocessImage = require('./preprocess');
const recognizeHandwriting = require('./recognize');
const cleanText = require('./postprocess');

/**
 
 * @param {string} imagePath 
 * @returns {Promise<string>} 
 */
async function convertHandwritingToText(imagePath) {
    try {
        const inputBuffer = await fs.readFile(imagePath);
        const processedImage = await preprocessImage(inputBuffer);
        const recognizedText = await recognizeHandwriting(processedImage);
        const cleanedText = cleanText(recognizedText);
        return cleanedText;
    } catch (error) {
        console.error('Error converting handwriting to text:', error);
        throw error;
    }
}

module.exports = convertHandwritingToText;
