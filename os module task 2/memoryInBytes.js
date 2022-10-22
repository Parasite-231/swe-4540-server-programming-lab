const os = require('os');
const convertMemoryToGigaBytes = require('./memoryUtils');

const totalMemory = os.totalmem();


console.log("Memory in Bytes => "+totalMemory)
console.log("Memory in GigaBytes => "+convertMemoryToGigaBytes.convertMemoryToGigabytes(totalMemory))
//others
console.log("Operating version : "+os.version())
console.log("Type : "+os.type())
console.log("Free Memory : "+os.freemem())
console.log("Uptime : "+os.uptime())