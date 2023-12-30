/*
Streams
- Writeable - Write data sequentially
- Readable - Read data sequentially
- Duplex - Read and Write data sequentially
- Transform - Data can be modified while reading or writing
*/
const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
})