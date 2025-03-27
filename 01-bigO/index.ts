const numbers: number[] = [2, 3, 4, 5, 6];
const groceries: string[] = ["milk", "bread", "eggs", "flour", "sugar"];
console.log(numbers.length);

/* ---------------------------------- O(n) --------------------------------- */

const searchForItem = (name: string) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === name) console.log(`${name} found at ${i} index`);
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === name) console.log(`${name} found at ${j} index`);
  }

  // n + n = 2n -> O (2n)
  // Drop the constant so it becomes still -> O(n)
};

// searchForItem("milk");

/* ---------------------------------- O(1) --------------------------------- */

const getElement = (arr: number[], index: number): number | undefined => arr[index];
// console.log(getElement(numbers, 0));

/* --------------------------------- O(n^2) --------------------------------- */

const findPairs = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

// findPairs(numbers);
