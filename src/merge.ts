export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  /* 
- collection 1, 3 already sorted min(0) to max 
- collection 2 already sorted max ot min(0)
*/

  // 1. reverse collection_2 for min(0) to max
  let reverseCollection_2: number[] = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    reverseCollection_2.push(collection_2[i]);
  }
  // 3.use mergeSortedArrays() for merge collection_1,2,3
  let ans: number[] = mergeSortedArrays(
    mergeSortedArrays(collection_1, reverseCollection_2),
    collection_3
  );

  return ans;
}

// 2. create function that merge by sort number min to max
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result.concat(arr1.slice(i), arr2.slice(j));
}
