console.log ("hello world");
const a = 10;
const b = 12;
console.log("a ", a,"\nb ",b);
if(1){
    let c= 20;
    c = 17;
    console.log(" c is greater", c);
}else{
    console.log(" b is greater");
}
const d = ["as ", 3, 3.9, null];
console.log("length of array is ",d.length);
let n =10;
for (let i =0;i<=n;i++){
    console.log(i);
}

//

// Try

if (0) {
    console.log("Code is working");
}

else {
    try {
        throw new Error("a is lesser than b");
    }
    catch (err) {
        console.log("a");
    }
}

// 3

function sqrt(x){
    return x*x;

}
console.log (sqrt(3));




// 4


