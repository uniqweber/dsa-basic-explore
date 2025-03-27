## What is **Big O**

Big O notation helps us understand how fast an algorithm runs as the input size grows.

Think of it like this::

> If you clean a small room, it’s easy. But if you clean a whole house, it takes more time.
> Big O tells us how much extra time is needed when the input gets bigger.

## O(n) - Linear Time Complexity

⏳ More items = More time

Example:

> Imagine you have a shopping list with 10 items. If you search for "milk," you might have to check all 10 items. If the list has 100 items, it takes 10× more time!

The time taken grows in direct proportion to the input size.

Code Example:

```typescript
const findItem = (list: string[], item: string) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return `Found at index ${i}`;
  }
  return "Not found";
};
```

## O(1) - Constant Time Complexity

⏳ Same time, no matter how big the input

Example :

> Imagine a locker with 100 compartments, and you know that your keys are in locker #50. You go straight to it—no searching required!

The time stays the same, whether you have 10 lockers or 10,000 lockers.

Code Example:

```typescript
const getFirstItem = (list: string[]) => {
  return list[0]; // Always takes the same time
};
```

## O(n²) - Quadratic Time Complexity

⏳ More items = A LOT more time

Example:

> Imagine you are checking for duplicate names in a list. You compare each name with every other name. If you have 10 names, you do 100 comparisons. If you have 100 names, you do 10,000 comparisons!

Two nested loops = time grows very fast

Code Example:

```typescript
const findDuplicates = (list: string[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i !== j && list[i] === list[j]) {
        console.log(`Duplicate found: ${list[i]}`);
      }
    }
  }
};
```
