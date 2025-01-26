const findDuplicates = (array) => {
  const duplicates = [];
  const compare = [];
  for (let num of array) {
    if (!compare.includes(num)) {
      compare.push(num);
    } else {
      duplicates.push(num);
    }
  }
  return duplicates;
};

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

console.log(findDuplicates([1, 2, 2, 3, 4, 2, 1, 5, 6, 7, 8]));
module.exports = { findDuplicates, removeDuplicates };
