const { readFile, writeFile } = require('fs');
const util = require('util');

/*
Without Promises
readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        return;
    } else {
        console.log(data);
    }
});
*/

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-async.txt', `Result: ${first} ${second}`);
        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

start();

// Our own wrapper function to get the data.
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }