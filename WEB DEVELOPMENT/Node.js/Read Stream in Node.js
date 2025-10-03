const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('example.txt', 'utf8');

// Event: when data is available
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

// Event: when reading is done
readStream.on('end', () => {
    console.log('Finished reading file');
});

// Event: error handling
readStream.on('error', (err) => {
    console.log('Error:', err);
});
