const table = [1,4,2,5,6,9,8,7,3];

console.log(table);
console.log(table.sort());//kata auksousa seira
console.log("----- FOREACH -----");
table.forEach(p => {
    console.log(p*2);
})
console.log("-----  MAP -----");
const x= table.map(p => {
    return p*3;//sto map mporoume na peiraksoume ka8e stoixeio tou pinaka kai na to kanoume return
})
console.log("x");

const z = x.map(a => {
    return a*8;
})
console.log(z);

console.log("----- FIND -----");
const mynumber = x.find(i => i==12);
console.log("my number is "+mynumber);

console.log("----- FILTER ------");
const selectednumbers = x.filter(i => i>15 && i<25);
console.log(selectednumbers);

