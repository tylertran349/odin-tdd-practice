function analyzeArray(arr) {
    let avgResult = 0;
    let minResult = arr[0];
    let maxResult = arr[0];
    let lengthResult = arr.length;

    for(let i = 0; i < arr.length; i++) {
        avgResult += arr[i];
        if(arr[i] > maxResult) {
            maxResult = arr[i];
        }
        if(arr[i] < minResult) {
            minResult = arr[i];
        }
    }
    avgResult /= arr.length;

    const obj = {
        average: avgResult,
        min: minResult,
        max: maxResult,
        length: lengthResult
    }

    return obj;
}

module.exports = analyzeArray;