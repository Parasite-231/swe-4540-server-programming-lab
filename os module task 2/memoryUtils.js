const convertMemoryToGigabytes = (totalMemory)=>{


    return Math.ceil(totalMemory / Math.pow(10,9))

}

module.exports = {convertMemoryToGigabytes}