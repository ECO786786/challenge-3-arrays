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

const countOccurrences = (array) => {
  return array.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
};
module.exports = {
  findDuplicates,
  removeDuplicates,
  countOccurrences,
};
