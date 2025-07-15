import { merge } from "../src/merge";

describe("merge()", () => {
  test("merges three sorted arrays correctly", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2];
    const collection_3 = [7, 9, 11];

    const expected = [1, 2, 3, 4, 5, 6, 7, 9, 11];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test("all inputs are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("some input are empty", () => {
    expect(merge([1, 6, 9], [], [2])).toEqual([1, 2, 6, 9]);
    expect(merge([], [], [2, 4, 9])).toEqual([2, 4, 9]);
    expect(merge([], [9, 2, 1], [6, 7])).toEqual([1, 2, 6, 7, 9]);
  });

  test("merges negative number", () => {
    const collection_1 = [-8, -4, 2];
    const collection_2 = [9, -3, -5];
    const collection_3 = [-7, 7];

    const expected = [-8, -7, -5, -4, -3, 2, 7, 9];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test("all inputs contains only one item", () => {
    const collection_1 = [9];
    const collection_2 = [1];
    const collection_3 = [5];

    const expected = [1, 5, 9];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test("merges with duplicates in all inputs", () => {
    const collection_1 = [0, 1, 2, 2];
    const collection_2 = [2, 2, 1];
    const collection_3 = [2, 4, 5, 5];

    const expected = [0, 1, 1, 2, 2, 2, 2, 2, 4, 5, 5];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});
