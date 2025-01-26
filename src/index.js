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
};
