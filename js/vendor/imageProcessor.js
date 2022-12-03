
// Load OpenCV library
const cv = require('opencv4nodejs');

// Read the image
const image = cv.imread('handwritten_document.jpg');

// Convert the image to grayscale
const grayImage = image.bgrToGray();

// Apply thresholding to the image
const thresholdedImage = grayImage.threshold(127, 255, cv.THRESH_BINARY);

// Create a text file
const fs = require('fs');
const Console = require("console");
const textFile = fs.createWriteStream('handwritten_document.txt');

// Write the image data to the text file
textFile.write(thresholdedImage.getDataAsString());

Console.print(thresholdedImage.getDataAsString())

// Close the text file
textFile.end();
