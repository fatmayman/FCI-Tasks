// 1
function addTwo(a, b) {
  return a + b;
}
console.log(addTwo(3, 5));

// 2
function evenOrOdd(n) {
  if (n % 2 === 0) return "even";
  return "odd";
}
console.log(evenOrOdd(7));

// 3
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));

// 4
function avgArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(avgArray([2, 4, 6]));

// 5
function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(maxArray([5, 10, 3]));

// 6
function minArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(minArray([5, 10, 3]));

// 7
function countAboveTen(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) count++;
  }
  return count;
}
console.log(countAboveTen([5, 15, 20, 8]));

// 8
function squaresArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  return newArr;
}
console.log(squaresArray([2, 3, 4]));

// 9
function firstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}
console.log(firstAndLast([10, 20, 30, 40]));

// 10
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4]));

// 11
function countWords(words) {
  return words.length;
}
console.log(countWords(["hi", "hello", "hey"]));

// 12
function longWords(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) result.push(words[i]);
  }
  return result;
}
console.log(longWords(["apple", "hi", "banana"]));

// 13
function startsWithLetter(words, letter) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) result.push(words[i]);
  }
  return result;
}
console.log(startsWithLetter(["sun", "sea", "apple"], "s"));

// 14
function noSpaces(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (!words[i].includes(" ")) result.push(words[i]);
  }
  return result;
}
console.log(noSpaces(["hello", "my name", "cat"]));

// 15
function totalLetters(words) {
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }
  return sum;
}
console.log(totalLetters(["hi", "hello"]));

// 16
function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(copyArray([1, 2, 3]));

// 17
function uniqueWords(words) {
  let obj = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (!obj[words[i]]) {
      obj[words[i]] = true;
      result.push(words[i]);
    }
  }
  return result;
}
console.log(uniqueWords(["a", "b", "a", "c"]));

// 18
function deleteWord(words, word) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== word) result.push(words[i]);
  }
  return result;
}
console.log(deleteWord(["hi", "hello", "hi"], "hi"));

// 19
function charFrequency(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (obj[ch]) obj[ch]++;
    else obj[ch] = 1;
  }
  return obj;
}
console.log(charFrequency("hello"));

// 20
function wordFrequency(words) {
  let obj = {};
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (obj[w]) obj[w]++;
    else obj[w] = 1;
  }
  return obj;
}
console.log(wordFrequency(["hi", "hello", "hi"]));
// 21
function keysAndValues(obj) {
  let arr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    arr.push(keys[i] + ":" + obj[keys[i]]);
  }
  return arr;
}
console.log(keysAndValues({name: "Ali", age: 20}));

// 22
function getValues(obj, keys) {
  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    arr.push(obj[keys[i]]);
  }
  return arr;
}
console.log(getValues({a: 1, b: 2, c: 3}, ["a", "c"]));

// 23
function sumPrices(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}
console.log(sumPrices([{price: 10}, {price: 20}]));

// 24
function namesList(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
console.log(namesList([{name: "Ali"}, {name: "Mona"}]));

// 25
function avgGrades(students) {
  let obj = {};
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    obj[s.name] = (s.grade1 + s.grade2 + s.grade3) / 3;
  }
  return obj;
}
console.log(avgGrades([{name:"Ali",grade1:10,grade2:20,grade3:30}]));

// 26
function categoryCount(products) {
  let obj = {};
  for (let i = 0; i < products.length; i++) {
    let c = products[i].category;
    if (obj[c]) obj[c]++;
    else obj[c] = 1;
  }
  return obj;
}
console.log(categoryCount([{category:"A"},{category:"B"},{category:"A"}]));

// 27
function passStudents(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 60) arr.push(students[i]);
  }
  return arr;
}
console.log(passStudents([{name:"Ali",grade:70},{name:"Mona",grade:50}]));

// 28
function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
console.log(sumMatrix([[1,2],[3,4]]));

// 29
function printRows(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i]);
  }
  return arr;
}
console.log(printRows([[1,2],[3,4]]));

// 30
function flattenMatrix(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }
  return arr;
}
console.log(flattenMatrix([[1,2],[3,4]]));

// 31
function rowSums(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    result.push(sum);
  }
  return result;
}
console.log(rowSums([[1,2],[3,4]]));

// 32
function rowMax(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let max = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) max = matrix[i][j];
    }
    result.push(max);
  }
  return result;
}
console.log(rowMax([[1,2],[3,4]]));

// 33
function multTable() {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i*j);
    }
    table.push(row);
  }
  return table;
}
console.log(multTable());

// 34
function commonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) result.push(arr1[i]);
  }
  return result;
}
console.log(commonElements([1,2,3],[2,3,4]));

// 35
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}
console.log(identityMatrix(3));

// 36
function countGreater(matrix, val) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > val) count++;
    }
  }
  return count;
}
console.log(countGreater([[1,5],[6,2]],3));

// 37
function triangleArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      row.push(j);
    }
    arr.push(row);
  }
  return arr;
}
console.log(triangleArray(3));

// 38
function totalCost(prices, qty) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i] * qty[i];
  }
  return total;
}
console.log(totalCost([10,20],[1,2]));

// 39
function mergeNames(arr1, arr2) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i]] = true;
  }
  result = Object.keys(obj);
  return result;
}
console.log(mergeNames(["Ali","Mona"],["Mona","Sara"]));

// 40
function discountPrices(products, discounts) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    let price = products[i].price;
    for (let j = 0; j < discounts.length; j++) {
      if (products[i].id === discounts[j].id) {
        price = price - discounts[j].off;
      }
    }
    result.push({id: products[i].id, price: price});
  }
  return result;
}
console.log(discountPrices([{id:1,price:100}], [{id:1,off:20}]));

// 41
function indexObject(students) {
  let obj = {};
  for (let i = 0; i < students.length; i++) {
    obj[students[i].id] = students[i];
  }
  return obj;
}
console.log(indexObject([{id:1,name:"Ali"},{id:2,name:"Mona"}]));

// 42
function stats(grades) {
  let sum = 0, min = grades[0], max = grades[0];
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    if (grades[i] < min) min = grades[i];
    if (grades[i] > max) max = grades[i];
  }
  return {count: grades.length, min: min, max: max, sum: sum, avg: sum/grades.length};
}
console.log(stats([10,20,30]));

// 43
function groupByLetter(words) {
  let obj = {};
  for (let i = 0; i < words.length; i++) {
    let first = words[i][0];
    if (!obj[first]) obj[first] = [];
    obj[first].push(words[i]);
  }
  return obj;
}
console.log(groupByLetter(["apple","ant","banana"]));

// 44
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i+size));
  }
  return result;
}
console.log(chunkArray([1,2,3,4,5],2));

// 45
function totalBills(bills) {
  let obj = {};
  for (let i = 0; i < bills.length; i++) {
    let c = bills[i].client;
    if (!obj[c]) obj[c] = 0;
    obj[c] += bills[i].total;
  }
  return obj;
}
console.log(totalBills([{client:"Ali",total:50},{client:"Ali",total:20}]));

// 46
function skillCount(people) {
  let obj = {};
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people[i].skills.length; j++) {
      let skill = people[i].skills[j];
      if (!obj[skill]) obj[skill] = 0;
      obj[skill]++;
    }
  }
  return obj;
}
console.log(skillCount([{skills:["js","css"]},{skills:["js"]}]));

// 47
function attendance(students) {
  let obj = {presentCount:0, absentCount:0, presentNames:[], absentNames:[]};
  for (let i = 0; i < students.length; i++) {
    if (students[i].present) {
      obj.presentCount++;
      obj.presentNames.push(students[i].name);
    } else {
      obj.absentCount++;
      obj.absentNames.push(students[i].name);
    }
  }
  return obj;
}
console.log(attendance([{name:"Ali",present:true},{name:"Mona",present:false}]));

// 48
function multiply(a,b) {
  return a*b;
}
console.log(multiply(3,4));

// 49
function divide(a,b) {
  if (b===0) return "error";
  return a/b;
}
console.log(divide(10,2));

// 50
function mod(a,b) {
  return a % b;
}
console.log(mod(10,3));

// 51
function power(a,b) {
  let result = 1;
  for (let i=0;i<b;i++) result*=a;
  return result;
}
console.log(power(2,3));

// 52
function isPositive(n) {
  return n>0;
}
console.log(isPositive(-5));

// 53
function isNegative(n) {
  return n<0;
}
console.log(isNegative(-5));

// 54
function absVal(n) {
  if (n<0) return -n;
  return n;
}
console.log(absVal(-10));

// 55
function factorial(n) {
  let res=1;
  for (let i=1;i<=n;i++) res*=i;
  return res;
}
console.log(factorial(5));

// 56
function countEven(arr) {
  let c=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2===0) c++;
  return c;
}
console.log(countEven([1,2,3,4]));

// 57
function countOdd(arr) {
  let c=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2!==0) c++;
  return c;
}
console.log(countOdd([1,2,3,4]));

// 58
function removeNegatives(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) if (arr[i]>=0) r.push(arr[i]);
  return r;
}
console.log(removeNegatives([-1,2,-3,4]));

// 59
function onlyNegatives(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) if (arr[i]<0) r.push(arr[i]);
  return r;
}
console.log(onlyNegatives([-1,2,-3,4]));

// 60
function doubleArray(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) r.push(arr[i]*2);
  return r;
}
console.log(doubleArray([1,2,3]));

// 61
function halfArray(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) r.push(arr[i]/2);
  return r;
}
console.log(halfArray([2,4,6]));

// 62
function addFive(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) r.push(arr[i]+5);
  return r;
}
console.log(addFive([1,2,3]));

// 63
function subtractFive(arr) {
  let r=[];
  for (let i=0;i<arr.length;i++) r.push(arr[i]-5);
  return r;
}
console.log(subtractFive([10,20,30]));

// 64
function stringLengths(words) {
  let r=[];
  for (let i=0;i<words.length;i++) r.push(words[i].length);
  return r;
}
console.log(stringLengths(["hi","hello"]));

// 65
function upperCase(words) {
  let r=[];
  for (let i=0;i<words.length;i++) r.push(words[i].toUpperCase());
  return r;
}
console.log(upperCase(["hi","hello"]));

// 66
function lowerCase(words) {
  let r=[];
  for (let i=0;i<words.length;i++) r.push(words[i].toLowerCase());
  return r;
}
console.log(lowerCase(["HI","HELLO"]));

// 67
function concatWords(words) {
  let str="";
  for (let i=0;i<words.length;i++) str+=words[i];
  return str;
}
console.log(concatWords(["hi","hello"]));

// 68
function joinWords(words, sep) {
  let str="";
  for (let i=0;i<words.length;i++) {
    str+=words[i];
    if (i<words.length-1) str+=sep;
  }
  return str;
}
console.log(joinWords(["hi","hello"],"-"));

// 69
function reverseString(str) {
  let r="";
  for (let i=str.length-1;i>=0;i--) r+=str[i];
  return r;
}
console.log(reverseString("hello"));

// 70
function palindrome(str) {
  let rev="";
  for (let i=str.length-1;i>=0;i--) rev+=str[i];
  return str===rev;
}
console.log(palindrome("level"));

// 71
function countChar(str,ch) {
  let c=0;
  for (let i=0;i<str.length;i++) if (str[i]===ch) c++;
  return c;
}
console.log(countChar("hello","l"));

// 72
function startsWith(str,ch) {
  return str[0]===ch;
}
console.log(startsWith("hello","h"));

// 73
function endsWith(str,ch) {
  return str[str.length-1]===ch;
}
console.log(endsWith("hello","o"));

// 74
function repeatString(str,n) {
  let r="";
  for (let i=0;i<n;i++) r+=str;
  return r;
}
console.log(repeatString("ha",3));

// 75
function trimSpaces(str) {
  let r="";
  for (let i=0;i<str.length;i++) if (str[i]!==" ") r+=str[i];
  return r;
}
console.log(trimSpaces("h e l l o"));

// 76
function mergeArrays(a,b) {
  let r=[];
  for (let i=0;i<a.length;i++) r.push(a[i]);
  for (let i=0;i<b.length;i++) r.push(b[i]);
  return r;
}
console.log(mergeArrays([1,2],[3,4]));

// 77
function intersectArrays(a,b) {
  let r=[];
  for (let i=0;i<a.length;i++) if (b.includes(a[i])) r.push(a[i]);
  return r;
}
console.log(intersectArrays([1,2,3],[2,3,4]));

// 78
function diffArrays(a,b) {
  let r=[];
  for (let i=0;i<a.length;i++) if (!b.includes(a[i])) r.push(a[i]);
  return r;
}
console.log(diffArrays([1,2,3],[2,3,4]));

// 79
function maxOfTwo(a,b) {
  if (a>b) return a;
  return b;
}
console.log(maxOfTwo(3,5));

// 80
function minOfTwo(a,b) {
  if (a<b) return a;
  return b;
}
console.log(minOfTwo(3,5));

// 81
function swap(a,b) {
  let temp=a;
  a=b;
  b=temp;
  return [a,b];
}
console.log(swap(1,2));

// 82
function sumToN(n) {
  let sum=0;
  for (let i=1;i<=n;i++) sum+=i;
  return sum;
}
console.log(sumToN(5));

// 83
function productToN(n) {
  let p=1;
  for (let i=1;i<=n;i++) p*=i;
  return p;
}
console.log(productToN(5));

// 84
function evenNumbers(n) {
  let r=[];
  for (let i=1;i<=n;i++) if (i%2===0) r.push(i);
  return r;
}
console.log(evenNumbers(10));

// 85
function oddNumbers(n) {
  let r=[];
  for (let i=1;i<=n;i++) if (i%2!==0) r.push(i);
  return r;
}
console.log(oddNumbers(10));

// 86
function sumEven(arr) {
  let sum=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2===0) sum+=arr[i];
  return sum;
}
console.log(sumEven([1,2,3,4]));

// 87
function sumOdd(arr) {
  let sum=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2!==0) sum+=arr[i];
  return sum;
}
console.log(sumOdd([1,2,3,4]));

// 88
function averageEven(arr) {
  let sum=0,c=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2===0){sum+=arr[i];c++;}
  return sum/c;
}
console.log(averageEven([2,4,6]));

// 89
function averageOdd(arr) {
  let sum=0,c=0;
  for (let i=0;i<arr.length;i++) if (arr[i]%2!==0){sum+=arr[i];c++;}
  return sum/c;
}
console.log(averageOdd([1,3,5]));

// 90
function greaterThan(arr,val) {
  let r=[];
  for (let i=0;i<arr.length;i++) if (arr[i]>val) r.push(arr[i]);
  return r;
}
console.log(greaterThan([1,5,10],4));

// 91
function lessThan(arr,val) {
  let r=[];
  for (let i=0;i<arr.length;i++) if (arr[i]<val) r.push(arr[i]);
  return r;
}
console.log(lessThan([1,5,10],6));

// 92
function equalTo(arr,val) {
  let r=[];
  for (let i=0;i<arr.length;i++) if (arr[i]===val) r.push(arr[i]);
  return r;
}
console.log(equalTo([1,5,10,5],5));

// 93
function findIndex(arr,val) {
  for (let i=0;i<arr.length;i++) if (arr[i]===val) return i;
  return -1;
}
console.log(findIndex([1,5,10],5));

// 94
function replaceValue(arr,oldVal,newVal) {
  for (let i=0;i<arr.length;i++) if (arr[i]===oldVal) arr[i]=newVal;
  return arr;
}
console.log(replaceValue([1,5,10],5,20));

// 95
function insertValue(arr,val) {
  arr.push(val);
  return arr;
}
console.log(insertValue([1,2],3));

// 96
function removeLast(arr) {
  arr.pop();
  return arr;
}
console.log(removeLast([1,2,3]));

// 97
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1,2,3]));

// 98
function addFirst(arr,val) {
  arr.unshift(val);
  return arr;
}
console.log(addFirst([2,3],1));

// 99
function sliceArray(arr,start,end) {
  return arr.slice(start,end);
}
console.log(sliceArray([1,2,3,4],1,3));

// 100
function concatArrays(a,b) {
  return a.concat(b);
}
console.log(concatArrays([1,2],[3,4]));

