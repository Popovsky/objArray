'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *
 * @param {array} array
 * @param {number} element
 * @param {number} index
 * @returns {array}
 */
function pushElementToArrayByIndex(array, element, index) {
    array.length++;
    for (let i = array.length - 1; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = element;
    return array;
}

pushElementToArrayByIndex(arr, 5, 2);
