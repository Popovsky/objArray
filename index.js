'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *
 * @param {array} array
 */
function getEven(array) {
    array = array.filter(el => !(el % 2));
    alert(array);
}

getEven(arr);
