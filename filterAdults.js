function fun1(arr, x)
{
let newArray = [];
for (let i = 0; i < arr. length; i++) {
newArray.push(arr[i]);
if (arr[i] % 2 === 0) (
newArray[i] += x;
}
}
return newArray
console.log(fun1([1, 2, 3, 4, 5, 6], 3)); 