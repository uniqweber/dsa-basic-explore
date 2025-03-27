class MyArr {
  data: {};
  length: number;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item: string): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index: number): string {
    return this.data[index];
  }

  pop(): number {
    delete this.data[this.length - 1];
    return this.length--;
  }

  shift() {
    if (this.length === 0) return;
    delete this.data[0];

    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  get size(): number {
    return this.length;
  }
}

const newArr = new MyArr();
newArr.push("apple");
newArr.push("banana");
newArr.push("malta");
newArr.push("guava");
newArr.shift();
console.log(newArr);
