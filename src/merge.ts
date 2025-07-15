export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  /* 
1. collection 1, 3 already sorted min(0) to max 
2. collection 2 already sorted max ot min(0)
*/

  // 1. reverse collection_2 for min(0) to max
  let reverseCollection_2: number[] = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    reverseCollection_2.push(collection_2[i]);
  }

  return [];
}
