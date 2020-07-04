'use strict';

const arr = new Array(10).fill().map(() => Math.floor(Math.random() * 10));

/**
 *
 * @param {array} array
 * @param {number} index
 * @returns {array}
 */
function deleteElementToArrayByIndex(array, index) {
    for (let i = index; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length--;
    return array;
}

deleteElementToArrayByIndex(arr, 4);
