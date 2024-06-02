const convertHandwritingToText = require('./index');

const imagePath = 'IMG-20231215-WA0019.jpg';

convertHandwritingToText(imagePath)
    .then(text => {
        console.log('Recognized text:', text);
    })
    .catch(error => {
        console.error('No text found in the image.', error);
    });
