# typescript-merge-unit-test

A small TypeScript utility that merges three sorted arrays into one sorted array in ascending order — without using `.sort()`.

## Features

- Merges 3 arrays:
  - collection_1, collection_3 in ascending order
  - collection_2 in descending order
- Handles duplicates and empty arrays
- Fully tested with Jest

## Example

```ts
merge([1, 3, 5], [6, 4, 2], [7, 9, 11]);
// Output: [1, 2, 3, 4, 5, 6, 7, 9, 11]
```

## Running Tests

Run tests with Jest:

```bash
npm test
```
