const sharp = require('sharp');

/**
 * Preprocess the image by resizing, converting to grayscale, and reducing noise.
 * @param {Buffer} inputBuffer - The input image buffer.
 * @returns {Promise<Buffer>} - The processed image buffer.
 */
async function preprocessImage(inputBuffer) {
    try {
        const processedImage = await sharp(inputBuffer)
            .resize(800) 
            .grayscale() 
            .normalize() 
            .toBuffer();
        return processedImage;
    } catch (error) {
        console.error('Error preprocessing image:', error);
        throw error;
    }
}

module.exports = preprocessImage;
