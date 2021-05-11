/* Read .env config file. */
require('dotenv').config();

/* The metadata of the program. */
const PROGRAM = "hello";
const LICENSE = "MIT";
const VERSION = "0.1.0";

/* The main function. */
(async function () {
    let args = process.argv;

    if ('-h' === args[2] || '--help' === args[2]) {
        console.log(`Usage: ${PROGRAM}`);
        process.exit(0);
    }
    else if ('-v' === args[2] || '--version' === args[2]) {
        console.log(`${VERSION}`);
        process.exit(0);
    }
    else if ('--license' === args[2]) {
        console.log(`${LICENSE}`);
        process.exit(0);
    }
    else if (args[2] && args[2].startsWith('-')) {
        console.error(`Invalid argument: ${args[2]}`);
        process.exit(1);
    }

    console.log("Hello World");
    process.exit(0);
})();