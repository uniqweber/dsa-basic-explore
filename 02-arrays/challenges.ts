/* ----------------------------- reverse string ----------------------------- */

const reverseString = (str: string): string => {
  let rev: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }
  return rev.join("");
};

const shortCodeReverseString = (str: string): string => str.split("").reverse().join("");

// console.log(shortCodeReverseString("Apple"));    // output: elppA
// console.log(reverseString("hello"));             // output: olleh

/* ---------------------------- palindrome check ---------------------------- */

const palindromeCheck = (str: string) => {
  let palindromeStr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    palindromeStr.push(str[i]);
  }
  return palindromeStr.join("") == str;
};

const shortCodePalindromeCheck = (str: string) => str.split("").reverse().join("") == str;

// console.log(palindromeCheck("madam"));           // Output: true
// console.log(palindromeCheck("hello"));           // Output: false
// console.log(shortCodePalindromeCheck("dad"));    // Output: true

/* ---------------------------- integer reversal ---------------------------- */

const reverseIntegers = (digits: number) => {
  let rev: string[] = [];
  let strDigit = digits.toString();
  for (let i = strDigit.length - 1; i >= 0; i--) {
    rev.push(strDigit[i]);
  }
  return Number(rev.join(""));
};

const shortCodeReverseIntegers = (digits: number) => Number(digits.toString().split("").reverse().join(""));

// console.log(reverseIntegers(12345));             // Output: 54321
// console.log(shortCodeReverseIntegers(123));      // Output: 321

/* ------------------------- sentence capitalization ------------------------ */

const sentenceCapitalization = (sentence: string) => {
  let result = sentence.charAt(0).toUpperCase();
  for (let i = 1; i < sentence.length; i++) {
    result += sentence[i];
  }
  return result;
};

const shortCodeSentenceCapitalization = (sentence: string): string => sentence.charAt(0).toUpperCase() + sentence.slice(1);

// console.log(sentenceCapitalization("hello, how are you"));           // Output: Hello, how are you
// console.log(shortCodeSentenceCapitalization("hello, how are you"));  // Output: Hello, how are you

/* -------------------------------- sentence word capitalization -------------------------------- */

const sentenceWordCapitalization = (sentence: string): string => {
  let result: string = "";
  let wordStart: boolean = true;

  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (wordStart && /[a-zA-Z]/.test(character)) {
      result += character.toUpperCase();
      wordStart = false;
    } else result += character;

    if (character === " ") wordStart = true;
  }

  return result;
};

const shortCodeSentenceWordCapitalization = (sentence: string) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// console.log(sentenceWordCapitalization("hello, how are you"));           // Output: Hello, How Are You
// console.log(shortCodeSentenceWordCapitalization("hello, how are you"));  // Output: Hello, How Are You

/* ---------------------------------- fizzbuzz ---------------------------------- */

const fizzbuzz = (nth: number) => {
  let result: (string | number)[] = [];
  for (let i = 1; i <= nth; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("Fizzbuzz");
    else if (i % 3 === 0) result.push("fizz");
    else if (i % 5 === 0) result.push("buzz");
    else result.push(i);
  }
  return result;
};

const shortCodeFizzBuzz = (nth: number) =>
  Array.from({length: nth}, (_, i) => {
    let num = ++i;
    return num % 3 === 0 && num % 5 == 0 ? "fizzbuzz" : num % 3 === 0 ? "fizz" : num % 5 === 0 ? "buzz" : num;
  });

// console.log(fizzbuzz(50));                   // Output: 1,2 fizz,4,buzz
// console.log(shortCodeFizzBuzz(50));          // Output: 1,2 fizz,4,buzz,

/* ------------------------------- max profit ------------------------------- */

const maxProfit = (arr: number[]) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};

const shortCodeMaxProfit = (arr: number[]) => Math.max(...arr);

// console.log(maxProfit([234, 324, 43, 34, 234, 500]));                // Output: 500
// console.log(shortCodeMaxProfit([234, 324, 43, 34, 234, 500]));       // Output: 500

/* ------------------------------- array chunk ------------------------------ */

const arrayChunk = (arr: number[], size: number): number[][] => {
  let result: number[][] = [];
  let subArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    if (subArr.length === size) {
      result.push(subArr);
      subArr = [];
    }
  }
  if (subArr.length) result.push(subArr);
  return result;
};

const shortCodeArrayChunk = (arr: number[], size: number) => {
  let result: number[][] = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
};

// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9,10], 3));                // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// console.log(shortCodeArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));          // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

/* --------------------------------- Two Sum -------------------------------- */

const twoSum = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
};

// console.log(twoSum([1, 1, 3, 4, 5, 6, 7], 13));                          // Output: [5,6] index = 13
