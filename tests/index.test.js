const {
  findDuplicates,
  removeDuplicates,
  countOccurrences,
} = require("../src/index");

describe("Array Functions", () => {
  describe("findDuplicates", () => {
    test("should find duplicates in a number array", () => {
      expect(findDuplicates([1, 2, 3, 2, 4, 5, 1])).toEqual([2, 1]);
    });

    test("should find duplicates in a string array", () => {
      expect(findDuplicates(["a", "b", "a", "c", "b"])).toEqual(["a", "b"]);
    });

    test("should find duplicates in a mixed-type array", () => {
      expect(findDuplicates(["a", 1, "b", 1, "a"])).toEqual([1, "a"]);
    });

    test("should return an empty array for arrays with no duplicates", () => {
      expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
    });

    test("should handle an empty array", () => {
      expect(findDuplicates([])).toEqual([]);
    });

    test("should handle an array with one element", () => {
      expect(findDuplicates([1])).toEqual([]);
    });

    test("should handle an array with all duplicate elements", () => {
      expect(findDuplicates([1, 1, 1, 1])).toEqual([1, 1, 1]);
    });
  });

  describe("removeDuplicates", () => {
    test("should remove duplicates from a number array", () => {
      expect(removeDuplicates([1, 2, 3, 2, 4, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("should remove duplicates from a string array", () => {
      expect(removeDuplicates(["a", "b", "a", "c", "b"])).toEqual([
        "a",
        "b",
        "c",
      ]);
    });

    test("should remove duplicates from a mixed-type array", () => {
      expect(removeDuplicates(["a", 1, "b", 1, "a"])).toEqual(["a", 1, "b"]);
    });

    test("should return an empty array for an empty array", () => {
      expect(removeDuplicates([])).toEqual([]);
    });

    test("should return the same array for an array with one element", () => {
      expect(removeDuplicates([1])).toEqual([1]);
    });

    test("should handle an array with all duplicate elements", () => {
      expect(removeDuplicates([1, 1, 1, 1])).toEqual([1]);
    });
  });

  describe("countOccurrences", () => {
    test("should count occurrences in a number array", () => {
      expect(countOccurrences([1, 2, 3, 2, 4, 5, 1])).toEqual({
        1: 2,
        2: 2,
        3: 1,
        4: 1,
        5: 1,
      });
    });

    test("should count occurrences in a string array", () => {
      expect(countOccurrences(["a", "b", "a", "c", "b"])).toEqual({
        a: 2,
        b: 2,
        c: 1,
      });
    });

    test("should count occurrences in a mixed-type array", () => {
      expect(countOccurrences(["a", 1, "b", 1, "a"])).toEqual({
        a: 2,
        1: 2,
        b: 1,
      });
    });

    test("should return an empty object for an empty array", () => {
      expect(countOccurrences([])).toEqual({});
    });

    test("should handle an array with one element", () => {
      expect(countOccurrences([1])).toEqual({ 1: 1 });
    });

    test("should handle an array with all duplicate elements", () => {
      expect(countOccurrences([1, 1, 1, 1])).toEqual({ 1: 4 });
    });
  });

  describe("Edge Cases", () => {
    test("should handle null values in the array", () => {
      expect(findDuplicates([null, null, 1, "a", null])).toEqual([null, null]);
      expect(removeDuplicates([null, null, 1, "a", null])).toEqual([
        null,
        1,
        "a",
      ]);
      expect(countOccurrences([null, null, 1, "a", null])).toEqual({
        null: 3,
        1: 1,
        a: 1,
      });
    });

    test("should handle undefined values in the array", () => {
      expect(findDuplicates([undefined, undefined, 1, "a", undefined])).toEqual(
        [undefined, undefined]
      );
      expect(
        removeDuplicates([undefined, undefined, 1, "a", undefined])
      ).toEqual([undefined, 1, "a"]);
      expect(
        countOccurrences([undefined, undefined, 1, "a", undefined])
      ).toEqual({ undefined: 3, 1: 1, a: 1 });
    });

    test("should handle arrays with a mix of null and undefined", () => {
      const array = [null, undefined, null, undefined, 1];
      expect(findDuplicates(array)).toEqual([null, undefined]);
      expect(removeDuplicates(array)).toEqual([null, undefined, 1]);
      expect(countOccurrences(array)).toEqual({ null: 2, undefined: 2, 1: 1 });
    });
  });
});
