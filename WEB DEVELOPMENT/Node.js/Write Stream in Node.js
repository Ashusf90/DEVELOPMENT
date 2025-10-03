const fs = require('fs');

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

// Write data to file
writeStream.write('Hello, ');
writeStream.write('World!\n');

// Close the stream
writeStream.end();

// Event: when writing is finished
writeStream.on('finish', () => {
    console.log('Writing finished!');
});

// Event: error handling
writeStream.on('error', (err) => {
    console.log('Error:', err);
});
