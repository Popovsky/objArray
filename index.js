'use strict';

const arr1 = new Array(10).fill().map(() => Math.floor(Math.random() * 10));
const arr2 = new Array(5).fill().map(() => Math.floor(Math.random() * 10));

/**
 *
 * @param {array} array1
 * @param {array} array2
 * @returns {array}
 */
function getUniqueElementsFromFirstArray(array1, array2) {
    const resultArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            resultArray.push(array1[i]);
        }
    }

    return resultArray;
}

getUniqueElementsFromFirstArray(arr1, arr2);
