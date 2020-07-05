'use strict';

const arr1 = new Array(10).fill().map(() => Math.floor(Math.random() * 10));
const arr2 = new Array(5).fill().map(() => Math.floor(Math.random() * 10));

/**
 *
 * @param {array} array1
 * @param {array} array2
 * @returns {array}
 */
function concatArraysWithoutDoubles(array1, array2) {
    const array3 = array1.concat(array2);
    const resultArray = [];
    
    for (let i = 0; i < array3.length; i++) {
        if (!resultArray.includes(array3[i])) {
            resultArray.push(array3[i]);
        }
    }

    return resultArray;
}

concatArraysWithoutDoubles(arr1, arr2);
