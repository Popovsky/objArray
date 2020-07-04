'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *
 * @param {array} array
 * @returns {number}
 */
function getMax(array) {
    return Math.max(...array);
}

getMax(arr);
