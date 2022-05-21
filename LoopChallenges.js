// 1. Print odds 1-20
var num = 1
while(num<=20) {
    if(num % 2 != 0) {
        console.log(num);
    }
    num++
}

// 2. Decreasing multiples of 3
for(var i=100; i>=0; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

// 3. Print the sequence 4 to -3.5
for(var i=4; i>=-3.5; i=i-1.5) {
    console.log(i);
}

// 4. Sigma
var sum=0
for(var i=1; i<=100; i++) {
    sum += i;
}
console.log(sum);

// 5. Factorial (written with for loop)
var product = 1
for(var i=1; i<=12; i++) {
    product = product * i;
}
console.log(product);

// 5. Factorial (written with while loop)
var product = 1
var i = 1
while(i<=12) {
    product = product * i;
    i++;
}
console.log(product);