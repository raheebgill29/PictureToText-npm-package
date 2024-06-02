const Tesseract = require('tesseract.js');

/**
 
 * @param {Buffer} imageBuffer 
 * @returns {Promise<string>} 
 */
async function recognizeHandwriting(imageBuffer) {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imageBuffer,
            'eng',
            {
                logger: m => console.log(m) 
            }
        );
        return text ||null;
    } catch (error) {
        console.error('Error recognizing handwriting:', error);
        throw error;
    }
}

module.exports = recognizeHandwriting;
